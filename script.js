$(document).ready( function(){

    $('#additem').on('click',additem); //add new item
    $('#todos').on('change','.completed',completeitem);//set as complete
    $('#todos').on('click','.glyphicon-trash',deleteitem);//delete an item
    $('#todos').on('click','.todotext',edititem);//enable editing
    $('#todos').on('click','.saveitem',saveitem);//save after edit
    $('#todos').on('keyup','.edittext',anotheredit); //enter
    $('#newtodo').on('keydown',hidemsg);

    //hide error msg
    function hidemsg(){
        $('#mymsg').slideUp("slow");
    }

    //Add a new item
    function additem(e){
        var newitem = $('#newtodo').val();
        if(!newitem){   //empty Item
            $('#mymsg').slideDown("slow");
            e.preventDefault();
        }
        else
        {
            $('#todos').append('<li><input class="completed" type="checkbox"><span class="todotext">'+ newitem +'</span><input type ="text" class="edittext"><button class="btn btn-success saveitem">Edit</button><span class="glyphicon glyphicon-trash"></span>' + '</li>');
            $('#newtodo').val('');
            e.preventDefault();
        }

    }

    //Set item as complete
    function completeitem(){
        $(this).parent().toggleClass('done');
    }

    //Delete an item
    function deleteitem(){
        $(this).parent().remove();
    }

    //Enable the editing after a click on an item
    function edititem(){
        var currenttext=$(this).parent().find('.todotext').text();
        $(this).parent().find('.saveitem').show();
        $(this).parent().find('.edittext').val(currenttext);
        $(this).parent().find('.edittext').show();
        $(this).parent().find('.todotext').hide();
    }

    //save the item after editing it.
    function anotheredit(e){
        if(e.keyCode==13){  //13=Enter Key
            $(this).hide();
            var newval=$(this).parent().find('.edittext').val();
            $(this).parent().find('.edittext').hide();
            $(this).parent().find('.todotext').text(newval);
            $(this).parent().find('.todotext').show();
        }
    }

    //save the item after editing it
    function saveitem(){
        $(this).hide();
        var newval=$(this).parent().find('.edittext').val();
        $(this).parent().find('.edittext').hide();
        $(this).parent().find('.todotext').text(newval);
        $(this).parent().find('.todotext').show();
    }
});