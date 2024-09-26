import React from 'react'

interface Props {
  children: React.ReactNode
}

const Overlay = ({ children }: Props) => {
  return (
    <div className="size-full fixed inset-0 bg-black/50">
      <div className="size-full flex justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default Overlay
