import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function DateRangePickers({dates,setDates,handleSetDate}) {
  console.log(dates)
  return (
    <DateRange
    editableDateInputs={true}
    onChange={item => handleSetDate([item.selection])}
    moveRangeOnFirstSelection={false}
    ranges={dates}
    rangeColor='#DAE3B0'
    showDateDisplay={false}
  />
  )
}
