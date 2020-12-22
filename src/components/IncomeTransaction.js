import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeTransaction({ incomeTransaction }) {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <li
      className={`transaction ${
        incomeTransaction.type === "income"
          ? "transactions-income "
          : "transactions-expense"
      }`}
    >
      <span className="transaction-text">{incomeTransaction.text}</span>
      <span className="transaction-amount">${incomeTransaction.amount}</span>
      <button
        onClick={() => deleteTransaction(incomeTransaction.id)}
        className="delete-btn"
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default IncomeTransaction;
