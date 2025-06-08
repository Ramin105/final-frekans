import React from 'react'
import WelcomeSection from './components/welcome/WelcomeSection'
import Appointment from './components/appointment/Appointment'
import ThirdSection from './components/thirdsection/ThirdSection'
import Specialties from './components/specialties/Specialties'
import Doctors from './components/doctors/Doctors'

const Home = () => {
  return (
    <div><WelcomeSection/>
    <Appointment/>
    <ThirdSection/>
    <Specialties/>
    <Doctors/>
    </div>
  )
}

export default Home