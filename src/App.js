import { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import AppNav from './components/AppNav';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';

function App() {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = "Bearer" + (user ? user.jwt_token:"");

  return (
    <div className="App">
    <AppNav user={user} />
    <AppRoutes user={user} setUser ={setUser}/>
    </div>
  );
}

export default App;
