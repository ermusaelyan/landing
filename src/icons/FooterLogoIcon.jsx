import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        {...props}
    >
        <path
            fill="#252E48"
            d="m26.335 16.5-6.32-4.158L2.696 1.7a15.814 15.814 0 0 1 3 5 16.6 16.6 0 0 1 .945 3.694l12.987 8.122a1.059 1.059 0 0 1 .222 1.538l-.049.055-.056.055h-.029l-.09.069-12.543 7.625a.758.758 0 0 1-1.18-.624V9.847a16.658 16.658 0 0 0-.84-3.147A14.74 14.74 0 0 0 .505.27L.096 0v32.723a3.216 3.216 0 0 0 4.98 2.677l21.26-13.224a3.393 3.393 0 0 0 0-5.676Z"
            opacity={0.47}
        />
        <path
            fill="#252E48"
            d="m26.335 16.5-6.32-4.158a4.9 4.9 0 0 1-.153 7.706l-.049.055-.056.055h-.035l-.09.069-9.029 5.308-3.472 2.351a.758.758 0 0 1-1.18-.624V9.875A16.66 16.66 0 0 0 5.061 6.7 14.74 14.74 0 0 0 .506.27L.096 0v32.723a3.216 3.216 0 0 0 4.98 2.677l21.26-13.224a3.393 3.393 0 0 0 0-5.676ZM45.816 24.948h-3.049c-.2 0-.284-.167-.37-.343l-.027-.052-2.687-5.031h-.222c-.217 0-.487-.011-.748-.022-.243-.01-.47-.02-.64-.02v5.073a.4.4 0 0 1-.4.395h-2.59a.4.4 0 0 1-.4-.395V11.219c0-.689.276-.851.9-.955A31.737 31.737 0 0 1 39.621 10c3.977 0 5.994 1.564 5.994 4.65v.256a3.99 3.99 0 0 1-2.57 3.978l3.007 5.607a.52.52 0 0 1 .062.221c0 .154-.103.236-.298.236ZM39.614 12.89c-.28 0-1.313.041-1.556.062v3.818c.114 0 .428.011.732.022s.563.02.657.02a3.88 3.88 0 0 0 2.17-.436 1.607 1.607 0 0 0 .607-1.449v-.27c.001-1.173-.877-1.767-2.61-1.767ZM53.046 24.721h-.286a5.271 5.271 0 0 1-3.4-1.12 4.939 4.939 0 0 1-1.6-3.99v-1.386a5.39 5.39 0 0 1 1.334-3.813A4.968 4.968 0 0 1 52.802 13a4.724 4.724 0 0 1 3.646 1.487 5.49 5.49 0 0 1 1.271 3.738v1.15c-.035.3-.2.471-.45.471h-6.356v.042a1.9 1.9 0 0 0 2.084 2.17c1.23 0 3-.096 3.826-.18h.063c.242 0 .375.112.375.318v1.511c0 .3-.06.454-.417.534-1.24.319-2.517.48-3.798.48Zm-.3-9.157c-1.148 0-1.833.824-1.833 2.2v.076h3.625v-.073a2.5 2.5 0 0 0-.484-1.653 1.626 1.626 0 0 0-1.308-.55ZM69.096 24.566h-2.445a.416.416 0 0 1-.4-.416v-6.992c0-.873-.139-1.49-1.174-1.49h-1c-1.035 0-1.174.617-1.174 1.49v7.013a.416.416 0 0 1-.4.416h-2.45a.4.4 0 0 1-.375-.416v-7.013c0-2.772 1.535-4.158 4.4-4.158h1c2.865 0 4.4 1.386 4.4 4.158v7.013a.4.4 0 0 1-.382.395ZM76.436 24.454a4.964 4.964 0 0 1-3.71-1.338 5.175 5.175 0 0 1-1.29-3.749v-1.559c0-3.28 1.776-5.086 5-5.086.546.014 1.091.06 1.632.139V9.395A.4.4 0 0 1 78.465 9h2.388a.415.415 0 0 1 .417.395v13.929c-.02.35-.112.487-.61.61-1.384.334-2.8.508-4.224.52Zm-.027-9.065c-1.222 0-1.792.771-1.792 2.426v1.552c0 1.669.57 2.446 1.792 2.446h.027c.536.001 1.07-.037 1.6-.113v-6.214a15.303 15.303 0 0 0-1.627-.097ZM88.626 24.721h-.286a5.271 5.271 0 0 1-3.4-1.12 4.94 4.94 0 0 1-1.6-3.99v-1.386a5.389 5.389 0 0 1 1.334-3.813A4.967 4.967 0 0 1 88.382 13a4.724 4.724 0 0 1 3.646 1.487 5.49 5.49 0 0 1 1.271 3.738v1.15c0 .3-.148.471-.417.471h-6.354v.042a1.9 1.9 0 0 0 2.083 2.17c1.231 0 3-.096 3.827-.18h.028c.242 0 .375.112.375.318v1.511c0 .3-.06.454-.417.534-1.24.319-2.517.48-3.798.48Zm-.265-9.157c-1.148 0-1.833.824-1.833 2.2v.076h3.625v-.073c0-1.4-.653-2.203-1.792-2.203ZM100.411 15.691c-.6-.006-1.198.034-1.792.118v8.35a.416.416 0 0 1-.4.416h-2.405a.436.436 0 0 1-.417-.415v-9.938c0-.277.16-.478.618-.637a13.28 13.28 0 0 1 4.403-.575c.236 0 .535.1.535.374v1.926c-.007.222-.156.381-.542.381ZM108.495 15.556h-2.709v8.586a.437.437 0 0 1-.417.416h-2.409a.436.436 0 0 1-.417-.416V12.361c0-2.772 1.875-3.361 3.882-3.361.728.015 1.454.075 2.174.18.222.042.3.118.3.236v1.67c0 .222-.076.319-.278.319h-2.085c-.618 0-.757.374-.757.956v.8h2.709a.4.4 0 0 1 .4.4v1.58a.402.402 0 0 1-.105.294.395.395 0 0 1-.284.129l-.004-.008ZM115.266 24.726a4.937 4.937 0 0 1-3.711-1.4 5.372 5.372 0 0 1-1.289-3.771V18.17a5.37 5.37 0 0 1 1.289-3.77 4.935 4.935 0 0 1 3.711-1.4 4.91 4.91 0 0 1 3.7 1.4 5.391 5.391 0 0 1 1.28 3.77v1.385a5.389 5.389 0 0 1-1.28 3.773 4.91 4.91 0 0 1-3.7 1.398Zm0-8.981c-1.172 0-1.792.839-1.792 2.425v1.385c0 1.601.62 2.445 1.792 2.445 1.172 0 1.772-.846 1.772-2.447V18.17c0-1.587-.613-2.425-1.772-2.425ZM127.337 15.691a11.944 11.944 0 0 0-1.792.118v8.35a.414.414 0 0 1-.4.416h-2.405a.438.438 0 0 1-.417-.415v-9.938c0-.277.16-.478.618-.637a13.282 13.282 0 0 1 4.403-.575c.236 0 .535.1.535.374v1.926c.007.222-.156.381-.542.381ZM134.554 24.721h-.286a5.272 5.272 0 0 1-3.4-1.12 4.937 4.937 0 0 1-1.6-3.99v-1.386a5.393 5.393 0 0 1 1.334-3.813A4.968 4.968 0 0 1 134.31 13a4.729 4.729 0 0 1 3.646 1.487 5.485 5.485 0 0 1 1.271 3.738v1.15a.479.479 0 0 1-.451.471h-6.355v.042a1.901 1.901 0 0 0 2.084 2.17c1.23 0 3-.096 3.826-.18h.063c.242 0 .375.112.375.318v1.511c0 .3-.06.454-.417.534-1.241.319-2.517.48-3.798.48Zm-.3-9.157c-1.148 0-1.833.824-1.833 2.2v.076h3.625v-.073a2.498 2.498 0 0 0-.484-1.653 1.62 1.62 0 0 0-1.308-.55ZM145.006 24.72a15.606 15.606 0 0 1-3.625-.438.452.452 0 0 1-.375-.457v-1.608a.375.375 0 0 1 .108-.266.368.368 0 0 1 .267-.108h.076c1.076.14 2.778.277 3.389.277.958 0 1.174-.256 1.174-.776 0-.3-.181-.52-.736-.832l-2.591-1.489a3.28 3.28 0 0 1-1.771-2.938c0-2.01 1.334-3.085 4.084-3.085a12.904 12.904 0 0 1 3.549.458.452.452 0 0 1 .375.457v1.608c0 .236-.118.374-.319.374h-.077a31.988 31.988 0 0 0-3.306-.256c-.778 0-1.056.118-1.056.575 0 .3.222.457.618.693l2.473 1.391a3.298 3.298 0 0 1 2.014 3.058c-.007 1.892-1.361 3.361-4.271 3.361ZM157.215 14.906h-2.73v5.9c0 .693.319.818 1.174.818h1.493c.257 0 .417.118.417.34v1.525c0 .222-.139.36-.4.4-.79.12-1.589.18-2.389.18-2.225-.001-3.545-.694-3.545-3.279v-9.979a.432.432 0 0 1 .4-.4l2.427-.411h.063a.409.409 0 0 1 .36.4v2.074h2.73a.396.396 0 0 1 .283.117.401.401 0 0 1 .117.283v1.61a.398.398 0 0 1-.241.39.4.4 0 0 1-.159.033v-.001Z"
        />
    </svg>
)
export default SvgComponent
