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
    this.agentService.getInformationID(this.idCardNumber).subscribe((res:any) => {
      this.informationID = res.ResponseDetails;
      this.searching = false
      console.log(this.informationID);
      
    })
  }
  clear() {
    this.informationID = null;
  }
}
