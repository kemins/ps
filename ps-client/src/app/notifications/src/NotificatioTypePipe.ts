import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'notificationType'})
export class NotificationTypePipe implements PipeTransform {
  private types = {
    success: 'success',
    fault: 'danger',
    default: 'success'
  };

  public transform(value: string): number {
   return this.types[value] || this.types.default;
  }
}
