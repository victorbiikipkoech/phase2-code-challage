import React,{} from 'react';

const TransactionTable = ({ transactions, onDeleteTransaction }) => {

  const handleDelete = (id) => {
    onDeleteTransaction(id);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => handleDelete(transaction.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;







