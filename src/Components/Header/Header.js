import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext.js';
import { signOut } from '../../Services/auth.js';

export default function Header() {
    const { user, setUser } = useContext(UserContext);
    const handleLogout = async () => {
        try {
            await signOut();
            setUser(null);
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <header>
            {user && (
                <nav>
                    <h1>WASTENAUT</h1>
                    <p>Hello {user.email}</p>
                    <button onClick={handleLogout}>Sign-out</button>
                </nav>
            )}
        </header>
    );
}
