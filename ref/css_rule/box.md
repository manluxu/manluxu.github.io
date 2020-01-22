All elements on a web page are interpreted by the browser as “living” inside of a box. This is what is meant by the box model.

For example, when you change the background color of an element, you change the background color of its entire box.

In this lesson, you’ll learn about the following aspects of the box model:

- The dimensions of an element’s box.
- The borders of an element’s box.
- The paddings of an element’s box.
- The margins of an element’s box.

following properties impact an element’s display:

- height
- width
- padding
- border
- margin
- overflow
![Imgur](https://i.imgur.com/l0jmWzG.png)
The properties include:

- Width and height — specifies the width and height of the content area.
- Padding — specifies the amount of space between the content area and the border.
- Border — specifies the thickness and style of the border surrounding the content area and padding.
- Margin — specifies the amount of space between the border and the outside edge of the element.

#### Width and height
An element’s content has two dimensions: a height and a width. By default, the dimensions of an HTML box are set to hold the raw contents of the box.

The CSS height and width properties can be used to modify these default dimensions. (When the width and height of an element are set in pixels, it will be the same size on all devices — an element that fills a laptop screen will overflow a mobile screen.)

##### head - nav - id banner - is main ....

#### Borders
A border is a line that surrounds an element, like a frame around a painting. Borders can be set with a specific width, style, and color:
- width — The thickness of the border. A border’s thickness can be set in pixels or with one of the following keywords: thin, medium, or thick.
- style — The design of the border. Web browsers can render any of 10 different styles. Some of these styles include: none, dotted, and solid.
- color — The color of the border. Web browsers can render colors using a few different formats, including 140 built-in color keywords.
for example:
<pre><code>
p {
  border: 3px solid coral;
}

p.content-header {
  height: 80px;
  width: 240px;
  border: solid coral;
}
</code></pre>

- border-radius: The code in the example above will set all four corners of the border to a radius of 5 pixels (i.e. the same curvature that a circle with radius 5 pixels would have).

You can create a border that is a perfect circle by setting the radius equal to the height of the box, or to 100%.

#### Padding 1
The space between the contents of a box and the borders of a box is known as padding. Padding is like the space between a picture and the frame surrounding it. In CSS, you can modify this space with the padding property.

The padding property is often used to expand the background color and make content look less cramped.

If you want to be more specific about the amount of padding on each side of a box’s content, you can use the following properties: padding-top padding-right padding-bottom padding-left.

#### Padding 2
Another implementation of the padding property lets you specify exactly how much padding there should be on each side of the content in a single declaration.
<pre><code>
p.content-header {
  border: 3px solid grey;
  padding: 6px 11px 4px 9px;
}
</code></pre>
In order, it specifies the amount of padding on the top (6 pixels), right (11 pixels), bottom (4 pixels), and left (9 pixels) sides of the content.
 
When using this implementation of the padding property, we must specify a padding value for all four sides of the element.

However, if the top and bottom values for padding will equal each other, and the left and right values for padding will also equal each other, you can use the following shortcut:
<pre><code>
p.content-header {
  padding: 5px 10px;
}
</code></pre>
The first value, 5px, sets the padding value for the top and bottom sides of the content. The second value, 10px, sets the padding value for the left and right sides of the content.

#### Margins 1
Margin refers to the space directly outside of the box. The margin property is used to specify the size of this space.

If you want to be even more specific about the amount of margin on each side of a box, you can use the following properties: margin-top margin-right margin-bottom margin-left. Each property affects the margin on only one side of the box, providing more flexibility in customization.

#### Margins 2
A similar implementation of the margin property is used to specify exactly how much margin there should be on each side of the box in a single declaration.
<pre><code>
p {
  margin: 6px 10px 5px 12px;
}
</code></pre>
In the example above, the four values 6px 10px 5px 12px refer to the amount of margin around the box in a clockwise rotation. In order, it specifies the amount of margin on the top (6 pixels), right (10 pixels), bottom (5 pixels), and left (12 pixels) sides of the box.

- The margin property also lets you center content. However, you must follow a few syntax requirements. Take a look at the following example:
<pre><code>
div {
  margin: 0 auto;
}
</code></pre>

In the example above, margin: 0 auto; will center the divs in their containing elements. The 0 sets the top and bottom margins to 0 pixels. The auto value instructs the browser to adjust the left and right margins until the element is centered within its containing element.

In order to center an element, a width must be set for that element. Otherwise, the width of the div will be automatically set to the full width of its containing element, like the <body>, for example. It’s not possible to center an element that takes up the full width of the page.
<pre><code>
div.headline {
  width: 400px;
  margin: 0 auto;
}
</code></pre>  
  
In the example above, the width of the div is set to 400 pixels, which is less than the width of most screens. This will cause the div to center within a containing element that is greater than 400 pixels wide.

#### Margin Collapse
Horizaontal margins add, but vertical mergins do not add. (left right add, top bottom do not)
![Imgur](https://i.imgur.com/zBa9sfa.png)

#### Minimum and Maximum Height and Width
Because a web page can be viewed through displays of differing screen size, the content on the web page can suffer from those changes in size. To avoid this problem, CSS offers two properties that can limit how narrow or how wide an element’s box can be sized to.
- min-width — this property ensures a minimum width of an element’s box.
- max-width — this property ensures a maximum width of an element’s box.
<pre><code>
p {
  min-width: 300px;
  max-width: 600px;
}
</code></pre>
In the example above, the width of all paragraphs will not shrink below 300 pixels, nor will the width exceed 600 pixels.
You can also limit the minimum and maximum height of an element.
- min-height — this property ensures a minimum height for an element’s box.
- max-height — this property ensures a maximum height of an element’s box.

#### Overflow
All of the components of the box model comprise an element’s size. For example, an image that has the following dimensions is 364 pixels wide and 244 pixels tall.

300 pixels wide

200 pixels tall

10 pixels padding on the left and right

10 pixels padding on the top and bottom

2 pixels border on the left and right

2 pixels border on the top and bottom

20 pixels margin on the left and right

10 pixels margin on the top and bottom

The total dimensions (364px by 244px) are calculated by adding all of the vertical dimensions together and all of the horizontal dimensions together. Sometimes, these components result in an element that is larger than the parent’s containing area.

How can we ensure that we can view all of an element that is larger than its parent’s containing area?

The overflow property controls what happens to content that spills, or overflows, outside its box. It can be set to one of the following values:

- hidden - when set to this value, any content that overflows will be hidden from view.
- scroll - when set to this value, a scrollbar will be added to the element’s box so that the rest of the content can be viewed by scrolling.
- visible - when set to this value, the overflow content will be displayed outside of the containing element. Note, this is the default value.
<pre><code>
p {
  overflow: scroll; 
}
</code></pre>
In the example above, if any of the paragraph content overflows (perhaps a user resizes their browser window), a scrollbar will appear so that users can view the rest of the content.

The overflow property is set on a parent element to instruct a web browser how to render child elements. For example, if a div’s overflow property is set to scroll, all children of this div will display overflowing content with a scroll bar.

#### Resetting Defaults
All major web browsers have a default stylesheet they use in the absence of an external stylesheet. These default stylesheets are known as user agent stylesheets. In this case, the term “user agent“ is a technical term for the browser.

User agent stylesheets often have default CSS rules that set default values for padding and margin. This affects how the browser displays HTML elements, which can make it difficult for a developer to design or style a web page.

Many developers choose to reset these default values so that they can truly work with a clean slate.
<pre><code>
* {
  margin: 0;
  padding: 0;
}
</code></pre>

The code in the example above resets the default margin and padding values of all HTML elements. It is often the first CSS rule in an external stylesheet.

Note that both properties are both set to 0. When these properties are set to 0, they do not require a unit of measurement.

#### Visibility
Elements can be hidden from view with the visibility property.

The visibility property can be set to one of the following values:

- hidden — hides an element.
- visible — displays an element.

that users can still view the contents of the list item (e.g., Donate) by viewing the source code in their browser. Furthermore, the web page will only hide the contents of the element. It will still leave an empty space where the element is intended to display.

Note: What’s the difference between display: none and visibility: hidden? An element with display: none will be completely removed from the web page. An element with visibility: hidden, however, will not be visible on the web page, but the space reserved for it will.

#### Box Model: Content-Box
 In CSS, the box-sizing property controls the type of box model the browser should use when interpreting a web page.

The default value of this property is content-box. This is the same box model that is affected by border thickness and padding.
![Imgur](https://i.imgur.com/LjaVDq1.png)


#### Box Model: Border-Box
<pre><code>
* {
  box-sizing: border-box;
}
</code></pre>
he code in the example above resets the box model to border-box for all HTML elements. This new box model avoids the dimensional issues that exist in the former box model you learned about.

In this box model, the height and width of the box will remain fixed. The border thickness and padding will be included inside of the box, which means the overall dimensions of the box do not change.
![Imgur](https://i.imgur.com/fQVhAOk.png)
<h1>Hello World</h1>
<pre><code>
* {
  box-sizing: border-box;
}

h1 {
  border: 1px solid black;
  height: 200px;
  width: 300px;
  padding: 10px;
}
</code></pre>
In the example above, the height of the box would remain at 200 pixels and the width would remain at 300 pixels. The border thickness and padding would remain entirely inside of the box.

Let’s review what you learned:

- In the default box model, box dimensions are affected by border thickness and padding.
- The box-sizing property controls the box model used by the browser.
- The default value of the box-sizing property is content-box.
- The value for the new box model is border-box.
- The border-box model is not affected by border thickness or padding.

### Devtool tips:
In chrome, can edit css html... selcting editting, remember to save.

Heightlight (red boxes) the content: in the html, plus
<pre><code>
* {
  border: 1px solid red !important;
}
</code></pre>

used for easy inspect in Devtools.

The width of a children of a parent can be define as \% when (box-sizing: content-box; calculate the content only) (box-sizing: border-box; calculated content + padding + border)






