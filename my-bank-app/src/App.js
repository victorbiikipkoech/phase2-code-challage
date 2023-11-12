// src/App.js
import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // ... (previous code)
  }, []);

  useEffect(() => {
    // ... (previous code)
  }, [transactions, searchTerm]);

  const handleAddTransaction = (newTransaction) => {
    // ... (previous code)
  };

  const handleDeleteTransaction = (id) => {
    // Remove the transaction with the given id
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <h1>My Bank App</h1>
      <SearchBar onSearch={setSearchTerm} />
      <TransactionTable
        transactions={filteredTransactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;


