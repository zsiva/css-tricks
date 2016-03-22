# css-tricks

## Turn Off Number Input Spinners
Turn off the little up down arrows on number inputs.
```css
input[type=number]{
    -moz-appearance:textfield;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```
## Create icons via Pseudo Elements and Material Icon Font
```html
<div data-icon="face">User</div>

```
```css
[data-icon]::before {
  content: attr(data-icon);
  font-family: 'Material Icons';
}

```
