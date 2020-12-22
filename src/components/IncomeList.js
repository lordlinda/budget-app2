import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import IncomeTransaction from "./IncomeTransaction";

function IncomeList() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="transactions">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <IncomeTransaction
            key={transaction.id}
            incomeTransaction={transaction}
          />
        ))}
      </ul>
    </div>
  );
}

export default IncomeList;
