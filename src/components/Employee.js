import useEmployee from '../hooks/useEmployee';

const Employee = ({ employee }) => {
  const { deleteEmployee } = useEmployee();

  return (
    <div className="employee">
      <img src={employee.picture.thumbnail} alt="Profile" />
      <div>
        <h4>{employee.name.first} {employee.name.last}</h4>
        <p>{employee.email}</p>
      </div>
      <button onClick={() => deleteEmployee(employee.email)}>Delete</button>
    </div>
  );
};

export default Employee;