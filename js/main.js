$ (document).ready(function() {

  $('.send-msg').click(function () {

    var msg = $('.message').val();

    var msgElement = $('#template .msg-sent').clone();

    var msgTxtElement = msgElement.text(msg)
    $('#chat-user').append(msgTxtElement);

    $('.message').val('');

  })


})
