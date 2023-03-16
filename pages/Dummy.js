import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const Dummy = () => {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }

  function handleSelect(ranges){
    console.log('ranges 1: ',ranges['selection'].startDate)
    console.log('ranges 2 : ',ranges['selection'].endDate)
  }

  return (
   <div>
       <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />

    <button >Confirm</button>

   </div>
  );
};

export default Dummy;

