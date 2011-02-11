var GitHubbadge = {};

GitHubbadge = new function() {	
  this.init = function() {
    this.tarayici("http://gdemir.me/github-badge/js/jquery.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery-1.5.js");
    this.tarayici("http://gdemir.me/github-badge/js/jquery.template.js", "GitHubbadge.dizin_yukle");
  }

  this.dizin_yukle = function() {
    document.write('<link rel = "stylesheet" type = "text/css" href = "http://gdemir.me/github-badge/css/gb-open.css" media = "screen" />');
    this.badge_yukle();
  }

  this.badge_yukle = function() {
    document.write("<div id='gb-open'>");
      GitHubbadge.tarayici("http://github.com/api/v2/json/issues/list/" + GITHUB_USER + "/" + GITHUB_USER + "/open?callback=GitHubbadge.open");
    document.write("</div>");
  };
  
  this.open = function(data) {
	  (function($){
	    var head   = $("<div><p>" + GITHUB_TITLE + "(<a href='http://github.com/" + GITHUB_USER + "'>" + GITHUB_USER + "</a> )</p></div>");
	    var template = $.template(
              "<ul>"
              + "<img src='https://secure.gravatar.com/avatar/${gravatar_id}' alt='gravatar' title='${gravatar_id}'/>"
	      + "<div id='gb-open-follow' >"
		+ "${labels}"
	      + "</div>"
	      + "<strong><a href='http://github.com/19/19/issues#issue/${number}' title='${number}' target='_blank'>${title}</a></strong>"
	      + "<div id='gb-open-describe'>"
	        + "<li class='open'>açıklama           : ${body}          </li>"
	    //~ + "<li class='open'>oluşturulma        : ${created_at}    </li>"
	    //~ + "<li class='open'>yorum              : ${comments}      </li>"
	    //~ + "<li class='open'>pozisyon           : ${position}      </li>"
	    //~ + "<li class='open'>beğenen            : ${votes}         </li>"
	    //~ + "<li class='open'>güncellenme        : ${updated_at}    </li>"
	    //~ + "<li class='open'>user               : ${user}          </li>"
	      + "</div>" 
	    + "</ul>"
	    );
	    var footer = $(
	    "<div id='gb-open-footer'>"
	    + '<p></p>'
            + '<span><a href="http://github.com/gdemir/github-badge"> github badge </a> designed | by gdemir</span>'
	  + "</div>"
	    );
	    //head eklgist.htmle
	    $('#gb-open').append(head);
	    //repo ekle
	    opens = data.issues.sort();
	    $.each(opens, function(index) {
			    $('#gb-open').append(template, this);
			  });
	    var goster = $("<br/><div><a href='#' class='goster'>" + GITHUB_SHOW + " (" + opens.length + ")</a></div>")
	    .click(function(event) {
		     $('#gb-open  ul').show();
		     $('#gb-open .goster').hide();
		     return false;
		   });
	    $("#gb-open ul")
	    .find(".open")
	    .hide()
	    .end()
	    .hover(
	           function () {
	             $(this).find(".open").show("open");
	           },
	           function () {
		     $(this).find(".open").hide("open");
		   }
	    )
	    .filter(':gt(' + (GITHUB_LENGTH - 1) + ')').hide();
	    if ($('#gb-open ul').is(':hidden'))
	      $('#gb-open ').append(goster);
	    //footer ekle
            $('#gb-open').append(footer);
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
var GITHUB_TITLE  = (GITHUB_TITLE)  || 'open issues';
var GITHUB_LENGTH = (GITHUB_LENGTH) ||  10;
var GITHUB_SHOW   = (GITHUB_SHOW)   || 'show all';
GitHubbadge.init();
