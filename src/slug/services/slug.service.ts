import { Injectable } from '@nestjs/common';

interface SlugOptions {
  separator?: string;
  lowerCase?: boolean;
  upperCase?: boolean;
  length?: number;
  trim?: boolean;
  timestamp?: boolean;
  trimBySeparator?: number;
  removeSpecialCharacters?: boolean;
}

@Injectable()
export class SlugService {

  constructor() { }

  isSlug(text: string): boolean {
    return /\\s/g.test(text);
  }

  generate(text: string, options?: SlugOptions): string {
    options?.removeSpecialCharacters ? text = text.replace(/[^\w ]/g, '') : text;
    let slug = text;

    options?.trim ? slug = slug.replace(/^\s+|\s+$/gm, '') : slug;
    options?.lowerCase ? slug = slug.toLowerCase() : slug;
    options?.upperCase ? slug = slug.toUpperCase() : slug;
    options?.length ? slug = slug.substring(0, options.length) : slug;

    if (options?.timestamp) {
      const date = new Date();
      slug += ` ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;
    }

    const separator = options?.separator ?? '-';
    slug = slug.split(' ').join(separator);

    if (options?.trimBySeparator) {
      const indexes: number[] = [];
      for(let i=0; i< slug.length; i++){
        if (slug[i] === separator) {
          indexes.push(i);
        }
      }

      if (indexes.length >= options.trimBySeparator) {
        slug = slug.substring(0, indexes[options.trimBySeparator - 1]);
      }
    }

    return slug;
  }

}
