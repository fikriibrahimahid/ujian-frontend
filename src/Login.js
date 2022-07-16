import { useRef, useState, useEffect } from 'react';

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = /^.{8,}$/;

const Login = () => {
    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleLogin = async (e) => {
        e.preventDefault();

        const v1 = EMAIL_REGEX.test(email);
        const v2 = PASSWORD_REGEX.test(password);

        console.log("");
        if (!v1 || !v2) {
            console.log("Login failed!");
        } else {
            console.log("Login success!");
        }

        if (v1.length === 0) {
            console.log("error! email is empty");
        } else if (!v1) {
            console.log("error! email is not of a valid format");
        }

        if (v2.length === 0) {
            console.log("error! password is empty");
        } else if (!v2) {
            console.log("error! password length is less than 8 characters");
        }
    }

    return (
        <div>
            <section>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Login to your Account</h1>
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="email@example.org"
                    />
                    <label htmlFor="password">Password</label>
                    <input                    
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button>Login</button>
                </form>
            </section>
            <br></br>
            <br></br>
            <p>Don't have an account? <span className="line"><a href="register" replace="true">Register</a></span></p>
            <br></br>
            <p>Forgotten your password? <span className="line"><a href="">Reset Password</a></span></p>
        </div>
    )
}

export default Login