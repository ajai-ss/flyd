import styled from 'styled-components';


export const FareListFilterWrap = styled.div`
        background :#fff;
        padding:16px 16px 8px 16px;
        box-shadow: 0px 0px 16px 0px #BEBEBB4D;
        color:#000;
        width:350px;
        margin-left:50px;
        .MuiSelect-select{
           padding:15px;
        }
        h6{
            font-size:16px;
            font-weight:600;
            font-family: 'Open Sans', sans-serif;
            color:#292929;
        }
        span.labelText{
            font-size:15px;
            display:block;
            margin-bottom:8px;
        }
        .MuiButtonGroup-root{
            margin-bottom:15px;
        }
        button.MuiButtonGroup-grouped{
            background: #F5F5F5;
            font-size:12px;
            color:#6F6F6F;
            border-color:transparent;
            margin-right:10px;
        }
    `;
 
    export const  ButtonBottomWrap = styled.div`
        margin-top:80px;
        padding-top:15px;
        display:flex;
        justify-content: end;
        position:relative;
        button{
            background:#FF8200;
        }
        &&:after{
            content:'';
            left:0;
            top:0;
            height:1px;
            width: 100%;
            background:#D8D8D8;
            position:absolute;
        }
    `


    export const  OrderBottomWrap = styled.div`
        button{
            background :#006496;
            font-size:12px;
        }
    `
   