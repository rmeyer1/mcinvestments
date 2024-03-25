// PaymentCalculator.js
import React, { useState, useEffect } from 'react';

function PaymentCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [ltv, setLTV] = useState(0);
  const [equity, setEquity] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [term, setTerm] = useState(0);
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [calculatedEquityValue, setCalculatedEquityValue] = useState(0);
  const [pmt, setPMT] = useState(0);

  useEffect(() => {
    setCalculatedValue((purchasePrice * ltv) / 100);
    setCalculatedEquityValue((purchasePrice * equity) / 100);
  }, [purchasePrice, ltv, equity]);

  const handleGenerateClick = () => {
    const r = interestRate / 100 / 12; // Convert annual rate to monthly
    const PV = -calculatedEquityValue; // Make the equity value negative
    const n = term * 12; // Convert years to months
    const PMT = (PV * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setPMT(-PMT);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-black rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-white capitalize dark:text-white">
        Estimated Monthly Payment
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              className="text-gray-200 dark:text-gray-200"
              htmlFor="purchasePrice"
            >
              Purchase Price
            </label>
            <input
              id="purchasePrice"
              type="number"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-200 dark:text-gray-200" htmlFor="ltv">
              LTV
            </label>
            <div className="flex items-center mt-1">
              <input
                id="ltv"
                type="number"
                step="0.01"
                min="0"
                max="100"
                value={ltv}
                onChange={(e) => setLTV(e.target.value)}
                className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <p className="ml-4">${calculatedValue}</p>
            </div>
          </div>
          <div>
            <label
              className="text-gray-200 dark:text-gray-200"
              htmlFor="equity"
            >
              Equity
            </label>
            <div className="flex items-center mt-1">
              <input
                id="equity"
                type="number"
                step="0.01"
                min="0"
                max="100"
                value={equity}
                onChange={(e) => setEquity(e.target.value)}
                className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
              <p className="ml-4">${calculatedEquityValue}</p>
            </div>
          </div>

          <div>
            <label
              className="text-gray-200 dark:text-gray-200"
              htmlFor="interestRate"
            >
              Interest Rate
            </label>
            <input
              id="interestRate"
              type="number"
              step="0.01"
              min="0"
              max="100"
              onChange={(e) => setInterestRate(e.target.value)}
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-200 dark:text-gray-200" htmlFor="term">
              Term
            </label>
            <input
              id="term"
              type="number"
              onChange={(e) => setTerm(e.target.value)}
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={handleGenerateClick}
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Generate
          </button>
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Export
          </button>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-white capitalize dark:text-white">
            Monthly Payment: ${pmt.toFixed(2)}
          </p>
        </div>
      </form>{' '}
      {/* Add this line */}
    </section>
  );
}

export default PaymentCalculator;
