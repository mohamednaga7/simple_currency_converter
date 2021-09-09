import React, { useEffect } from 'react'
import { withRouter } from 'react-router'
import { useCurrencyContext } from '../CurrencyContext'
import CurrencyList from '../CurrencyList/CurrencyList'

const SelectBaseCurrency = ({ history }) => {
  const { currencies, selectBaseCurrency, getCurrencies } = useCurrencyContext()

  useEffect(() => {
    getCurrencies()
  }, [])

  const handleSelectBaseCurrency = (currency_code) => {
    selectBaseCurrency(currency_code)
    history.push('/rates')
  }
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col items-center bg-blue-800 pt-6 pb-40 text-white self-stretch">
        {/* <img className="w-20 mr-4 rounded-full md:w-32 md:mr-0 md:mb-5" src="/images/USA.png" alt="usa flag" /> */}
        <h3 className="text-3xl uppercase font-semibold mb-10 tracking-wider mt-8 md:text-4xl lg:text-5xl text-center">
          Select Base Currency
        </h3>
      </div>
      <div className="-m-9 lg:-m-12 overflow-y-scroll">
        <CurrencyList
          showRate={false}
          onChooseCurrency={handleSelectBaseCurrency}
        />
      </div>
    </div>
  )
}

export default withRouter(SelectBaseCurrency)
