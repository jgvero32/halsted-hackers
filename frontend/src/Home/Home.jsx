import React,{ useState } from "react";
import './Home.css'
import BasicButtonExample from '../components/BasicButtonExample';
import Chart from '../components/Chart';

function Home() {
  const [selectedRace, setSelectedRace] = useState("All Races");

 
  return (
      <div>
        <BasicButtonExample onSelect={setSelectedRace}/>
        <Chart param = {selectedRace}/>
      </div>
  )
}

export default Home