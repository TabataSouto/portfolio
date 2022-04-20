import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // const navigate = useNavigate();
  return(
    <header>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="trybe-projects"> Projetos Trybe </Link>
        <Link to="personal-projects"> Projetos Pessoais </Link>
        <Link to="contact"> Contato </Link>
      </nav>
    </header>
  )
}

export default Header;
