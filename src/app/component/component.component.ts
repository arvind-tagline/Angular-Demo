import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ServerDetails {
  serverName: string;
  serverContecnt: string;
  type: string;
}
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {

  @Input() serverName: string = "";
  @Input() serverContecnt: string = "";
  @Output() server = new EventEmitter<{ childName: string, childContent: string }>();
  public newChildName: string = "Hello";
  public newChildContent: string = "I am child";

  constructor() { }

  ngOnInit(): void {
  }
  public serverDetail: ServerDetails[] = [{
    type: '', serverName: '', serverContecnt: ''
  }]
  public getServer(nameInput: HTMLInputElement): void {
    console.log(nameInput.value);
    this.serverDetail.push({ type: 'server', serverName: this.serverName, serverContecnt: this.serverContecnt });
  }
  public addBluePrint(): void {
    this.serverDetail.push({ type: 'blueServer', serverName: this.serverName, serverContecnt: this.serverContecnt });
  }

  public getInput(): void {
    this.server.emit({
      childName: this.serverName,
      childContent: this.serverContecnt
    });
  }
  public getOutput(): void {
    this.server.emit({
      childName: this.newChildName,
      childContent: this.newChildContent
    });
  }
}
