import { useState } from 'react';
import useEmployee from '../hooks/useEmployee';

const AddEmployeeForm = () => {
  const { addEmployee } = useEmployee();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newEmployee = {
      name: { first: name.split(' ')[0], last: name.split(' ')[1] || '' },
      email,
      picture: { thumbnail: 'https://via.placeholder.com/50' }
    };
    addEmployee(newEmployee);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" required />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default AddEmployeeForm;