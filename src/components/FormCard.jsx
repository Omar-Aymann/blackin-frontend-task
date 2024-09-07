import axios from 'axios';
import logoSvg from '../assets/logo.svg';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

export default function FormCard() {
    const [email, setEmailValue] = useState('admin@admin.com');
    const [password, setPasswordValue] = useState('12345678');
    const uid = 1231;
    const navigate = useNavigate(); // Initialize useNavigate hook

    // Function to handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmailValue(value);
        } else if (name === 'password') {
            setPasswordValue(value);
        }
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            alert('Please fill in all fields');
            return;
        }
            try {
                const response = await axios.post(
                    `https://one-hand/login?uid=${uid}`,
                    { email, password },
                    { headers: { 'X-secret-key': 'OH2024' } }
                
                );
                Cookies.set('token', 'one-hand1234', { expires: new Date(new Date().getTime() + 5 * 60 * 1000) }); // expires in 5 minutes
                navigate('/home')
            } catch (e) {
                Cookies.set('token', 'one-hand1234', { expires: new Date(new Date().getTime() + 5 * 60 * 1000) }); // expires in 5 minutes
                navigate('/home')
                
            }
            
        
    };

    return (
        <div className="formCard">
            <img src={logoSvg} alt="Logo" />
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <div className="inputsHolder">
                    <div className='inputContainer'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            value={email} 
                            onChange={handleChange} 
                            type="email"  
                            name='email' 
                            placeholder='Email'
                        />
                    </div>
                    <div className='inputContainer'>
                        <label htmlFor="password">Password:</label>
                        <input 
                            value={password} 
                            onChange={handleChange} 
                            type="password"  
                            name='password' 
                            placeholder='Password'
                        />
                    </div>
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}
