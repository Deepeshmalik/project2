
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!recaptchaToken) {
            alert('Please verify that you are not a robot');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            alert('Signup successful');
            
        }
    };

    const onRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    return (
        <div className="form-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <label htmlFor="mobile">Mobile</label>
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />

                <ReCAPTCHA
                    sitekey="6LfCSxcqAAAAADATNRw2ylE-SMGUkrZInFXm_1YF"
                    onChange={onRecaptchaChange}
                />

                <button type="submit">Sign Up</button>
            </form>
            <p>
                Already have an account? <a href="/login">Login here</a>
            </p>
        </div>
    );
};

export default Signup;

