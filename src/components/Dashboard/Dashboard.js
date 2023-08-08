import React from 'react'
import { DashboardWrapper } from './Dashboard.styled';


const Dashboard = () => {
  return (
    <>
    <DashboardWrapper >
      <div class="dash-main-wrapper">
        <div class="dash-tab-wrapper">
          <div class="dash-tab-column">
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/StationOperation.png"
                alt="Station Operation image"
              />
              <span class="dash-tab-cell-text">Station Operation</span>
            </div>
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Fares.png"
                alt="Fareimage"
              />
              <span class="dash-tab-cell-text">Fares</span>
            </div>
            <div class="dash-tab-cell" lastChild={false} >
              <img
                class="dash-tab-image"
                src="./images/Queues.png"
                alt="Queue image"
              />
              <span class="dash-tab-cell-text">Queues</span>
            </div>
          </div>

          <div class="dash-tab-column">
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Agents.png"
                alt="Agents image"
              />
              <span class="dash-tab-cell-text">Agents</span>
            </div>
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Agents.png"
                alt="Agents image"
              />
              <span class="dash-tab-cell-text">Agents</span>
            </div>
            <div class="dash-tab-cell" lastChild={true}>
              <img
                class="dash-tab-image"
                src="./images/Agents.png"
                alt="Agents image"
              />
              <span class="dash-tab-cell-text">Agents</span>
            </div>
          </div>

          <div class="dash-tab-column">
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Schedule.png"
                alt="Schedule image"
              />
              <span class="dash-tab-cell-text">Schedule</span>
            </div>
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/System.png"
                alt="System image"
              />
              <span class="dash-tab-cell-text">System</span>
            </div>
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/DataExtract.png"
                alt="DataExtract image"
              />
              <span class="dash-tab-cell-text">Data Extract</span>
            </div>
          </div>

          <div class="dash-tab-column">
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Inventory.png"
                alt="Inventory image"
              />
              <span class="dash-tab-cell-text">Inventory</span>
            </div>
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Security.png"
                alt="Security image"
              />
              <span class="dash-tab-cell-text">Security</span>
            </div>
            <div class="dash-tab-cell">
              <img
                class="dash-tab-image"
                src="./images/Yield.png"
                alt="Yield  image"
              />
              <span class="dash-tab-cell-text">Yield Analyzer</span>
            </div>
          </div>
        </div>

        <div class="dash-slide-wrappper">
          {/* <div class="dash-slide">
            <div class="dash-slide-left-section">
              <img class="dash-slide-plane" src='./images/plane.png' alt="plane image" />
              <div class="dash-slide-text-wrap">
              <h2>Emirates Skywards Rewards</h2>
              <h3>Get best seat bookings, meals and exclusive lounge access</h3>
              </div>
            </div>

            <div class="dash-slide-right-arrow">
              <img src="./images/arrow.png" alt="arrow icon" />
            </div>
          </div> */}
          <img src='./images/planeslider.png' alt='plane silder' />
        </div>
      </div>
      </DashboardWrapper>
    </>
  )
}

export default Dashboard