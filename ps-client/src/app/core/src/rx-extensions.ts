import { Observable } from 'rxjs';
import * as _ from 'lodash';

declare module "rxjs/Observable" {
  interface Observable<T> {
    readFile: (callback: ReaderCallback) => Observable<T>;
  }
}

interface ReaderCallback {
  (reader: FileReader, file: File): void;
}

function readFile(readerCallback: ReaderCallback) {
  return Observable.create(subscriber => {
    return this.subscribe(event => {
        const total = event.target.files.length;
        let processed = 0;

        _.forEach(event.target.files, file => {
          const reader = new FileReader();

          reader.onload = (event: ProgressEvent) => {
            processed++;

            subscriber.next({
              file,
              data: event.currentTarget['result']
            });

            if (processed === total) {
              subscriber.complete();
            }
          };

          reader.onerror = (error) => subscriber.error(error);

          try {
            readerCallback(reader, file);
          } catch (err) {
            subscriber.error(err);
          }
        });
      },
      err => subscriber.error(err),
      () => subscriber.complete());
  });
}
Observable.prototype.readFile = readFile;

export default {};