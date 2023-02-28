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
generateSlug(text: string, options?: {
    seperator?: string;
    lowerCase?: boolean;
    upperCase?: boolean;
    length?: number;
    trim?: boolean;
    timestamp?: boolean;
    trimBySepator?: number;
    removeSpecialCharacters?: boolean;
}) : string

```

```
  isSlug(text: string): boolean  <-- to check if a slug
```
## License

nestjs-slug is [MIT licensed](LICENSE).


