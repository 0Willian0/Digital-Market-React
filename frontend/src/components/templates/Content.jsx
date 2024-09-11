import { Outlet } from 'react-router-dom';
import '../../styles/Content.css'
import React from 'react';


const Content = () => {
  return (
    <div className="content">
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Content;