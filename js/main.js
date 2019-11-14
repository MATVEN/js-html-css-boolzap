// funzione di messaggistica con risposta automatica

$ (document).ready(function() {

  $('.send-msg').click(function () {

    var msg = $('.message').val();

    var msgElement = $('#template .msg-container').clone();

    msgElement.addClass('send');

    msgElement.find('.msg-box').text(msg);

    //var msgTxtElement = msgElement.text(msg);

    $('.chat-user').append(msgElement);

    $('.message').val('');

    // risposta automatica PC

    var msgElement = $('#template .msg-container').clone();

    setTimeout(function () {

      msgElement.addClass('received');

      msgElement.find('.msg-box').text('ok');

      $('.chat-user').append(msgElement);

    }, 1000)
  })

})

// funzione di ricerca chat utenti

$('.search-bar').keyup(function (event) {

})
