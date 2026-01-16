
import "./style.css";
export default function Search({ value, onChange, placeholder = "Rechercher un livre par son titre " }) {
    return (
    
    <div  className="searchbar">
        <input  className="searchbar-input" type="text" placeholder={placeholder} value={value}  onChange={(e) => onChange(e.target.value)}
        />
         
    </div>
    )};