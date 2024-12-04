import React, { useEffect, useState } from 'react';
import './ListUser.css';

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState(null);
  const [editedUser, setEditedUser] = useState({ email: '', password: '', is_admin: false });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/userslist');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error('Error:', err);
        setError('Failed to load user data');
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/usersdelete/${id}`, { method: 'DELETE' });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to delete user');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setEditedUser({
      email: user.email,
      password: user.password,
      is_admin: user.is_admin,
    });
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const { email, password, is_admin } = editedUser;
      const response = await fetch(`http://localhost:5000/usersupdate/${editingUser}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, is_admin }),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }

      const updatedUser = await response.json();
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
      setIsModalOpen(false);
    } catch (err) {
      console.error('Error:', err);
      alert('Failed to save changes');
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const closeModal = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="list-user">
      <div className="list-user-header">
        <p>Email</p>
        <p>Password</p>
        <p>Admin</p>
        <p>Actions</p>
      </div>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="list-user-body">
          {users.map((user) => (
            <div key={user.id} className="list-user-row">
              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.is_admin ? 'Yes' : 'No'}</p>
              <div className="action-buttons">
                <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <h3>Edit User Information</h3>
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" value={editedUser.email} onChange={handleChange} placeholder="Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Heslo</label>
                  <input type="password" id="password" name="password" value={editedUser.password} onChange={handleChange} placeholder="Password" />
                </div>

                <div className="form-group">
                  <label htmlFor="is_admin">Admin</label>
                  <select id="is_admin" name="is_admin" value={editedUser.is_admin} onChange={handleChange}>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </select>
                </div>
              </div>

              <div className="action-buttons">
                <button type="button" className="edit-button" onClick={handleSave}>Save</button>
                <button type="button" className="delete-button" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListUser;
