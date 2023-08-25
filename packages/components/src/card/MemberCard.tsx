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
        // TODO: add hover effect back back after more public collections 'hover:ui-bg-gray-100 ui-rounded-lg ui-p-2'
        'ui-flex ui-flex-col ui-w-full ui-max-w-[257px] ui-gap-2 md:ui-gap-3 ',
        hoverEffect && 'hover:[&_img]:ui-scale-125',
      )}
    >
      <div className="ui-w-full ui-max-w-[241px] ui-overflow-hidden ui-rounded-md ui-relative ui-aspect-square">
        <div className="ui-bg-gray-100 ui-w-full [&_img]:ui-transition-all [&_img]:ui-duration-300 ui-aspect-square">
          {img}
        </div>
      </div>
      <div className="ui-flex ui-flex-col ui-font-favoritpro ">
        <h3 className="ui-text-heading-sm md:ui-text-heading-md 2xl:ui-text-heading-lg ui-text-white ui-whitespace-nowrap ui-text-ellipsis ui-overflow-hidden ui-font-bold">
          {title}
        </h3>
        {subText && (
          <span className="ui-text-base-xs md:ui-text-base-sm 2xl:ui-text-heading-md ui-text-orange ui-bg-orange-50 ui-whitespace-nowrap ui-text-ellipsis ui-overflow-hidden ui-rounded-full ui-px-2 ui-py-1">
            {subText}
        </span>
        )}
      </div>
    </div>
  )
}
