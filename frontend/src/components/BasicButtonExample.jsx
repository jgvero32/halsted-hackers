import React,{ useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../App.css';

function BasicButtonExample({ onSelect }) {
  const [selected, setSelected] = useState("All Races");

  const handleSelect = (eventKey) => {
    setSelected(eventKey);
    onSelect(eventKey);
  }
  return (
    <DropdownButton align="start" id="dropdown-basic-button" title={selected} onSelect={handleSelect}>
      <Dropdown.Item eventKey="All Races">All Races</Dropdown.Item>
      <Dropdown.Item eventKey="American Indian or Alaska Native">American Indian or Alaska Native</Dropdown.Item>
      <Dropdown.Item eventKey="Asian or Pacific Islander">Asian or Pacific Islander</Dropdown.Item>
      <Dropdown.Item eventKey="Black or African American">Black or African American</Dropdown.Item>
      <Dropdown.Item eventKey="Hispanic or Latina">Hispanic or Latina</Dropdown.Item>
      <Dropdown.Item eventKey="White">White</Dropdown.Item>
    </DropdownButton>
  );
}

export default BasicButtonExample;