import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [location, setLocation] = useState(window.location.hash.slice(1))
    return(
        <div className={'header'}>
            <Link to='/' onClick={() => setLocation('/')}>
                <h1 className={location === '/'? 'active':''}>Dashbord</h1> 
            </Link>
            <Link to='statistics' onClick={() => setLocation('/statistics')}> 
                <h1 className={location === '/statistics'? 'active':''}>statistics</h1>
            </Link>
            <Link to='settings' onClick={() => setLocation('/settings')}>
                <h1 className={location === '/settings'? 'active':''}>Settings</h1>
            </Link>
        </div>
    )
}

export default Header;