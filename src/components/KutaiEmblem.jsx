import React from 'react'

export default function KutaiEmblem({ size = 32, className = "text-[#caa45e]" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        maxWidth: `${size}px`,
        maxHeight: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
        display: 'inline-block',
        flexShrink: 0
      }}
      className={className}
    >
      <polygon points="50,5 95,30 95,85 50,110 5,85 5,30" stroke="currentColor" strokeWidth="6" />
      <polygon points="50,18 84,37 84,78 50,97 16,78 16,37" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <circle cx="50" cy="57" r="18" stroke="currentColor" strokeWidth="4" />
      <path d="M50 25 L50 89 M22 57 L78 57" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="50" cy="57" r="6" fill="currentColor" />
    </svg>
  )
}
