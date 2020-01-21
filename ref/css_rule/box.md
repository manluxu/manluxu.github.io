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

