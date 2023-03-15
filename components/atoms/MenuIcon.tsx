import { FC } from 'react'

interface MenuIconProps {
  isActive?: boolean
  type?: string
  setIsActive: () => void
}

export const MenuIcon: FC<MenuIconProps> = ({
  isActive = false,
  type = 'hamburguer',
  setIsActive
}) => {
  return (
    <div onClick={setIsActive} className={`menu-icon ${type} ${isActive ? 'change' : null}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
