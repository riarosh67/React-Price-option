import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOption from './components/PriceOption/PriceOption'
import LineChart from './components/LineChart/LineChart'
import Phones from './components/Phones/Phones'
/* import DaisyuiNav from './components/DasiyNavbar/DaisyuiNav' */

function App() {

  return (
    <>
    <Navbar></Navbar>
    <PriceOption></PriceOption>
    <LineChart></LineChart>
    <Phones></Phones>
    {/* <DaisyuiNav></DaisyuiNav> */}
    </>
  )
}

export default App
