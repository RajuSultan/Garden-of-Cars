import React from 'react';
import { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending,] = useSendPasswordResetEmail(
        auth
    );
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
        // console.log(email, password)


    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }

    const handleNavigate = () => {
        navigate("/resister");


    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);

        await sendPasswordResetEmail(email);
        alert('Sent email');
    }
    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Please LogIn</h1>
            <form className='container my-5' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={emailRef} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Your Email' required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                {
                    loading ? <Loading></Loading> : ""
                }
                {
                    error ? <p>{error}</p> : ""
                }
                <button type="submit" className="btn btn-primary">Log In</button>
                <p>New to Garden of Cars <Link to='/resister' className='text-primary text-decoration-none ' onClick={handleNavigate}>Please Resister?</Link></p>
                <p>Forget Password? <Link onClick={resetPassword} className='text-decoration-none' to={""}>Reset Password</Link></p>
            </form>
        </div>
    );
};

export default Login;