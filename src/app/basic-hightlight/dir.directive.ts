import { Directive, OnInit, ElementRef, Renderer2, Input, AfterViewInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective implements OnInit {

  @Input() backgroundColor: string = 'green';
  @Input() tcolor: string = '';
  @Input() bcolor: string = 'gray';
  @Input() tsize: string = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // ngOnInit(): void {
  //   this.element.nativeElement.style.backgroundColor = this.bcolor;
  // }

  // Using directive start
  @HostBinding('style.border') border: string = '';

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = 'red';
    // this.element.nativeElement.style.color = 'pink';
    // this.element.nativeElement.style.fontSize = '50px';
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'gray');
    this.border = '5px solid red';
  }
  // ngAfterViewInit(): void {
  //   this.element.nativeElement.style.color = this.backgroundColor;
  // }
  // Using directive end

  // Using hostlistener start
  // ngAfterViewInit(): void {
  //   this.tcolor = this.tcolor || 'green';
  //   this.bcolor = this.bcolor || 'cyan';
  //   this.tsize = this.tsize || '50px';
  //   this.element.nativeElement.style.fontSize = this.tsize;
  //   this.element.nativeElement.style.color = this.tcolor;
  //   this.element.nativeElement.style.backgroundColor = this.bcolor;
  // }

  // @HostListener('mousemove') onMouseMove() {
  //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
  //   this.element.nativeElement.style.border = '5px solid red';
  //   this.element.nativeElement.style.color = 'white';
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.element.nativeElement.style.backgroundColor = 'white';
  //   this.element.nativeElement.style.border = '';
  //   this.element.nativeElement.style.color = '';
  // }

  // @HostListener('mousemove') onMouseBorderCreate() {
  //   this.element.nativeElement.style.border = '5px solid red';
  // }
  // @HostListener('mouseleave') onMouseBorderRemove() {
  //   this.element.nativeElement.style.border = '';
  // }

  // Using hostlistener end
}
