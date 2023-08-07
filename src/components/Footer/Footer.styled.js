import styled from 'styled-components';
import CloseIcon from '../../../public/Close.svg';
import AddIcon from '../../../public/Add.svg';

export const FooterWrapper = styled.div`
    .site_footer {
        margin-top: 100px;
        display: flex;
        align-items: center;
        border-top: 1px solid #D8D8D8;
        .footerbar_left_list {
            list-style-type: none;
            display: flex;
        }
        .footerbar_left_list li a {
            padding: .5rem 1.75rem;
            position: relative;
            display: block;
            border-top: 2px solid transparent;
            transition: .25s;
        
        }
        .footerbar_left_list li a:after {
            content: '';
            position: absolute;
            width: 16px;
            height: 100%;
            top: 0;
            right: 5px;
            filter: grayscale(1);
            background:  url(${CloseIcon?.src}) no-repeat center center;
        }
        
        .footerbar_left_list li a.active,
        .footerbar_left_list li a.active:hover {
            background: #F5F5F5;
            color: #006496;
            font-weight: 600;
            border-color: #006496;
        }
        
        .footerbar_left_list li {
            padding-right: 24px;
            position: relative;
        }
        
        .footerbar_left_list li:after {
            content: '';
            height: 15px;
            width: 1px;
            background: #D8D8D8;
            top: calc(50% - 7.5px);
            right: 12px;
            position: absolute;
        }
        
        .footerbar_left_list li a:hover {
            background: #F5F5F5;
            color:#006496;
            border-color: #006496;
        }        
        .footerbar_left_list li a.active:after,
        .footerbar_left_list li a:hover:after {
            filter: none;
        }
        .add_btn {
            height: 24px;
            cursor: pointer;
            width: 24px;
            background: url(${AddIcon?.src}) no-repeat center center;
            border:none;
        }
        .footerbar_right {
            margin-left: auto;
            padding-right: 1.5rem;
        }
        .footerbar_links {
            display: flex;
        }
        .footerbar_links a {
            color: #292929;
            position: relative;
            padding: .5rem 1.5rem;
        }
        .footerbar_links a:after {
            content: '';
            width: 5px;
            height: 5px;
            border: 1px solid currentColor;
            border-width: 1px 1px 0 0;
            transform: rotate(-45deg);
            position: absolute;
            right: 5px;
            top: 40%;
        }
        .footerbar_right address {
            font-style: normal;
            color:#6F6F6F;
        }
    }
        `;
