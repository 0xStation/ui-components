import React from 'react'
import '../tailwind.css'

export function Button({ label }: { label: string }) {
  return <button className='bg-violet100 p-2 rounded-lg text-white'>{label}</button>
}
