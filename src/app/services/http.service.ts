import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";
import { Md5 } from 'ts-md5/dist/md5';
import { CHAR_API_URL } from '../models/urls';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private PRIVATE_KEY = "c8d7533e3cfeb7f70d3e17a99124c4b563bf1fd5";
    private PUBLIC_KEY = "f2f8f26aeef1ffc64b3195ec1bbcdef3";

    constructor(private http: HttpClient) { }

    generateHash(privateKey, publicKey, timestamp) {
        return Md5.hashStr(`${timestamp}${privateKey}${publicKey}`)
    }

    getParams() {
        const timestamp = new Date().getTime().toString();
        const hash = this.generateHash(this.PRIVATE_KEY, this.PUBLIC_KEY, timestamp);
        const params = `?apikey=${this.PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`
        return params;
    }

    // Fetches lists of characters.
    getAllSuperHerosService(): Observable<any> {
        return this.http.get(`${CHAR_API_URL}${this.getParams()}`).pipe(catchError(this.errorHandler));
    }

    // Fetches a single character by id.
    getCharDetails(charId): Observable<any> {
        return this.http.get(`${CHAR_API_URL}/${charId}${this.getParams()}`).pipe(catchError(this.errorHandler));
    }

    // Call back method for error handling
    private errorHandler(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error: ', errorResponse.error.message);
        } else {
            console.log('Server Side Error: ', errorResponse);
        }
        return throwError('There was a problem with the service. we are notified and working on it')
    }

}
