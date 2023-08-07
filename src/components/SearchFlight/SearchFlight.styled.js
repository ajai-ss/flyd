import styled from 'styled-components'
export const SearchWrapper = styled.div`
  font-family: 'Open Sans', sans-serif;
  background-color: #0c7db6;
  box-shadow: 4px 0px 16px 0px rgba(0, 0, 0, 0.08);
  .spacing {
    padding: 24px 28px;
  }
  .widgetTitle_select {
    gap: 15px;
  }
  .widgetItem {
    gap: 15px 32px;
  }
  .widgetTitle {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
  .wayTab {
    border-radius: 4px;
    border: 1px solid #009cde;
  }
  .wayTab li {
    padding: 10px;
    border-right: 1px solid #009cde;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
  .wayTab li:last-child {
    border-right: 0;
  }
  .wayTab li.active {
    background-color: #006496;
  }
  .MuiFormControl-root {
    margin: 0;
  }
  .MuiFormLabel-root {
    color: #fff;
  }
  .clear {
    margin-bottom: 8px;
    text-align: right;
    color: rgba(255, 255, 255, 0.4);
    font-size: 12px;
    font-weight: 600;
  }
  .searchBar {
    margin-top: 25px;
  }
  .searchBar .MuiFormControl-root {
    width: auto;
  }
  .searchBar .MuiInput-underline::before {
    border-bottom: 0;
  }
`
