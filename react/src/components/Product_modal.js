import React from 'react';
import $ from 'jquery'

//issue in category id

export default function Product_modal(props) {
  console.log(props.category_id);
  function submit(event){
    $('#modal').modal('hide');
  }

  return (
    <div className="container mb-4">
        <h1 className="text-center text-white">Admin Ecom {props.title}</h1>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-warning "
            data-toggle="modal"
            data-target="#product"
          >
            Add main {props.title}
          </button>
        </div>
      <div className="modal fade" id="product" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="AddLabel">Admin Ecom products</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <form className="form-group  edit-form" id="search_form" method="POST" enctype="multipart/form-data" action={'http://localhost/ecom_tast/php/component/upload.php?category_id='+props.category_id}>
                <div className="modal-body">
                        <label >Product Name</label>
                        <input type="text" name='product_name' className="form-control"/>
                        <label >Product description</label>
                        <textarea className="form-control" name='product_detail'/>
                        <label >Product price</label>
                        <input type="number" name='product_price' className="form-control"/>
                        <label >Product images</label>
                        <input type="file" name="input_file[]" multiple className="form-control"/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" value={props.id} onClick={submit}  name='product' className="btn btn-primary" id="save" >submit</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
