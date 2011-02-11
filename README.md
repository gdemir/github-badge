

![github-badge](http://gdemir.me/chrome/sembol/github-badge.png)
Copyright © 2011 | by gdemir
--
### github-badge türleri
--

- Kendi **repo**nuzu görmek için sitenize aşağıdaki kodu koymanız yeterli

		<script type="text/javascript" charset="utf-8">
		  GITHUB_USER   = "gdemir";
		  GITHUB_LENGTH = 10;
		  GITHUB_TITLE  = "projelerim"
		  GITHUB_SHOW   = "hepsini göster"
		</script>
		<script src="http://gdemir.me/github-badge/gb-repo.js" type="text/javascript"></script>

- Kendi **gist**nizi görmek için sitenize aşağıdaki kodu koymanız yeterli

		<script type="text/javascript" charset="utf-8">
		  GITHUB_USER   = "gdemir";
		  GITHUB_LENGTH = 10;
		  GITHUB_TITLE  = "gistlerim"
		  GITHUB_SHOW   = "hepsini göster"
		</script>
		<script src="http://gdemir.me/github-badge/gb-gist.js" type="text/javascript"></script>

- Kendi reponuzun **open issues**lerini görmek için sitenize aşağıdaki kodu koymanız yeterli (repo ismi ile kullanıcı ismi aynı olmalıdır)

		<script type="text/javascript" charset="utf-8">
		  GITHUB_USER   = "19";
		  GITHUB_LENGTH = 10;
		  GITHUB_TITLE  = "açık görevlerimiz"
		  GITHUB_SHOW   = "hepsini göster"
		</script>
		<script src="http://gdemir.me/github-badge/gb-open.js" type="text/javascript"></script>

- Kendi reponuzun **close issues**lerini görmek için sitenize aşağıdaki kodu koymanız yeterli (repo ismi ile kullanıcı ismi aynı olmalıdır)

		<script type="text/javascript" charset="utf-8">
		  GITHUB_USER   = "19";
		  GITHUB_LENGTH = 10;
		  GITHUB_TITLE  = "kapalı görevlerimiz"
		  GITHUB_SHOW   = "hepsini göster"
		</script>
		<script src="http://gdemir.me/github-badge/gb-close.js" type="text/javascript"></script>

- Bir **orgs**(organizasyon)daki üyelerin bilgilerini görmek için sitenize aşağıdaki kodu koymanız yeterli

		<script type="text/javascript" charset="utf-8">
		  GITHUB_USER   = "19";
		  GITHUB_LENGTH = 10;
		  GITHUB_TITLE  = "kapalı görevlerimiz"
		  GITHUB_SHOW   = "hepsini göster"
		</script>
		<script src="http://gdemir.me/github-badge/gb-orgs.js" type="text/javascript"></script>

### css ayarları

sitenize eklediğiniz koddaki **badge**nin yerini değiştirmek için  
cssin **!important** özelliğini kullanınız  
// ör. repo için **local.css**de aşağıdaki gibi bir kod kullanmak yeterlidir.	
	
      #gb-repo {
          width: 408px !important;
          float: left !important;
          clear: right !important;
          margin-top: 4em !important;
          margin-left: 25em !important;
          margin-bottom: 5em !important;
       }
	

### açıklama

- github kullanıcı ismi :

		  GITHUB_USER = "gdemir";

- github-badgenin max uzunluğu :

		  GITHUB_LENGTH = 5;
		  
- github-badgenin başlık ismi :

		  GITHUB_TITLE  = "gistlerim"
		  
- githu-badgenin tamamını görmek için tıklanacak yazı ismi :

		  GITHUB_SHOW   = "hepsini göster"

Copyright © 2011 | by gdemir
--
