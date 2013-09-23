---
layout: post
title: "Adding Google+ Comments"
description: "The unofficial way to get Google+ comments for any website."
category: madlemur.com
tags: [ Integration, Google+ ]
---
{% include JB/setup %}

### Shoulders of Giants

At least, I used Google against itself. This information is pretty well documented elsewhere, but I thought I'd add my take on it as well, in case there are other GitHub pages people who'd like to integrate Google+ comments.

### Official support

There is none for this hack. Google has only officially rolled out comments for their own Blogger platform (and perhaps a WordPress plugin?), although I suspect that a more open solution is in the works. In fact, this hack works because I think it pretends to be coming from a Blogger page.

One thing I strongly suggest is to set up an authorship relationship for your pages. This is a link from your website to your G+ profile. You can also set up your website as one you contribute to in your profile. For completeness, I also set up a publisher relationship from my website to my profile.

{% highlight html %}
{% raw %}
<a href="https://plus.google.com/{{google_profile_id}}" rel="author" style="display:none;"></a>
{% endraw %}
{% endhighlight %}


### The good stuff

This is no doubt what you've been waiting for. How I actually did it. It's really simple:

{% highlight html %}
{% raw %}
<div class="g-comments"
    data-href="{{site.production_url}}{{page.url}}"
    data-width="642"
    data-first_party_property="BLOGGER"
    data-view_type="FILTERED_POSTMOD">
</div>
{% endraw %}
{% endhighlight %}

If you're wondering what those values are, I am using [Jekyll Bootstrap](http://jekyllbootstrap.com/api/jekyll-liquid-api.html), and it has you configure those. Make sure your URLs are correct. I spent a day fighting with the comments, only to realize that Jekyll was adding the post category to the path, and the category happens to be "madlemur.com", and I was mangling the URL by hand. Once I got the correct URL, it's working beautifully.
