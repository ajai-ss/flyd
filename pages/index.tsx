import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import FlightStatus from '../src/components/FlightStatus/FlightStatus';
import FareListFilter from '../src/components/FareListFilter/FareListFilter';

export default function Page() {
  return (
    <>
      <Header/>
      <FlightStatus/>
      <FareListFilter/>
      <Footer/>
    </>
  )
}