import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value, args);

    if(!value) return null;
    if(!args) return value;

    args = args.toLowerCase();


    return value.filter(function(item){
      return item.category.toLowerCase() === args;
    });
  }

}
