# OpenLight
An Open source Javascript library for easily adding dark mode to websites

# Installation Offline
#### Add the following line to your HTML file
```html
<script src="openLight.js"></script>
```
# Installation Online
#### Add the folling line to your HTML file
```html
<script src="https://codepen.io/jp-vela/pen/KKdLaax.js"></script>
```

# Usage
Within the HTML you may change the default color schemes with the following Javascript code in a script tag
```javascript
//Changing the default colors
openLightColors = {
    darkBackgroundStyle: "rgb(30,30,38)",
    lightBackgroundStyle: "rgb(255,255,255)",
    darkForegroundStyle: "rgb(240,240,250)",
    lightForegroundStyle: "rgb(30,30,40)"
}
```
To add dark/light mode to elements, add the prefered classes to the element.
Add dark mode to the the text foreground of an element with the following HTML
```html
<p class="lightDarkF light">Some text</p>
```

```html
<p class="lightDarkB light">Some text</p>
```

```html
<p class="lightDarkF dark">Some text</p>
```

```html
<p class="lightDarkB dark">Some text</p>
```

The lightDarkF class can be changed to lightDarkB or it could be added to add dark mode to the background.
The light class can be changed dark to change the color when in light mode.

To toggle between dark and light mode, run the toggleMode() with a button.
```html
<button onclick="toggleMode();">Toggle</button>
```
