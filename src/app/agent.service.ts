import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private http = inject(HttpClient);

  public getInformationID(pid: string, ipAddress?: string) {
    return this.http.get("http://localhost:21000/api/agent/getinformationid");
  }
}
