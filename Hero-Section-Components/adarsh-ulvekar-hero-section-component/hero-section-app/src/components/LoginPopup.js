// src/components/LoginPopup.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './LoginPopup.css'; // Make sure this file is created

Modal.setAppElement('#root');

const LoginPopup = ({ isOpen, onRequestClose }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            className="login-popup"
            overlayClassName="login-popup-overlay"
        >
            <div className="login-popup-content">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button submit">Login</button>
                </form>
                <button className="login-button google">Google</button>
                <button className="login-button github">GitHub</button>
                <button className="login-button outlook">Outlook</button>
                <button className="close-button" onClick={onRequestClose}>Close</button>
            </div>
        </Modal>
    );
};

export default LoginPopup;
