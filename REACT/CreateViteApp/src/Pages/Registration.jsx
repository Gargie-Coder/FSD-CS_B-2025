import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ regData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getData = (e) => {
    e.preventDefault();
    const data = { name, email, password };
    regData(data);
    navigate('/login');
  };

  return (
    <>
      <div>Registration</div>

      <form onSubmit={getData}>
        <div className="mb-3">

          <label htmlFor="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="nameHelp"
            value={name}
          />

          <label htmlFor="exampleInputEmail1" className="form-label mt-3">
            Email address
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
          />

          <label htmlFor="exampleInputPassword1" className="form-label mt-3">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
          />

        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Register
        </button>
      </form>
    </>
  );
};

export default Registration;
