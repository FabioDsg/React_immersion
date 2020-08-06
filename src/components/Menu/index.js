import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/" >
            <img class="Logo" src={Logo} alt="x78flix project" />
            </Link>

            <Button as={Link}className="ButtonLink" to="cadastro/video" >
                New Movie
            </Button>

        </nav>
    );
}

export default Menu; 