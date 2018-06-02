$(function() {

  var message_list = $(".messages")

function buildHTML(message) {
  var insertImage = '';
    if (message.image.url) {
      insertImage = `<img src="${message.image.url}">`;
    }
  var html = `<div class="message" data-message-id="${ message.id }">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${ message.user_name }
                  </div>
                  <div class="upper-message__date">
                    ${ message.created_at }
                  </div>
                </div>
                <div class="lower-message">
                  <? message.content.present? ?>
                    <p>
                      <div class="lower-message__content">
                        ${ message.content }
                      </div>
                    </p>
                    <div class="lower-message__image">
                      ${ insertImage }
                    </div>
                </div>
              </div>`
    var message_list = $('.messages').append(html);
    return html
}

  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    var url = window.location.href;
    var formdata = new FormData(this);
    $.ajax({
      type: 'POST',
      url: url,
      data: formdata,
      dataType: 'json',
      contentType: false,
      processData: false,
      disabled: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('#message_content').val("");
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(error) {
       alert('error');
    })
    return false;
  });
});



