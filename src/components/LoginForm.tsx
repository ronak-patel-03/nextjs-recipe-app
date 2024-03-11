import React, { useState } from 'react';
import { signIN as signInWithCredentials } from '../services/userService'; 
import { signIn } from 'next-auth/react'; 
import Notification from './Notification';
import Link from 'next/link';

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleCredentialSignIn = async () => {
        try {
            if (!username || !password) {
                setNotificationMessage('Username and password are required');
                return;
            }

            await signInWithCredentials({ username, password });
            setNotificationMessage('Login successful');
            console.log("login-----------",  username);
            window.location.href = '/Home';
        } catch (error) {
            console.error('Login Error:', error);
            setNotificationMessage('Login failed');
        }
    };

    const handleNotificationClose = () => {
        setNotificationMessage('');
    };

    const handleSignInWithGoogle = async () => {
        try {
            await signIn('google',{callbackUrl: '/Home'});
        } catch (error) {
            console.error('Sign in with Google Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Welcome!</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <div className="mb-6">
                    <div className="flex justify-between mb-6">
                        <button
                            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={handleCredentialSignIn}
                            type="button" // Prevent form submission
                        >
                            Sign In
                        </button>
                        <p className="text-sm text-gray-700 mt-3">
                            Don&apos;t have an account?{' '}
                            <Link href="/SignUp" className="text-blue-500 hover:underline">Sign Up here</Link>
                        </p>
                    </div>
                    <div className='mb-4'>
                        <Notification message={notificationMessage} onClose={handleNotificationClose} />
                    </div>
                    <div className="flex justify-center">
                    <button
                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center"
                        onClick={handleSignInWithGoogle}
                        type="button" 
                    >
                        Sign in with Google
                    </button>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default LoginForm;
