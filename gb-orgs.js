var GitHubbadge = {};

GitHubbadge = new function() {	
  this.init = function() {
    this.tarayici("js/jquery.js");
    this.tarayici("js/jquery-1.5.js");
    this.tarayici("js/jquery.template.js", "GitHubbadge.dizin_yukle");
  }

  this.dizin_yukle = function() {
	document.write('<link rel = "stylesheet" type = "text/css" href = "chrome/css/gb-orgs.css" media = "screen" />');
    this.badge_yukle();
  }

  this.badge_yukle = function() {
	document.write("<div id='gb-orgs'>");
	  GitHubbadge.tarayici("http://github.com/api/v2/json/organizations/19/public_members?callback=GitHubbadge.orgs");
	document.write("</div>");
  };
  
  this.orgs = function(data) {
	  (function($){
		var head   = $("<div><p>" + GITHUB_TITLE + "(<a href='http://github.com/" + GITHUB_USER + "'>" + GITHUB_USER + "</a> )</p></div>");
		var template = $.template(
		  "<ul>"
		  +  "<img src='https://secure.gravatar.com/avatar/${gravatar_id}' alt='gravatar' title='${gravatar_id}'/>"
		  + " <div id='gb-orgs-follow' >"
		    + "<a  href='${login}/repo.html'>"
		      + "<img src='http://gdemir.me/chrome/sembol/public.png' alt='public' title='${login}/public'/>  ${public_repo_count}"
		    + "</a>"
		    + "<a  href='${login}/gist.html'>"
		      + "<img src='http://gdemir.me/chrome/sembol/gist.png'   alt='gist'   title='${login}/gist'  />  ${public_gist_count}"
		    + "</a>"
		  + "</div>"
		  +  "<strong><a href='http://gdemir.me/19badge/${login}' title='${login}' target='_blank'>${login}(${name})</a></strong>"
		  +  "<div id='gb-orgs-describe'>"
		     +  "<li class='orgs'>Website/blog       : <a href='${blog}'>${blog}  </a></li>"
			 +  "<li class='orgs'>email              : <a href='${email}'>${email}</a></li>"
			 //~ +  "<li class='orgs'>takip sayı         : ${following_count}  </li>"
			 //~ +  "<li class='orgs'>takipci sayı   : ${followers_count}  </li>"
			 //~ +  "<li class='orgs'>şirket         : ${company}          </li>"
			 //~ +  "<li class='orgs'>yer            : ${location}         </li>"
			 //~ +  "<li class='orgs'>oluşturulma    : ${created_at}       </li>"
			 //~ +  "<li class='orgs'>id             : ${id}               </li>"
			 //~ +  "<li class='orgs'>permission     : ${permission}       </li>"
			 //~ +  "<li class='orgs'>tür            : ${type}             </li>"
		  +  "</div>"
	   +  "</ul>"
		);
		var footer = $(
	  "<div id='gb-orgs-footer'>"
	    + '<p></p>'
            + '<span><a href="http://github.com/gdemir/github-badge"> github badge </a> designed | by gdemir</span>'
	+ "</div>");
		//~ //head eklgist.htmle
		$('#gb-orgs').append(head);
		//~ //repo ekle
		repos = data.users.sort();
		$.each(repos, function(index) {
								$('#gb-orgs').append(template, this);
					  });
		var goster = $("<br/><div><a href='#' class='goster'>" + GITHUB_SHOW + " (" + repos.length + ")</a></div>")
		.click(function(event) {
					$('#gb-orgs  ul').show();
					$('#gb-orgs .goster').hide();
					return false;
			   });
		$("#gb-orgs ul")
		.find(".orgs")
		.hide()
	    .end()
		.hover(
		  function () {
			$(this).find(".orgs").show("orgs");
		  },
		  function () {
			$(this).find(".orgs").hide("orgs");
		  }
		)
		.filter(':gt(' + (GITHUB_LENGTH - 1) + ')').hide();
		if ($('#gb-orgs ul').is(':hidden'))
			$('#gb-orgs ').append(goster);
		//~ //footer ekle
		$('#gb-orgs').append(footer);
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
var GITHUB_TITLE  = (GITHUB_TITLE)  || 'users';
var GITHUB_LENGTH = (GITHUB_LENGTH) ||  10;
var GITHUB_SHOW   = (GITHUB_SHOW)   || 'show all';
GitHubbadge.init();
