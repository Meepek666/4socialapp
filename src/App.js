import './App.css';
import AppRoutes from './routes/AppRoutes';
import AppNav from './components/AppNav';
import Home from './views/Home';
import Login from './views/Login';
import SignUp from './views/SignUp';

function App() {
  return (
    <div className="App">
    <AppNav />
    <AppRoutes />
    </div>
  );
}

export default App;
