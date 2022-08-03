import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { IconProps } from './types'

const LocationIcon = ({ color, size = 24 }: IconProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17.25 23.25C20.5637 23.25 23.25 20.5637 23.25 17.25C23.25 13.9363 20.5637 11.25 17.25 11.25C13.9363 11.25 11.25 13.9363 11.25 17.25C11.25 20.5637 13.9363 23.25 17.25 23.25Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19.902 17.25H17.25V14.599"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M10.4941 23.15C8.41575 22.8691 6.45729 22.013 4.83972 20.6782C3.22215 19.3433 2.00987 17.5829 1.33968 15.5957C0.669501 13.6084 0.568099 11.4734 1.04692 9.43158C1.52574 7.38976 2.56572 5.52241 4.0495 4.04027C5.53328 2.55813 7.40178 1.52022 9.44413 1.04366C11.4865 0.567095 13.6214 0.670861 15.6079 1.34324C17.5944 2.01562 19.3535 3.22985 20.6865 4.8489C22.0195 6.46795 22.8735 8.42735 23.1521 10.506"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12C6.75 7.36698 7.768 3.31198 9.289 1.07898"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M0.774902 11.25H10.2979"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.99902 5.25H21"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.0481 17.25H8.2501"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M14.7109 1.07898C15.9996 3.2566 16.7855 5.69467 17.0109 8.21498"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  )
}

export default LocationIcon
