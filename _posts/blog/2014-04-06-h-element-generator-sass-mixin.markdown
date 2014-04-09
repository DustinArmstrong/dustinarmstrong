---
layout: post
title:  "H-Element Generator SASS Mixin"
subtitle: "Building My Framework Pt. 1"
date:   2014-04-06 18:00:00
categories: blog
---


I've been working my way through generating my own framework lately as I've found that most times overriding Foundation or defining a basic default stylesheet can be time-consuming. It will mostly be used for prototyping, but I'm building it out to be used either as a whole, or each section at a time as a SCSS file. So far, the project uses a reset that removes as much default styling as possible. The first part of my writeup today is about creating an h-element generator that creates each h-element size programatically.

Let's take a look at the code snippet:

{% highlight scss linenos %}
@mixin h-elements {
	@for $i from 1 through 6 {
		h#{$i}, .h#{$i} {
			color: $h-font-color;
			font-family: $h-font-family;
			font-size: $h-font-size - ($i * .2);
			font-weight: $h-font-weight;
			margin: $h-margin;
		}
	}
}
{% endhighlight %}

What we're doing here is telling <code>$i</code> (which is a temporary variable) to be output as an integer. The mixin is then saying that for every time it runs through, <code>$i</code> will be an integer starting at the first defined number (1 in this case), incrementing each time until it meets the condition of the second defined integer (being 6).

Running this function allows us to define the h-elements 1 through 6. In order to append these numbers to the h tag, we use [interpolation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#interpolation_)<code>#{$i}</code>. This allows us to append the variable being defined in each iteration, meaning <code>h#{$i}</code> will become <code>h1</code> on it's first time through, <code>h2</code> the second time, and so-on. 

As you can see, we're also defining a class called <code>.h#{$i}</code>. The reason for this is so that on other pages, if you want something styled like a different h-element, you can do that without sacrificing the hierarchy of your page's header structure if it needs to be different for any reason. I would recommend you avoid this if possible, but there are instances where it helps. 

For example:

{% highlight html linenos %}
<h2 class="h1">This title is as important as the page title visually, but not contextually</h2>
{% endhighlight %}

The rest of the variables are mostly things which you would just set for yourself, but one line stands out:

{% highlight scss linenos %}
font-size: $h-font-size - ($i * .2);
{% endhighlight %}

What this allows us to do is define a basic h max-size which will be run through a process of equations taking <code>$h-font-size</code> (which I'm currently using em's for, though it will soon be changed to rems with a fallback) and subtracting the result of <code>($i * .2)</code>. This means each time that <code>$i</code> increments from 1 through 6, the font-size of the h-element will decrease. This creates a consistent descending h-element. 

One thing to keep in mind when doing this is that the purpose of this is for creating a prototype or a starting point. It's likely that some of these sizes will need overridden or restyled, but it doesn't do any damage to have some basic styling ready when you're doing rapid development.

Stay tuned for some more write-ups on my methods as I work through the framework, and expect a repository publically available soon.