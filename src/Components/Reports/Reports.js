import React from "react";
import ReportTable from "./ReportTable/ReportTable";

const Reports = () => {
  return (
    <div>
      <div className='card '>
        <div className='card-header card bg-primary text-white'>
          <h3>Events Report</h3>
        </div>
      </div>
      <br />
      <ReportTable />
    </div>
  );
};
export default Reports;
