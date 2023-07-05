import React from 'react'
import clsx from 'clsx'

export const Opensea = ({
  className,
  ...props
}: Omit<React.SVGProps<SVGSVGElement>, 'xmlns' | 'viewBox' | 'strokeWidth'>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(className || 'w-6 h-6 aspect-square')}
      {...props}
    >
      <path
        d="M12 2.5C6.7541 2.5 2.5 6.7541 2.5 12C2.5 17.2459 6.7541 21.5 12 21.5C17.2459 21.5 21.5 17.2459 21.5 12C21.5 6.7541 17.2478 2.5 12 2.5ZM7.1873 12.3192L7.2272 12.2546L9.6991 8.3881C9.7352 8.333 9.8207 8.3387 9.8473 8.3995C10.2596 9.3248 10.6168 10.4762 10.4496 11.1925C10.3793 11.487 10.1836 11.886 9.9632 12.2546C9.9347 12.3078 9.9043 12.361 9.8701 12.4123C9.8549 12.4351 9.8283 12.4484 9.7998 12.4484H7.2595C7.1911 12.4484 7.1512 12.3743 7.1873 12.3192ZM18.2016 13.6492C18.2016 13.6853 18.1807 13.7157 18.1503 13.729C17.9584 13.8107 17.3029 14.1128 17.0312 14.4909C16.3358 15.458 15.8057 16.8412 14.6182 16.8412H9.6668C7.9112 16.8412 6.49 15.4143 6.49 13.653V13.596C6.49 13.5504 6.528 13.5124 6.5755 13.5124H9.3343C9.3894 13.5124 9.4293 13.5618 9.4255 13.6169C9.4046 13.7955 9.4388 13.9798 9.5243 14.147C9.6877 14.4795 10.0278 14.6866 10.3945 14.6866H11.7606V13.6207H10.4097C10.3413 13.6207 10.2995 13.5409 10.3394 13.4839C10.3546 13.4611 10.3698 13.4383 10.3888 13.4117C10.5161 13.2293 10.6985 12.9481 10.8809 12.627C11.0044 12.4104 11.1241 12.1786 11.221 11.9468C11.24 11.905 11.2552 11.8613 11.2723 11.8195C11.2989 11.7454 11.3255 11.6751 11.3445 11.6067C11.3635 11.5478 11.3806 11.487 11.3958 11.43C11.4414 11.2324 11.4604 11.0234 11.4604 10.8068C11.4604 10.7213 11.4566 10.632 11.449 10.5484C11.4452 10.4553 11.4338 10.3622 11.4224 10.2691C11.4148 10.1874 11.3996 10.1057 11.3844 10.0221C11.3635 9.8986 11.3369 9.7751 11.3065 9.6516L11.2951 9.6041C11.2723 9.5186 11.2514 9.4388 11.2248 9.3533C11.1469 9.0873 11.0595 8.827 10.9645 8.5838C10.9303 8.4869 10.8923 8.3938 10.8524 8.3026C10.7954 8.162 10.7365 8.0347 10.6833 7.915C10.6548 7.8599 10.632 7.8105 10.6092 7.7592C10.5826 7.7022 10.556 7.6452 10.5275 7.5901C10.5085 7.5483 10.4857 7.5084 10.4705 7.4704L10.3033 7.1626C10.2805 7.1208 10.3185 7.0695 10.3641 7.0828L11.4091 7.3659H11.4129C11.4148 7.3659 11.4148 7.3659 11.4167 7.3659L11.5535 7.4058L11.7055 7.4476L11.7606 7.4628V6.8434C11.7606 6.5432 12 6.3 12.2983 6.3C12.4465 6.3 12.5814 6.3608 12.6764 6.4596C12.7733 6.5584 12.8341 6.6933 12.8341 6.8434V7.7649L12.9462 7.7953C12.9538 7.7991 12.9633 7.8029 12.9709 7.8086C12.9975 7.8276 13.0374 7.858 13.0868 7.896C13.1267 7.9264 13.1685 7.9644 13.2179 8.0043C13.3186 8.086 13.4402 8.1905 13.5713 8.3102C13.6055 8.3406 13.6397 8.371 13.672 8.4033C13.8411 8.561 14.0311 8.7453 14.2135 8.9505C14.2648 9.0094 14.3142 9.0664 14.3655 9.1291C14.4149 9.1918 14.47 9.2526 14.5156 9.3134C14.5783 9.3951 14.6429 9.4806 14.7018 9.5699C14.7284 9.6117 14.7607 9.6554 14.7854 9.6972C14.8614 9.8093 14.926 9.9252 14.9887 10.0411C15.0153 10.0943 15.0419 10.1532 15.0647 10.2102C15.135 10.366 15.1901 10.5237 15.2243 10.6833C15.2357 10.7175 15.2433 10.7536 15.2471 10.7878V10.7954C15.2585 10.841 15.2623 10.8904 15.2661 10.9417C15.2813 11.1032 15.2737 11.2666 15.2395 11.43C15.2243 11.4984 15.2053 11.563 15.1825 11.6333C15.1578 11.6998 15.135 11.7682 15.1046 11.8347C15.0457 11.9696 14.9773 12.1064 14.8956 12.2318C14.869 12.2793 14.8367 12.3287 14.8063 12.3762C14.7721 12.4256 14.736 12.4731 14.7056 12.5187C14.6619 12.5776 14.6163 12.6384 14.5688 12.6935C14.527 12.7505 14.4852 12.8075 14.4377 12.8588C14.3731 12.9367 14.3104 13.0089 14.2439 13.0792C14.2059 13.1248 14.1641 13.1723 14.1204 13.2141C14.0786 13.2616 14.0349 13.3034 13.9969 13.3414C13.9304 13.4079 13.8772 13.4573 13.8316 13.501L13.7233 13.5979C13.7081 13.6131 13.6872 13.6207 13.6663 13.6207H12.8341V14.6866H13.881C14.1147 14.6866 14.337 14.6049 14.5175 14.451C14.5783 14.3978 14.8462 14.166 15.1635 13.8164C15.1749 13.8031 15.1882 13.7955 15.2034 13.7917L18.0933 12.9557C18.1484 12.9405 18.2016 12.9804 18.2016 13.0374V13.6492Z"
        fill="white"
      />
    </svg>
  )
}
