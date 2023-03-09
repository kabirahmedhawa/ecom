import React,{useState, useEffect} from 'react'
import Container from "react-bootstrap/Container";
import $ from "jquery";
import { Navigate  } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Sidenav from "./sidenav";
const Setbanner = () => {
  var i=0;
  const [content,setcontent]=useState([]);
  const fetchData = () => {
      fetch("http://localhost/ecom_tast/php/api/content.php")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setcontent(data.data);
      });
  };
  useEffect(() => {
    fetchData();
  }, [i]);
   
    function readURL(event) {
        var input=event.target;
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
          };
      
          reader.readAsDataURL(input.files[0]);
        }
      }
  return (
    <div>
    {(localStorage.getItem('admin')==='this is admin')?
   <> <Sidenav/>
      <Container>
    
        <Form className="mb-5" method='POST'  enctype="multipart/form-data" action="http://localhost/ecom_tast/php/component/setbanner.php">
          <Form.Group className="mb-3" controlId="BannerTitle">
            <Form.Label>Banner Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" name="banner"/>
            <Form.Text className="text-muted">
              This is Banner title
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="imageUpload">
            <Form.Label>upload image</Form.Label>
            <Form.Control type="file" onChange={readURL} name="banner_image" placeholder="choose banner to display"/>
            <Form.Text className="text-muted">
              This is Banner image
            </Form.Text>
          </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
        {content.map((userObj, index) => (
        <div className="row">
            <div className="col">
                <p>current banner</p>
                <img className="img-fluid" src={'/images/'+userObj.image}/>
            </div>
            <div className="col">
                <p>new banner</p>
                <img className="img-fluid" src="#" id='blah' alt="next image"/>
            </div>
        </div>
        ))}
      </Container>
      </>
      :<Navigate to="/sign-in"/>}
    </div>
  );
};

export default Setbanner;
