import React,{useState} from "react";
import $ from "jquery";
import { Navigate } from "react-router-dom";
var originalotp=null;
const Forgetpassword = () => {
    setTimeout(function () {
        $("#successMessage").fadeOut("fast");
      }, 2000); 
    var email='';
    var newpassword='';
    const [error,seterror]=useState([false]);
    const [navigate,setnavigate]=useState([false]);
    const [checkpass,setcheckpass]=useState([false]);
    const [newpass,setnewpass]=useState([false]);
    function handleClick(e) {
        e.preventDefault();
        $.ajax({
            url:'http://localhost/ecom_tast/php/forgetpassword.php',
            type:'post',
            data:{data:email},
            success:function(data,status){
                
                console.log(data);
                if(data!=null){
                    setcheckpass(true);
                    originalotp=data;
                    console.log(originalotp);
                    console.log(checkpass);
                }
            }
        })
        
    }
    function handleOtp(){
        
        var otp=$('#otp').val()
        console.log(otp);
        console.log(originalotp);
        if(otp===originalotp){
            // <Navigate to="/sign-in" state={{ reset: true}}/>
            setnewpass(true);
            console.log('otp is right');
        }
        else{
            seterror(true);
        }
    }
    function handleClick1(e){
        e.preventDefault();
        $.ajax({
            url:'http://localhost/ecom_tast/php/forgetpassword.php',
            type:'post',
            data:{email:localStorage.getItem('oldemail'),
                    password:newpassword},
            success:function(data,status){
                console.log(data);
                setnavigate(true);
                localStorage.setItem('reset',true);
                
                
            }
        })
    }

    function handleChange(e){
        email=e.target.value;
        localStorage.setItem('oldemail',e.target.value);
        
    }
    function handleChange1(e){
        newpassword=e.target.value;
    }
  return (
    <div className="auth-wrapper login">
    {(navigate==true)?<Navigate to="/sign-in" />:<></>}
    {(error==true)? <div className="alert alert-danger alert-dismissible fade show " id='successMessage' role="alert">
          <strong>wrong otp</strong> entered otp is wrong
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        :<></>}
      <div className="auth-inner1">
      {(newpass!=true)?
      <>
      {(checkpass!=true)?
        <form method="post">
          <h3>forget password</h3>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleChange}
              name="email"
              id="email"
              required
            />
            <br/>
            <div className="d-grid">
          <button type="submit" name='submit' onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </div>
          </div>
        </form>
     :<></>}
        {(checkpass===true)?
        <div>
            <input
              type="number"
              maxLength={'6'}
              className="form-control"
              placeholder="Enter OTP"
              name="otp"
              id="otp"
              required
            />
            <br/>
            <button name='submit' onClick={handleOtp} className="btn btn-primary">
                submit
            </button>
            </div>
        :<></>}
        </>
      : <form method="post">
          <h3>New password</h3>

          <div className="mb-3">
            <label>Enter New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              onChange={handleChange1}
              name="password"
              id="password"
              required
            />
            <br/>
            <div className="d-grid" >
          <button type="submit" name='submit' onClick={handleClick1} className="btn btn-primary">
            Submit
          </button>
        </div>
          </div>
        </form>
      
      
      }
      </div>
    </div>
  );
};

export default Forgetpassword;
