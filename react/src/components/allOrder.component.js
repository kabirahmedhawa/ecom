import React,{useState, useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
// import { Carousel } from 'react-responsive-carousel';
import Carousel from 'react-bootstrap/Carousel';
import { Navigate } from 'react-router-dom'
import { ProSidebarProvider } from 'react-pro-sidebar';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import Sidenav from './sidenav';
import $ from "jquery";

const AllOrder = () => {
    var srno=0;
    const [users, setUsers] = useState([]);
    const fetchData = () => {
        fetch("http://localhost/ecom_tast/php/api/order.php")
          .then((response) => response.json())
          .then((data) => {
            console.log(data.data[0].products);
            setUsers(data.data);
          });


          $(document).ready(function () {
            setTimeout(function(){
            $('#myTable').DataTable();
             } ,1000);
            });
        }
        var source="../images/";
        var amount=0;
        var i=0;
        
  useEffect(() => {
    fetchData();
  }, [i]);
  const style1={
    maxHeight: '200px',
    maxWidth: '150px',
  }
  const style2={
    maxHeight: '200px',
    width: 'auto',
  }

    return (
        <div>
        {(localStorage.getItem('admin')==='this is admin')?<>
        <ProSidebarProvider>
            <Sidenav/>
        </ProSidebarProvider>
        <div className="container">
        <h2 className='text-center'>All Orders</h2>
             <table className='table table-bordered table-striped' id='myTable'>
            <thead>
              <tr>
                <th>SrNo</th>
                <th>image</th>
                <th>email</th>
                <th>customer_id</th>
                <th>Amount</th>
                
              </tr>
            </thead>
            <tbody>
                {users.map((userObj, index) => (
                    <tr key={index}>
                        <td>{++srno}</td>
                        <td style={style1}>
                        <Carousel >
                        {JSON.parse(userObj.products).map((productObj, index) => (
                            <Carousel.Item key={index}>
                            <img
                            style={style2}
                            class="card-img-left img-fluid"
                            src={source+productObj.image}
                            />
                            </Carousel.Item>
                            ))}
                            </Carousel>
                        </td>
                        <td>{userObj.email}</td>
                        {console.log(amount+=Number(userObj.amount))}
                        <td>{userObj.customer_strip_id}</td>
                        <td>{userObj.amount}</td>
                    </tr>
                ))}
                <tr>
                    <td colspan="3"><span className='text-center'>Total</span></td>
                    <td colspan="2">{amount}</td>
                    <td style={{display: "none"}}></td>
                    <td style={{display: "none"}}></td>
                    <td style={{display: "none"}}></td>
                </tr>
            </tbody>
            </table>
            </div>
            <div className='mt-5'>&nbsp;</div>
        </>:<Navigate to={'/'}/>}
        </div>
    );
}

export default AllOrder;
