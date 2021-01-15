import React from 'react';
import '../style/style.scss';
import logo from '../img/logo.svg';
import {Link} from 'react-router-dom';
export default function Header(props) {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt=""/>
                <h2>GLOBAL <span> IT</span></h2>
            </div>
            <nav className='header__nav'>
                <ul>

                    <li>
                        <Link to={'/'}>Գլխավոր</Link>
                    </li>
                    <li>
                        <Link to={'/service'}>Ծառայություններ</Link>
                        <span></span>
                    </li>
                    <li>
                        <Link to={'/universitet'}>Ֆակուլտետներ</Link>
                        <span></span>
                    </li>
                    <li>
                        <Link to={'/blog'}>Բլոգ</Link>
                    </li>
                    <li>
                        <Link to={'/gshop'}>Gshop</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Կապ</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__right-"></div>
        </header>
    )
}