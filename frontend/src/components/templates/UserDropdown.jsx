import React from "react";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import '../../styles/UserDropdown.css'

const UserDropdown = ()=>{
    const user = useSelector((state) => state.user);
    return(
        <div className="user-dropdown">
            <div className="user-button">
                <span className="d-none d-sm-block">{user?.name}</span>
                    <div className="user-dropdown-img">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDBhPtnzzoK7Lr402ew1yCWr8laVI0fh_o9A&s" alt='user'/>
                    </div>
                    <i className="fa fa-angle-down"></i>
            </div>
            <div className="user-dropdown-content">
                <Link to='admin'><i className="fa fa-cogs"></i> Administracao</Link>
            </div>
        </div>
    );
}

export default UserDropdown;