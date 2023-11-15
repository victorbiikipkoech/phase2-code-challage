import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import './styles.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    fetch('')
      .then(response => response.json())
      .then(data => setTransactions(data.transactions))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleAddTransaction = newTransaction => {
    
    setTransactions([...transactions, newTransaction]);
  };

  const handleSearch = term => {
    setSearchTerm(term);
  };

  
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Bank Transactions</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <input
        type="text"
        placeholder="Search transactions..."
        onChange={e => handleSearch(e.target.value)}
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
