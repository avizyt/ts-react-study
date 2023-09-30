# The Types in TypeScript

## What are types?

-   A **type** is a resusable set of rules.
-   A type may have **properties** and **functions**
-   It ca use reused over and over again.
-   By reused a **type** means you arecreating an **instance** of it.
-   In typeScript, the most imporatnt items is the **type**

## How does **types** work?

We know JavaScript have types such as Number, string, Boolean, array and many others. But when you write JS code you don't declare explicitly the types of aby items, it is set during runtime. The problem is we don;t have any control over the it. So, when a bug detected we don't know for which types are in problem. And in TypeScript, you can also set your own **type**s.

Important:

-   In TypeScript(TS), name of the type is not important but the shape of it.

## Types

### The **any** type

-   The **any** types is a dynamic type that can be set to any other type.
-   **any** type can be set to anything or reset to anything.
-   Compiler will not check it for you. means, during development it will not provide you with any warning regarding the variable.
-   So, if possible avoid **any** type. - **WHEN To USE** - In large application, It depends on multiple languages, external data so, it can't be possible to know every types the application will get then **any** will be the savior or escape hatch.

Practice code in Playground
[**any** type example](https://www.typescriptlang.org/play?#code/DYUwLgBAtgngcgQyiAXBBA7GEC8EBEAggG4CWAVqWPgFA0DGA9hgM6OgB0wjA5gBSxEyAJR1BSELggBGAEwBmACwBWOk1bsQXXgPgTRNccikYQAdwiEATlYQw+oo1oAOAVxYALPvgAqMZ5IwjK4QGBIQHiBWWvii6myc3PxOwkA)

### The **unknown** type

-   The **unknown** type was introduced in TS version 3, It shares some similarities with the **any** type.
-   Variables of the **unknown** type can initially hold values of any data type adn can be changes to other types later on.
-   Unlike the **any** type, you can't directly access or modify members of a variable with the unknown type, nor can you assign it to another without first checking its actual type. This enforces stronger type safety.

Practice Code in Playground
[**unknown** type example](https://www.typescriptlang.org/play?#code/DYUwLgBAlgggtgOQK5wEYgE4C4JIHYDWeA9gO54QC8EAjAEwBQAxsXgM7GgB0wxA5gApYiFOgwBKBg2HI0mKhABEAT2JIIAQwwhchEuUXNWHbr0EzRmSdPiyxCvCFIQYGDBuUDJAem-RblhhcAA5IbAAWAnQAzD5+LOycIDz8QgFyElJQAGYQaSIZ0OxgGnhMIMS5ru7K4gDeDBD+BWIhYZExkgC+UgkmyWb5dlZAA)

### The **union** type

first take this example

```typescript
let writer = Math.random() > 0.5 ? "A novelist" : undefined;
```

Now , tell me what is the type of the writer, it could be either **undefined** or a **string**.

-   This kind of either or type called a **union** type.
-   With **union** type you does not need to know the type of a variable exactly but you can give the compiler multiple options to handle types of the variable.
-   The **union** use pipe (|) to constitute different type.

```typescript
let writer: string | undefined;

or;

let writer: novelist | essayist | undefined;
```

NOTE: - The order in **union** types is not important _undefined_ before _string_ is same as _string_ before _undefined_
