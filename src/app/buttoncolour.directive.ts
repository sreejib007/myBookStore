import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mbsButtoncolour]'
})
export class ButtoncolourDirective {

  @HostListener('mouseenter') onMouseEnter () {
    this.el.nativeElement.style.backgroundColor = 'red'
  } 

  @HostListener('mouseleave') onMouseLeave () {
    this.changeBackground();
  } 
  constructor(private el:ElementRef,private renderer: Renderer2) { 
    //this.changeBackground();
  }

  changeBackground(){
    console.log(this.el, this.el.nativeElement)
    const button = this.renderer.createElement('button');
    const text = this.renderer.createText('Hello world');
    this.renderer.appendChild(button, text);
    this.renderer.appendChild(this.el.nativeElement, button);
    this.renderer.removeAttribute(this.el.nativeElement,'')
  }

}
