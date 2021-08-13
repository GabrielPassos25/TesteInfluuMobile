import * as React from "react"
import Svg, { Rect } from "react-native-svg"

function SvgComponent() {
  return (
    <Svg
      width={30}
      height={3}
      viewBox="0 0 30 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Rect width={30} height={3} rx={1.5} fill="#EF328D" />
    </Svg>
  )
}

export default SvgComponent
