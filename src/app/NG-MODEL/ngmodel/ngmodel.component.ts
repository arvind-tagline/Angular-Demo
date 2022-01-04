import { Component, Input, OnInit } from '@angular/core';
// import { ServiceService } from 'src/app/service/service.service';

export interface Users {
  userName: string;
  customerId: number;
}
@Component({
  selector: 'app-ngmodel',
  templateUrl: './ngmodel.component.html',
  styleUrls: ['./ngmodel.component.scss']
})
export class NgmodelComponent implements OnInit {
  // allowNewName:boolean = false;
  @Input() name: string = "";
  @Input() childTitle: string = "";

  public users: Users[] = [{
    userName: '',
    customerId: 1
  }];
  public nameCreated: boolean = false;
  public accessBtn: boolean = true;
  public tempUserId: number = Math.random() * 100;
  public userId: any = this.tempUserId.toFixed(0);
  public userStatus: string = "offline";


  constructor() {
    this.userStatus = this.userId > 50 ? 'online' : 'offline';
  }

  ngOnInit(): void {
    console.log(`this.childTitle`, this.childTitle);
    // console.log('this.serviceService.person :>> ', this.serviceService.person);
  }
  public getAccessBtn(): any {
    this.accessBtn = false;
  }
  public onCreateServer(): void {
    this.nameCreated = true;
    this.name;
    this.users.push({ userName: this.name, customerId: this.userId })
  }
  public getUserStatus(): string {
    return this.userStatus;
  }

  public getColor(): string {
    return this.userStatus === 'online' ? 'green' : 'red';
  }
}
