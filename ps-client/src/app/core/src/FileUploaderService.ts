import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FileUploaderService {
  uploadFiles(input): Observable<any> {
    return Observable.fromEvent<{data: any}>(input, 'change')
      .readFile((reader, file) => reader.readAsDataURL(file));
  }
}
