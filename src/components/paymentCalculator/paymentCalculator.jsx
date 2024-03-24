// PaymentCalculator.js
import React from 'react';

function PaymentCalculator() {
  return (
    <section className="max-w-4xl p-6 mx-auto bg-black rounded-md shadow-md dark:bg-gray-800">
      <h2 className="text-lg font-semibold text-white capitalize dark:text-white">
        Estimated Monthly Payment
      </h2>
      <form>
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
              type="text"
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-200 dark:text-gray-200" htmlFor="ltv">
              LTV
            </label>
            <input
              id="ltv"
              type="email"
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              className="text-gray-200 dark:text-gray-200"
              htmlFor="equity"
            >
              Equity
            </label>
            <input
              id="equity"
              type="password"
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
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
              type="password"
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-200 dark:text-gray-200" htmlFor="term">
              Term
            </label>
            <input
              id="term"
              type="password"
              className="block w-1/2 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Generate
          </button>
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Export
          </button>
        </div>
      </form>{' '}
      {/* Add this line */}
    </section>
  );
}

export default PaymentCalculator;
