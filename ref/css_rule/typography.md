- The defulat typeface aka font-family is Times New Roman.
- Limit the number of typefaces uesed on a web page to 2 or 3.
- When the name of a typeface consists of more than one word, it must be enclosed in double quotes (otherwise it will not be recognized), like "Courier New"
- font-weight has normaol and bold. 400 is the defult of most text, 700 is bold, 300 is light.
- header is where the navigation menu is, then banner is the img following.
- word-spacing is used for increase the spacing between words in a body of text. 0.25em, 0.3em. The preferred unit is ems.
- letter-spacing is used for increase the spacing between individual letters.
- text-transform is used for change between uppercase and lowercase.
- text-align is used for change between left, center, right.
- line-height used to make text on a web page easier to read.
-- A unitless number, such as 1.2. This number is an absolute value that will compute the line height as a ratio of the font size.
-- A number specified by unit, such as 12px. This number can be any valid CSS unit, such as pixels, percents, ems, or rems.
![Imgur](https://i.imgur.com/mRIu8To.png)
Generally, the unitless ratio value is the preferred method, since it is responsive and based exclusively on the current font size. In other words, if we change the font size, a unitless line-height would automatically readjust, whereas the pixel value would remain static.
- Fallback Fonts. font-family: "Garamond", "Times", serif;
it says:
Use the Garamond font for all <h1> elements on the web page.
If Garamond is not available, use the Times font.
If Garamond and Times are not available, use any serif font pre-installed on the user’s computer.
-  Fallback fonts help ensure a consistent experience for the diverse audience of users that visit a site.
- Linking Fonts: Google Fonts is one such directory of thousands of open-source fonts. (with font-weight and font-sytle properties.) http://fonts.google.com/
Then add <link href...> to <head>
add font-family: "" to css
- Another way is dont use <link>, but font-face:
copy the font link to browser, then focus on latin. add it to .css top
- if you dont want the google style, you can modify @font-face to use local as well.
<pre><code>
@font-face {
  font-family: "name";
  src: url("relative-path") format('format');
}
</code></pre>
then you could use in the selecter with font-family:"name".
