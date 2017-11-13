import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PerformancePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'performance',
})
export class PerformancePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(performances:any[],stage) {
    return performances.filter(performance=>performance.modifier.stage==stage);
  }
}
