import React,{useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import $ from "jquery";
import { Link, Navigate } from "react-router-dom";
import RenameModal from "./RenameModal";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"   
import CategoryModal from './CategoryModal';
import Sidenav from './sidenav';

export default function Subcat() {
  const location = useLocation();
  const data = location.state?.data;
  const id=data;

const [datas,setdatas]=useState([]);
const [data1,setdata1]=useState([]);

  function deleteEvent(event)
  {
    var datas=event.target.value;
    if(window.confirm("Are you sure you want to delete this subcategory?")){
    if (datas !== null || datas !== "") {
        console.log(datas);
        $.ajax({
            url: "http://localhost/ecom_tast/php/component/deletesub.php",
            type: "post",
            data: { data: datas,
            },
            success: function (data, status){
            console.log(data);
            fetchData();
            },
        });
        } 
        else 
        {
        console.log("null");
        }
      }
}


function renameRecord(subcategory){
  console.log(subcategory);
$.ajax({
    url:'http://localhost/ecom_tast/php/component/editsub.php',
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


function fetchval(event){
  setdatas(event.target.id);

  setdata1(event.target.value);

  
}



function addSubcategory(subcat){
  console.log(subcat);
        if (subcat!== null || subcat !== "") {
        console.log(subcat);
        $.ajax({
            url: "http://localhost/ecom_tast/php/component/addsubcategory.php",
            type: "post",
            data: { category: subcat,
            id:id },
            success: function (data, status) {
            console.log(data);
            fetchData();
            },
        });
        } else {
        console.log("null");
        }
}





  //i am stuck here data is not showing value when entered in url
  var i = 0; //to control useEffect
  const [users, setUsers] = useState([]);//data that comes from api
  console.log(data);
  const url="http://localhost/ecom_tast/php/api/subcat.php?id="+data;
  console.log(url);
  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data.data);
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





var srno=0;



  return (
    <>
    {(data!=null)?
    <div className='subcat'>
    <Sidenav/>
        <RenameModal renameRecord={renameRecord} data={datas} />
        <CategoryModal addRecord= {addSubcategory} title="Subcategories" />
       <div className="auth-inner" style={{ width: "auto" }}>
       
        <div className="container">
        
          <table className="table table-bordered table-striped" id='myTable'>
            <thead>
              <tr>
                <th>SrNo</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
          </thead>
          <tbody>
              {users.map((userObj, index) => (
                <tr key={index}>
                  <td>{++srno}</td>
                  <td>{userObj.Name}</td>
                  <td>
                    <Link value={userObj.srno} className="btn btn-primary edit col-lg-3 col-md-6 col-sm-12 mr-3" to='/admin/product' state={{ data_prod: userObj.srno,id:data}}>
                      view {userObj.Name}
                    </Link>
                    <button
                      className="btn btn-danger delete col-lg-4 col-md-6 col-sm-12 mr-3"
                      onClick={deleteEvent}
                      value={userObj.srno}
                    >
                      Delete {userObj.Name}
                    </button>
                    <button
                      className="btn btn-warning col-lg-4 col-md-6 col-sm-12 rename"
                      value={userObj.srno}
                      id={userObj.Name}
                      onClick={fetchval}
                      data-toggle="modal"
                      data-target="#rename"
                    >
                      Rename {userObj.Name}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
    :<Navigate to="/sign-in"/>}
    </>
   
  )
}
