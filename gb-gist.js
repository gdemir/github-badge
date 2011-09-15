GitHubBadge.gist = function(data) {
  (function($){
    var template = $.template(
      "<li class='public clickable'>"
      +  "<img src='http://gdemir.me/github-badge/images/gist.png' alt='public' title='${description}'>"
      +  "<strong><a href='http://gist.github.com/${repo}' title='${description}' target='_blank'>${description}</a></strong>"
      +  "<div class='description'>${files}</div>"
      +"</li>"
    );

    var list = $("<div class='repos'><ul id='repo_listing'></ul></div>");
    $('#github-badge .body')
      .empty()
      .append(list);
    list = list.find('ul');
    orderedRepos = data.gists;
    $.each(orderedRepos, function(index) {
      list.append(template, this);
    });
    var showLimit = window.GITHUB_LIST_LENGTH || 10;

    var showAllName = ("GITHUB_SHOW_ALL" in window && GITHUB_SHOW_ALL) || 'Hepsini göster';
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
    return this.append($("<div class='body'>yükleniyor...</div>"));
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
    + " | Designed by"
      + "<ul class='recent photos' style='margin-top:-15px;'>"
        + "<li>"
        + "<a href='http://gdemir.me' title='Gökhan Demir' style='margin-top:-10px;margin-left:100px;'>"
            + "<img src='https://secure.gravatar.com/avatar/80a2435e5770620fae90c2b7212188f3gKJDXldwYg+ukMK3ISGI8w=='"
            + "width='25' height='25'/>"
          + "</a>"
        + "</li>"
      + "</ul>"
    + "</div>"
  ));
  };
})(jQuery);
