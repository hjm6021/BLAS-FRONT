import './LoginForm.scss';
import { useState } from 'react';

const LoginForm = ({ children }) => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        setInputs({
            username: '',
            password: '',
        });
    };

    return (
        <div className="LoginForm">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    ユーザーID &nbsp;&nbsp;
                    <input type="text" name="username" value={inputs.username} onChange={handleChange} />
                </label>
                <label>
                    パスワード &nbsp;&nbsp;
                    <input type="password" name="password" value={inputs.password} onChange={handleChange} />
                </label>
                <button>ログイン</button>
            </form>
        </div>
    );
};

export default LoginForm;
