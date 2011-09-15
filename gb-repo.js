
GitHubBadge.repo = function(data) {
  (function($){
    var template = $.template(
      "<li class='public clickable'>"
      +  "<img src='http://github.com/images/icons/public.png' alt='public' title='${description}'>"
      +  "<strong><a href='${url}' title='${description}' target='_blank'>${name}</a></strong>"
      +  "<div class='description'>${description}</div>"
      +"</li>"
    );

    var list = $("<div class='repos'><ul id='repo_listing'></ul></div>");
    $('#github-badge .body')
      .empty()
      .append(list);
    list = list.find('ul');
    orderedRepos = data.user.repositories;
    $.each(orderedRepos, function(index) {
      list.append(template, this);
    });
    var showLimit = window.GITHUB_LIST_LENGTH || 10;

    var showAllName = ("GITHUB_SHOW_ALL" in window && GITHUB_SHOW_ALL) || 'Show all';
    var showMore = $("<div><a href='#' class='more'>" + showAllName + " (" + orderedRepos.length + ")</a></div>")
      .find('a')
      .click(function(event) {
        $('#github-badge .body li').show();
        $('#github-badge .more').hide();
        return false;
      });

    $('#github-badge .body li')
    .click(function(event) {
      $(event.currentTarget).find('.description').toggle();
    })
    .find('.description')
      .hide()
      .end()
    .filter(':gt(' + (showLimit - 1) + ')').hide() // hide extras
    if ($('#github-badge .body li').is(':hidden'))
      $('#github-badge .body').append(showMore);

  })(jQuery);
};

(function($){
  $.fn.buildBody = function() {
    return this.append($("<div class='body'>loading...</div>"));
  };

  $.fn.buildHeader = function(title, username) {
    var template = $.template(
      "<div class='header'><span class='title'>${title}</span> <span>("
      +   "<a href='http://github.com/${username}'>${username}</a>)"
      + "</span></div>")
    return this.append(template, { title: title, username: username });
  };

  $.fn.buildFooter = function() {
    return this.append($(
      "<div class='footer'>"
        + "<a href='http://gdemir.me/github-badge'>GitHub Badge</a>"
        + " | "
        + "Written by <a href='http://gdemir.me'>Gökhan Demir</a>"
      + "</div>"
      + "</fieldset>"
      ));
  };
})(jQuery);
