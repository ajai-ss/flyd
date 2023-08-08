import React from 'react'
import Image from 'next/image'
import CrossIcon from '../../../public/CrossIcon.svg'
import { FlightStatusWrapper } from './FlightStatus.styled'

const FlightStatus = () => {
  return (
    <FlightStatusWrapper>
      <aside className="left_section">
        <ul className="left_section_listing scrollY">
          <li className="active">
            <span className="listing_icon">
              <Image src={CrossIcon} alt="My Logo" />
            </span>
            <div>
              <h4 className="cs_listing_title">Disruption: FZ 143 DXB-TBS</h4>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text
              </p>
            </div>
          </li>
        </ul>
      </aside>
    </FlightStatusWrapper>
  )
}
export default FlightStatus
