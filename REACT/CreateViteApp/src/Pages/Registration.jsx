import React, { useState } from 'react'
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
  }

  return (
    <>
      <div>Registration</div>
      <form>
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
          />

          <label htmlFor=
