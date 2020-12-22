import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import ExpenseList from "./components/ExpenseList";
import Header from "./components/Header";
import IncomeList from "./components/IncomeList";
import { GlobalContextProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <IncomeList />
          <AddTransaction />
        </div>
      </div>
    </GlobalContextProvider>
  );
}

export default App;
