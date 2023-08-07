import styled,{ css } from 'styled-components';


export const DashboardWrapper = styled.div`
.dash-main-wrapper {
    width: 866px;
    height: 164px;
    .dash-tab-wrapper {
        display: flex;
        align-items: center;

        .dash-tab-column {
            width: 25%;
            border-right: 2px solid #e5e5e5;

            .dash-tab-cell {
                display: flex;
                align-items: center;
                padding: 10px 36px 15px 14px;
                border-bottom: 2px solid #e5e5e5;

                .dash-tab-image {
                    width: 32px;
                    height: 32px;
                  }

                  .dash-tab-cell-text {
                    color: #39404b;
                    font-size: 14px;
                    font-weight: 600;
                    margin-left: 7px;
                  }

              }
      
            }

          }
      }

    .dash-slide-wrappper {
        width: 911px;
        height: 182px;
      }
  }
  `;









