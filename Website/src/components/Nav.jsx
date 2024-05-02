import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/'>
                <div>Home</div>
            </Link>
            <Link to='/orders'>
                <div>Orders</div>
            </Link>
            <Link to='/logins'>
                <div>Log in</div>
            </Link>
            <Link to='/users'>
                <div>Registration</div>
                </Link>
            <Link to='/contacts'>
                <div>Contact Us</div>
                </Link>
           
        </div>
    )
}