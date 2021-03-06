var GitHubBadge = {};

GitHubBadge = new function() {
  this.init = function() {

    this.tarayici("http://gdemir.me/github-badge/javascripts/jquery.js");
    this.tarayici("http://gdemir.me/github-badge/gb-repo.js");
    this.tarayici("http://gdemir.me/github-badge/javascripts/jquery.template.js", "GitHubBadge.css_yukle");
  }

  this.css_yukle = function() {
    if(typeof jQuery == 'undefined' || typeof jQuery.template == 'undefined')
      throw("GitHub Badge requires jQuery and jQuery.template");

    var url = 'http://gdemir.me/github-badge/stylesheets/github-badge.css';
    var style_id = 'badge';
    if ("jQuery" in window) {
        jQuery('head').prepend(
            jQuery('<link rel="stylesheet" type="text/css" href="' + url + '" id="' + style_id + '"></link>')
        );
    } else {
      document.write('<link rel="stylesheet" href="'+url+'" type="text/css"></link>');
    }
    this.user_yukle(GITHUB_USERNAME);
  }

  this.tarayici = function( url, callback ) {
    if ("jQuery" in window && url.match(/^http/)) {
      if (typeof callback != "undefined") {
        jQuery.getScript(url,function() { eval(callback + "()") });
      } else {
        jQuery.getScript(url);
      }
    } else {
      onLoadStr = (typeof callback == "undefined") ? "" : 'onload="' + callback + '()" ';
      document.write('<script ' + onLoadStr + 'type="text/javascript" src="' + url + '"></script>');
    }
  }

  this.user_yukle = function(username) {
    (function($){
      var title = ("GITHUB_TITLE" in window && GITHUB_TITLE) || 'My projects';
      $('#github-badge')
        .empty()
        .buildHeader(title, username)
        .buildBody(username)
        .buildFooter();
    })(jQuery);
    this.badge_yukle(username);
  };

  this.badge_yukle = function(username) {
      this.tarayici(
        "http://github.com/api/v1/json/" + username + "?callback=GitHubBadge.repo");
  };
};

GitHubBadge.init();
