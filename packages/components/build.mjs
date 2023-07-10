// @ts-check

import { readFile, writeFile, readdir, stat } from 'fs/promises'
import path from 'path'

/**
 *
 * @param {string} directory
 * @returns {Promise<string[]>}
 */
async function readDirRecursive(directory) {
  const files = await readdir(directory)

  return Promise.all(
    files.map(async (file) => {
      const filePath = path.join(directory, file)
      const stats = await stat(filePath)

      if (stats.isDirectory()) {
        return readDirRecursive(filePath)
      } else {
        return filePath
      }
    }),
  ).then((files) => files.flat())
}

const [pkgJson, writtenFiles] = await Promise.all([
  readFile('./package.json', 'utf-8').then(JSON.parse),
  readDirRecursive('./dist'),
])
console.log(writtenFiles)
/**
 * @type {Record<string, {import: string, types:string}>}
 */
const exports = {
  './*': {
    import: './*.js',
    types: './*.d.ts',
  },
}

/**
 * @type {Record<string,[string]>}
 */
const typesVersions = {
  '.': ['./index.d.ts'],
}

for (const relativePath of writtenFiles) {
  if (relativePath.includes('src/')) {
    console.error(`Package=${pkgJson.name}. Unexpected "dist" directory within built package. ${relativePath} `)
    process.exit(1)
  }
  if (relativePath.endsWith('.js') && !relativePath.includes('chunk-')) {
    const relativePathWithoutIndex = relativePath
      .slice(0, relativePath.length - '/index.js'.length)
      .replace('dist/', '')

    exports['./' + relativePathWithoutIndex] = {
      import: './' + relativePath.replace('dist/', ''),
      types: './' + relativePathWithoutIndex + '/index.d.ts',
    }
    typesVersions[relativePathWithoutIndex] = ['./' + relativePathWithoutIndex + '/index.d.ts']
  }
}

delete pkgJson['publishConfig']
delete pkgJson['devDependencies']
delete pkgJson['files']
delete pkgJson['scripts']

await writeFile(
  './dist/package.json',
  JSON.stringify(
    {
      ...pkgJson,
      types: './index.d.ts',
      main: './index.js',
      exports: {
        ...exports,
      },
      typesVersions: {
        '*': { ...typesVersions },
      },
    },
    null,
    2,
  ),
  'utf-8',
)
