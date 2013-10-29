---
layout: page
title: Welcome to madlemur!
tagline: enrage your primate
---
{% include JB/setup %}
<div class="row" markdown="1">
<div class="col-lg-8" markdown="1">
<div class="well well-sm" markdown="1">
I haven't kept this blog as updated as I had fantasized when I overhauled it. Mainly because I haven't got a lot to say at the moment. At least, not in public...

What this has become is something of a [Dungeon Crawl Classics][] WIP blog. I've been putting together bits and pieces of a campaign setting for DCC, which can be found in the [DCC Pages][] section.

Once I start running my kids through it, I'll start posting play reports. But I'm not sure when that'll start...
</div>
<div>
<script type="text/javascript"><!--
amazon_ad_tag="theenrpri-20"; 
amazon_ad_width="728"; 
amazon_ad_height="90"; 
amazon_color_background="EBE8C0"; 
amazon_color_border="386424"; 
amazon_color_logo="DDD37F"; 
amazon_color_text="38352A"; 
amazon_color_link="33578B"; 
amazon_ad_logo="hide"; 
amazon_ad_link_target="new"; 
amazon_ad_title="the enraged primate gift shop"; //--></script>
<script type="text/javascript" src="http://ir-na.amazon-adsystem.com/s/asw.js"></script>
</div>
</div>
<div class="col-lg-4" markdown="1">
<div class="g-person" data-width="350" data-href="//plus.google.com/{{site.author.google_plus}}" data-layout="landscape" data-rel="author" style="height:106px;"></div>

<script type="text/javascript"><!--
google_ad_client = "ca-pub-3420478509863216";
/* Half Banner */
google_ad_slot = "9065727823";
google_ad_width = 234;
google_ad_height = 60;
//-->
</script>
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
<div class="well well-sm" markdown="1">
### Recent Posts

{% for post in site.posts limit:5 %}
<a href="{{post.url}}">{{post.title}}</a><br />
<small>{{ post.date | date: "%B %e, %Y" }}<br />
<span class="g-commentcount" data-href="{{site.production_url}}{{post.url}}"></span>
</small>
<p />
{% endfor %}  
</div>
<script type="text/javascript"><!--
google_ad_client = "ca-pub-3420478509863216";
/* Sidebar display */
google_ad_slot = "4635528225";
google_ad_width = 300;
google_ad_height = 250;
//-->
</script>
<script type="text/javascript"
src="http://pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
</div>
</div>
[Dungeon Crawl Classics]: http://www.goodman-games.com/dccrpg.html
[DCC Pages]: /DCC.html