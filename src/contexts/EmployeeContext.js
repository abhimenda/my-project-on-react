import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get('https://randomuser.me/api/?results=10');
      setEmployees(res.data.results);
    };
    fetchEmployees();
  }, []);

  const addEmployee = (employee) => {
    setEmployees([employee, ...employees]);
  };

  const deleteEmployee = (email) => {
    setEmployees(employees.filter(emp => emp.email !== email));
  };

  const filteredEmployees = employees.filter(emp =>
    `${emp.name.first} ${emp.name.last}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <EmployeeContext.Provider value={{
      employees: filteredEmployees,
      addEmployee,
      deleteEmployee,
      setSearchTerm,
    }}>
      {children}
    </EmployeeContext.Provider>
  );
};