:beginner: _**The Key Organizations**_  



The below are the various organizations that are responsible for developing and maintaining the standards and specifications for the web and software development.

| Organization | Description                                                                 | Website                  |
|--------------|-----------------------------------------------------------------------------|--------------------------|
| IETF         | The Internet Engineering Task Force develops and promotes voluntary Internet standards, in particular the standards that comprise the Internet protocol suite (TCP/IP). | [ietf.org](https://www.ietf.org/)    |
| WHATWG       | The Web Hypertext Application Technology Working Group is a community of people interested in evolving the web through standards and specifications. | [whatwg.org](https://whatwg.org/)      |
| W3C          | The World Wide Web Consortium is an international community that develops open standards to ensure the long-term growth of the Web. | [w3.org](https://www.w3.org/)      |


:beginner: _**Syntax guide**_  

| Feature                  | JavaScript Modules                                                                 | Java Modules                                                                 |
|--------------------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| Definition               | A way to organize and reuse code in JavaScript.                                     | A way to package Java classes and interfaces.                                |
| Syntax                   | `import` and `export` keywords.                                                    | `module-info.java` file and `requires` keyword.                              |
| Loading                  | Dynamically loaded at runtime.                                                     | Statically loaded at compile time.                                           |
| Scope                    | File-based scope.                                                                  | Package-based scope.                                                         |
| Dependency Management    | Managed through package managers like npm.                                         | Managed through build tools like Maven or Gradle.                            |
| Encapsulation            | Can export specific bindings (variables, functions, classes).                      | Can export specific packages and control access to internal packages.        |
| Compatibility            | ES6 modules are supported in modern browsers and Node.js.                          | Introduced in Java 9, backward compatible with older Java versions.          |
| Use Case                 | Primarily used for web development and Node.js applications.                       | Used for large-scale enterprise applications and libraries.                  |
| Example                  | `export function myFunction() {}` and `import { myFunction } from './myModule.js';` | `module my.module { requires another.module; exports my.package; }`          |


:beginner: _**Syntax variations**_  


| Data Type      | Java                                      | JavaScript                                | Angular                                      |
|----------------|-------------------------------------------|-------------------------------------------|----------------------------------------------|
| String         | `String`                                  | `String`                                  | `string`                                     |
| Number         | `int`, `float`, `double`, `long`          | `Number`                                  | `number`                                     |
| Boolean        | `boolean`                                 | `Boolean`                                 | `boolean`                                    |
| Array          | `int[]`, `String[]`, etc.                 | `Array`                                   | `Array`                                      |
| Object         | `Object`, custom classes                  | `Object`, custom objects                  | Custom classes, interfaces                   |
| Null           | `null`                                    | `null`                                    | `null`                                       |
| Undefined      | N/A                                       | `undefined`                               | `undefined`                                  |
| Any            | N/A                                       | `any` (TypeScript)                        | `any` (TypeScript)                           |
| Void           | `void`                                    | `undefined` (function return type)        | `void` (function return type)                |
| Tuple          | N/A                                       | `[type1, type2, ...]` (TypeScript)        | `[type1, type2, ...]` (TypeScript)           |
| Enum           | `enum`                                    | `enum` (TypeScript)                       | `enum` (TypeScript)                          |
| Symbol         | N/A                                       | `Symbol`                                  | `symbol`                                     |
| BigInt         | `BigInteger` (java.math.BigInteger)       | `BigInt`                                  | `BigInt`                                     |
