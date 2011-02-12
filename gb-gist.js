var GitHubbadge = {};

GitHubbadge = new function() {	
  this.init = function() {
    this.tarayici("http://gdemir.me/github-badge/js/jquery.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery-1.5.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery.template.js", "GitHubbadge.dizin_yukle");
  }

  this.dizin_yukle = function() {
    document.write('<link rel = "stylesheet" type = "text/css" href = "http://gdemir.me/github-badge/css/gb-gist.css" media = "screen" />');
    this.badge_yukle();
  }

  this.badge_yukle = function() {
    document.write("<div id='gb-gist'>");
      GitHubbadge.tarayici("http://gist.github.com/api/v1/json/gists/" + GITHUB_USER + "?callback=GitHubbadge.gist");
    document.write("</div>");
  };
  
  this.gist = function(data) {
         (function($){
            var head   = $("<div><p>" + GITHUB_TITLE + "(<a href='http://gist.github.com/" + GITHUB_USER + "'>" + GITHUB_USER + "</a> )</p></div>");
            var template = $.template(
              "<ul>"
              + "<img src='http://gdemir.me/chrome/sembol/gist.png' alt='public' title='${description}'>"
              + "<strong><a href='http://gist.github.com/${repo}' title='${description}' target='_blank'>${repo}</a></strong>"
              + "<div id='gb-gist-describe'>"
                + "<li class='gist'>dosya           : ${files}      </li>"
                + "<li class='gist'>oluşturulma     : ${created_at} </li>"
            //~ + "<li class='gist'>genel durum     : ${public}     </li>"
            //~ + "<li class='gist'>tanım           : ${description}</li>"
            //~ + "<li class='gist'>sahip           : ${owner}      </li>"
              + "</div>"
           + "</ul>"
	   );
           var footer = $(
  	    "<div id='gb-gist-footer'>"
	    + '<p></p>'
            + '<span><a href="http://github.com/gdemir/github-badge"> github badge </a> designed | by gdemir</span>'
	  + "</div>"
	  );
          //head ekle
          $('#gb-gist').append(head);
          //repo ekle
          repos = data.gists.sort();
          $.each(repos, function(index) {
		          $('#gb-gist').append(template, this);
	                });
          var goster = $("<br/><div><a href='#' class='goster'>" + GITHUB_SHOW + " (" + repos.length + ")</a></div>")
          .click(function(event) {
	           $('#gb-gist  ul').show();
	           $('#gb-gist .goster').hide();
	           return false;
	         });
          $('#gb-gist ul')
	  .find('.gist')
	  .hide()
	  .end()
	  .hover(
		 function () {
		   $(this).find(".gist").show("gist");
		 },
		 function () {
		   $(this).find(".gist").hide("gist");
		 }
	  )
	  .filter(':gt(' + (GITHUB_LENGTH - 1) + ')').hide();
          if ($('#gb-gist ul').is(':hidden'))
            $('#gb-gist ').append(goster);
          //footer ekle
          $('#gb-gist').append(footer);
    })(jQuery);
  };

  this.tarayici = function (url, callback) {
    if ("jQuery" in window && url.match(/^http/)) {
      if (typeof callback != "undefined")
        jQuery.getScript(url, function() { eval(callback + "()") });
      else
        jQuery.getScript(url);
    } else {
      onLoadStr = (typeof callback == "undefined") ? "" : 'onload="' + callback + '()" ';
      document.write('<script ' + onLoadStr + 'type="text/javascript" src="'+url+'"></script>');
    }
  }
};
var GITHUB_USER   = (GITHUB_USER)   || 'gdemir';
var GITHUB_TITLE  = (GITHUB_TITLE)  || 'gists';
var GITHUB_LENGTH = (GITHUB_LENGTH) ||  10;
var GITHUB_SHOW   = (GITHUB_SHOW)   || 'show all';
GitHubbadge.init();
