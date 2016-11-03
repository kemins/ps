import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, ConnectionBackend, RequestOptions, RequestOptionsArgs, Request} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PsHttp {
    private _pendingRequests = 0;

    constructor(private http: Http)  {}

    request(url:string | Request, options?: RequestOptionsArgs): Observable<Response> {
        this._pendingRequests++;

        return this.http.request(url, options)
            .finally(() => {this._pendingRequests--});
    }

    get(url:string, options?: RequestOptionsArgs): Observable<Response> {
        this._pendingRequests++;

        return this.http.get(url, options)
            .finally(() => {this._pendingRequests--});
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        this._pendingRequests++;

        return this.http.post(url, body, options)
            .map((response) => {
                this._pendingRequests--;
                return response;
            });
    }

    get pendingRequests() {
        return this._pendingRequests;
    }
}