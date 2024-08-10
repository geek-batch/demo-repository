import './App.css'
import CompanyDescription from './DescriptionPage/CompanyDescription'
import company from './DescriptionPage/DescriptionData'
import LandingPage from './LandingPage/LandingPage'


function App() {
  return (
    <>

      <LandingPage />
      <CompanyDescription company= {company}/>
    </>
  )
}

export default App
