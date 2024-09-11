import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../config/store'; // Ajuste o caminho conforme necessário
// import UserCart from './UserCart'; // Atualize o caminho conforme necessário
// import UserBalanceComponent from './UserBalanceComponent'; // Atualize o caminho conforme necessário
import UserDropdownComponent from './UserDropdown';
import '../../styles/Header.css'; // Certifique-se de que o caminho está correto

const Header = ({ title, hideToggle, hideUserDropdown }) => {
  const isMenuVisible = useSelector((state) => state.isMenuVisible); //chama initialState
  const dispatch = useDispatch(); //chama reducers

  // Computed property
  const icon = isMenuVisible ? 'fa-angle-left' : 'fa-angle-down';

  // Method
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
    
  };

  return (
    <header className="header">
      {!hideToggle && (
        <a className="toggle" onClick={handleToggleMenu}>
          <i className={`fa fa-lg ${icon}`}></i>
        </a>
      )}
      
      {!hideUserDropdown ? (
        <h1 className="title">
          <Link to="/">
            {title}
          </Link>
        </h1>
      ) : (
        <h1 className="title">
          {title}
        </h1>
      )}

      {!hideUserDropdown && (
        <>
          {/* <UserCart />
          <UserBalanceComponent />*/}
          <UserDropdownComponent /> 
        </>
      )}
    </header>
  );
};

export default Header;
