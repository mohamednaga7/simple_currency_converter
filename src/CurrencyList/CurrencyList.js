import React from 'react'
import { useCurrencyContext } from '../CurrencyContext'
import CurrencyItem from '../CurrencyItem/CurrencyItem'

export default function CurrencyList({
    onChooseCurrency,
    showRate,
}) {

    const {loadingCurrencies, currencies} = useCurrencyContext();
  return (
    <div className="h-full">
          {
              currencies && currencies.length > 0 ? (
                <ul className="grid justify-center items-center content-center gap-7 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 px-5 pb-9">
                {currencies.map((currency) => (
                  <CurrencyItem
                    currency={currency}
                    key={currency.currency_code}
                    showRate={showRate}
                    onClick={() => onChooseCurrency(currency)}
                  />
                ))}
              </ul>
              ) : <h2 className="w-11/12 mx-auto text-3xl tracking-wider md:text-4xl lg:text-5xl text-black font-semibold uppercase mt-28 text-center">{ loadingCurrencies ? 'Fetching the currencies data...' : 'No currencies found' }</h2>
      }
    </div>
  )
}
