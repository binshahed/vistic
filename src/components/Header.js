import heroImg from '../assets/images/hero-bg.jpg';
import NavBar from './NavBar';
import Slider from './Slider';


const Header = () => {
  return (
    <div className="hero_area">
      <div className="hero_bg_box">
        <img src={heroImg} alt="" />
      </div>
      <NavBar/>
      <Slider/>
    </div>
  );
};

export default Header;
