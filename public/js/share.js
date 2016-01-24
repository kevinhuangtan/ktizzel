
var hidden = true;
$(document).ready(function(){
   
   	$('.blog-title').each(function(i, obj) {
   		var name = $(obj).text();
		var split_name = name.split(' ').join('');
   		var anchor_name = "<a name ='"+ split_name +"'></a>";
	    $(obj).prepend(anchor_name);
   		$(obj).append('<div class="share" ><img data-url="'+name+'" class="share-button" src="/static/glyphs/share.png"/></div>');

	});

	$('.popup').click(function(event) {
	var width  = 575,
	    height = 400,
	    left   = ($(window).width()  - width)  / 2,
	    top    = ($(window).height() - height) / 2,
	    url    = this.href,
	    opts   = 'status=1' +
	             ',width='  + width  +
	             ',height=' + height +
	             ',top='    + top    +
	             ',left='   + left;

	window.open(url, 'twitter', opts);

	return false;
	});

   	$('.share-button').on("click", function(){

   		var article = $(this).data('url');
   		article = article.split(' ').join('');

   		var title = $(this).data('url');
   		
   		var twitter_url= $('.twitter').attr('href');
   		var new_twitter_url = twitter_url + article+ '&text='+ title + ' by @ktizzel23' ;

   		$('.twitter').attr('href', new_twitter_url);

   		var facebook_url = $('.fb-share-button').data('href');
   		console.log(facebook_url);
   		var new_facebook_url = facebook_url + article;


   		$('.share-modal').removeClass('hidden');

   		var offset = $(this).offset()
		$('.share-modal').offset({top: offset.top-115, left: offset.left-71});
		
		setTimeout(function() {
		 hidden = false;
		}, 20);
		
	});
	$('.blog-container').click(function(e){
		if(hidden != true){
			$('.share-modal').addClass('hidden');
			setTimeout(function() {
			 hidden = true;
			}, 20);
		
		}

	})
});
