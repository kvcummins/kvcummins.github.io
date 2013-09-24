$('div.share_links a > span').hover(
	function() { $(this).addClass('icon-2x').css('margin', 0).parents('.share_links').css('margin-top', 0); }, 
	function() { $(this).removeClass('icon-2x').css('margin', '12px 6px 0px').parents('.share_links').css('margin-top', 9); }
);