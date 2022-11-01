import "../styles/footer.css";
import LogoInsta from "../assets/icon_ig.png";
import LogoTweet from "../assets/tweet.png";
import LogoLink from "../assets/linkedin.png";
import LogoFace from "../assets/facebook.png";


export function MainFooter() {
  return (
    <div className="MainFooter">
      <h4>© 2022 Digital Booking</h4>
      <div className="social">
        <img src={LogoFace} alt="face" />
        <img src={LogoLink} alt="in" />
        <img src={LogoTweet} alt="tweet" />
        <img src={LogoInsta} alt="insta" />
      </div>
    </div>
  );
}
