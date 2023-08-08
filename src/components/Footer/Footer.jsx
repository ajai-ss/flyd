import React from 'react'
import Image from 'next/image'
import footerLogo from '../../../public/f_Logo.png'
import { FooterWrapper } from './Footer.styled'

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="site_footer">
        <div className="footerbar_left d-flex align-items-center">
          <ul className="footerbar_left_list">
            <li>
              <a href="" className="active">
                New Reservation
              </a>
            </li>
            <li>
              <a href="">I4JK5Y</a>
            </li>
            <li>
              <a href="">J5KI5U</a>
            </li>
          </ul>
          <button className="btn_null add_btn"></button>
        </div>
        <div className="footerbar_right d-flex align-items-center fw-600">
          <div className="footerbar_links">
            <a href="#" className="arrow">
              Help
            </a>
            <a href="#" className="arrow">
              Links
            </a>
          </div>
          <address className="ml-3">
            Dubai - May 12, 2023 (Fri) | 11:11 AM
          </address>
          <a href="/" className="ml-3">
            <Image src={footerLogo} alt="My Logo" />
          </a>
        </div>
      </footer>
    </FooterWrapper>
  )
}
export default Footer
