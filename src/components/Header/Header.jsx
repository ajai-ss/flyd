import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeaderLogo from '../../../public/logo.png';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircle from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import content from './content';
import { HeaderWrapper } from './Header.styled';




const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
  return (
    <HeaderWrapper>
      <header class="site_header">
            <nav class="navbar navbar_top">
                <div class="d-flex align-items-center">
                    <button class="toggle_btn">
                        <span></span>
                    </button>
                    <Link href={'/'} class="navbar-brand ">
                        <Image
                          src={HeaderLogo}
                          alt='My Logo'
                        />
                        <strong class="fw-600 sub_logo">
                            {content.UAT1}
                        </strong>
                    </Link>
                    
                </div>
                <form action="" class="navbar_form">
                    <input type="search" placeholder="Find Reservation by PNR / Ticket # / Email ID"/>
                    <button type="submit"></button>
                </form>
                <div class="navbar_menu">
                    <Badge badgeContent={4} color="error">
                        <NotificationsNoneIcon color="#fff" />
                    </Badge>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        // aria-controls={}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                     >
                        <AccountCircle />
                    </IconButton>
                    {/* <button class="btn_null profile_name">
                        vk
                    </button> */}
                    <button class="btn_null menu_btn"></button>
                </div>
            </nav>
        </header>
    </HeaderWrapper>  
  );
};
export default Header;
