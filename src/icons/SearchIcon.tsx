import * as React from "react";
import Svg, { Path, Defs, G, ClipPath } from "react-native-svg";
import { IconProps } from "./types";

const SearchIcon = ({ color, size }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <G
        clipPath="url(#prefix__clip0)"
        stroke={color}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M11.132 15.128A7.553 7.553 0 105.223 1.226a7.553 7.553 0 005.909 13.902zM13.518 13.517l5.857 5.858" />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h20v20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;
