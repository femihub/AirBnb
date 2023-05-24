import './App.css';
import Image22 from "./icon/image 22.png";
import Image23 from "./icon/image 23.png";
import Image24 from "./icon/image 24.png";
import Image25 from "./icon/image 25.png";
import Image26 from "./icon/image 26.png";
import Image27 from "./icon/image 27.png";
import Image28 from "./icon/image 28.png";
import Image29 from "./icon/image 29.png";
import Image30 from "./icon/image 30.png";
import Apps from "./Apps";
import pass from "./dataInfo";

// const names = ["alice", "bob", "charlie", "danielle"];
// const cap = names.map((name) => `${name[0].toLocaleUpperCase()}${name.slice(1)}`);

export default function App() {
  const datas = pass.map(info => {
    return <Apps
      key={info.id}
      item={info}
    />
  })
  return (
    <div>
      <div className="port">
        <figure className="port--fig">
          <img className="port--img22" src={Image22} alt="pic1" />
          <img className="port--img23" src={Image23} alt="pic2" />
          <img className="port--img24" src={Image24} alt="pic3" />
          <img className="port--img25" src={Image25} alt="pic4" />
          <img className="port--img26" src={Image26} alt="pic5" />
          <img className="port--img27" src={Image27} alt="pic6" />
          <img className="port--img28" src={Image28} alt="pic6" />
          <img className="port--img29" src={Image29} alt="pic7" />
          <img className="port--img30" src={Image30} alt="pic8" />
        </figure>

        <section className='sect'>
          <h1 className="port--header">Online Experiences</h1>
          <p className="port--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home</p>
        </section>

      </div>
      <div className="main">
        {datas}
      </div>

    </div>
  )
}
