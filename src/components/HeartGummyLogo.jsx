import React from 'react'

const HeartGummyLogo = ({ size = 30, className = '' }) => {
  return (
    <div 
      className={`heart-gummy-logo ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img
        src="/images/gummie-logo-heart2.png"
        alt="Ferrogum Heart Logo"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  )
}

export default HeartGummyLogo