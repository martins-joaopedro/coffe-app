import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, styles, handleClick }: CustomButtonProps) => {
  return (
    <button
        onClick={handleClick}
        className={`${styles}`}
    >
        <span>{title}</span>
    </button>
  )
}

export default CustomButton
