<h1 align="center">react-hide-on-scroll</h1>
<div align="center">
  <strong>A react component library to hide/show elements based on scroll</strong>
  <p><a href="https://pradeep-selva.github.io/react-hide-on-scroll/">View Demo</a></p>
  <p><a href="https://www.npmjs.com/package/react-hide-on-scroll">Visit on npm</a></p>
</div>

## Installation

- To install from npm, run-

```
npm install --save react-hide-on-scroll
```

- To install locally, clone this repo and in root directory, run-

```
npm run setup
```

## Usage

- Pass the element to be hidden as children to the components.

```js
<HideBetween div startDivID="first" endDivID="third">
  <div className={classNames(styles.hide1to3, styles.sticky)}>
    hidden from div 1 to 3
  </div>
</HideBetween>
```

```js
<HideOn divID="third">
  <div className={classNames(styles.sticky, styles.hideOnDiv)}>
    Hidden from third div
  </div>
</HideOn>
```

```js
<HideScroll variant="down">
  <div className={classNames(styles.sticky, styles.hideScrollDown)}>
    Hidden on scrolling down
  </div>
</HideScroll>
```

```js
<HideDuring>
  <div className={classNames(styles.sticky, styles.hideDuring)}>
    Hidden while scrolling
  </div>
</HideDuring>
```

## API

<details>
  <summary>HideBetween</summary>

To hide/show an element between 2 divs or between 2 specified heights(px)

|     Props      | Description                                                                       | Type      | isOptional |
| :------------: | --------------------------------------------------------------------------------- | --------- | ---------- |
|    children    | The required react element that needs to be hidden                                | ReactNode | false      |
|      div       | To hide between 2 specified divs                                                  | boolean   | true       |
|     height     | To hide between 2 specified heights                                               | boolean   | true       |
|    inverse     | Specifying this will show the element instead of hiding, in specified breakpoints | boolean   | true       |
|   startDivID   | ID of the div to start hiding from                                                | string    | true       |
|    endDivID    | ID of the div to stop hiding at                                                   | string    | true       |
| startDivOffset | To set an offset on the start position(in pixels) -- usable only with div prop    | number    | true       |
|  endDivOffset  | To set an offset on the end position(in pixels) -- usable only with div prop      | number    | true       |
|  startHeight   | Height from where hiding must begin (in pixels)                                   | number    | true       |
|   endHeight    | Height where hiding must end (in pixels)                                          | number    | true       |

</details>

<details>
  <summary>HideOn</summary>

To hide/show an element when reached a div or a specified height(px)

|     Props      | Description                                                                       | Type      | isOptional |
| :------------: | --------------------------------------------------------------------------------- | --------- | ---------- |
|    children    | The required react element that needs to be hidden                                | ReactNode | false      |
|     atDiv      | To start hiding at a div                                                          | boolean   | true       |
|    atHeight    | To start hiding at a height                                                       | boolean   | true       |
|    inverse     | Specifying this will show the element instead of hiding, in specified breakpoints | boolean   | true       |
|     divID      | ID of the div to start hiding from                                                | string    | true       |
|     offset     | To set an offset on the hiding position(in pixels) -- usable only with div prop   | number    | true       |
|     height     | Height from where hiding must begin (in pixels)                                   | number    | true       |
| showOnPageInit | To specify whether the element must be visible when the component first loads     | boolean   | true       |

</details>

<details>
  <summary>HideDuring</summary>

To hide/show an element during a scroll. (scroll to make element hidden/shown)

|  Props   | Description                                           | Type      | isOptional |
| :------: | ----------------------------------------------------- | --------- | ---------- |
| children | The required react element that needs to be hidden    | ReactNode | false      |
| inverse  | Shows an element while scrolling instead of hiding it | Boolean   | true       |

</details>

<details>
  <summary>Hide</summary>

To hide an element on scrolling up or down.

|     Props      | Description                                                                             | Type           | isOptional |
| :------------: | --------------------------------------------------------------------------------------- | -------------- | ---------- |
|    children    | The required react element that needs to be hidden                                      | ReactNode      | false      |
|    variant     | To specify whether the element must be hidden on scrolling up or down (down by default) | "up" or "down" | true       |
| showOnPageInit | To specify whether the element must be visible when the component first loads           | boolean        | true       |

</details>

## Built using

- Typescript
- React
- create-react-library

## License

[MIT](LICENSE) © [Pradeep-selva](https://github.com/Pradeep-selva)
