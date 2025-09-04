import useEmployee from '../hooks/useEmployee';
import Employee from './Employee';

const EmployeeList = () => {
  const { employees } = useEmployee();

  if (!employees.length) return <p>No employees found.</p>;

  return (
    <div className="employee-list">
      {employees.map(emp => (
        <Employee key={emp.email} employee={emp} />
      ))}
    </div>
  );
};

export default EmployeeList;