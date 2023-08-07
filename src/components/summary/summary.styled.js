import styled,{ css } from 'styled-components';


export const SummaryWrapper = styled.div`
.summary-wrapper{
    width: 435px;
    background: #f9f9f9;
    box-shadow: 0px 4px 10px 0px #00000040;

    .summary-top-bar{
        display: flex;
        align-items: center;
        padding: 10px;
        justify-content: space-between;
        background: #006496;

        .summary-title{
            font-size: 12px;
            font-weight: 600;
            text-align: left;
            color:#FFFFFF;
        }

        .summary-right-segment-wrap{
            display: flex;
            align-items: center;

            .summary-top-text{
                font-weight: 600;
                font-size: 12px;
                line-height: 16.34px;
                margin-left: 6px;
                color: #ffffff;
            }

            .right-dropdpwn-wrap{
                margin-top: 7px;

                .summary-top-text{
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 16.34px;
                    margin-left: 6px;
                    color: #ffffff;
                }

            }
        }

    }

    .flight-detail-bar{
        padding: 6px 12px 6px 12px;
        background: #0c7db6;

        .flight-detail-text{
            font-size: 12px;
            line-height: 16.34px;
            color: #ffffff;
        }
    }


    .flight-details-wrap{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .flight-details-left-section{

            .flight-location {
                display: flex;/
                align-items: center;
                padding: 10px 0px 10px 10px;

                .flight-location-text {
                    font-size: 12px;
                    font-weight: 600;
                    margin-right: 10px;
                  }
              }

              .flight-date{
                font-size: 10px;
                font-weight: 400;
                line-height: 14px;
                padding: 2px 0px 0px 10px;
                color: #6f6f6f;
              }

              .flight-timing-wrap{
                padding: 4px 0px 10px 10px;
                
                .flight-time-text{
                    font-size: 12px;
                    font-weight: 600;
                    text-align: left;
                }
                .flight-duration-text{
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 16px;
                    color: #6f6f6f;
                    margin-left: 10px;
                }
            }
              }
        }

        .flight-details-right-section{
            .flight-detail-number-wrap{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0px 10px 10px;

                .plain-tail{
                    width: 12px;
                    height: 12px;
                    margin-right: 6px;
                }
                .flight-no-text {
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 16px;
                    text-align: right;
                    color: #292929;
                    margin-right: 6px;
                  }
            }

            .flight-class{
                font-size: 10px;
                font-weight: 400;
                line-height: 14px;
                text-align: right;
                padding: 3px 10px 0px 0px;
                color: #6f6f6f;
            }
            .flight-detail-id{
                font-size: 12px;
                font-weight: 600;
                text-align: right;
                padding: 4px 10px 10px 0px;
            }
        }

    }


    .total-bar-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 12px 4px 12px;
        border-top: 1px solid #d8d8d8;
        border-bottom: 1px solid #d8d8d8;

        .total-text {
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #6f6f6f;
            margin-left: 10px;
          }

          .total-value {
            font-size: 12px;
            font-weight: 600;
            text-align: right;
          }


    }

    .fare-wrap{
        display: flex;
        display: flex;
        justify-content: space-between;
        align-items:center;
        padding: 8px 16px 8px 16px;

        .fare-text {
            font-size: 12px;
            font-weight: 400;
            text-align: left;
            color: #000000;
          }
          .proceed-button {
            padding: 8px;
            border-radius: 4px;
            background: #ff8200;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            color: #ffffff;
          }

    }
}

`