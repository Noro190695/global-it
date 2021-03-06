import React, {useState} from 'react';
import '../style/style.scss';
import logo from '../img/logo.svg';
import searchLight from '../img/serch.svg';
import searchDark from '../img/search-dark.svg';
import am from '../img/am.svg';
import ru from '../img/ru.svg';
import en from '../img/en.svg';
import burger from '../img/burger.png';
import del from '../img/del.png';
import user from '../img/user.png';
import {Link} from 'react-router-dom';


export default function Header(props) {
    console.log(window.innerWidth)
    let [lang, setLang] = useState('/')
    let [nav, setNav] = useState(true)

    const changeLang = (e) => {
        setLang(prev => prev = e.target.dataset.leng)
    }
    const show = (e) => {
        setNav(prev => !prev)
        console.log(nav)
    }
    return (
        <header>
            <div className="logo">
                <img src={logo} alt=""/>
                <h2 className={props.dark?'header__logo-light':'header__logo-dark'}>GLOBAL <span> IT</span></h2>
            </div>
            <nav className='header__nav' style={nav? {
                transform: 'translateX(0)'
            }: {
                transform: 'translateX(120%)'
            }}>
                <ul>
                    <li>
                        <Link to={'/'} className={props.dark?'header__link-light':'header__link-dark'}>Գլխավոր</Link>
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
            <div className="header__right" style={nav? {
                transform: 'translate(0)'
            }: {
                transform: 'translate(130%)'
            }}>
                <div className="search" style={nav? {
                    position: 'static',
                    transform: 'translateX(0)'
                }: {
                    transform: 'translateX(-120px)'
                }}>
                    <img src={props.dark?searchDark:searchLight} alt=""/>
                </div>
                <div className={props.dark?'lang lang-light':'lang lang-dark'}>
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
                <div className="burger" onClick={show} style={nav? {
                    right:  '15px',
                    transform: 'translateX(0)'
                }: {
                    transform: 'translateX(-260px)'
                }}>
                    <img src={nav?del:burger} alt=""/>
                </div>
            </div>
        </header>
    )
}