import Header from '../src/components/Header/Header'
import SearchFlight from '../src/components/SearchFlight/SearchFlight'
import Footer from '../src/components/Footer/Footer'
import FlightStatus from '../src/components/FlightStatus/FlightStatus'

export default function Page() {
  return (
    <>
      <Header />
      <SearchFlight />
      <FlightStatus />
      <Footer />
    </>
  )
}
