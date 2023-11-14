import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields go here */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

