import './Login.scss';

const Login = ({ children }) => {
    return (
        <div className="Login">
            <div className="login-title">BLAS-REACT LOGIN</div>
            <div className="login-form">{children}</div>
        </div>
    );
};

export default Login;
