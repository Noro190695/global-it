import React from 'react';
import 'normalize.css';
import './style/style.scss';
import Header from './components/Header';
import Section from './components/Section';
import HeaderBottom from './components/HeaderBottom';
import development1 from './components/development1.svg';





function App() {
  let data = {
    // data01 : {
      img : {development1},
      title : "Պրոֆեսիոնալ մոտեցում",
      p : `Մեր մասնագետները ամեն ինչ կանեն որ ձեզ 
            ապահովեն բարձրորակ կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և 
            բարձորակ աշխատանքային մոտեցումը կտա իր արձյունքը։`
    // }
  }
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <Section />
        <HeaderBottom data={data} />

      </div>
    </div>
  );
}

export default App;
