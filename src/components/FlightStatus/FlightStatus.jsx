import React from 'react';
import Image from 'next/image';
import CrossIcon from '../../../public/CrossIcon.svg';
import { FlightStatusWrapper } from './FlightStatus.styled';


const FlightStatus = () => {
  return (
    <FlightStatusWrapper>
       <aside class="left_section">
            <ul class="left_section_listing scrollY">
                <li class="active">
                    <span class="listing_icon">
                    <Image
                          src={CrossIcon}
                          alt='My Logo'
                    />
                    </span>
                    <div>
                        <h4 class="cs_listing_title">Disruption: FZ 143 DXB-TBS</h4>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                    </div>
                </li> 
                <li class="">
                    <span class="listing_icon">
                    <Image
                          src={CrossIcon}
                          alt='My Logo'
                    />
                    </span>
                    <div>
                        <h4 class="cs_listing_title">Delay: London Bound Trips Affected</h4>
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text</p>
                    </div>
                </li>
            </ul>
        </aside>
    </FlightStatusWrapper>  
  );
};
export default FlightStatus;
