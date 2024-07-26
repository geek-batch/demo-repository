import React from 'react'
import './ilkhom.css'
import truckImage from './images/ffa5726971b2da124f5b1e378814ef75.png'
import companies from './images/companies.jpeg'
import jobs from './images/jobs.jpeg'
import trucks from './images/trucks.jpeg'
import mechanics from './images/mechanics.jpeg'
import trafficLawyers from './images/traffic-lawyers.jpeg'
import other from './images/other.jpeg'

const Ilkhom = () => {
  return (
    <div className="container-fluid p-5 m-0">
      <div className="row border p-5">
        <div className="col-6 ps-5">
          <div className="row-md-6" style={{ width: '479px' }}>
            <div>
              <h1 className="lh-sm">All your trucker needs in one place</h1>
            </div>
            <div className="mt-4">
              <p className="lh-base">
                Reprehenderit esse id veniam ut veniem non ex adipiscing amer
                ullamco dolor proident
              </p>
            </div>
          </div>
          <div className="row-md-6 mt-5">
            <img
              src={truckImage}
              style={{ width: '471px', height: '357px' }}
              alt="truck image"
            />
          </div>
        </div>
        <div className="col-6 pe-5 ps-5">
          <div className="row text-center">
            <div class="col-6 ps-5">
              <div>
                <img src={companies} alt="" />
              </div>
              <div className="mt-3">
                <p>Companies</p>
              </div>
            </div>
            <div class="col-6 pe-5">
              <div>
                <img src={jobs} alt="" />
              </div>
              <div className="mt-3">
                <p>Jobs</p>
              </div>
            </div>
          </div>

          <div className="row text-center mt-3">
            <div class="col-6 ps-5">
              <div>
                <img src={trucks} alt="" />
              </div>
              <div className="mt-3">
                <p>Trucks</p>
              </div>
            </div>
            <div class="col-6 pe-5">
              <div>
                <img src={mechanics} alt="" />
              </div>
              <div className="mt-3">
                <p>Mechanics</p>
              </div>
            </div>
          </div>

          <div className="row text-center mt-3">
            <div class="col-6 ps-5">
              <div>
                <img src={trafficLawyers} alt="" />
              </div>
              <div className="mt-3">
                <p>Traffic Lawyers</p>
              </div>
            </div>
            <div class="col-6 pe-5">
              <div>
                <img src={other} alt="" />
              </div>
              <div className="mt-3">
                <p>Other...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ilkhom
