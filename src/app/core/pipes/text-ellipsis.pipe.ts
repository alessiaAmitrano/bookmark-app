import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEllipsis'
})
export class TextEllipsisPipe implements PipeTransform {
  // if a maxLength is passed, a substring is returned
  transform(text: any, maxLength?: any): any {
    if (maxLength === undefined) {
      return text;
    }

    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }
}
