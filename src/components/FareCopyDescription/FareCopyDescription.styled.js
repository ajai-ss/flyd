import styled from 'styled-components';


    export const  FareCopyDescriptionWrap = styled.div`
    .sidemodal {
        width: 70%;
        position: fixed;
        height: 100vh;
        right: 0;
        top: 0;
        box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
        font-family: 'Open Sans', sans-serif;
      }
      
      .sidemodal .modal_header {
        padding: 0.87rem 1.5rem;
        background: #006496;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      
      .btn_null {
        text-decoration: none;
        background: transparent;
        border: none !important;
        outline: none;
      }
      
      .sidemodal .modal_title {
        font-size: 16px;
        line-height: calc(21/16);
        margin: 0;
      }
      
      .close_sidemodal {
        padding: .35rem;
        cursor: pointer;
      }
      
      .info_wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        padding: 1rem 1.5rem;
        color: #6F6F6F;
        letter-spacing: .3px;
      }
      
      .info_wrapper p {
        margin: 0;
        color: #000;
      }
      
      .info_wrapper>.infobox {
        flex: 1 1 50%;
        max-width: 50%;
        background: #f5f5f5;
        padding: .5rem 1rem;
        border-radius: 4px;
        display: flex;
        align-items: end;
        font-size: 12px;
      }
      
      .mdl_info th,
      .mdl_info td {
        padding: 0.25rem .5rem;
        text-align: left;
        
      }
      
      .mdl_info th,
      .sm_text_set {
        font-weight: 400;
        font-size: 10px;
      }
      
      .mdl_info td {
        color: #292929;
      }
      
      .mdl_info th:first-child,
      .mdl_info td:first-child {
        width: 22%;
      }
      
      .mdl_info th:last-child,
      .mdl_info td:last-child {
        text-align: right;
      }
      
      .w-100 {
        width: 100%;
      }
      
      .info_tbl2 th {
        color: #6F6F6F;
        font-size: 12px;
        font-weight: 400;
        text-align: center;
      
        vertical-align: bottom;
      
      }
      
      .info_tbl2 td {
        font-size: 14px;
        color: #292929;
        font-weight: 600; 
        text-align: center; 
        padding-top:12px ;
      }
      .info_wrapper2{
        letter-spacing: .4px;
        padding: 5px 1.5rem; 
      }

    `
   