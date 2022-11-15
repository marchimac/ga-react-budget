import { Button, Stack } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import BudgetCard from './components/BudgetCard';

function App() {
  return (
    <Container>
      <Stack direction='horizontal' gap='2' className='mb-4 mt-4' >
        <h1 className='me-auto'>Presupuesto</h1>
        <Button variant='primary'>Agregar</Button>
        <Button variant='outline-primary'>Agregar Gasto</Button>
      </Stack>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '16px',
          alignItems: 'flex-start'
        }}
      >
        <BudgetCard name='Comida' amount={200} max={800} ></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
