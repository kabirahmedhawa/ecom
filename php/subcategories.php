<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sub Category</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css">
</head>
<body>
<!-- Adding value in table is left -->

<div class="container">
<h1 class="text-center text-primary">Admin Ecom Sub-Categories</h1>
<div class="d-flex justify-content-end">
            <button type="button" class="btn btn-warning " data-toggle="modal" data-target="#Add">
                Add Sub Category
            </button>
        </div>


        <div class="modal fade" id="Add" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="AddLabel">ADD CATEGORY</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div class="modal-body">
                    <form class="form-group">
                        <label>SUB CATEGORY:</label>
                        <input type="text" name="" id="subcategory" class="form-control" placeholder="CATEGORY TO ADD">
                    </form>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal" id="save" onclick='addRecord()'>Add</button>
                </div>
            </div>
        </div>
    </div>





<div class="modal fade" id="edit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                            <h5 class="modal-title" id="editLabel">Edit </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>
                            <div class="modal-body">
                                <form class="form-group edit-form">
                                    
                                </form>
                            </div>

                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" id="save" onclick='editRecord()'>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>


    <div class="category"></div>
</div>

<script src="https://code.jquery.com/jquery-3.6.1.js" integrity="sha256-3zlB5s2uwoUzrXK3BT7AX3FyvojsraNFxCc2vC/7pNI="
  crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script src="//cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script>



<script>
<?php

$id=$_GET['id'];

?>
var editsub="";
$.ajax({
    url:'./component/subcat.php',
    type:'post',
    data:{data:<?php echo $id;?>},
    success:function(data,status)
    {
        $('.category').html(data);
    }
});

function addRecord()
{
    var subcategory = $('#subcategory').val();
            
            $.ajax({
            url:'./component/addsubcategory.php',
            type:'post',
            data:{category:subcategory,
            id:<?php echo $id;?>},
            success:function(data,status){
                 $('.error').html(data);
                 console.log(data);
                 updatesub()
            }
        });
}
function editRecord(){
        var data=$('#new_name').val();
        $.ajax({
            url:'./component/editsub.php',
            type:'post',
            data:{
                data:data,
                id:editsub
            },
            success:function(data,status)
            {
                editsub="";
                updatesub()

            }
        })

    }

function updatesub(){
    $.ajax({
    url:'./component/subcat.php',
    type:'post',
    data:{data:<?php echo $id;?>},
    success:function(data,status)
    {
        $('.category').html(data);
    }
})

}

function fetchSub(event){
        editsub=event.target.value;
        $.ajax({
            url:'./component/fetchval.php',
            type:'post',
            data:{data:editsub},
            success:function(data,status){
                $('.edit-form').html(data);
            }
        })

    }




function deletesub(event){
            var data=event.target.value;
            $.ajax({
            url:'./component/deletesub.php',
            type:'post',
            data:{data:data},
            success:function(data,status){
                $('.error').html(data);
                updatesub();
                
            }
        });
        }

</script>
</body>
</html>

