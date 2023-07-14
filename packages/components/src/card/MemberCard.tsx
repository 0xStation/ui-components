import clsx from 'clsx'
import React from 'react'

export const MembersCard = ({
  title,
  subText,
  image,
  hoverEffect = false,
}: {
  title: string
  subText?: string
  /**
   * @description if string, it will be used as src for img tag - but recommended to pass in a NextImage component
   */
  image: React.ReactNode
  /**
   * @description if true, will scale up on hover
   */
  hoverEffect?: boolean
}) => {
  const hasImgSrc = typeof image === 'string'

  const img = hasImgSrc ? (
    <img src={image} alt={title} className="ui-w-full ui-h-full ui-object-cover ui-rounded-md" />
  ) : (
    image
  )
  return (
    <div
      className={clsx(
        'ui-flex ui-flex-col ui-w-full ui-max-w-[257px] ui-gap-2 md:ui-gap-3 hover:ui-bg-wet-concrete90 ui-rounded-lg ui-p-2',
        hoverEffect && 'hover:[&_img]:ui-scale-125',
      )}
    >
      <div className="ui-w-full ui-max-w-[241px] ui-overflow-hidden ui-rounded-md ui-relative ui-aspect-square">
        <div className="ui-bg-wet-concrete90 ui-w-full [&_img]:ui-transition-all [&_img]:ui-duration-300 ui-aspect-square">
          {img}
        </div>
      </div>
      <div className="ui-flex ui-flex-col ui-font-favoritpro ">
        <h3 className="ui-text-heading-md md:ui-text-heading-lg ui-text-white">{title}</h3>
        {subText && <p className="ui-text-base-sm md:ui-text-base-md ui-text-concrete100">{subText}</p>}
      </div>
    </div>
  )
}
