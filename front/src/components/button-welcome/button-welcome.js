import { useNavigate } from 'react-router-dom';
import './style.css';

export default function ButtonWelcome(){
 const navigate = useNavigate(); 

  const goToCollection = () => {
    navigate("/collection");
  }; 
    return (

 <div className="welcome-container">
      <button className="welcome-button" onClick={goToCollection}>
        Bienvenue
      </button>
    </div>

    );


}