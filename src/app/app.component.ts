import { Component, inject } from '@angular/core';
import { AgentService } from './agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public idCardNumber: string = '';
  private agentService = inject(AgentService);
  title = 'cors';
  informationID: any;
  searching = false
  getnformationID(){
    // window.location.assign('edin://start');
    this.informationID = null;
    this.searching = true
    this.agentService.getInformationID(this.idCardNumber).subscribe({
      next: (res: any) => {
        console.log(res);
        this.informationID = res.ResponseDetails;
        this.searching = false;
      },
      error: (error) => {
        console.error('error:', error);
        this.searching = false;
      },
      complete: () => {
        console.log('completed');
      }
    });
    
  }
  clear() {
    this.informationID = null;
  }
}
