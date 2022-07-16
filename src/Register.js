import { useRef, useState, useEffect } from "react";

const NAME_REGEX = /^[a-zA-Z ]+$/;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_REGEX = /^.{8,}$/;
// const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8}$/;

const Checkbox = ({ label, value, onChange }) => {
    return (
        <label>
            <input type="checkbox" checked={value} onChange={onChange} /> {label}
        </label>
    );
};

const Register = () => {
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();

    const [firstname, setFirstname] = useState('');
    const [validFirstname, setValidFirstname] = useState(false);

    const [lastname, setLastname] = useState('');
    const [validLastname, setValidLastname] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    useEffect(() => {
        firstnameRef.current.focus();
    }, [])

    useEffect(() => {
        lastnameRef.current.focus();
    }, [])

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidFirstname(NAME_REGEX.test(firstname));
    }, [firstname])

    useEffect(() => {
        setValidLastname(NAME_REGEX.test(lastname));
    }, [lastname])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEX.test(password));
    }, [password])

    const handleRegister = async (e) => {
        e.preventDefault();

        // const v1 = firstname.length > 0;
        const v1 = NAME_REGEX.test(firstname);
        const v2 = NAME_REGEX.test(lastname);
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PASSWORD_REGEX.test(password);
        const v5 = checked;

        console.log("");
        if (!v1 || !v2 || !v3 || !v4 || !v5) {
            console.log("Registration failed!");
        } else {
            console.log("Registration success!");
        }

        if (firstname.length == 0) {
            console.log("error! first name is empty");
        }

        if (lastname.length == 0) {
            console.log("error! last name is empty");
        }

        if (email.length == 0) {
            console.log("error! email is empty");
        } else if (!v3) {
            console.log("error! email is not of a valid format");
        }

        if (password.length == 0) {
            console.log("error! password is empty");
        } else if (!v4) {
            console.log("error! password length is less than 8 characters");
        }

        if (!v5) {
            console.log("error! terms and conditions have not been agreed");
        }
    }

    return (
        <div>
            <section>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <label htmlFor="firstname">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstname"
                        ref={firstnameRef}
                        autoComplete="off"
                        onChange={(e) => setFirstname(e.target.value)}
                        value={firstname}
                        required
                        aria-invalid={validFirstname ? "false" : "true"}
                        aria-describedby="uidnote"
                        placeholder="Joko"
                    />


                    <label htmlFor="lastname">
                        Last Name
                    </label>
                    <input
                        type="text"
                        id="lastname"
                        ref={lastnameRef}
                        autoComplete="off"
                        onChange={(e) => setLastname(e.target.value)}
                        value={lastname}
                        required
                        aria-invalid={validLastname ? "false" : "true"}
                        aria-describedby="uidnote"
                        placeholder="Shidiq"
                    />


                    <label htmlFor="email">
                        Email Address
                    </label>
                    <input
                        type="text"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        placeholder="email@example.org"
                    />

                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="passwordnote"
                    />


                    <Checkbox
                        label="To register with us please tick to agree to our Terms and Conditions"
                        value={checked}
                        onChange={handleChange}
                    />

                    <button>Register</button>
                </form>
            </section>
            <br></br>
            <p>Already have an account? <span className="line"><a href="login" replace="true">Login</a></span></p>
        </div>
    )
}

export default Register