# @sanity/components

**This is a work-in-progress issue** detailing steps towards evolving our React components to be part of an easy-to-use design system.

- Banners
  - [ ] [`<Banner />`](#banner-)
- Buttons
  - [ ] [`<Button />`](#button-)
  - [ ] [`<ButtonGrid />`](#buttongrid-)
  - [ ] [`<ButtonGroup />`](#buttongroup-)
- Cards
  - [ ] [`<Card />`](#card-)
- Chips
  - [ ] [`<Chip />`](#chip-)
- Data tables
  - [ ] [`<DataTable />`](#datatable-)
- Drawers
  - [ ] [`<NavDrawer />`](#navdrawer-)
  - [ ] [`<SearchDrawer />`](#searchdrawer-)
- Menus
  - [ ] [`<Menu />`](#menu-)
- Overlays
  - [ ] [`<Dialog />`](#dialog-)
  - [ ] [`<PopOver />`](#popover-)
  - [ ] [`<Tooltip />`](#tooltip-)
- Inputs
  - [ ] [`<Autosuggest />`](#autosuggest-)
  - [ ] [`<BlockTextInput />`](#blocktextinput-)
  - [ ] [`<CheckboxInput />`](#checkboxinput-)
  - [ ] [`<CodeInput />`](#codeinput-)
  - [ ] [`<GeoPointInput />`](#geopointinput-)
  - [ ] [`<ImageInput />`](#imageinput-)
  - [ ] [`<RadioInput />`](#radioinput-)
  - [ ] [`<TextInput />`](#textinput-)
  - [ ] [`<SelectInput />`](#selectinput-)
  - [ ] [`<StringInput />`](#stringinput-)
  - [ ] [`<VideoInput />`](#videoinput-)
- Progress indicators
  - [ ] [`<LinearProgress />`](#linearprogress-)
  - [ ] [`<CircularProgress />`](#circularprogress-)
- Typography
  - [ ] [`<Code />`](#code-)
  - [ ] [`<FootNoteList />`](#footnotelist-)
  - [ ] [`<FootNoteItem />`](#footnoteitem-)
  - [ ] [`<Heading />`](#heading-)
  - [ ] [`<List />`](#list-)
  - [ ] [`<ListItem />`](#listitem-)
  - [ ] [`<Text />`](#text-)
  - [ ] [`<TextLink />`](#textlink-)

## Banners

### `<Banner />`

...

## Cards

### `<Card />`

...

## Chips

### `<Chip />`

...

## Data tables

### `<DataTable />`

...

## Drawers

### `<NavDrawer />`

...

### `<SearchDrawer />`

...

## Menus

### `<Menu />`

...

## Overlays

### `<Dialog />`

...

### `<PopOver />`

...

### `<Tooltip />`

...

## Inputs

### `<Button />`

Importing:

```jsx
import {Button} from 'part:@sanity/components'
// or
import Button from 'part:@sanity/components/button'
```

#### Property: `bleed`

Type: `boolean | undefined`

```jsx
<Button>Label</Button>
<Button bleed>Label</Button>
```

#### Property: `color`

Type: `"primary" | "danger" | "success" | undefined`

```jsx
<Button>Label</Button>
<Button color="primary">Label</Button>
<Button color="danger">Label</Button>
<Button color="success">Label</Button>
```

#### Property: `ghost`

Type: `boolean | undefined`

When `true` renders the button with an outline.

```jsx
<Button>Label</Button>
<Button ghost>Label</Button>
```

#### Property: `type`

Type: `"submit" | "reset" | "link" | undefined`

```jsx
// Push button
<Button>Label</Button>

// Submit button
<Button type="submit">Label</Button>

// Reset button
<Button type="reset">Label</Button>

// Link button
<Button type="link" href="/">Label</Button>
```

### `<StringInput />`

...

### `<TextInput />`

...

### `<BlockTextInput />`

...

### `<CheckboxInput />`

...

### `<DropdownInput />`

...

### `<RadioInput />`

...

## Progress indicators

### `<LinearProgress />`

...

### `<CircularProgress />`

...

## Typography

...

### `<Heading />`

```jsx
<Heading size="title1" level={1} />
<Heading size="title2" level={2} />
<Heading size="title3" level={3} />
<Heading size="large" level={4} />
```

...

### `<Text />`

...

### `<TextLink />`

...

### `<List />`

...

### `<ListItem />`

...

### `<FootNoteList />`

...

### `<FootNoteItem />`

...

### `<Code />`

...

---

_More to come._
