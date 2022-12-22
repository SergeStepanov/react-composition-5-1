import React from 'react'

export default function BtnLink({children, ...props}) {
  return (
    <a {...props}>{children}</a>
  )
}
