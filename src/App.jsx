import './App.css';
import Login from './components/Login/Login';
import LoginForm from './components/Login/LoginForm';

function App() {
    return (
        <div className="main">
            <Login>
                <LoginForm />
            </Login>
        </div>
    );
}

export default App;
