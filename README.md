# Natural file and folder name generator

Auto generates random file and folder names that look perfectly natural.

_This is a fork of [natural-filename-generator](https://github.com/ChristianRich/natural-filename-generator/tree/master) by [Christian Rich](https://github.com/ChristianRich)._

### What has changed?

- ES5 to ES6
- JavaScript to TypeScript
- Mocha to Jest
- Dependencies and engines version upgrades

### Installation

```bash
npm install @sroohani/fs-name-gen
```

### Why?

For a recent project I had to auto generate a lot of file and folder names only they could not look auto generated!

Auto generated strings typically look sequential and are easy to spot e.g

file01.jpg  
file01.jpg  
file03.jpg

This module builds strings from:

- 4000 common English words
- 4000 celebrity names (dead and living)
- Names of countries and capitals
- Popular topics
- Random numbers (at random lengths)
- Dates (in various formats)

The generator uses a natural distribution curve following [Zipf's law](https://en.wikipedia.org/wiki/Zipf%27s_law)

### Example

```js
import { NaturalNameGenerator } from "@sroohani/fs-name-gen";

const g = new NaturalNameGenerator();

for (let i = 0; i < 100; i++) {
  let name = g.generate("jpg");
  console.log(name);
}
```
