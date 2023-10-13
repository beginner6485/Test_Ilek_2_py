import React, {useState} from "react"
import '../Styles/header.css'
import Logo from '../Assets/Logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


function Header ({ handleSortByPrice,setMinPrice, setMaxPrice, applyFilters, resetFilters }){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
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
                                <button onClick={handleSortByPrice} className="selection btn">
                                    Meilleurs Prix</button>

                                <div className="price-filter selection">
                                    <label>Prix min (€): </label>
                                    <input className="input_style"
                                    type="number"
                                    onChange={(e) => setMinPrice(e.target.value)}
                                    />
                                </div>
                                <div className="price-filter selection">
                                    <label>Prix max (€): </label>
                                    <input className="input_style"
                                    type="number"
                                    onChange={(e) => setMaxPrice(e.target.value)}
                                    />
                                </div>
                                <button onClick={() => {
                                    applyFilters();
                                    resetFilters();
                                    }} 
                                className="selection btn">Soumettre
                                </button>
                                <button onClick={resetFilters} className="selection">Réinitialiser</button>
                                </div>
                            )}
                        </div>
                    </nav>
                    <h1 className='wine_list'>Meilleures Ventes</h1>
                </div>
                )
            }

export default Header;


