$(function() {

function buildHTML(message) {
  var html = `<div class="message">
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
                  <img scr=${ message.image.url } class="lower-message__image" if message.image.present? />
                </div>
              </div>`
   var message_list = $(".messages").append(html);
    return html
}
  $('.form__mask').on("click", function reset() {
    var formdata = $('#new_message').reset();
  })

  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    var url = window.location.href;
    var formdata = new FormData(this);
    this.reset();
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
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(error) {
       alert('error');
    })
    return false;
  });
});
