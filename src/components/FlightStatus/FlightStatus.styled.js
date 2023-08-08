import styled from 'styled-components';
// import FilterImg from '../../../public/filter.png';
// import SeachImg from '../../../public/Search.png';
// import NotificationImg from '../../../public/noti.png';
// import MenuImg from '../../../public/menu.png';


export const FlightStatusWrapper = styled.div`
        .left_section {
            width: 455px;

        }

        .left_section_listing {    
            list-style: none;
            min-height: 350px;
            max-height: calc(100vh - 268px);
            overflow-y: auto;
        }

        .scrollY::-webkit-scrollbar {
            width: 6px;
            border-radius: 6px;
            background: #e9e9eb
        }


        .scrollY::-webkit-scrollbar-track {
            border-radius: 6px
        }

        .scrollY::-webkit-scrollbar-thumb {
            background: #c4c4c4;
            border-radius: 6px
        }


        .scrollY {
            overflow-y: auto;
            scrollbar-color: #c4c4c4 #e9e9eb;
            scrollbar-width: thin;
        }

        .left_section_listing>li {
            border-left: 3px solid transparent;
            position: relative;
            padding: 1.25rem ;
            display: flex;
            align-items: start;
            transition: .25s;
        }
        .left_section_listing>li:hover {
            background:#f5f5f5;
            border-left-color: #999;
        }
        .left_section_listing>li p {
            margin: 0;
            color: #5B6E8A;
            letter-spacing: .25px;
        }

        .left_section_listing>li.active {
            border-color: #292929;
        }

        .left_section_listing>li:after {
            content: '';
            left: 0;
            right: 0;
            height: 1px;
            background: #D8D8D8;
            bottom: 0;
            margin: 0 1.3rem;
            position: absolute;
        }

        .listing_icon {
            width: 32px;
            flex: 0 0 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
        }

        .left_section_listing>li.active .listing_icon {
            background:  #292929;
        }
        .cs_listing_title {
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 0.35rem;
        }

        .left_section_listing>li.active .cs_listing_title {
            font-weight: 700;
            line-height: 1.2;
            
        }
        .listing_icon{
            background: #D8D8D8;
            border-radius: 4px;
            margin-right: 1rem;
        }      
`;
