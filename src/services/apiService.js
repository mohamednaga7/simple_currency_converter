import axios from 'axios'
import { getISOByParam } from 'iso-country-currency'

const { REACT_APP_FIXER_KEY } = process.env

export const loadCurrencies = (baseCurrencyCode = null) => {
  return axios
    .get(
      `http://data.fixer.io/api/latest?access_key=${REACT_APP_FIXER_KEY}&format=1${baseCurrencyCode ? '&base='+ baseCurrencyCode : '' }`,
    )
    .then((response) => {
      return Object.keys(response.data.rates)
        .map((key) => {
          let countryCode = null
          try {
            countryCode = getISOByParam('currency', key)
          } catch (e) {}
          return {
            country_code: countryCode,
            currency_code: key,
            currency_price: Math.round(response.data.rates[key] * 1000) / 1000,
          }
        })
            .filter((curr) => curr.currency_price > 0 && curr.country_code)
    })
      .catch(err => {
          return [];
    })
}
