var GitHubbadge = {};

GitHubbadge = new function() {	
  this.init = function() {
    this.tarayici("http://gdemir.me/github-badge/js/jquery.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery.template.js", "GitHubbadge.dizin_yukle");
  }

  this.dizin_yukle = function() {
    document.write('<link rel = "stylesheet" type = "text/css" href = "http://gdemir.me/github-badge/css/gb-repo.css" media = "screen" />');
    this.badge_yukle();
  }

  this.badge_yukle = function() {
    document.write("<div id='gb-repo'>");
      GitHubbadge.tarayici("http://github.com/api/v1/json/" + GITHUB_USER + "?callback=GitHubbadge.repo");
    document.write("</div>");
  };
  
  this.repo = function(data) {
    (function($){
      var head = $("<div><p>" + GITHUB_TITLE + "(<a href='http://github.com/" + GITHUB_USER + "'>" + GITHUB_USER + "</a> )</p></div>");
      var template = $.template(
        "<ul>"
	+  "<img src='http://gdemir.me/chrome/sembol/public.png' alt='public' title='${description}'/>"
	+  "<strong><a href='${url}' title='${description}' target='_blank'>${name}</a></strong>"
	+  "<div id='gb-repo-describe'>"
	  +  "<li class='repo'>tanım          : ${description}  </li>"
	  +  "<li class='repo'>size           : ${size}         </li>"
      //~ +  "<li class='repo'>oluşturulma    : ${created_at}   </li>"
      //~ +  "<li class='repo'>wiki durum     : ${has_wiki}     </li>"
      //~ +  "<li class='repo'>izleyenler     : ${watchers}     </li>"
      //~ +  "<li class='repo'>fork durum     : ${fork}         </li>"
      //~ +  "<li class='repo'>url            : ${url}          </li>"
      //~ +  "<li class='repo'>son güncelleme : ${pushed_at}    </li>"
      //~ +  "<li class='repo'>download durum : ${has_downloads}</li>"
      //~ +  "<li class='repo'>açık issues    : ${open_issues}  </li>"
      //~ +  "<li class='repo'>issues durum   : ${has_issues}   </li>"
      //~ +  "<li class='repo'>website        : ${homapage}     </li>"
      //~ +  "<li class='repo'>fork sayı      : ${forks}        </li>"
      //~ +  "<li class='repo'>sahip          : ${owner}        </li>"
	+  "</div>"
     +  "</ul>");
     var footer = $(
       "<div id='gb-repo-footer'>"
       + '<p></p>'
       + '<span><a href="http://github.com/gdemir/github-badge">github badge</a>designed | by gdemir</span>'
     + "</div>");
     //~ //head ekle
     $('#gb-repo').append(head);
     //~ //repo ekle
     repos = data.user.repositories.sort();
     $.each(repos, function(index) {
		     $('#gb-repo').append(template, this);
	 	   });
     var goster = $("<br/><div><a href='#' class='goster'>" + GITHUB_SHOW + " (" + repos.length + ")</a></div>")
     .click(function(event) {
	      $('#gb-repo  ul').show();
	      $('#gb-repo .goster').hide();
	      return false;
	    });
     $('#gb-repo ul')
	    .find('.repo')
	    .hide()
	    .end()
	    .hover(function () {
		     $(this).find(".repo").show("repo");
		   },
		   function () {
		     $(this).find(".repo").hide("repo");
		   }
	    )
	    .filter(':gt(' + (GITHUB_LENGTH - 1) + ')').hide();
     if ($('#gb-repo ul').is(':hidden'))
       $('#gb-repo ').append(goster);
     //~ //footer ekle
     $('#gb-repo').append(footer);
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
var GITHUB_TITLE  = (GITHUB_TITLE)  || 'projects';
var GITHUB_LENGTH = (GITHUB_LENGTH) ||  10;
var GITHUB_SHOW   = (GITHUB_SHOW)   || 'show all';
GitHubbadge.init();
