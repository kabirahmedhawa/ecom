import React, { useEffect, useState} from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CategoryModal from "./CategoryModal";
import { Navigate, Route, Routes, useNavigate, useLocation  } from "react-router-dom";
import { Link } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import RenameModal from "./RenameModal";

// import Subcat from './Subcat.component';
import $ from "jquery";
import Sidenav from "./sidenav";


export default function Category() {
 
const [data,setdata]=useState([]);
const [data1,setdata1]=useState([]);

    let searchParams = new URLSearchParams(window.location.search);
    const location = useLocation();
    if(searchParams.has('login'))
    {
      var e_mail=searchParams.get('login');
      localStorage.setItem("MyEmail", e_mail);
      var fname=searchParams.get('fname');
      localStorage.setItem("admin", 'this is admin');
      localStorage.setItem("fname", fname);
      console.log(e_mail);
      
    }
    else if(localStorage.getItem("admin")=='this is admin'){
      var email=localStorage.getItem('email');
      console.log(email);
    }
    else{
      e_mail=null;
      var email =location.state?.e_mail;
      console.log(email);
     
    }


  function deleteEvent(event){
    var data=event.target.value;
    if(window.confirm('Are you sure you want to delete this category')){
    if (data !== null || data !== "")
    {
        console.log(data);
        $.ajax({
            url: "http://localhost/ecom_tast/php/component/delete.php",
            type: "post",
            data: { data: data },
            success: function (data, status) {
            console.log(data);
            fetchData();
          },
        });
        } 
        else {
        console.log("null");
        }
      }
}




    //add record to database
  function addRecord(category) {
        console.log(category);
        if (category !== null || category !== "") {
        console.log(category);
        $.ajax({
            url: "http://localhost/ecom_tast/php/component/addcategory.php",
            type: "post",
            data: { category: category },
            success: function (data, status) {
            console.log(data);
            fetchData();
            },
        });
        } else {
        console.log("null");
        }
  }



  //rename category

  function renameRecord(subcategory){
    console.log(subcategory);
    $.ajax({
      url:'http://localhost/ecom_tast/php/component/rename.php',
      type:'post',
      data:{data:subcategory,
      id:data1},
      success:function(data,status){
          fetchData();
          console.log(data);
          setdata1('')
     
      
      }
  })
  }
//get value of category to update
  function fetchval(event){
    setdata(event.target.id);
 
    setdata1(event.target.value);
  
    
  }






  var i = 0; //to control useEffect


  const [user, setUser] = useState([]);//data that comes from api

  //to read api
  const fetchData = () => {
    fetch("http://localhost/ecom_tast/php/api/category.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data.data);
      });

      
      $(document).ready(function () {
        setTimeout(function(){
        $('#myTable').DataTable();
         } ,1000);
    });
  };

  //to call fetch function to read api


  useEffect(() => {
    fetchData();
  }, [i]);

  var srno = 0; //to print value in order of srno from 1





  return (

    <div className="category">
    {(e_mail !=null) ? <Navigate to="/admin/category" state={{ e_mail: e_mail}} />: (email !=null) ? 
    <>
    <ProSidebarProvider>
        <Sidenav email={email}/>
    </ProSidebarProvider>
    <RenameModal renameRecord={renameRecord} data={data}/>
    <CategoryModal addRecord={addRecord} title="Categories"/>
      <div className="auth-inner" style={{ width: "auto" }}>
        <div className="container">
          <table className="table table-bordered table-striped" id="myTable">
            <thead>
              <tr>
                <th>SrNo</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((userObj, index) => (
                <tr key={index} >
                {console.log(index)}
                  <td>{++srno}</td>
                  <td>{userObj.category}</td>
                  <td>
                    <Link value={userObj.category_Number} className="btn btn-primary col-lg-3 col-md-6 col-sm-12 edit mr-3" to='/admin/subcategory' state={{ data: userObj.category_Number}}>
                      view {userObj.category}
                    </Link>
                   
                    <button
                      className="btn btn-danger delete col-lg-3 col-md-6 col-sm-12 mr-3"
                      onClick={deleteEvent}
                      value={userObj.category_Number}
                    >
                      Delete {userObj.category}
                    </button>
                    <button
                      className="btn btn-warning col-lg-3 col-md-6 col-sm-12 Rename"
                      onClick={fetchval}
                      value={userObj.category_Number}
                      id={userObj.category}
                      data-toggle="modal"
                      data-target="#rename"
                    >
                      Rename {userObj.category}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
      :<Navigate to="/sign-in"/>}
    </div>
    

  )
}
