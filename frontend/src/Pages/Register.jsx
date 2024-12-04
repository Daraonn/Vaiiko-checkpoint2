import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    agreed: false,
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError('Všetky polia musia byť vyplnené.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Heslá sa musi azhodovať.');
      return;
    }

    if (!formData.agreed) {
      setError('Potvrdte že súhlasiť s obchodnými podmienkami.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/usersadd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          is_admin: false,
        }),
      });

      if (!response.ok) {
        throw new Error('Registrácia sa nepodarila.');
      }

      const data = await response.json();
      console.log('User registered successfully:', data);
    } catch (err) {
      console.error('Error:', err);
      setError('Chyba pri registrácii.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register">
      <div className="register-container">
        <h1>Zaregistruj sa</h1>
        <form onSubmit={handleSubmit} className="register-fields">
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-mail" />
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Heslo" />
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Zopakujte Heslo" />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={loading}>Pokračuj</button>
        </form>
        <p className="register-login">
          Máte už účet? Prihláste sa <Link to='/login'><span>tu</span></Link>
        </p>
        <div className="register-checkbox">
          <input type="checkbox" name="agreed" id="agreed" checked={formData.agreed} onChange={handleChange} />
          <p>Pokračovaním súhlasíte so všeobecnými obchodnými podmienkami</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
