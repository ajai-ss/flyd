import React from 'react';
import Image from 'next/image';
import footerLogo from '../../../public/f_Logo.png';
import { FooterWrapper } from './Footer.styled';


const Footer = () => {
  return (
    <FooterWrapper>
               <footer class="site_footer">
            <div class="footerbar_left d-flex align-items-center">
                <ul class="footerbar_left_list">
                    <li>
                        <a href="" class="active">New Reservation</a>
                    </li>
                    <li>
                        <a href="">I4JK5Y</a>
                    </li>
                    <li>
                        <a href="">J5KI5U</a>
                    </li>
                </ul>
                <button class="btn_null add_btn"></button>
            </div>
            <div class="footerbar_right d-flex align-items-center fw-600">
                <div class="footerbar_links">
                    <a href="#" class="arrow">Help</a>
                    <a href="#" class="arrow">Links</a>
                </div>
                <address class="ml-3">Dubai - May 12, 2023 (Fri) | 11:11 AM</address>
                <a href="/" class="ml-3">
                <Image
                    src={footerLogo}
                    alt='My Logo'
                />
                </a>
            </div>
        </footer>
    </FooterWrapper>  
  );
};
export default Footer;
