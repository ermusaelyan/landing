import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        fill="none"
        {...props}
    >
        <g filter="url(#a)">
            <rect width={32} height={32} fill="url(#b)" rx={10} />
            <path
                fill="#fff"
                d="M11.707 23.071a3.598 3.598 0 0 1-3.7-3.829v-6.485a3.601 3.601 0 0 1 3.7-3.829h5.212a3.597 3.597 0 0 1 3.7 3.83v6.485a3.6 3.6 0 0 1-3.7 3.828h-5.212Zm12.455-2.243-1.331-.705a1.542 1.542 0 0 1-.8-1.374v-5.5a1.536 1.536 0 0 1 .8-1.371l1.332-.706a1.197 1.197 0 0 1 1.235.06A1.367 1.367 0 0 1 26 12.381v7.238a1.366 1.366 0 0 1-.602 1.15 1.199 1.199 0 0 1-1.236.06Z"
            />
        </g>
        <defs>
            <linearGradient
                id="b"
                x1={16}
                x2={16}
                y1={0}
                y2={32}
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#47D6E2" />
                <stop offset={1} stopColor="#3271E6" />
            </linearGradient>
            <filter
                id="a"
                width={35}
                height={34}
                x={0}
                y={0}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx={3} dy={2} />
                <feGaussianBlur stdDeviation={2} />
                <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend in2="shape" result="effect1_innerShadow_4_444" />
            </filter>
        </defs>
    </svg>
)
export default SvgComponent
