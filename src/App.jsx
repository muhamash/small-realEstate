import './App.css'
import ClientCard from './components/common/ClientCard'
import ContactForm from './components/common/ContactForm'
import FaqCard from './components/common/FaqCard'
import FeaturesCard from './components/common/FeaturesCard'
import Header from './components/common/Header'
import PropertyCard from './components/common/PropertyCard'
import SubHeader from './components/common/SubHeader'
import FeatureOne from './components/common/svg/FeatureOne'
import Title from './components/common/Title'

function App() {

  return (
    <div className='p-10'>
      <ClientCard />
      <SubHeader/>
      <Title/>
      <Header />
      <ContactForm />
      <FaqCard />
      <PropertyCard />
      <FeaturesCard Children={<FeatureOne/>}/>
    </div>
  )
}

export default App
