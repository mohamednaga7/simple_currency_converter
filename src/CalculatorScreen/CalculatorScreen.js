import React, { useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import CurrencyInput from 'react-currency-input-field'
import { withRouter } from 'react-router'
import { useCurrencyContext } from '../CurrencyContext'

export function isNumeric(value) {
  return !isNaN(value - parseFloat(value))
}

const CalculatorScreen = () => {
  const { currentSelectedCurrency, baseCurrency } = useCurrencyContext()

  const [aValue, setAValue] = useState()
  const [bValue, setBValue] = useState()

  const onValueChanged = (value, name) => {
    if (name === 'aValue') {
      setAValue(value)
      const result = value * +currentSelectedCurrency.currency_price
      setBValue(isNaN(result) ? '' : result)
    } else {
      setBValue(value)
      const result = value / +currentSelectedCurrency.currency_price
      setAValue(isNaN(result) ? '' : result)
    }
  }

  return (
    <div className="flex w-full items-start justify-center h-full bg-blue-800">
      <div className="flex flex-col items-end w-full md:w-5/6 mx-auto mt-12">
        <div className="flex items-center w-full px-3 md:px-0">
          <ReactCountryFlag
            countryCode={baseCurrency.country_code}
            svg
            className=" text-3xl md:text-5xl mr-2 rounded-full"
            title={baseCurrency.country_code}
          />

          <CurrencyInput
            name="aValue"
            className="bg-transparent text-right w-full text-2xl md:text-3xl lg:text-5xl text-white outline-none px-1"
            decimalsLimit={2}
            value={aValue}
            placeholder="0"
            onValueChange={onValueChanged}
          />
          <span className="text-xl md:text-3xl lg:text-5xl text-white ml-3 w-14 md:w-20 lg:w-24">
            {baseCurrency.currency_code}
          </span>
        </div>
        <hr className="w-full" />
        <div className="flex items-center w-full px-3 md:px-0">
          <ReactCountryFlag
            countryCode={currentSelectedCurrency.country_code}
            svg
            className=" text-3xl md:text-5xl mr-2 rounded-full"
            title={currentSelectedCurrency.country_code}
          />

          <CurrencyInput
            name="bValue"
            className="bg-transparent text-right w-full text-2xl md:text-3xl lg:text-5xl text-white outline-none px-1"
            decimalsLimit={2}
            value={bValue}
            placeholder="0"
            onValueChange={onValueChanged}
          />
          <span className="text-xl md:text-3xl lg:text-5xl text-white ml-3 w-14 md:w-20 lg:w-24">
            {currentSelectedCurrency.currency_code}
          </span>
        </div>
      </div>
    </div>
  )
}

export default withRouter(CalculatorScreen)
