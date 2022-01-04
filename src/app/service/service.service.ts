import { Injectable } from '@angular/core';
import { WorkService } from './work.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public person: object = {
    fName: 'Arvind',
    lName: 'Maurya'
  }

  public myNameValue: string = '';
  constructor(private workService: WorkService) {
    console.log('this.workService.work :>> ', this.workService.work);
  }

  public set myName(name: string) {
    this.myNameValue = name;
    console.log('set myname :>> ', this.myNameValue);
  }

  public get myName() {
    console.log('get myname :>> ', this.myNameValue);
    return this.myNameValue;
  }
  // constructor() { }


}
