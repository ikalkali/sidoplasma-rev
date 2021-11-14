import './login.css';
// import sido from '../img/Sidoplasma.png';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../auth/auth-hook';

const Login = () => {
  const history = useHistory();
  const auth = useAuth();

  const handleLogin = () => {
    const data = { username: 'aaa@gmail.com', password: '123123' };
    const url = 'https://appsa.awanpintar.com/login';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'X-Parse-Application-Id': 'MyAPPID',
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        auth.login(res.sessionToken);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="loginform">
      <h2 id="headerTitle" classname="fontlogin">
        L O G I N
      </h2>

      <div>
        <FormInput
          description="Username"
          placeholder="Enter your username"
          type="text"
        />
        <FormInput
          description="Password"
          placeholder="Enter your password"
          type="password"
        />
        <div id="button" class="row">
          <button
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);

export default Login;
