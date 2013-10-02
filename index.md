---
layout: page
title: Welcome to madlemur!
tagline: enrage your primate
---
{% include JB/setup %}
<div class="row" markdown="1">
<div class="col-lg-8" markdown="1">
Hello there, fellow primates! I'm assuming that dogs, cats, and ferrets haven't gained the ability to read, and that dolphins and elephants have better things to do than surf the web. I'm not talking to spiders, so I don't care how many beady little orbs you're reading this with...

But I digress. This is my tiny little corner of the web, where I can (and hopefully will) rant and roar on a variety of topics. These rants will likely be full to the brim of unintended privilege, as I am a middle-aged, hetero-normative white male. My only claim to unprivileged status is that I suffer from long undiagnosed ADHD and Asperger's. But that's nothing spectacular these days. It's not like I'm _really_ discriminated against for my non-neurotypical brain.

I hope you enjoy my meager offerings.

Ken Cummins
<br />
madlemur.com
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

### Recent Posts

{% for post in site.posts limit:5 %}
<a href="{{post.url}}">{{post.title}}</a><br />
<small>{{ post.date | date: "%B %e, %Y" }}<br />
<span class="g-commentcount" data-href="{{site.production_url}}{{post.url}}"></span>
</small>
<p />
{% endfor %}  
<script type="text/javascript"><!--
google_ad_client = "ca-pub-3420478509863216";
/* Sidebar display */
google_ad_slot = "4635528225";
google_ad_width = 300;
google_ad_height = 250;
//-->
</script>
<script type="text/javascript"
src="//pagead2.googlesyndication.com/pagead/show_ads.js">
</script>
</div>
</div>
