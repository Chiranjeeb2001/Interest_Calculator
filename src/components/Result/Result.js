
import React from 'react';
import './Result.css';

const Result = ({ label, value }) => {
  return (
    <div className="result">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
}

export default Result;
