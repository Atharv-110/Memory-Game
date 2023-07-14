import { useNavigate } from "react-router-dom";

// images import
import playBtn from "../assets/play-btn.svg";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <div className="menu-heading">
        <h1>Memory Game</h1>
      </div>
      <button onClick={() => navigate("/instruction")} className="menu-btn">
        <img src={playBtn} alt="play-button" />
      </button>
    </div>
  );
};

export default Menu;
