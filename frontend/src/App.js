import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseApiUrl, userKey } from './global'; 
import { setUser, toggleMenu } from './config/store'; 
import './App.css';

import HeaderComponent from './components/templates/Header'; 
import ContentComponent from './components/templates/Content';
import MenuComponent from './components/templates/Menu';
import FooterComponent from './components/templates/Footer';


const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validatingToken, setValidatingToken] = useState(true);

  const isMenuVisible = useSelector((state) => state.isMenuVisible);
  const user = useSelector((state) => state.user);

  const validateToken = async () => {
    setValidatingToken(true);

    const json = localStorage.getItem(userKey);
    const userData = JSON.parse(json);
    dispatch(setUser(null));

    if (!userData) {
      setValidatingToken(false);
      navigate('/auth');
      return;
    }

    try {
      const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

      if (res.data) {
        dispatch(setUser(userData));
        if (window.innerWidth <= 768) {
          dispatch(toggleMenu(false));
        }
      } else {
        localStorage.removeItem(userKey);
        navigate('/auth');
      }
    } catch (error) {
      console.error('Error validating token:', error);
      localStorage.removeItem(userKey);
      navigate('/auth');
    }

    setValidatingToken(false);
  };

  useEffect(() => {
    validateToken();
  }, []);

  return (
    <div id="app">
      <HeaderComponent title="Digital Market" hideToggle={false} hideUserDropdown={false} />
        {/* {user && <MenuComponent />}
        {validatingToken ? <LoadingComponent /> : <ContentComponent />}
        <FooterComponent /> */}
      <ContentComponent/>
      <MenuComponent/>
      <FooterComponent/>
    </div>
    
  );
};

export default App;
