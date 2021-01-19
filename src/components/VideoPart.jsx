import videoPartPhone from '../img/videoPartPhone.svg';
import videoPartPlay from '../img/videoPartPlay.svg';


export default function VideoPart() {
  return (
    <div className="videoPart">
      <div>
        <h2>Ուզում եք միանալ մեր թիմին բայց ունեք հարցե՞ր</h2>
        <p>Դիտելով այս հոլովակը դուք կստանաք ձեր բոլոր
            հարցերի պատասխանները</p>
        <img src={videoPartPhone} alt=""/>
      </div>
      <div>
        <img src={videoPartPlay} alt=""/>
      </div>
    </div>
  );
}
