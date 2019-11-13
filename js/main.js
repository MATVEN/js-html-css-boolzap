$ (document).ready(function() {

  $('.send-msg').click(function () {

    var msg = $('.message').val();


    $('#chat-user').append(

      '<div class="msg-sent">' + msg + '</div>'
      
    );

  })


})
