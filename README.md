# evn

> Manage events in JavaScript

[![npm](https://img.shields.io/npm/v/evn.svg?style=flat-square)](https://www.npmjs.com/package/evn)
[![npm](https://img.shields.io/npm/dt/evn.svg?style=flat-square)](https://www.npmjs.com/package/evn)

## Installation

```
npm install --save evn
```

## API

### evn.add(id, scope, callback)

Add a new event listener.

#### id

A `string` withe the event ID.

#### callback

The function that will be executed when the event is executed.

#### scope

The value of `this` where the `callback` will be executed.

### evn.send(id[, args])

Emit an event.

#### id

The event ID that will be executed.

#### args (optionally)

Arguments for the callback.

## License

&copy; [MIT LICENSE](./LICENSE)
