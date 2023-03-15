import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { useGenerals } from "../../context/generals.context";
import { useNavbarContext } from "../../context/navbar.context";
// import { goToSection } from '../../lib/utils'
import { Logo, Socials } from "../atoms";

interface NavbarProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
}

export const Navbar: FC<NavbarProps> = ({ isMenuOpen, closeMenu }) => {
  //   const { polylang } = useGenerals()
  //   const { activeSection } = useNavbarContext()

  //   const handleClick = (url: string) => {
  //     closeMenu()
  //     goToSection(url)
  //   }

  //   const handleContactClick = () => {
  //     closeMenu()
  //     goToSection('#contact')
  //   }

  return (
    <nav className={`Navbar ${isMenuOpen ? "isActive" : ""}`}>
      <div className="Navbar-container">
        <div className="Navbar-logo">
          <Logo />
        </div>
        <Socials />
      </div>

      <ul className="Navbar-ul">
        {/* {menu.map(({ id, label, url }) => (
          <li
            onClick={() => handleClick(url)}
            className={`Navbar-li ${url === activeSection ? 'isActive' : ''}`}
            key={id}
          >
            <a className="Navbar-a">{label}</a>
          </li>
        ))} */}

        <Link className="Navbar-li" href="/">
          Home
        </Link>
        {/* <Link className="Navbar-li" href="/upload">
          Upload
        </Link>
         */}
        <Link className="Navbar-li" href="/file-manager">
          File Manager
        </Link>
        
        <Link className="Navbar-li cursor-pointer" href="/login">
          <Image src="/img/login.png" alt="login" width={50} height={50} />
        </Link>


        {/* <li className={`Navbar-li ${'#contact' === activeSection ? 'isActive' : ''}`} onClick={handleContactClick}>
          <a className="Navbar-a Navbar-contact">
            {polylang.contact_us}
            <i className="icon-arrow"></i>
          </a>
        </li> */}
      </ul>
    </nav>
  );
};
