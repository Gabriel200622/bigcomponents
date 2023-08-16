# BigComponents

## Packages

- `@bigcomponents/core` – core components library
- `@bigcomponents/hooks` – collection of hooks for state and UI management

## Installation

```bash
# With yarn
yarn add @bigcomponents/core @bigcomponents/hooks

# With npm
npm i @bigcomponents/core @bigcomponents/hooks

# With pnpm
pnpm add @bigcomponents/core @bigcomponents/hooks
```

## Quick Start

```js
import "@bigcomponents/core/styles.css";
import { Button } from "@bigcomponents/core";

const App = () => {
    return (
        <Button>Hello World!</Button>;
    )
};
```
