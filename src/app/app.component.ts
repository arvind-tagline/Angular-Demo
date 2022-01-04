import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { ServiceService } from './service/service.service';
import { WorkService } from './service/work.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  public title: string = 'Welcome 2';
  public serverParent: string = "Parent";
  public myData: string = '';
  public serverContentParent: string = "Parent content";
  public find(value: any): void {
    console.log(value);
  }

  constructor(private render: Renderer2, private serviceService: ServiceService, private workService: WorkService) { }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  ngOnInit(): void {
    // console.log('this.serviceService.person :>> ', this.serviceService.person);
    this.serviceService.myNameValue = 'Tejash';
  }
  ngAfterViewInit(): void {
    // const data = this.render.selectRootElement('.mybtn');
    // console.log('data:>>', data.value);

  }

  public getData(): void {
    console.log('this.serviceService.myNameValue :>> ', this.serviceService.myNameValue);
  }

  public setUser(v: any) {
    this.serviceService.myNameValue = v
    return this.serviceService.myNameValue = v;
  }

}

