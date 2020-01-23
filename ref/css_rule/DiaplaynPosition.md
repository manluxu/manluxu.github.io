### Position
Take a look at the block-level elements in the image below:
![Imgur](https://i.imgur.com/pX0tJwB.png)
Block-level elements like these boxes create a block the full width of their parent elements, and they prevent other elements from appearing in the same horizontal space. The boxes in the image above were created with the following CSS:
<pre><code>
.boxes {
  width: 120px;
  height: 70px;
}
</code></pre>
and the following HTML:
<pre><code>
<div class="boxes"></div>
<div class="boxes"></div>
</code></pre>
Notice the block-level elements in the image above take up their own line of space and therefore don’t overlap each other. In the browser to the right you can see block-level elements also consistently appear on the left side of the browser. This is the default position for block-level elements.

he default position of an element can be changed by setting its position property. The position property can take one of four values:

- static - the default value (it does not need to be specified) (Notice that setting position to static does nothing. That’s because static simply refers to the default behavior.)
- relative
- absolute
- fixed

#### Relative
One way to modify the default position of an element is by setting its position property to relative.
the <div> has been positioned using two of the four offset properties. The valid offset properties are:

- top - moves the element down.
- bottom - moves the element up.
- left - moves the element right.
- right - moves the element left.
from its default static position.
(Note that offset properties will not work if the value of the element’s position property is the default static.)

#### Absolute
Another way of modifying the position of an element is by setting its position to absolute.

When an element’s position is set to absolute all other elements on the page will ignore the element and act like it is not present on the page. The element will be positioned relative to its closest positioned parent element.

#### Fixed
When an element’s position is set to absolute, as in the last exercise, the element will scroll with the rest of the document when a user scrolls.

We can fix an element to a specific position on the page (regardless of user scrolling) by setting its position to fixed.

So the difference between absolute and fixed is whether will move with otehrs when scorlling, the fixed twchnique is often used for navigation bars on a web page.

#### Z-Index
The z-index property controls how far “back” or how far “forward” an element should appear on the web page when elements overlap. This can be thought of the depth of elements, with deeper elements appearing behind shallower elements.

The z-index property accepts integer values. Depending on their values, the integers instruct the browser on the order in which elements should be displayed on the web page.

The greater the number is, the forward (shallow, up) the element is located.

#### Inline Display
Every HTML element has a default display value that dictates if it can share horizontal space with other elements. Some elements fill the entire browser from left to right regardless of the size of their content. Other elements only take up as much horizontal space as their content requires and can be directly next to other elements.

In this lesson, we’ll cover three values for the display property: inline, block, and inline-block.

The default display for some tags, such as <em>, <strong>, and <a>, is called inline. Inline elements have a box that wraps tightly around their content, only taking up the amount of space necessary to display their content and not requiring a new line after each element. The height and width of these elements cannot be specified in the CSS document. For example, the text of an anchor tag (<a>) will, by default, be displayed on the same line as the surrounding text, and it will only be as wide as necessary to contain its content. inline elements cannot be altered in size with the height or width CSS properties.

see ref : https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

The CSS display property provides the ability to make any element an inline element. This includes elements that are not inline by default such as paragraphs, divs, and headings.
<pre><code>
h1 {
  display: inline;
}
</code></pre>

The CSS in the example above will change the display of all <h1> elements to inline. The browser will render <h1> elements on the same line as other inline elements immediately before or after them (if there are any).

#### Block Display
Some elements are not displayed in the same line as the content around them. These are called block-level elements. These elements fill the entire width of the page by default, but their width property can also be set. Unless otherwise specified, they are the height necessary to accommodate their content.

Elements that are block-level by default include all levels of heading elements (<h1> through <h6>), <p>, <div> and <footer>. For a complete list of block level elements, ref https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
<pre><code>
strong {
  display: block;
}
</code></pre>
In the example above, all <strong> elements will be displayed on their own line, with no content directly on either side of them even though their contents may not fill the width of most computer screens.

#### Inline-Block Display
The third value for the display property is inline-block. Inline-block display combines features of both inline and block elements. Inline-block elements can appear next to each other and we can specify their dimensions using the width and height properties. Images are the best example of default inline-block elements.

For example, <div>s in the CSS below will be displayed on the same line and with the specified dimensions:
<pre><code>
<div class="rectangle">
  <p>I’m a rectangle!</p>
</div>
<div class="rectangle">
  <p>So am I!</p>
</div>
<div class="rectangle">
  <p>Me three!</p>
</div>
</code></pre>

<pre><code>
.rectangle {
  display: inline-block;
  width: 200px;
  height: 300px;
}
</code></pre>

In the example above, there are three rectangular divs that each contain a paragraph of text. The .rectangle <div>s will all appear inline (provided there is enough space from left to right) with a width of 200 pixels and height of 300 pixels, even though the text inside of them may not require 200 pixels by 300 pixels of space.


#### Float
So far, you’ve learned how to specify the exact position of an element using offset properties. If you’re simply interested in moving an element as far left or as far right as possible on the page, you can use the float property.

The float property can be set to one of two values:

- left - this value will move, or float, elements as far left as possible.
- right - this value will move elements as far right as possible.

Floated elements must have a width specified, as in the example above. Otherwise, the element will assume the full width of its containing element, and changing the float value will not yield any visible results.

#### Clear
