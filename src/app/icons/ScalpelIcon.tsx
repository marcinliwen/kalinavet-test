import React from "react";

type Props = {
    size: string
}
function ScalpelIcon(props: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            fill="currentColor"
            version="1.1"
            viewBox="0 0 512.002 512.002"
            xmlSpace="preserve"
        >
            <path d="M497.036 459.676H129.738c-.928 0-1.815.169-2.642.464l76.579-76.579.062.062a7.872 7.872 0 0011.136 0l57.542-57.543a7.86 7.86 0 004.272 1.262 7.85 7.85 0 005.568-2.306l217.61-217.61c16.184-16.185 16.184-42.521 0-58.706-16.187-16.185-42.521-16.188-58.707 0l-24.582 24.581c-3.075 3.075-3.075 8.059 0 11.133s8.059 3.076 11.134 0l24.582-24.581c10.045-10.046 26.391-10.047 36.437 0 10.046 10.046 10.046 26.393 0 36.439L276.685 308.334l-36.437-36.439L409.6 102.542a7.87 7.87 0 000-11.133 7.872 7.872 0 00-11.134 0l-174.92 174.92c-2.673 2.673-3.019 6.788-1.044 9.839l-57.543 57.543a7.873 7.873 0 000 11.134l.062.062-53.754 53.754a7.873 7.873 0 00-2.305 5.567v55.039c0 .93.181 1.825.486 2.668a7.842 7.842 0 00-5.516-2.259H7.873A7.873 7.873 0 000 467.549a7.873 7.873 0 007.873 7.873h96.059a7.873 7.873 0 007.873-7.873c0-.946-.175-1.848-.481-2.687a7.81 7.81 0 002.498 1.678 7.87 7.87 0 008.511-1.644 7.85 7.85 0 00-.468 2.653 7.873 7.873 0 007.873 7.873h367.299a7.873 7.873 0 10-.001-15.746zm-260.05-168.773l24.167 24.167-24.167 24.168v-48.335zm-26.856 19.904l11.11-11.11v55.287l-11.11 11.111v-55.288zm-15.745 15.745v25.449l-12.663-12.662-.063-.063 12.726-12.724zm-69.678 80.936l51.448-51.448 16.386 16.386-67.834 67.834v-32.772z"></path>
        </svg>
    );
}

export default React.memo(ScalpelIcon);