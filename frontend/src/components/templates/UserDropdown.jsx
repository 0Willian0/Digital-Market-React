import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import '../../styles/UserDropdown.css'
import { userKey } from "../../global";
import { setUser } from "../../config/store";

const UserDropdown = ()=>{
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const logout = ()=>{
        localStorage.removeItem(userKey)
        dispatch(setUser(null))
    }
    return(
        <div className="user-dropdown">
            <div className="user-button">
                <span className="d-none d-sm-block">{user?.name}</span>
                    <div className="user-dropdown-img">
                        {user.imageUrl ? (<img src={user?.imageUrl} alt='user'/>):
                        (<img src="data:image/png;base64,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" alt='user'/>)}
                    </div>
                    <i className="fa fa-angle-down"></i>
            </div>
            <div className="user-dropdown-content">
                {user.admin && (<Link to='admin'><i className="fa fa-cogs"></i> Administracao</Link>)}
                <Link to='history'><i className="fa fa-history"> Historico</i></Link>
                <Link onClick={logout} to='auth'><i className="fa fa-sign-out"></i> Sair</Link>
            </div>
        </div>
    );
}

export default UserDropdown;