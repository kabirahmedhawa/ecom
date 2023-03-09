import React,{useState} from 'react'

export default function RenameModal(props) {
    const [value,setvalue]=useState([]);
    const [prevname,setprevname]=useState(props.data);
    
    
  function handlechange(event){
    const cat=event.target.value;
    setprevname(cat);
    setvalue(cat);
  }

  function submit(event){
    var subcategory=event.target.value;
    console.log(subcategory);
    props.renameRecord(subcategory);

  }


  return (
    <div>
        <div className="modal fade" id="rename" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
              <div className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title" id="AddLabel">Rename CATEGORY</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div className="modal-body">
                      <form className="form-group edit-form">
                          <h5 className="modal-title" >Admin Ecom Rename Categories</h5>
                          <input type="text"  className="form-control" defaultValue={props.data} onChange={handlechange} />
                      </form>
                  </div>
                  <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" value={value} id="save" onClick={submit}>Rename</button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
