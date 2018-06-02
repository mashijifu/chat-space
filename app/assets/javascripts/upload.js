$(function() {

  function buildHTML(message) {
    var insertImage = '';
    if (message.image.url) {
      insertImage = `<img src="${message.image.url}">`;
    }
  var html = `<div class="message" data-message-id="${message.id}">
                <div class="upper-message">
                  <div class="upper-message__user-name">
                    ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="lower-message__content">
                  ${ message.content }
                </div>
                <div>
                  ${insertImage}
                </div>
              </div>`;
            return html
  }

  var interval = setInterval(function() {
      var lastMessageId = $('.message:last').data('messageId');
      if (window.location.pathname.match(/\/groups\/\d+\/messages/)) {
        $.ajax({
          url: location.href,
          type: 'GET',
          data: {
            id :lastMessageId
         },
          dataType: 'json'
        })
        .done(function(messages) {
          messages.forEach(function(message) {
            buildHTML(message);
            $('.messages').append(buildHTML(message));
          });
        })
      } else {
        clearInterval(interval);
      }
 }, 5000);
});
