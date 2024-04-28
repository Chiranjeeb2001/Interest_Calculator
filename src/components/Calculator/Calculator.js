import React, { useState } from 'react';
import './Calculator.css';
import Result from '../Result/Result';

const Calculator = () => {
  const [selectedOption, setSelectedOption] = useState('Interest');
  const [interestResult, setInterestResult] = useState({});
  const [principalResult, setPrincipalResult] = useState({});
  const [rateResult, setRateResult] = useState({});
  const [timeResult, setTimeResult] = useState({});
  const [error, setError] = useState(null);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const resetFields = () => {
    setInterestResult({});
    setPrincipalResult({});
    setRateResult({});
    setTimeResult({});
    setError(null);
  };
  const calculateInterest = () => {
    const principalForInterest = parseFloat(interestResult.principal);
    const rateForInterest = parseFloat(interestResult.rate);
    const timeForInterest = parseFloat(interestResult.time) / 12;
    if (isNaN(principalForInterest) || isNaN(rateForInterest) || isNaN(timeForInterest)) {
        setError('Please enter valid numbers for all input fields.');
        return;
      }

    const simpleInterest = Math.floor((principalForInterest * rateForInterest * timeForInterest) / 100);
    const totalReturnForInterest = principalForInterest + simpleInterest;
    

    setInterestResult(prevState => ({
        ...prevState,
      simpleInterest,
      totalReturn: totalReturnForInterest
    }));
    setError(null);
  };

  const calculatePrincipal = () => {
    const interestForPrincipal = parseFloat(principalResult.interest);
    const rateForPrincipal = parseFloat(principalResult.rate);
    const timeForPrincipal = parseFloat(principalResult.time);

   
    if (isNaN(interestForPrincipal) || isNaN(rateForPrincipal) || isNaN(timeForPrincipal)) {
        setError('Please enter valid numbers for all input fields.');
        return;
    }

    const principal = (100 * interestForPrincipal) / (rateForPrincipal * timeForPrincipal);
    const totalReturnForPrincipal = principal + interestForPrincipal;

    
    setPrincipalResult(prevState => ({
        ...prevState,
        principal,
        totalReturn: totalReturnForPrincipal
    }));

    
    setError(null);
};

const calculateRate = () => {
    const interestForRate = parseFloat(rateResult.interest);
    const principalForRate = parseFloat(rateResult.principal);
    const timeForRate = parseFloat(rateResult.time);

    
    if (isNaN(interestForRate) || isNaN(principalForRate) || isNaN(timeForRate)) {
        setError('Please enter valid numbers for all input fields.');
        return;
    }

    const rate = (100 * interestForRate) / (principalForRate * timeForRate);
    const totalReturnForRate = principalForRate + interestForRate;

    
    setRateResult(prevState => ({
        ...prevState,
        rate,
        totalReturn: totalReturnForRate
    }));

    
    setError(null);
};

const calculateTime = () => {
    const interestForTime = parseFloat(timeResult.interest);
    const principalForTime = parseFloat(timeResult.principal);
    const rateForTime = parseFloat(timeResult.rate);

    
    if (isNaN(interestForTime) || isNaN(principalForTime) || isNaN(rateForTime)) {
        setError('Please enter valid numbers for all input fields.');
        return;
    }

    const time = (100 * interestForTime) / (principalForTime * rateForTime);
    const totalReturnForTime = principalForTime + interestForTime;

    
    setTimeResult(prevState => ({
        ...prevState,
        time,
        totalReturn: totalReturnForTime
    }));

    
    setError(null);
};

  const calculateFor = (e) => {
    const target = e.target.value;

    if (target === "Interest") {
      setInterestResult({});
      setPrincipalResult({});
      setRateResult({});
      setTimeResult({});
      setError(null);
    }
    if (target === "Principal") {
      setInterestResult({});
      setPrincipalResult({});
      setRateResult({});
      setTimeResult({});
    }
    if (target === "Rate") {
      setInterestResult({});
      setPrincipalResult({});
      setRateResult({});
      setTimeResult({});
    }
    if (target === "Time") {
      setInterestResult({});
      setPrincipalResult({});
      setRateResult({});
      setTimeResult({});
    }
  };

  return (
    <main>
      <div className="container">
        <div id="calculateFor">
          <label className="labelOption">
            Calculate For
            <select className="selectOption" onChange={(e) => { handleOptionChange(e); calculateFor(e); }}>
              <option value="Interest">Simple Interest</option>
              <option value="Principal">Principal</option>
              <option value="Rate">Rate</option>
              <option value="Time">Time</option>
            </select>
          </label>

         
          
        </div>

        {selectedOption === 'Interest' && (
  <>
    {error && <div className="error">{error}</div>}
    <div className="stageInterest active">
     
      <label>
        Principal:
        <input
          type="number"
          className="principalForInterest"
          value={interestResult.principal || ''}
          onChange={(e) => setInterestResult({ ...interestResult, principal: e.target.value })}
        />
      </label>
      <label>
        Rate (%):
        <input
          type="number"
          className="rateForInterest"
          value={interestResult.rate || ''}
          onChange={(e) => setInterestResult({ ...interestResult, rate: e.target.value })}
        />
      </label>
      <label>
        Time (months):
        <input
          type="number"
          className="timeForInterest"
          value={interestResult.time || ''}
          onChange={(e) => setInterestResult({ ...interestResult, time: e.target.value })}
        />
      </label>
      <button id="checkForInterest" onClick={calculateInterest}>Calculate Interest</button>
    </div>
    
    {interestResult.simpleInterest && (
      <Result label="Simple Interest" value={interestResult.simpleInterest} />
    )}
    {interestResult.totalReturn && (
      <Result label="Total Return" value={interestResult.totalReturn} />
    )}
  </>
)}


{selectedOption === 'Principal' && (
  <>
    {error && <div className="error">{error}</div>}
    <div className="stagePrincipal active">
      
      <label>
        Interest:
        <input
          type="number"
          className="interestForPrincipal"
          value={principalResult.interest || ''}
          onChange={(e) => setPrincipalResult({ ...principalResult, interest: e.target.value })}
        />
      </label>
      <label>
        Rate (%):
        <input
          type="number"
          className="rateForPrincipal"
          value={principalResult.rate || ''}
          onChange={(e) => setPrincipalResult({ ...principalResult, rate: e.target.value })}
        />
      </label>
      <label>
        Time (months):
        <input
          type="number"
          className="timeForPrincipal"
          value={principalResult.time || ''}
          onChange={(e) => setPrincipalResult({ ...principalResult, time: e.target.value })}
        />
      </label>
      <button id="checkForPrincipal" onClick={calculatePrincipal}>Calculate Principal</button>
    </div>
   
    {principalResult.principal && (
      <Result label="Principal" value={principalResult.principal} />
    )}
    {principalResult.totalReturn && (
      <Result label="Total Return" value={principalResult.totalReturn} />
    )}
  </>
)}

{selectedOption === 'Rate' && (
  <>
    {error && <div className="error">{error}</div>}
    <div className="stageRate active">
      
      <label>
        Interest:
        <input
          type="number"
          className="interestForRate"
          value={rateResult.interest || ''}
          onChange={(e) => setRateResult({ ...rateResult, interest: e.target.value })}
        />
      </label>
      <label>
        Principal:
        <input
          type="number"
          className="principalForRate"
          value={rateResult.principal || ''}
          onChange={(e) => setRateResult({ ...rateResult, principal: e.target.value })}
        />
      </label>
      <label>
        Time (months):
        <input
          type="number"
          className="timeForRate"
          value={rateResult.time || ''}
          onChange={(e) => setRateResult({ ...rateResult, time: e.target.value })}
        />
      </label>
      <button id="checkForRate" onClick={calculateRate}>Calculate Rate</button>
    </div>
    
    {rateResult.rate && (
      <Result label="Rate" value={rateResult.rate} />
    )}
    {rateResult.totalReturn && (
      <Result label="Total Return" value={rateResult.totalReturn} />
    )}
  </>
)}

{selectedOption === 'Time' && (
  <>
    {error && <div className="error">{error}</div>}
    <div className="stageTime active">
      
      <label>
        Interest:
        <input
          type="number"
          className="interestForTime"
          value={timeResult.interest || ''}
          onChange={(e) => setTimeResult({ ...timeResult, interest: e.target.value })}
        />
      </label>
      <label>
        Principal:
        <input
          type="number"
          className="principalForTime"
          value={timeResult.principal || ''}
          onChange={(e) => setTimeResult({ ...timeResult, principal: e.target.value })}
        />
      </label>
      <label>
        Rate (%):
        <input
          type="number"
          className="rateForTime"
          value={timeResult.rate || ''}
          onChange={(e) => setTimeResult({ ...timeResult, rate: e.target.value })}
        />
      </label>
      <button id="checkForTime" onClick={calculateTime}>Calculate Time</button>
    </div>
    
    {timeResult.time && (
      <Result label="Time" value={timeResult.time} />
    )}
    {timeResult.totalReturn && (
      <Result label="Total Return" value={timeResult.totalReturn} />
    )}
  </>
)}
 <button className="resetButton" onClick={resetFields}>Reset</button>
      </div>
    </main>
  );
}

export default Calculator;
