---
layout: default
title: Front-End Designer &amp; Developer
---

<div class="row full-width section">
	{% include default-columns.html %}
		<p>I make websites &amp; web applications that focus on usability, coherence, and flexibility.</p>

		<p>Every project deserves to be built responsively and in code that is not only valid, but clean and scalable.</p>
	</div>
</div>
<div class="row full-width section text-left">
	{% include default-columns.html %}
		<header class="sidebar">
			<h2 class="h1">(My Most Recent Blog Post)</h4>
		</header>
		{% for post in site.categories['blog'] limit:1 %}
			<article>
				<header>
					<h3 class="h2"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></h3>
					<p class="meta">{{ post.date | date_to_string }}</p>
				</header>
				<div class="post excerpt">
					{{ post.excerpt }} <a href="{{ site.baseurl }}{{ post.url }}" class="read-more">Read More</a>
				</div>
			</article>
		{% endfor %}
	</div>
</div>
<!-- <div class="row full-width section text-left">
	{% include default-columns.html %}
		<div class="row">
			<header>
				<h4 class="h1 sidebar">Recent Case Study</h4>
			</header>
			{% for post in site.categories['case-study'] limit:1 %}
				<h3 class="h2"><a href="{{ site.baseurl )){{ post.url }}">{{ post.title }}</a></h3>
				<blockquote><div class="post">{{ post.excerpt }}</div></blockquote>
			{% endfor %}
		</div>	
	</div>
</div> -->