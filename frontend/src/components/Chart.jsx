import { useState, useEffect } from "react";
// import './App.css'
import React from "react";
import ReactDOM from "react-dom";
import vegaEmbed from "vega-embed";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Chart({param}) {
    
    
    useEffect(() => {
        var yourVlSpec ={};
        document.getElementById("vis").innerHTML = "";
        if(param == "All Races"){
            yourVlSpec = {
                $schema: "https://vega.github.io/schema/vega-lite/v6.json",
                description: "A simple bar chart with embedded data.",
                data: {
                    "url": "mortality_data.json"
                },
                mark: "bar",
                encoding: {
                    x: { field: "UNIT", type: "ordinal", "axis": { "labelAngle": -45}},
                    y: { field: "ESTIMATE", type: "quantitative", "axis": {"labelFontSize": 12}},
                    color: { field: "UNIT", type: "nominal" },
                },
                "title":{
                    text: `Mortality Rate per 1,000 Births for ${param}`,
                    fontSize: 24,
                    subtitle: "Data from NCHS via data.cdc.gov/",
                    subtitleFontSize: 12,
                    subtitleCOlor: "#333333"
                },        
                width:600,
                height: 350
            };
        }
        else{    
            yourVlSpec = {
                $schema: "https://vega.github.io/schema/vega-lite/v6.json",
                description: "A simple bar chart with embedded data.",
                data: {
                "url": "mortality_data.json"
                },
                transform: [
                    {
                        filter: `datum.STUB_LABEL == '${param}'`
                    }
                ],
                mark: "bar",
                encoding: {
                    x: { field: "UNIT", type: "ordinal", "axis": { "labelAngle": -45}},
                    y: { field: "ESTIMATE", type: "quantitative","axis": {"labelFontSize": 12}, "scale": {"domain": [0, 15]}},
                    color: { field: "UNIT", type: "nominal" },
                },
                "title":{
                    text: `Mortality Rate per 1,000 Births for ${param}`,
                    fontSize: 24,
                    subtitle: "Data from NCHS via data.cdc.gov/",
                    subtitleFontSize: 12,
                    subtitleCOlor: "#333333"
                }, 
                width:600,
                height: 350
            };
        }
        vegaEmbed("#vis", yourVlSpec); 
             
        }, [param]);

      
  
  return (
    <>
      <div id="vis"></div>
    </>
  )
}

export default Chart
