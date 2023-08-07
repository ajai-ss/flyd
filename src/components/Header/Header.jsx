import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeaderLogo from '../../../public/logo.png'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import AccountCircle from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'
import content from './content'
import { HeaderWrapper } from './Header.styled'

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <HeaderWrapper>
      <header className="site_header">
        <nav className="navbar navbar_top">
          <div className="d-flex align-items-center">
            <button className="toggle_btn">
              <span></span>
            </button>
            <Link href={'/'} className="navbar-brand ">
              <Image src={HeaderLogo} alt="My Logo" />
              <strong className="fw-600 sub_logo">{content.UAT1}</strong>
            </Link>
          </div>
          <form action="" className="navbar_form">
            <input
              type="search"
              placeholder="Find Reservation by PNR / Ticket # / Email ID"
            />
            <button type="submit"></button>
          </form>
          <div className="navbar_menu">
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
            {/* <button className="btn_null profile_name">
                        vk
                    </button> */}
            <button className="btn_null menu_btn"></button>
          </div>
        </nav>
      </header>
    </HeaderWrapper>
  )
}
export default Header
