/**
 * Created by MichaelMaur on 5/4/2017.
 */

// $(document).ready(function(){
//
//     $("#survey").validate({
//
//          rules: {
//              email:{
//                  required: true,
//                  email:true,
//              },
//              number:{
//                  required:true,
//                  maxlength: 11,
//              }
//          },
//          // Specify validation error messages
//          messages: {
//              email: "Please type in a valid email address",
//              number: "Type in an 11-digit cellphone number",
//          },
//
//      });
//
// });




$('#asubmit').click(function(event){

        event.preventDefault();

        var $postcode =  $('#postcode-input').val();
        var email =  $('#email-input').val();
        var mobile =  $('#mobile-input').val();


        var $formSubmit = {
            "postCode": "5142",
        };



        $.ajax({
            type: "POST",
            url: "/post",
            data: JSON.stringify($formSubmit),

            //if received a response from the server
            success: function (data) {

                alert("Connected to server" + data);
            },

            error: function () {
                alert("Unable to connect to server");
            }
        });
});





