import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import BudgetCard from './components/BudgetCard';
import AddBudgetModal from './components/AddBudgetModal';
import { useState } from 'react'
import { useBudgets } from './contexts/BudgetContexts'
import AddExpenseModal from './components/AddExpenseModal';
import TotalBudgetCard from './components/TotalBudgetCard';
import ViewExpensesModal from './components/ViewExpensesModal';
import UncategorizedBudgetCard from './components/UncategorizedBudgetCard';


function App() {

  const [showViewExpensesModal, setShowViewExpensesModal] = useState(false)
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false)
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false)
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState()
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState()
  const { budgets, getBudgetExpenses } = useBudgets()


  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true)
    setAddExpenseModalBudgetId(budgetId)
  }

  function openViewExpensesModal(budgetId) {
    setShowViewExpensesModal(true)
    setViewExpenseModalBudgetId(budgetId)
  }
 
  return (
    <>
      <Container>
      <Stack direction='horizontal' gap='2' className='mb-4 mt-4' >
        <h1 className='me-auto'>Presupuesto</h1>
        <Button variant='primary' onClick={() => setShowAddBudgetModal(true)}>Agregar presupuesto</Button>
        <Button variant='outline-primary' onClick={() => openAddExpenseModal(0)}>Agregar gasto</Button>
      </Stack>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '16px',
          alignItems: 'flex-start'
        }}
      >
        { budgets.map( budget => {
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
          return (
            <BudgetCard
              key={ budget.id }
              name={ budget.name }
              amount={ amount }
              max={ budget.max }
              onAddExpenseClick={() => openAddExpenseModal(budget.id)}
              onViewExpensesModal={() => openViewExpensesModal(budget.id)}
            />
          )} ) }
          <UncategorizedBudgetCard onAddExpenseClick={openAddExpenseModal} />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={ showAddBudgetModal }
        handleClose={() => setShowAddBudgetModal(false) }
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        handleClose={() => setShowAddExpenseModal(false) }
        defaultBudgetId={addExpenseModalBudgetId}
      />
      <ViewExpensesModal 
        show={showViewExpensesModal}
        handleClose={() => setShowViewExpensesModal(false) }
        budgetId={viewExpenseModalBudgetId}
      />
    </>
    
  );
}

export default App;
