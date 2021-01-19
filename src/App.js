import React, {useState} from 'react';
import 'normalize.css';
import './style/style.scss';
import Header from './components/Header';
import Section from './components/Section';
import HeaderBottom from './components/HeaderBottom';
import development1 from './components/development1.svg';


let data = {
    // data01 : {
    img : {development1},
    title : "Պրոֆեսիոնալ մոտեցում",
    p : `Մեր մասնագետները ամեն ինչ կանեն որ ձեզ 
            ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և 
            բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։`
    // }
}

function App() {
    let [dark, setDark] = useState(JSON.parse(localStorage.getItem('darkMode')))
    const darkMode = (e) => {
        if (e.target.checked){
            localStorage.setItem('darkMode', JSON.stringify(true))
        }else{
            localStorage.setItem('darkMode', 'null')
        }
        setDark(prev => prev = JSON.parse(localStorage.getItem('darkMode')))
    }
    console.log(dark)

    return (
    <div className='App'>
        <div className="dark__mode" style={dark?{display:'none'}:{display:'block'}}></div>

      <div className='wrapper'>
        <Header darkMode={darkMode} dark={dark}/>
        <Section />
        <HeaderBottom data={data} />

      </div>
    </div>
  );
}

export default App;
