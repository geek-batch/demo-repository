import './OpenPositions.css'

function OpenPositions() {
  const jobs = [
    {
      jobTitle: 'Needed Truck Driver',
      driverRateInCents: 65,
      ownerOperatorPercentage: 15,
      isLeaseAvailable: true,
      jobDescription:
        'DryVan.  job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. ',
    },
    {
      jobTitle: 'Dispatch Cargo Chicago',
      driverRateInCents: 55,
      ownerOperatorPercentage: 12,
      isLeaseAvailable: false,
      jobDescription:
        'DryVan.  job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. ',
    },
    {
      jobTitle: 'Mechanic for garage at  Gary IN.',
      driverRateInCents: 70,
      ownerOperatorPercentage: 10,
      isLeaseAvailable: true,
      jobDescription:
        'DryVan.  job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. Some job description goes here you know. ',
    },
  ]

  return (
    <section>
      <div className="open-positions-container">
        <h2>Open Positions</h2>
        {jobs.map((jobOffer, index) => (
          <div className="job-container" key={index}>
            <div className="company-part col-md-3">
              <p className="company-name">{jobOffer.jobTitle}</p>
              <p className="job-description">
                Company driver: $0.{jobOffer.driverRateInCents} Per Mile
              </p>
              <p className="job-description">
                Owner operator: {jobOffer.ownerOperatorPercentage}% from gross
              </p>
              <p className="job-description">
                {jobOffer.isLeaseAvailable
                  ? 'Lease available'
                  : 'Lease is not available'}
              </p>
            </div>
            <div className="description-part">
              <span className="description">Description</span>
              <p className="company-description">{jobOffer.jobDescription}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center col-md-3">
              <button className="apply-btn">
                CLICK TO APPLY<i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OpenPositions
