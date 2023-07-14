import clsx from "clsx"
import React from "react"

export const MembersCard = ({
  title,
  subText,
  image,
  hoverEffect,
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
  const hasImgSrc = typeof image === "string"

  const img = hasImgSrc ? (
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover rounded-md "
    />
  ) : (
    image
  )
  return (
    <div className="flex flex-col w-full max-w-[257px] gap-2 md:gap-3 group hover:bg-wet-concrete90 rounded-lg p-2">
      <div className="w-full max-w-[241px] overflow-hidden rounded-md relative aspect-square">
        <div
          className={clsx(
            "bg-concrete90 w-full transition-all duration-300 aspect-square",
            hoverEffect && "group-hover:scale-125 ",
          )}
        >
          {img}
        </div>
      </div>
      <div className="flex flex-col font-favoritpro ">
        <h3 className="text-heading-m md:text-heading-l">{title}</h3>
        {subText && (
          <p className="text-body-s md:text-body-m text-concrete100">
            {subText}
          </p>
        )}
      </div>
    </div>
  )
}
