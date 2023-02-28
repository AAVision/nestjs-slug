import { Injectable } from '@nestjs/common';

interface SlugOptions {
  seperator?: string;
  lowerCase?: boolean;
  upperCase?: boolean;
  length?: number;
  trim?: boolean;
  timestamp?: boolean;
  trimBySepator?: number;
  removeSpecialCharacters?: boolean;
}

@Injectable()
export class SlugService {

  constructor() { }

  isSlug(text: string): boolean {
    return /\\s/g.test(text);
  }

  generateSlug(text: string, options?: SlugOptions): string {

    options?.removeSpecialCharacters ? text = text.replace(/[^\w ]/g, '') : text;
    var slug: string = text;
    let date = new Date();

    options?.trim ? slug = slug.replace(/^\s+|\s+$/gm, '') : slug;
    options?.lowerCase ? slug = slug.toLowerCase() : slug;
    options?.upperCase ? slug = slug.toUpperCase() : slug;
    options?.length ? slug = slug.substring(0, options.length) : slug;
    options?.timestamp ? slug = slug + ` ${date.getDate()} ${date.getMonth()} ${date.getFullYear()}` : slug;

    slug = options?.seperator ? slug.replace(/ /g, options?.seperator) : slug.replace(/ /g, '-');

    if (options?.trimBySepator) {
      let trimIndex = options?.trimBySepator;
      const indexes = this.findIndexes(slug, !options?.seperator ? '-' : options?.seperator);
      if (indexes.length > trimIndex) {
        slug = slug.substring(0, indexes[trimIndex - 1]);
      }
    }

    return slug;
  }

  private findIndexes(text: string, letter: string) {
    return text
      .split('')
      .map((c, idx) => {
        if (c === letter) {
          return idx;
        }
        return -1;
      })
      .filter(element => element !== -1);
  }

}
