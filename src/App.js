import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { LinePlot } from './charts/LinePlot';
import { DonutPlot } from './charts/DonutPlot';

function App() {

  const [timeSeries, setTimeSeries] = useState([]);
  const [aggregateData, setAggregateData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = async () => {
    const response = await fetch("https://ebvxco5dn2.execute-api.us-east-1.amazonaws.com/Prod/fetch")
    const responseJson = await response.json()
    setTimeSeries(JSON.parse(responseJson["time_series"]))
    setAggregateData(JSON.parse(responseJson["aggregate_data"]))
  };

  return(
    <div className='App'>
      <div className="main chart-wrapper">
        <LinePlot data={timeSeries} xFieldName={"bucket"} yFieldName={"Load"}/>
      </div>
      <div className="mid chart-wrapper">
        <LinePlot data={timeSeries} xFieldName={"bucket"} yFieldName={"Utility"}/>      
      </div>
      <div className="mid chart-wrapper">
        <LinePlot data={timeSeries} xFieldName={"bucket"} yFieldName={"Genset"}/>      
      </div>
      <div className="sub chart-wrapper">
        <LinePlot data={timeSeries} xFieldName={"bucket"} yFieldName={"Solar"}/>      
      </div>
      <div className="sub chart-wrapper">
        <LinePlot data={timeSeries} xFieldName={"bucket"} yFieldName={"BESS"}/>      
      </div>
      <div className="sub chart-wrapper">
        <DonutPlot data={aggregateData}/>      
      </div>
    </div>
  )
}

export default App;
