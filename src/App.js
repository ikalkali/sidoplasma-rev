import logo from './logo.svg';
import './App.css';
import Footer from './components/footer/footer';
import React from 'react';
import Login from './components/login/login';
import Navbar from './components/navbar/navbar';
import Menu1 from './components/PMI/PMI_Main_Menu';
import Menu2 from './components/Faskes/Faskes_Main_Menu';
import Menu3 from './components/Menu/Main_Menu';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { useAuth } from './auth/auth-hook';
import { AuthContext } from './auth/auth-context';

function App() {
  const { token, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
      }}
    >
      <div Classname="App">
        <div className="backg">
          <Router>
            <Navbar />
            <main>
              <Switch>
                <Route path="/" exact>
                  <Login />
                  {/* <Gerbong/> */}
                </Route>

                <Route path="/menu2">
                  <Menu1 />
                </Route>
                <Route path="/menu1">
                  <Menu2 />
                </Route>
                <Route path="/menu3">
                  <Menu3></Menu3>
                </Route>
                <Redirect to="/" />
              </Switch>
            </main>
            <Footer></Footer>
          </Router>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
