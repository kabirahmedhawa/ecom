import React, {useLocation,useState,useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
const initialLoggedInState = localStorage.getItem('logout') ?? false;


function Nav(props){
  localStorage.setItem('home',false);
  let searchParams = new URLSearchParams(window.location.search);
 

  var i=0;
  const [logout, setlogout] = useState(initialLoggedInState === 'true');
  const [mail,setmail]=useState(localStorage.getItem("email"));
  const [home,sethome]=useState(localStorage.getItem("home"));
  
  useEffect(() => {
    localStorage.setItem('logout', logout);
 }, [logout]);
 
 const url = window.location.pathname.split('/').pop();
 useEffect(()=>{
  sethome(localStorage.getItem("home"))
 },localStorage.getItem("home"))


 var e_mail='';
 
    useEffect(()=>{
      if(searchParams.has('login') && i==0){
        i++;
        localStorage.setItem("email", searchParams.get('login').split('@')[0])
      console.log(i);
      e_mail=localStorage.getItem("email");
      console.log("navbar got the"+e_mail);
      setlogout(true);
      e_mail=e_mail.split('@')[0];
      
      setmail(e_mail);
      }
      
    }, [mail])
    
    
  function handleClick(){
    setlogout(false);
    localStorage.clear();
  }
  
  
    return (
      
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between" style={(home)?{backgroundColor:' background: #74D2E7'}:null}>
       
          <Link className="navbar-brand ml-3" to={'/home'} >
              <img height={'80px'} width={'80px'} src="../images/logo.png"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
           
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavDropdown">
              
              {(logout===true)?
              <>
                <ul className="navbar-nav mr-3">

                <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'} onClick={handleClick}>
                  Log Out 
                </Link>
                </li>
                <li className="nav-item mt-2">{mail}</li>
                </ul>
                <hr />
                </>


                :<ul className="navbar-nav mr-3">
                <li className="nav-item">
                <Link className="nav-link" to={'/sign-in'}>
                  Sign in <img src="../icon/box-arrow-right.svg"/>
                </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                </Link>
                </li>
                </ul>
              }
              
            </div>
          </nav>
          </div>
          
    )
}

export default Nav;