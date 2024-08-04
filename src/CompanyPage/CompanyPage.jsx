/* eslint-disable react/prop-types */

import './CompanyPage.css'
import Image from '../assets/e948592c6c5a1022f18fe18d527af199.png'

const contactDetailsInfo = {
  phone: '+1 436 544 5544',
  addPhone: '+1 436 544 5544',
  fax: '+1 436 544 5544',
  email: 'itfcargo@example.com',
  address: '123 N State St., Chicago, IL, 60656',
}

const managersInfo = [
  {
    role: 'Recruiting',
    name: 'Shazam Akram',
    phone: '+1 234 567 8901',
    email: 'jdoe@email.com',
  },
  {
    role: 'Safety',
    name: 'Money Akchaev',
    phone: '+1 234 567 8901',
    email: 'jdoe@email.com',
  },
  {
    role: 'Fleet Manager',
    name: 'John Doe',
    phone: '+1 234 567 8901',
    email: 'jdoe@email.com',
  },
  {
    role: 'Fleet Manager',
    name: 'John Doe',
    phone: '+1 234 567 8901',
    email: 'jdoe@email.com',
  },
]

const socialLinksInfo = [
  {
    platform: 'Telegram',
    url: 'https://telegram.org',
    iconClass: 'fa-brands fa-telegram',
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com',
    iconClass: 'fa-brands fa-square-facebook',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com',
    iconClass: 'fa-brands fa-x-twitter',
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com',
    iconClass: 'fa-brands fa-instagram',
  },
]

const ratesInfo = [
  { type: 'Company Driver', price: '' },
  { type: 'DryVan', price: '$0.55 / mile' },
  { type: 'Reefer', price: '$0.65 / mile' },
  { type: 'FlatBed', price: '$0.70 / mile' },
]

const CompanyDetailsPage = (  {
  imageSrc = Image,

  headerText = 'Header image',

  companyName = 'ITF Logistics',

  website = 'www.itflogistics.com',

  description = 'Reefer, DryVan or Stepdeck we got you covered. Being a truck driver for 5 years himself the founder of Kavkaz Express, LLC knows the business from inside out. With dedication, hard work and compassion he managed to build a strong and trustworthy name.',

  contactDetails = contactDetailsInfo,

  socialLinks = socialLinksInfo,

  managers = managersInfo,

  rates = ratesInfo,
} ) => {


  return (
    <div className="main-content">
      <div className="header-image">
        <div>
          <img src={imageSrc} alt="logo" className='logo'/>
        </div>
        <div className="text-headerImg">
          <p className="headerText">{headerText}</p>
        </div>
      </div>
      <div className="content-box">
        <div className="alignIcons">
          <div className="text-header">
            <h1 id="moveWeb">{companyName}</h1>
            <p>{website}</p>
          </div>
          <div className="social-icons">
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                aria-label={link.platform}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`social-icon ${link.iconClass}`}></i>
              </a>
            ))}
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="contact-container">
          <div className="contactUs">
            <ul>
              <li>
                <strong>
                  <i className="fa-solid fa-phone"></i>Phone:
                </strong>
                <a className="space" href="tel:+14365445544">
                  {contactDetails.phone}
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-phone"></i>Phone:
                </strong>
                <a className="space" href="tel:+14365445544">
                  {contactDetails.addPhone}
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-print"></i>Fax:
                </strong>
                <a className="space" href="fax:+14365445544">
                  {contactDetails.fax}
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-envelope"></i>Email:
                </strong>
                <a className="space" href="mailto:itfcargo@example.com">
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <strong>
                  <i className="fa-solid fa-map"></i>Address:
                </strong>
                <a
                  className="space"
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contactDetails.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contactDetails.address}
                </a>
              </li>
            </ul>
          </div>
          <div className="managers">
            {managers.map((agent, index) => (
              <div className="manager" key={index}>
                <strong>
                  {agent.role}
                  <br />
                  {agent.name}
                  <br />
                </strong>
                <a href={`tel:${agent.phone}`}>{agent.phone}</a>
                <br />
                <a href={`mailto:${agent.email}`}>{agent.email}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="rates">
          <h2>Our Rates</h2>
          <table>
            <tbody>
              {rates.map((rate, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'first' : 'second'}
                >
                  <td className="bold">{rate.type}</td>
                  <td className="slim">{rate.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}



export default CompanyDetailsPage
