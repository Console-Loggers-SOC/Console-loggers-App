import React from 'react'; 
import logo1 from "./LOGO.svg";
import { Button } from 'primereact/button';
import './theme.css';
import './Loginpages.css';
import {Link} from "react-router-dom"



export default function LandingPage() {
    
return(

<div>
    <div className='logo-position-login-pages'>
    <img src={logo1} alt="Logo" className="logo-image-login-pages"></img>
    </div>
<br/>

    <div className='button-position-login-pages'>
  
<br/>
<Link className="link" to="/Login">
    <Button label="Login" severity="success" rounded />
    </Link>
<br/>
<Link className="link" to="/SignUp">
    <Button label="Sign Up" severity="secondary" rounded />
    </Link>
<br/>
<Link className="link" to="/RequestPassword">
    <Button label="Forgotten Password" severity="warning" rounded />
    </Link>
<br/>
    
</div>



</div>

)};
