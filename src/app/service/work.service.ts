import { Injectable } from '@angular/core';
// import { ServiceService } from './service.service';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  public userName: string = 'get';
  public work: { workName: string } = {
    workName: 'typing'
  }

  constructor() {
    // console.log('this.serviceService.person :>> ', this.serviceService.person);
  }


  ngOnInit(): void {

  }
}
