import { useContext } from 'react';
import { EmployeeContext } from '../contexts/EmployeeContext';

const useEmployee = () => {
  return useContext(EmployeeContext);
};

export default useEmployee;