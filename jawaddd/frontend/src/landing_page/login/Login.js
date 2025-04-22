import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy authentication - in real app, this would be an API call
        const dummyUser = localStorage.getItem('dummyUser');
        if (dummyUser) {
            const user = JSON.parse(dummyUser);
            if (user.email === formData.email && user.password === formData.password) {
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/');
            } else {
                alert('Invalid credentials');
            }
        } else {
            alert('User not found. Please sign up first.');
        }
    };

    return (
        <div className="auth-wrapper">
            <div className="auth-form">
                <h2>Welcome Back</h2>
                <p className="text-center mb-4" style={{ color: 'var(--secondary-color)' }}>
                    Enter your credentials to access your account
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot password?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Sign In
                    </button>
                </form>
                <p className="mt-4 text-center">
                    Don't have an account?{' '}
                    <Link to="/signup" className="text-primary">
                        Create Account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
