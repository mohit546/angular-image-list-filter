import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(value: any, field?: string, query?: any): any {
    if(!value) return null;
    if(!query) return value;

    query = query.toLowerCase();


    return value.filter(function(item){
      if(!field) {
        return JSON.stringify(item).toLowerCase().includes(query);
      } else {
        return item.category.toLowerCase() === query;
      }
    });
  }

}
