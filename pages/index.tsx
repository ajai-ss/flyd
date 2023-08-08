import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import FlightStatus from '../src/components/FlightStatus/FlightStatus';
import FareCopyDescription from '../src/components/FareCopyDescription/FareCopyDescription';
import FareListFilter from '../src/components/FareListFilter/FareListFilter';
import { DatePicker } from '../src';

export default function Page() {
  return (
    <>
      <Header/>
      <FlightStatus/>
      <FareCopyDescription/>
      <FareListFilter/>
      <DatePicker />
      <Footer/>
    </>
  )
}