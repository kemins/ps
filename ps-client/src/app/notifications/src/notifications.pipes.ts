import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'notificationType'})
export class NotificationTypePipe implements PipeTransform {
    types = {
        success: 'success',
        fault: 'danger',
        default: 'success'
    };

    transform = (value:string):number => this.types[value] || this.types.default;
}
