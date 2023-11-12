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
    // Fetch transactions from the provided db.json file
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => setTransactions(data.transactions))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Filter transactions based on the search term
    setFilteredTransactions(
      transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [transactions, searchTerm]);

  const handleAddTransaction = (newTransaction) => {
    // Add the new transaction to the local state (not persisted to the backend)
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1>My Bank App</h1>
      <SearchBar onSearch={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
