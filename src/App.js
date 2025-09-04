import './App.css';
import { EmployeeProvider } from './contexts/EmployeeContext';
import AddEmployeeForm from './components/AddEmployeeForm';
import EmployeeList from './components/EmployeeList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <EmployeeProvider>
      <div className="App">
        <h1>Employee Management System</h1>
        <SearchBar />
        <AddEmployeeForm />
        <EmployeeList />
      </div>
    </EmployeeProvider>
  );
}

export default App;