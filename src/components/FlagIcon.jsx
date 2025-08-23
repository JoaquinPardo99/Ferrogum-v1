import React from 'react'

const FlagIcon = ({ country, size = 20 }) => {
  const flags = {
    PE: (
      <svg width={size} height={size * 0.75} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="15" fill="#D91023"/>
        <rect x="6.67" y="0" width="6.67" height="15" fill="white"/>
      </svg>
    ),
    US: (
      <svg width={size} height={size * 0.75} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="15" fill="#B22234"/>
        <rect y="1.15" width="20" height="1.15" fill="white"/>
        <rect y="3.46" width="20" height="1.15" fill="white"/>
        <rect y="5.77" width="20" height="1.15" fill="white"/>
        <rect y="8.08" width="20" height="1.15" fill="white"/>
        <rect y="10.38" width="20" height="1.15" fill="white"/>
        <rect y="12.69" width="20" height="1.15" fill="white"/>
        <rect width="8" height="8.08" fill="#3C3B6E"/>
      </svg>
    ),
    CN: (
      <svg width={size} height={size * 0.75} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="20" height="15" fill="#DE2910"/>
        <polygon points="3,2.5 4,4.5 2,4.5" fill="#FFDE00"/>
        <polygon points="6,1.5 6.5,2.5 5.5,2.5" fill="#FFDE00"/>
        <polygon points="6,3.5 6.5,4.5 5.5,4.5" fill="#FFDE00"/>
        <polygon points="6,5.5 6.5,6.5 5.5,6.5" fill="#FFDE00"/>
        <polygon points="6,7.5 6.5,8.5 5.5,8.5" fill="#FFDE00"/>
      </svg>
    )
  }

  return flags[country] || null
}

export default FlagIcon
