import React from "react";

const Schedule = ({ date1, date2, date3, date4 }) => {
  return (
    <div className="flex flex-col items-start gap-6 relative z-50">
    
      <h2 className="uppercase text-mountains font-bold text-3xl">Schedule</h2>

      <div className="text-gray-700">
        <div className="flex flex-col">
          <div className="flex gap-12">
            <p>{date1}</p>
            <p>Vestibulum viverra</p>
          </div>
          <div className="flex gap-12">
            <p>{date2}</p>
            <p>Vestibulum viverra</p>
          </div>
        </div>
        <div className="flex gap-12">
          <p>{date3}</p>
          <p>Vestibulum viverra</p>
        </div>
        <div className="flex gap-12">
          <p>{date4}</p>
          <p>Vestibulum viverra</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
