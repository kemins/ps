import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import { AppSettings, PsHttp } from '../../core';
import { Profile } from './profile.model';
import { Headers } from 'ng2-file-upload';
import { Album } from './album.model';

@Injectable()
export class AlbumDataService {
  private albumUrl = AppSettings.getSetting('endpoint') + 'albums';

  public constructor(private http: PsHttp) {
  }

  public create(album: Album) {
    return this.http.post(this.albumUrl, {album})
      .map((response: Response) => response.json());
  }
}
