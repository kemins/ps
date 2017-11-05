import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AppSettings, PsHttp } from '../../core';
import { Profile } from './profile.model';
import { IAlbum } from './IAlbum';

@Injectable()
export class AlbumDataService {
  private albumUrl = AppSettings.getSetting('endpoint') + 'albums';

  public constructor(private http: PsHttp) {
  }

  public create(album: IAlbum) {
    return this.http.post(this.albumUrl, {album})
      .map((response: Response) => response.json());
  }
}
