<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# nestjs-slug
It's a simple idea for changing any text into a slug for the url.



## Install it


```
$ npm install nestjs-slug --save
```

## Package uses

The package consists of two methods:

```
generate(text: string, options?: {
    separator?: string;
    lowerCase?: boolean;
    upperCase?: boolean;
    length?: number;
    trim?: boolean;
    timestamp?: boolean;
    trimBySeparator?: number;
    removeSpecialCharacters?: boolean;
}) : string

```

```
  isSlug(text: string): boolean  <-- to check if a slug
```
## Examples

importing `SlugService` in `app.service.ts`:
```bash
  import { Injectable } from '@nestjs/common';
  import { SlugService } from 'nestjs-slug'; <---

  @Injectable()
  export class AppService {

    slug:string = "";

    constructor(
      private slugService: SlugService  <---
    ){}

    this.slug = this.slugService.generate("iphone 14 pro max black")
    
  }

  // returns iphone-14-pro-max-black

```

```bash
  import { Injectable } from '@nestjs/common';
  import { SlugService } from 'nestjs-slug'; <---

  @Injectable()
  export class AppService {

    is_slug:bool = false;


    constructor(
      private slugService: SlugService  <---
    ){}

    this.is_slug = this.slugService.isSlug("iphone-14-pro-max-black")

    // returns true
    
  }
```

## License

nestjs-slug is [MIT licensed](LICENSE).


