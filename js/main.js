// funzione di messaggistica con risposta automatica

$ (document).ready(function() {

  $('.send-msg').click(function () {

    var msg = $('.message').val();

    var msgElement = $('#template .msg-container').clone();

    msgElement.addClass('send');

    msgElement.find('.msg-box').text(msg);

    //var msgTxtElement = msgElement.text(msg);

    $('.chat-user.active').append(msgElement);

    $('.message').val('');

    // risposta automatica PC

    var msgElement = $('#template .msg-container').clone();

    setTimeout(function () {

      msgElement.addClass('received');

      msgElement.find('.msg-box').text('ok');

      $('.chat-user.active').append(msgElement);

    }, 1000)
  })

})

// funzione di ricerca chat utenti

$('.search-contact').keyup(function(event){

  var searchName = $(this).val().toLowerCase();

  // each per ciclare e trovare
  $('.selection-chat').each(function () {

    // variabile per nome cercato
    var nameSearchFor = $(this).find('.user-name').text().toLowerCase();

    // condition
    if (nameSearchFor.includes(searchName)) {
      $(this).show();
    } else {
      $(this).hide();
    }
  })
})

// funzione per cambiare chat
$('.selection-chat').click(function() {

  var elementClick = $(this);

  var position = elementClick.index();

  $('.selection-chat').removeClass('is-active');

  elementClick.addClass('is-active');

  $('.chat-user').removeClass('active');

  $('.chat-user').eq(position).addClass('active');

  var image = $(this).find('.avatar').attr('src')

  $('.chat-details .icon-user .avatar').attr('src', image)
});

// funzione per eliminare un messaggio

  $(document).on('click','.msg-box', function() {
    console.log('ok');

    $(this).parent().find('.dropdown-content').toggle();
  })

  $(document).on('click','.delete', function() {

    $(this).parents('.msg-container').remove();

  })
