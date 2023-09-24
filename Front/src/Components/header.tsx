import React from "react"
import '../Styles/header.css'
import Logo from '../Assets/Logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Header (){
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
                    <button className="selection">Filtres<FontAwesomeIcon icon={faChevronDown} className="Icon"/></button>
                </nav>
        </div>
    )
}

export default Header