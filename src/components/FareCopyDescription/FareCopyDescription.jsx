import React from 'react';
import { FareCopyDescriptionWrap, TabWrapper } from './FareCopyDescription.styled';
import Image from 'next/image';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
import FitIcon from '../../../public/flt_icon.svg';


const FareListFilter = () => {
  // const [selectedTab, setSelectedTab] = useState(0);

  // const handleChange = (event, newValue) => {
  //   setSelectedTab(newValue);
  // };

  return (
    <>
    <FareCopyDescriptionWrap> 
        <div className="sidemodal">
        <div className="modal_header">
          <h4 className='modal_title'>Fare Rules</h4>
          <button className='close_sidemodal btn_null'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.225 13.825L0.175003 12.775L5.95 7.00005L0.175003 1.22505L1.225 0.175049L7 5.95005L12.775 0.175049L13.825 1.22505L8.05 7.00005L13.825 12.775L12.775 13.825L7 8.05005L1.225 13.825Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="modal_body">
          <div className="info_wrapper">
            <div className="info_left infobox">
              <table className='mdl_info w-100'>
                <thead>
                  <tr>
                    <th>
                      11 May 23, Fri
                    </th>
                    <th></th>
                    <th>B737 Max 8</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p>23:15 – 02:50</p>
                    </td> 
                    <td>
                      <span className='sm_text_set'>3h 35m / 1 stop</span>
                    </td>
                    <td>
                      <p> <Image
                        src={FitIcon}
                        alt='My Logo'
                      /> FZ 445 /  <Image
                          src={FitIcon}
                          alt='My Logo'
                        /> FZ 445 </p>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>
            <div className="info_right infobox">
              <table className='mdl_info w-100'>
                <thead>
                  <tr>
                    <th>
                      Cabin
                    </th>
                    <th>RBD</th>
                    <th>Brand</th>
                    <th> Basis</th>
                    <th> Base Fare (AED)</th>
                    <th> Total Fare (AED)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      ECONOMY
                    </td>
                    <td>
                      R
                    </td>
                    <td>
                      Lite
                    </td>
                    <td>RR7AE5</td>
                    <td>375.00</td>
                    <td>545.00</td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
          <div className="info_wrapper2">
            <table className="info_tbl2 w-100">
              <thead>
                <tr>
                  <th>
                    Hand <br />
                    Baggage
                  </th>
                  <th>Check-in <br />
                    Baggage</th>
                  <th>Meal</th>
                  <th>Seat Selection</th>
                  <th>In-flight <br />
                    Entertainment</th>
                  <th>Rebooking</th>
                  <th>Cancellation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>7kg</td>
                  <td>20kg</td>
                  <td>Chargeable</td>
                  <td>Chargeable</td>
                  <td>Chargeable</td>
                  <td>Chargeable</td>
                  <td>Chargeable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </FareCopyDescriptionWrap>  
    </>
  );
};
export default FareListFilter;
