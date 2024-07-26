import React from 'react'
import myImage from '../assets/e948592c6c5a1022f18fe18d527af199.png'

import './Dan.css'

const Dan = () => {
  const encodedAddress = encodeURIComponent(
    '123 N State St., Chicago, IL, 60656'
  )

  return (
    <div className="main-content">
      <div className="header-image">
        <div>
          <img src={myImage} alt="logo" width={'250px'} />
        </div>
        <div className="text-headerImg">
          <p className="headerText">Header image </p>
        </div>
      </div>
      <div className="content-box">
        <div className="alignIcons">
          <div className="text-header">
            <h1>ITF Logistics</h1>
            <p>www.itflogistics.com</p>
          </div>
          <div className="social-icons">
            <a href="https://telegram.org">
              <i className="fa-brands fa-telegram social-icon"></i>
            </a>
            <a href="https://www.facebook.com">
              <i className="fa-brands fa-square-facebook social-icon"></i>
            </a>
            <a href="https://x.com">
              <i className="fa-brands fa-x-twitter social-icon"></i>
            </a>
            <a href="https://www.instagram.com">
              <i className="fa-brands fa-instagram social-icon"></i>
            </a>
          </div>
        </div>
        <p className="description">
          Reefer, DryVan or Stepdeck we got you covered. Being a truck driver
          for 5 years himself the founder of Kavkaz Express, LLC knows the
          business from insclassNamee out. With dedication, hard work and
          compassion he managed to build a strong and trustworthy name.
        </p>
        <div className="contact-container">
          <div className="contactUs">
            <ul>
              <li>
                <strong>
                  <i className="fa-solid fa-phone"></i>Phone:
                </strong>
                <a className="space" href="tel:+14365445544">
                  +1 436 544 5544
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-phone"></i>Phone:
                </strong>
                <a className="space" href="tel:+14365445544">
                  +1 436 544 5544
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-print"></i>Fax:
                </strong>
                <a className="space" href="fax:+14365445544">
                  +1 436 544 5544
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-envelope"></i>Email:
                </strong>
                <a className="space" href="mailto:itfcargo@example.com">
                  itfcargo@example.com
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-map"></i>Address:
                </strong>
                <a
                  className="space"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  123 N State St., Chicago, IL, 60656
                </a>
              </li>
            </ul>
          </div>
          <div className="managers">
            <div className="manager">
              <strong>
                Recruiting: <br />
                Shazam Akram <br />
              </strong>
              <a href="tel:+12345678901">+1 234 567 8901</a>
              <br />
              <a href="mailto:jdoe@email.com">jdoe@email.com</a>
            </div>
            <div className="manager">
              <strong>
                Fleet Manager:
                <br />
                John Doe <br />
              </strong>
              <a href="tel:+12345678901">+1 234 567 8901</a>
              <br />
              <a href="mailto:jdoe@email.com">jdoe@email.com</a>
            </div>
          </div>
          <div className="managers">
            <div className="manager">
              <strong>
                Safety:
                <br />
                Money Akchaev <br />
              </strong>
              <a href="tel:+12345678901">+1 234 567 8901</a>
              <br />
              <a href="mailto:jdoe@email.com">jdoe@email.com</a>
            </div>
            <div className="manager">
              <strong>
                Fleet Manager:
                <br />
                John Doe <br />
              </strong>
              <a href="tel:+12345678901">+1 234 567 8901</a>
              <br />
              <a href="mailto:jdoe@email.com">jdoe@email.com</a>
            </div>
          </div>
        </div>
        <div className="rates">
          <h2>Our Rates</h2>
          <table>
            <tr className="first">
              <td className="bold">Company driver</td>
              <td></td>
            </tr>
            <tr className="second">
              <td className="bold">DryVan</td>
              <td className="slim">$0.55 / mile</td>
            </tr>
            <tr className="first">
              <td className="bold">Reefer</td>
              <td className="slim">$0.65 / mile</td>
            </tr>
            <tr className="second">
              <td className="bold">FlatBed</td>
              <td className="slim">$0.70 / mile</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dan
