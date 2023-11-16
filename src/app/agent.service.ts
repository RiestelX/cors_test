import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

const rq = {
  withCredentials: true
}
@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private http = inject(HttpClient);

  public getInformationID(pid: string, ipAddress?: string) {
    return this.http.get("http://localhost:21000/api/agent/getinformationid", rq).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('error:', error.error.message);
  
    let errorMessage = 'error';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `error: ${error.error.message}`;
    } else {
      errorMessage = `agent returned code ${error.status}, ` + `error message: ${error.message}`;
    }
  
    // Return an observable with a user-facing error message
    return throwError(() => new Error(errorMessage));
  }
  
}
