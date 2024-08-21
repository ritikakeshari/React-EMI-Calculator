import { useState } from "react";
import './emi-calculator.css';

export function EMICalculator() {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(1);
  const [interest, setInterest] = useState(10.45);
  const [installment, setInstallment] = useState('');

  function handleAmountChange(e) {
    setAmount(e.target.value);
  }

  function handleYearChange(e) {
    setYears(e.target.value);
  }

  function handleRateChange(e) {
    setInterest(e.target.value);
  }

  function handleCalculateClick() {
    const P = amount;
    const n = years * 12;
    const r = interest / 12 / 100;
    const EMI = P * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setInstallment(EMI);
  }

  return (
    <div className="container-fluid p-5 emi-calculator">
      <div className="bg p-4 rounded shadow-lg">
        <h1 className="text-center mb-4">EMI Calculator</h1>
        <div className="row my-3">
          <div className="col-md-4">
            <label>Amount you need</label>
            <input type="text" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="col-md-4">
            <label>For how many years?</label>
            <input type="number" value={years} min="1" max="5" onChange={handleYearChange} />
          </div>
          <div className="col-md-4">
            <label>Interest rate</label>
            <input type="number"  value={interest} min="10.45" max="18.45" step="0.01" onChange={handleRateChange} />
          </div>
        </div>

        <div className="row my-4">
          <div className="col-md-4 text-center">
            <label>Principal Amount:</label>
            <input type="range" value={amount} min="100000" max="500000" onChange={handleAmountChange} />
            <label>Range: ₹1,00,000 - ₹5,00,000</label>
          </div>
          <div className="col-md-4 text-center">
            <label>Years:</label>
            <input type="range" value={years} min="1" max="5" onChange={handleYearChange} />
            <label>Range: 1 - 5</label>
          </div>
          <div className="col-md-4 text-center">
            <label>Interest Rate:</label>
            <input type="range" value={interest} min="10.45" max="18.45" step="0.01" onChange={handleRateChange} />
            <label>Range: 10.45% - 18.45%</label>
          </div>
        </div>

        <div className="mt-5 text-center">
          <button onClick={handleCalculateClick} className="btn fs-5 px-5 py-2"> Calculate</button>
        </div>

        <div className="row mt-4">
          <div className="col text-center">
            <h4>Your Monthly Installment Amount</h4>
            <b>{installment.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</b>
          </div>
        </div>
      </div>
    </div>
  );
}
