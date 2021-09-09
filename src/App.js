import { CurrencyProvider, useCurrencyContext } from './CurrencyContext'
import { Redirect, Route, Switch } from 'react-router'
import SelectBaseCurrency from './SelectBaseCurrency/SelectBaseCurrency'
import CurrenciesRates from './CurrenciesRates/CurrenciesRates'
import CalculatorScreen from './CalculatorScreen/CalculatorScreen'

function AppWithContext() {
  const { baseCurrency, currentSelectedCurrency } = useCurrencyContext()

  return (
    <div className="overflow-y-hidden h-screen">
      <Switch>
        <Route path="/calc" exact>
          {baseCurrency && currentSelectedCurrency ? <CalculatorScreen /> : <Redirect to="/rates" />}
        </Route>
        <Route path="/rates" exact>
          {baseCurrency ? <CurrenciesRates /> : <Redirect to="/" />}
        </Route>
        <Route path="/">
          <SelectBaseCurrency />
        </Route>
      </Switch>
    </div>
  )
}

function App() {
  return (
    <CurrencyProvider>
      <AppWithContext />
    </CurrencyProvider>
  )
}

export default App
