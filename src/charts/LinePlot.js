import React, { useState, useEffect } from 'react';

import { Line } from '@ant-design/plots';

export function LinePlot({ data, xFieldName, yFieldName }) {

  const config = {
    data,
    padding: 'auto',
    xField: xFieldName,
    yField: yFieldName,
    xAxis: {
      tickCount: 5,
    },
  };
  const title = xFieldName

  return (
    <div>
      <div 
        style={{
          display: 'flex',  
          justifyContent:'center', 
          alignItems:'center'
      }}>
        <h2>{yFieldName}</h2>
      </div>
      <Line {...config} />
    </div>
  )
}