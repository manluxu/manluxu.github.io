#### 1. How to add image in .html:
add directly: 
<pre><code>
<img src="https://s3.amazonaws.com/codecademy-content/courses/freelance-1/unit-2/salad.jpg" alt="Kale Caeasar Salad"/>
</code></pre>
#### 2. Change the img size in .css:
<pre><code>
img {
  height: 150px;
}
</code></pre>
#### 3. Assiagn element \<p> with a class, then changing font-things in .css:
    <p class="description"></p>
<pre><code>
    .description {
    font-size: 20px;
    }
</code></pre>
(Class selectors use a . before the class name:)
<pre><code>
.class-name {

}
</code></pre>
#### 4. Assiagn element \<p>with a id, then changing font-things in .css:
   \<p id="cook-time"></p>
<pre><code>
    #element-id {
    font-weight: bold;
    }
</code></pre>  
#### 5. in .css edit things like \<li>:
To select elements within a parent element, use a space between the selectors. Be sure to put the outside parent element before the child element:

<pre><code>
parent-element child-element {

}
</code></pre>
For example:
<pre><code>
ul li {
  list-style: square
}
</code></pre>
#### 6. To select tag elements with a specific class, chain the class selector to the end of the element selector with no space between:
<pre><code>
parent-element child-element {

}
</code></pre>
For example:
<pre><code>
p.time {
  color: gray;
}
</code></pre>
Where in .html have \<p class="time">.
#### 7. Muliple elements at one time:
You can add the same styles to many elements by separating the selector targets with commas:
<pre><code>
element1, element2, ... {

}
</code></pre>
For example:
<pre><code>
h1, h2, p, li {
  font-family: Helvetica;
}
</code></pre>
#### 8. Add backgound img:
for example
body {
  font-family: Georgia;
  background-image: url("https://s3.amazonaws.com/codecademy-content/courses/learn-css-selectors-visual-rules/hypnotize_bg.png");
}
#### Takeaway from quiz:
- selecter **id** more specific than **class** and **tags**



