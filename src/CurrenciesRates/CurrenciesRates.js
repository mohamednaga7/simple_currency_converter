import React, { useEffect } from 'react'
import { useCurrencyContext } from '../CurrencyContext'
import CurrencyList from '../CurrencyList/CurrencyList'
import ReactCountryFlag from 'react-country-flag'
import { withRouter } from 'react-router'

const CurrenciesRates = ({history}) => {
  const {
    baseCurrency,
    getCurrencies,
    setCurrentSelectedCurrency,
  } = useCurrencyContext()
  useEffect(() => {
    getCurrencies(
      process.env.REACT_APP_NDOE_ENV !== 'development'
        ? baseCurrency.currency_code
        : null,
    )
  }, [])

  const selectCurrency = (currency) => {
    setCurrentSelectedCurrency(currency);
    history.push('/calc')
  }
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col items-center bg-blue-800 pt-6 pb-40 text-white self-stretch">
        <ReactCountryFlag
          countryCode={baseCurrency.country_code}
          svg
          className="text-8xl rounded-full"
          title={baseCurrency.country_code}
        />
        <div>
          <span className="text-3xl font-semibold">
            {baseCurrency.currency_code}
          </span>
        </div>
      </div>
      <div className="-m-9 lg:-m-12 overflow-y-scroll">
        <CurrencyList onChooseCurrency={selectCurrency} />
      </div>
    </div>
  )
}

export default withRouter(CurrenciesRates)
