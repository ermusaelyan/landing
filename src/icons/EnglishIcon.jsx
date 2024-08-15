import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <mask
                id="b"
                width={25}
                height={24}
                x={3}
                y={3}
                maskUnits="userSpaceOnUse"
                style={{
                    maskType: "luminance",
                }}
            >
                <path
                    fill="#fff"
                    d="M27.097 15c0-6.627-5.373-12-12-12-6.628 0-12 5.373-12 12s5.372 12 12 12c6.627 0 12-5.373 12-12Z"
                />
            </mask>
            <g mask="url(#b)">
                <path fill="#012169" d="M3.097 3h24v24h-24V3Z" />
                <path
                    fill="#fff"
                    d="M27.097 3v3l-8.907 9 8.907 8.766V27h-3.141l-8.953-8.813L6.283 27H3.098v-3.187l8.72-8.766-8.72-8.578V3h2.906l9 8.813L23.721 3h3.376Z"
                />
                <path
                    fill="#C8102E"
                    d="m11.722 18.187.516 1.594L5.065 27H3.097v-.14l8.624-8.673Zm5.812-.56 2.532.375 7.03 6.888V27l-9.562-9.373ZM27.097 3l-9 9.187-.188-2.062L24.938 3h2.16Zm-24 .047 9.047 8.86-2.766-.376-6.281-6.234v-2.25Z"
                />
                <path
                    fill="#fff"
                    d="M11.347 3v24h7.5V3h-7.5Zm-8.25 8.25v7.5h24v-7.5h-24Z"
                />
                <path
                    fill="#C8102E"
                    d="M3.097 12.75v4.5h24v-4.5h-24ZM12.847 3v24h4.5V3h-4.5Z"
                />
            </g>
        </g>
        <circle cx={15.097} cy={15} r={14} stroke="#C1C9E0" />
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M3.097 3h24v24h-24z" />
            </clipPath>
        </defs>
    </svg>
)
export default SvgComponent



