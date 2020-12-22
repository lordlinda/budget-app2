import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const incomeAmounts = transactions.filter(
    (transaction) => transaction.type === "income"
  );
  const expenseAmounts = transactions.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalIncome = incomeAmounts.reduce(
    (acc, item) => (acc += parseInt(item.amount)),
    0
  );

  const totalExpenses = expenseAmounts.reduce(
    (acc, item) => (acc += parseInt(item.amount)),
    0
  );

  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>${(totalIncome - totalExpenses).toFixed(2)}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+${totalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-${totalExpenses}</p>
        </div>
      </div>
    </div>
  );
}

export default Balance;
