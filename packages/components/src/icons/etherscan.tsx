import React from 'react'
import clsx from 'clsx'

export const Etherscan = ({
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
      <g clipPath="url(#clip0_1383_25968)">
        <path
          d="M6.43861 11.5194C6.43862 11.4136 6.45954 11.3089 6.50014 11.2112C6.54074 11.1135 6.60023 11.0248 6.6752 10.9502C6.75019 10.8756 6.83915 10.8166 6.93701 10.7764C7.03488 10.7363 7.13971 10.7159 7.24548 10.7164L8.58327 10.7207C8.79655 10.7207 9.00111 10.8055 9.15193 10.9563C9.30276 11.1071 9.3875 11.3117 9.3875 11.525V16.5833C9.5381 16.5386 9.73152 16.491 9.94317 16.4411C10.0902 16.4066 10.2212 16.3234 10.315 16.205C10.4088 16.0867 10.4598 15.9401 10.4598 15.7891V9.5144C10.4598 9.30108 10.5445 9.09652 10.6953 8.94567C10.8461 8.79483 11.0507 8.71006 11.264 8.71001H12.6044C12.8177 8.71006 13.0223 8.79483 13.1731 8.94567C13.3239 9.09652 13.4086 9.30108 13.4086 9.5144V15.3379C13.4086 15.3379 13.7443 15.2021 14.0712 15.0641C14.1926 15.0128 14.2962 14.9268 14.3691 14.8169C14.442 14.7071 14.4809 14.5781 14.4811 14.4463V7.50382C14.4811 7.29056 14.5658 7.08603 14.7165 6.93521C14.8673 6.78438 15.0718 6.69964 15.2851 6.69959H16.6256C16.8389 6.69959 17.0434 6.78433 17.1942 6.93515C17.3451 7.08596 17.4298 7.29052 17.4298 7.50382V13.2208C18.5919 12.3786 19.7696 11.3657 20.7042 10.1476C20.8398 9.97083 20.9295 9.76323 20.9654 9.54333C21.0012 9.32345 20.982 9.09809 20.9096 8.8874C20.477 7.64271 19.7894 6.50202 18.8906 5.53837C17.9919 4.57469 16.9018 3.80925 15.6903 3.29103C14.4787 2.77281 13.1723 2.51322 11.8547 2.52887C10.5371 2.54451 9.23723 2.83506 8.03834 3.38191C6.83944 3.92875 5.76791 4.71986 4.8923 5.7046C4.0167 6.68935 3.35631 7.84603 2.9534 9.10065C2.55049 10.3553 2.41393 11.6802 2.55246 12.9906C2.69099 14.301 3.10156 15.5681 3.75789 16.7107C3.87222 16.9078 4.04043 17.0682 4.24275 17.173C4.44507 17.2779 4.6731 17.3228 4.90007 17.3025C5.15361 17.2803 5.4693 17.2486 5.84462 17.2046C6.00801 17.186 6.15885 17.108 6.26842 16.9854C6.37799 16.8628 6.43862 16.7042 6.43876 16.5397L6.43861 11.5194Z"
          fill="white"
        />
        <path
          d="M6.40936 19.6325C7.82226 20.6604 9.492 21.2774 11.2338 21.4153C12.9757 21.5529 14.7216 21.2063 16.2786 20.4133C17.8356 19.6202 19.1428 18.412 20.0557 16.9222C20.9685 15.4324 21.4514 13.719 21.451 11.9718C21.451 11.7537 21.4408 11.538 21.4264 11.3236C17.966 16.4844 11.5769 18.8971 6.40966 19.6318"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1383_25968">
          <rect width="19" height="19" fill="white" transform="translate(2.5 2.5)" />
        </clipPath>
      </defs>
    </svg>
  )
}