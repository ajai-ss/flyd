import styled from 'styled-components';
import FilterImg from '../../../public/filter.png';
import SeachImg from '../../../public/Search.png';
import NotificationImg from '../../../public/noti.png';
import MenuImg from '../../../public/menu.png';


export const HeaderWrapper = styled.div`
        .navbar_top {
          background: #006496;
          padding: 12px 25px;
          display: flex;
          align-items: center;
          color: white;
        }
      .toggle_btn {
        background: transparent;
        cursor: pointer;
        border: none;
        box-shadow: none;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 14px;
        margin-right: 1.5rem;
        position: relative;
      }
      .toggle_btn span {
        border-radius: 0;
        pointer-events: none;
        transition: all .35s;
        cursor: pointer;
        background: #fff;
        height: 2px;
        width: 22px;
        display: block;
      }
      .toggle_btn span:before,
      .toggle_btn span:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 2px;
        background: white;
        width: 100%;
        left: 0;
      }
      .toggle_btn span:after {
        top: 0;
      }
      .navbar-brand img {
        display: inline-flex;
      }
      .sub_logo {
        font-size: 10px;
        color: white;
        align-self: end;
        font-weight: 600;
      }
      .navbar_form {
        position: relative;
        flex: 0 0 50%;
        width: 50%;
        max-width: 436px;
        margin: 0 auto;
      }
      .navbar_form [type='search'] {
        height: 32px;
        border-radius: 4px;
        display: block;
        width: 100%;
        border: 1px solid #0C7DB6;
        box-shadow: none !important;
        color: #fff;
        padding: 0 2rem;
        outline: none;
        font-size: 12px;
        background: url(${SeachImg?.src}) no-repeat 7px center !important;
      }
      .navbar_form [type='search']::placeholder {
        color: #fff;
      }
      .navbar_form [type='submit'] {
        background: url(${FilterImg?.src}) no-repeat center center;
        position: absolute;
        width: 32px;
        height: 32px;
        right: 0;
        border: none;
        box-shadow: none !important;
        top: 0;
      }
      .navbar_menu {
        display: flex;
        align-items: center;
        justify-content: end;
      }
      .btn_null {
        text-decoration: none;
        background: transparent;
        border: none !important;
        outline: none;
      }
      .notification,
      .menu_btn {
        width: 24px;
        height: 24px;
        background: url(${NotificationImg?.src}) no-repeat center center;
        position: relative;
      }
      .notification.red:after {
        content: '';
        position: absolute;
        width: 8px;
        height: 8px;
        position: absolute;
        border-radius: 50%;
        right: 3px;
        top: 3px;
        background:#D4281C;
      }
      .profile_name {
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        line-height: 1;
        border-radius: 50%;
        background: #0C7DB6;
        text-transform: uppercase;
        font-size: 12px;
        color: white;
      }
      .menu_btn {
        background: url(${MenuImg?.src}) no-repeat center center;
      }
      .navbar_menu {
        gap: 15px;
      }
`;
