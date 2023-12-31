import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

const ArrowSVG = (props: SvgProps) => (
    <Svg width="40" height="40" fill="white" {...props} >
        <Path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 29c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z"></Path>
        <Path d="M11.086 22.086l2.829 2.829 8.914-8.914-8.914-8.914-2.828 2.828 6.086 6.086z"></Path>
    </Svg>
)

export default ArrowSVG

