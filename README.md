

![github-badge](http://gdemir.me/chrome/sembol/github-badge.png)



github-badge türleri
--

- Kendi **repo**nuzu görmek için sitenize aşağıdaki kodu koymanız yeterli


		  <div id="github-badge"></div>
		  <script type="text/javascript" charset="utf-8">
			GITHUB_USERNAME = "gdemir";
			GITHUB_LIST_LENGTH = 10;
			GITHUB_TITLE = "Projelerim"
			GITHUB_SHOW_ALL = "Hepsini Göster"
			</script>
			<script src="http://gdemir.me/github-badge/github-badge-repo.js" type="text/javascript">
			</script>
		  </div>


- Kendi **gist**nizi görmek için sitenize aşağıdaki kodu koymanız yeterli

		  <div id="github-badge"></div>
		  <script type="text/javascript" charset="utf-8">
			GITHUB_USERNAME = "gdemir";
			GITHUB_LIST_LENGTH = 10;
			GITHUB_TITLE = "Projelerim"
			GITHUB_SHOW_ALL = "Hepsini Göster"
			</script>
			<script src="http://gdemir.me/github-badge/github-badge-gist.js" type="text/javascript">
			</script>
		  </div>

### css ayarları

sitenize eklediğiniz koddaki **badge**nin yerini değiştirmek için
cssin **!important** özelliğini kullanınız
// ör. repo için **local.css**de aşağıdaki gibi bir kod kullanmak yeterlidir.

      #github-badge {
          width: 408px !important;
          float: left !important;
          clear: right !important;
          margin-top: 4em !important;
          margin-left: 25em !important;
          margin-bottom: 5em !important;
       }


### açıklama

- github kullanıcı ismi :

		  GITHUB_USERNAME = "gdemir";

- github-badgenin max uzunluğu :

		  GITHUB_LENGTH = 5;

- github-badgenin başlık ismi :

		  GITHUB_TITLE  = "Projelerim"

- githu-badgenin tamamını görmek için tıklanacak yazı ismi :

		  GITHUB_SHOW_ALL = "hepsini göster"

Copyright © 2011 | by gdemir
--
