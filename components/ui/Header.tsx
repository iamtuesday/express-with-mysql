import { useState, useEffect } from 'react'
import {  MenuIcon, Logo, Socials} from '../atoms'
import { Navbar } from '../molecules'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrooll = document.querySelector('.Header') as HTMLInputElement;
      if (window.scrollY > 60) {
        scrooll.classList.add('active')
      } else {
        scrooll.classList.remove('active')
      }
    })
  }, []);


  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
    document.body.classList.toggle('no-scroll')
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.classList.remove('no-scroll')
  }

  return (
    <header className="Header">
      <div onClick={closeMenu} className={`Header-overlay ${isMenuOpen && 'isActive'}`}></div>
      <div className="Header-logo">
        <Logo />
      </div>
      <Socials />
      <div className={`Header-menuIcon ${isMenuOpen && 'isActive'}`}>
        <MenuIcon setIsActive={toggleMenu} isActive={isMenuOpen} />
      </div>
    
      <Navbar isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </header>
  )
}
