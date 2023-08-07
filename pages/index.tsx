import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import FlightStatus from '../src/components/FlightStatus/FlightStatus';
import { DatePicker } from '../src';

export default function Page() {
  return (
    <>
      <Header/>
      <FlightStatus/>
      <DatePicker />
      <Footer/>
    </>
  )
}