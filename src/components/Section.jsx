import React from 'react';
import { Link } from 'react-router-dom';
import s from './Section.module.css';

function Section(props) {
  return (
    <section className={s.sectionDiv}>
      <div className={s.sectionDiv__left}>
        <p className={s.secTitle}>Եղիր առաջինը</p>
        <div className={s.about}>Սովորիր Ծրագրավորում</div>

        <Link to={'/moreInfo'} className={s.moreInfo}>
          Իմանալ ավելին{' '}
        </Link>
        <div className={s.callImg}></div>
      </div>

      <div className={s.sectionDiv__right}>
        <div className={s.workImg}></div>
      </div>
    </section>
  );
}

export default Section;
