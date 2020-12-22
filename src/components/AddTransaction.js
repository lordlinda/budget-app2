import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const { addIncome } = useContext(GlobalContext);
  const [data, setData] = useState({
    text: "",
    amount: 0,
  });
  const [type, setType] = useState("");
  const { text, amount } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmitIncome = (e) => {
    e.preventDefault();

    if (text !== "" || text !== 0) {
      const newTransaction = {
        id: uuidv4(),
        text,
        amount,
        type,
        date: new Date(),
      };

      addIncome(newTransaction);

      setData({
        text: "",
        amount: 0,
      });
      setType("");
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitIncome}>
        <div className="input-group income">
          <input
            type="text"
            name="text"
            value={text}
            placeholder="Add Income..."
            autoComplete="off"
            onChange={onChange}
          />
          <input
            type="number"
            name="amount"
            value={amount}
            placeholder="Amount"
            autoComplete="off"
            onChange={onChange}
          />
          <div className="custom-select">
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option>--select type--</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default AddTransaction;
