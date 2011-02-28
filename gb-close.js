var GitHubbadge = {};

GitHubbadge = new function() {	
  this.init = function() {
    this.tarayici("http://gdemir.me/github-badge/js/jquery.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery-1.5.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery.template.js", "GitHubbadge.dizin_yukle");
  }

  this.dizin_yukle = function() {
    document.write('<link rel = "stylesheet" type = "text/css" href = "http://gdemir.me/github-badge/css/gb-close.css" media = "screen" />');
    this.badge_yukle();
  }

  this.badge_yukle = function() {
    document.write("<div id='gb-close'>");
      GitHubbadge.tarayici("http://github.com/api/v2/json/issues/list/" + GITHUB_USER + "/" + GITHUB_USER + "/closed?callback=GitHubbadge.close");
    document.write("</div>");
  };
  
  this.close = function(data) {
	  (function($){
	     var head   = $("<div><p>" + GITHUB_TITLE + "(<a href='http://github.com/" + GITHUB_USER + "'>" + GITHUB_USER + "</a> )</p></div>");
	     var template = $.template(
	       "<ul>"
	       + "<img src='https://secure.gravatar.com/avatar/${gravatar_id}' alt='gravatar' title='${gravatar_id}'/>"
	       + "<div id='gb-close-follow' >"
	         + "${labels}"
	       + "</div>"
	       + "<strong><a href='http://github.com/19/19/issues#issue/${number}' title='${number}' target='_blank'>${title}</a></strong>"
	       + "<div id='gb-close-describe'>"
	         + "<li class='close'>açıklama           : ${body}          </li>"
	     //~ + "<li class='close'>oluşturulma        : ${created_at}    </li>"
             //~ + "<li class='close'>yorum              : ${comments}      </li>"
	     //~ + "<li class='close'>pozisyon           : ${position}      </li>"
	     //~ + "<li class='close'>beğenen            : ${votes}         </li>"
	     //~ + "<li class='close'>güncellenme        : ${updated_at}    </li>"
	     //~ + "<li class='close'>user               : ${user}          </li>"
	       + "</div>" 
	     + "</ul>"
	     );
	     var footer = $(
	       "<div id='gb-close-footer'>"
	       + '<p></p>'
               + '<span><a href="http://github.com/gdemir/github-badge"> github badge </a> designed | by gdemir</span>'
	     + "</div>"
	     );
	     //head ekle
	     $('#gb-close').append(head);
	     //repo ekle
	     closes = data.issues.sort();
	     $.each(closes, function(index) {
			     $('#gb-close').append(template, this);
			   });
	     var goster = $("<br/><div><a href='#' class='goster'>" + GITHUB_SHOW + " (" + closes.length + ")</a></div>")
	     .click(function(event) {
		      $('#gb-close  ul').show();
		      $('#gb-close .goster').hide();
		      return false;
		    });
	     $("#gb-close ul")
	     .find(".close")
	     .hide()
	     .end()
	     .hover(
		    function () {
		      $(this).find(".close").show("fast");
		    },
		    function () {
		      $(this).find(".close").hide("fast");
		    }
	     )
	     .filter(':gt(' + (GITHUB_LENGTH - 1) + ')').hide();
	     if ($('#gb-close ul').is(':hidden'))
	       $('#gb-close ').append(goster);
	     //footer ekle
	     $('#gb-close').append(footer);
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
var GITHUB_USER   = (GITHUB_USER)   || '19';
var GITHUB_TITLE  = (GITHUB_TITLE)  || 'close issues';
var GITHUB_LENGTH = (GITHUB_LENGTH) ||  10;
var GITHUB_SHOW   = (GITHUB_SHOW)   || 'show all';
GitHubbadge.init();
