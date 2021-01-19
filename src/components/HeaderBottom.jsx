import '../style/style.scss';


function HeaderBottom(props) {
  return (
    <div className="headerBottom">
      <div>
        <div className="rectangle">
          <img src={props.data.img.development1} alt=""/>
          <h2>{props.data.title}</h2>
          <p>{props.data.p}</p>
        </div>
        <div className="rectangle">
          <img src={props.data.img.development1} alt=""/>
          <h2>{props.data.title}</h2>
          <p>{props.data.p}</p>
        </div>
        <div className="rectangle">
          <img src={props.data.img.development1} alt=""/>
          <h2>{props.data.title}</h2>
          <p>{props.data.p}</p>
        </div>
      </div>
      <div>...</div>
    </div>
  );
}
export default HeaderBottom;