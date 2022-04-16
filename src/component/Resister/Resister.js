import React from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useEffect, useState } from 'react';
import google from '../../images/icon/google.png';
import facebook from '../../images/icon/facebook.png';
import github from '../../images/icon/github.png';
import { GithubAuthProvider, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const Resister = () => {
    const [checked, setChecked] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const nameRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmitResister = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // const displayName = nameRef.current.value;
        // console.log(email, password);
        if (checked) {
            createUserWithEmailAndPassword(email, password);

        }

    }
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user]);

    const handleNavigate = () => {
        navigate("/resister");
    }

    const githubProvider = new GithubAuthProvider();
    const handlegithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .error(error => {
                const message = error.message;
                console.log(message);
            })
    }
    const googleProvider = new GoogleAuthProvider();
    const handlegoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .error(error => {
                const message = error.message;
                console.log(message);
            })
    }
    const facebookProvider = new FacebookAuthProvider();
    const handlefacebook = () => {

    }

    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Please Resister</h1>
            <form className='container my-5' onSubmit={handleSubmitResister}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input ref={nameRef} type="text" className="form-control" aria-describedby="emailHelp" placeholder='Enter Your Name' required />
                </div>
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
                <input onClick={() => setChecked(!checked)} type="checkbox" name="terms" id="terms" />
                <label className={`pb-2 ps-2 ${checked && "text-primary"}`} htmlFor="terms">Accept terms and Condition</label>
                <br />
                <button disabled={!checked} type="submit" className="btn btn-primary">Resister</button>
                <p>If you have any account?<Link to='/login' className='text-primary text-decoration-none ' onClick={handleNavigate}>Please LogIn?</Link></p>
            </form>
            <div className='w-75 mx-auto d-flex align-items-center'>
                <div className='w-50 bg-primary  ' style={{ height: "1px" }}></div>
                <span className='m-2 pt-1 fs-3'>Or</span>
                <div className='w-50 bg-primary  ' style={{ height: "1px" }}></div>
            </div>
            <div className='w-75 mx-auto'>
                <button onClick={handlegoogle} className='btn-btn w-50 bg-primary border-0 py-1 fs-4 text-white rounded-pill d-block mx-auto mb-2'> <img src={google} alt="" /> With Google</button>
                <button onClick={handlefacebook} className='btn-btn w-50 bg-primary border-0 py-1 fs-4 text-white rounded-pill d-block mx-auto mb-2'> <img src={facebook} alt="" /> With Facebook</button>
                <button onClick={handlegithub} className='btn-btn w-50 bg-primary border-0 py-1 fs-4 rounded-pill d-block mx-auto mb-5 text-white '> <img src={github} alt="" /> With Github</button>
            </div>
        </div>
    );
};

export default Resister;