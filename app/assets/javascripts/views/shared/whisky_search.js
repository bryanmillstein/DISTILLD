$.UsersSearch = function (el) {
  this.$el = $(el);
  this.$input = this.$el.find("input[name=username]");
  this.$ul = this.$el.find(".users");

  this.$input.on("input", this.handleInput.bind(this));
};

$.UsersSearch.prototype.handleInput = function (event) {
  if (this.$input.val() == "") {
    this.renderResults([]);
    return;
  }

  $.ajax({
    url: "/users/search",
    dataType: "json",
    method: "GET",
    data: { query: this.$input.val() },
    success: this.renderResults.bind(this)
  });
};

$.UsersSearch.prototype.renderResults = function (users) {
  this.$ul.empty();

  for (var i = 0; i < users.length; i++) {
    var user = users[i];

    var $a = $("<a></a>");
    $a.text(user.username);
    $a.attr("href", "/users/" + user.id);

    var $followToggle = $("<button></button>");
    $followToggle.followToggle({
      userId: user.id,
      followState: user.followed ? "followed" : "unfollowed"
    });

    var $li = $("<li></li>");
    $li.append($a);
    $li.append($followToggle);

    this.$ul.append($li);
  }
};

$.fn.usersSearch = function () {
  return this.each(function () {
    new $.UsersSearch(this);
  });
};
