import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Request, RequestOptionsArgs, Response } from '@angular/http';

@Injectable()
export class HttpService {
  private _pendingRequests = 0;

  constructor(private http: Http) {
  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    this._pendingRequests++;

    return this.http.request(url, options)
      .finally(() => {
        this._pendingRequests--
      });
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    this._pendingRequests++;

    return this.http.get(url, options)
      .finally(() => {
        this._pendingRequests--
      });
  }

  public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    this._pendingRequests++;

    return this.http.post(url, body, options)
      .map((response) => {
        this._pendingRequests--;
        return response;
      });
  }

  public get pendingRequests() {
    return this._pendingRequests;
  }
}