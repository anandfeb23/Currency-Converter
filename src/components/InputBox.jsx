import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md text-sm flex ${className}`}
    >
      <div className="w-1/2 pr-2">
        <label
          htmlFor={amountInputId}
          className="text-gray-500 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-gray-100 p-2 rounded-lg mt-1"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 pl-2 flex flex-col justify-end">
        <label className="text-gray-500 mb-2">Currency Type</label>
        <select
          className="rounded-lg px-2 py-2 bg-gray-100 cursor-pointer outline-none mt-1"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
