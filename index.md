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
{% include ads/amazon_banner.html %}
</div>
<div class="col-lg-4" markdown="1">
<div class="well well-sm">
<div class="g-person" data-width="340" data-href="//plus.google.com/{{site.author.google_plus}}" data-layout="landscape" data-rel="author" style="height:106px;"></div>
</div>
<div class="well well-sm">{% include ads/google_halfbanner.html %}</div>
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
<div class="well well-sm"><iframe scrolling="no" style="border: 0; width: 234px; height: 60px;" src="http://coinurl.com/get.php?id=17619"></iframe></div>
<div class="well well-sm">{% include ads/google_300x250.html %}</div>
</div>
</div>
[Dungeon Crawl Classics]: http://www.goodman-games.com/dccrpg.html
[DCC Pages]: /DCC.html