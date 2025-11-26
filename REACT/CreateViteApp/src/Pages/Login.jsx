import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({ logData }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const verification = (e) => {
    e.preventDefault();

    if (logData?.email === email && logData?.password === password) {
      alert("Login successfully");
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <div>Login</div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />

          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />

          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button onClick={verification} type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
