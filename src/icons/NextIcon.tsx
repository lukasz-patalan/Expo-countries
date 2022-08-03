import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './types'

const NextIcon = ({ color, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 12c0 .164-.037.326-.109.475a1.16 1.16 0 01-.308.392l-5.961 4.916a1.032 1.032 0 01-1.376-.097.89.89 0 01-.245-.66.903.903 0 01.317-.632l5.213-4.3a.126.126 0 00.034-.042.118.118 0 000-.104.126.126 0 00-.034-.042l-5.213-4.3a.903.903 0 01-.317-.632.89.89 0 01.245-.66c.17-.181.41-.293.667-.311.257-.019.511.058.709.214l5.959 4.915c.132.109.237.242.31.392.071.15.109.312.109.476z"
        fill={color}
      />
    </Svg>
  )
}

export default NextIcon
