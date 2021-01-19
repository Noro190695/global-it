import React, {useState} from 'react';
import '../style/style.scss';
import logo from '../img/logo.svg';
import search from '../img/serch.svg';
import am from '../img/am.svg';
import ru from '../img/ru.svg';
import en from '../img/en.svg';
import user from '../img/user.png';
import {Link} from 'react-router-dom';

const data = {
    am: {
        nav: ['Գլխավոր'],

    },
    ru:{
        nav:['Главная']
    },
    en:{
        nav:['Home']
    }
}
export default function Header(props) {

    let [lang, setLang] = useState('/')
    const changeLang = (e) => {
        setLang(prev => prev = e.target.dataset.leng)
    }
    return (
        <header>
            <div className="logo">
                <img src={logo} alt=""/>
                <h2 className={props.dark?'header__logo-light':'header__logo-dark'}>GLOBAL <span> IT</span></h2>
            </div>
            <nav className='header__nav'>
                <ul>
                    <li>
                        <Link to={'/'} className={props.dark?'header__link-light':'header__link-dark'}>{
                            lang === '/'?data.am.nav[0]:data.ru.nav[0]
                        }</Link>
                    </li>
                    <li>
                        <Link to={'/service'} className={props.dark?'header__link-light':'header__link-dark'}>Ծառայություններ</Link>
                        <span></span>
                    </li>
                    <li>
                        <Link to={'/universitet'} className={props.dark?'header__link-light':'header__link-dark'}>Ֆակուլտետներ</Link>
                        <span></span>
                    </li>
                    <li>
                        <Link to={'/blog'} className={props.dark?'header__link-light':'header__link-dark'}>Բլոգ</Link>
                    </li>
                    <li>
                        <Link to={'/gshop'} className={props.dark?'header__link-light':'header__link-dark'}>Gshop</Link>
                    </li>
                    <li>
                        <Link to={'/contact'} className={props.dark?'header__link-light':'header__link-dark'}>Կապ</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__right">
                <div className="search">
                    <img src={search} alt=""/>

                </div>
                <div className="lang">
                    <ul>
                        <li style={lang === '/' ? {order:1}: {order:2}}>
                            <Link to='/' onClick={changeLang}><img src={am} alt="" data-leng='/'/></Link>
                        </li>
                        <li style={lang === '/ru' ? {order:1}: {order:2}}>
                            <Link to='/ru' onClick={changeLang}><img src={ru} alt=""  data-leng='/ru' /></Link>
                        </li>
                        <li style={lang === '/en' ? {order:1}: {order:2}}>
                            <Link to='/en' onClick={changeLang}><img src={en} alt=""  data-leng='/en'/></Link>
                        </li>
                    </ul>
                </div>
                <div className="header__user">
                    <img src={user} alt=""/>
                </div>
                <div className="dark_mode">
                    <label>
                        <input type="checkbox" onChange={props.darkMode} defaultChecked={props.dark?'checked': ''}/>
                        <span className="radio" style={props.dark?{transform: 'translateX(-5%)'}:{transform: 'translateX(85%)'}}></span>
                    </label>
                </div>
            </div>
        </header>
    )
}