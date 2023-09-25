import React, {useState} from "react"
import '../Styles/header.css'
import Logo from '../Assets/Logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Header (){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("8000");

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
      }    

    const applyFilters = () => {
        alert(`Filtrage par prix min : ${minPrice} € et prix max : ${maxPrice} €`);
      }
    return (
        <div>
            <div className="Header">
                <img src={Logo} className ="Logo" alt="Logo"/>
                <div className="space_header">
                    <span className="Domain">Energie Vin</span>
                    <span className="definition">Phrase d'accroche/Definition</span>
                </div>
            </div>
                <nav className="navigation">
                    <input type="text" placeholder="Rechercher des vins..." className="selection" ></input>
                    <button className="selection">Avis Récents<FontAwesomeIcon icon={faClipboard} className="Icon"/></button>
                    <button className="selection">Meilleures Ventes <FontAwesomeIcon icon={faCrown} className="Icon"/></button>
                    <div className="selection">
                        <button className="selection" onClick={toggleDropdown}>Filtres<FontAwesomeIcon icon={faChevronDown} className="Icon" /></button>
                        {isDropdownOpen && (
                            <div className="dropdown selection btn">
                                <span>Meilleures Ventes</span>
                                <div className="price-filter selection">
                                    <label>Prix min (€): </label>
                                    <input className="input_style"
                                    type="number"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                </div>
                                <div className="price-filter selection">
                                    <label>Prix max (€): </label>
                                    <input className="input_style"
                                    type="number"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                                <button onClick={applyFilters} className="selection btn">Soumettre</button>
                                </div>
                            )}
                        </div>
                    </nav>
                </div>
                )
            }

export default Header;


