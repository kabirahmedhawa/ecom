import React,{useState} from "react";


export default function CategoryModal(props)
{
  const [value,setvalue]=useState([]);
  function handlechange(event)
  {
    const cat=event.target.value;
    setvalue(cat);
  }
    function submit(event){
      var category=event.target.value;
      console.log(category);
      props.addRecord(category);

    }

  return (
    <div className="mb-4">
      <div className="container">
        <h1 className="text-center text-white">Admin Ecom {props.title}</h1>
        <div className="d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-warning "
            data-toggle="modal"
            data-target="#Add"
          >
            Add main {props.title}
          </button>
        </div>

        <div
          className="modal fade"
          id="Add"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="AddLabel">
                  ADD {props.title}
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="form-group">
                  <label>CATEGORY:</label>
                  <input
                    type="text"
                    name=""
                    id="category"
                    onChange={handlechange}
                    className="form-control"
                    placeholder="CATEGORY TO ADD"
                  />

                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  value={value}
                  onClick={submit}
                  data-dismiss="modal"
                  id="save"
                  
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
