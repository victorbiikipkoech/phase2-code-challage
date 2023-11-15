import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setNewTransaction({
      ...newTransaction,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    onAddTransaction(newTransaction);
    
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:
        <input type="text" name="date" value={newTransaction.date} onChange={handleChange} />
      </label>
      <label>Description:
        <input type="text" name="description" value={newTransaction.description} onChange={handleChange} />
      </label>
      <label>Category:
        <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />
      </label>
      <label>Amount:
        <input type="text" name="amount" value={newTransaction.amount} onChange={handleChange} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

