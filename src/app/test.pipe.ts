import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    console.log(value, args)
    let obj = []
    if(args){
      value.forEach((item,index)=>{
        if(args.indexOf(item.name) !== -1 ){
          obj.push(item)
        }
      })
    }
    return obj;
  }

}
