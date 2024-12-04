import React, { useState } from 'react';
import axios from 'axios'; 
import './AddUser.css';

const AddUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    is_admin: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'is_admin' ? value === 'true' : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/usersadd', formData);
      console.log('User added successfully:', response.data);
      setFormData({ email: '', password: '', is_admin: false });
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <form className="add-user" onSubmit={handleSubmit}>
      <div className="add-users-fields">
        <p>Email</p>
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="add-users-password">
        <p>Password</p>
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
      </div>
      <div className="add-users-is_admin">
        <p>Admin</p>
        <select name="is_admin" value={formData.is_admin} onChange={handleChange} required>
          <option value="false">No</option>
          <option value="true">Yes</option>
        </select>
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
