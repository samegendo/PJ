import React from 'react';

const Login = ({ password, setPassword }: any) => {
    return (
        <div>
            <label>Enter password</label>
            <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
    )
}

export default Login;
