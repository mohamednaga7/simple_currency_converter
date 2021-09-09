import React, { useContext, useState } from 'react'
import { loadCurrencies } from './services/apiService'

const CurrencyContext = React.createContext()

export function useCurrencyContext() {
  return useContext(CurrencyContext)
}

export function CurrencyProvider({ children }) {
  const [currencies, setCurrencies] = useState([])
  const [baseCurrency, setBaseCurrency] = useState(null)
  const [loadingCurrencies, setLoadingCurrencies] = useState(false);
  const [currentSelectedCurrency, setCurrentSelectedCurrency] = useState(false);

  const getCurrencies = async (selectedBase = null) => {
    setLoadingCurrencies(true);
    setCurrencies([]) // clear the current currencies state to store the new one

    const currenciesData = await loadCurrencies(selectedBase);

    setCurrencies(currenciesData)
    setLoadingCurrencies(false); // set the loading to false
  }

  const selectBaseCurrency = (selected) => {
    setBaseCurrency(selected)
  }

  const contextValue = {
    currencies,
    baseCurrency,
    getCurrencies,
    selectBaseCurrency,
    loadingCurrencies,
    currentSelectedCurrency,
    setCurrentSelectedCurrency,
  }

  return (
    <CurrencyContext.Provider value={contextValue}>
      {children}
    </CurrencyContext.Provider>
  )
}
