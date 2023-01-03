import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseForm from './expenseForm';
import ViewCompleteData from './viewData';
import { Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<ExpenseForm />} />
        <Route path="viewdata" element={<ViewCompleteData />} />

      </Routes>
    </div>
  )
}

export default App