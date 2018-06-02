$(function() {
  member_list = []
  var add_member_list = $("#user-search-result");

  function appendSearchedUsers(user) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${ user.name }</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${ user.user_id }" data-user-name="${ user.name }"><span class="add">追加</span></a>
                </div>`
    add_member_list.append(html);
    appendAddedUsers(user);
  }

  var remove_member_list = $(".chat-group-user__name");

  function appendAddedUsers(user) {
  $('.add').on('click', function () {
  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user'>
                <input name='group[user_ids][]' type='hidden' value='${ user.user_id }'>
                <p class='chat-group-user__name'>${ user.name }</p>
                <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'><span class="remove">削除</span></a>
              </div>`
  remove_member_list.append(html);
  })
  }

function addedUser() {
  $('#user-search-result').on('click', function() {
    $(this).empty();
  })
}
  addedUser();

function deleteUser() {
  $('.chat-group-user__name').on('click', function() {
    $(this).empty();
  })
}
  deleteUser();

  $('#user-search-field').on('keyup', function() {
    var input = $('#user-search-field').val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(users) {
      $("#user-search-result").empty();
      if (users !== 0 ) {
        users.forEach(function(user){
        appendSearchedUsers(user);
       })
      }
    })
    .fail(function() {
      alert('ユーザー検索に失敗しました');
    })
 });
});

