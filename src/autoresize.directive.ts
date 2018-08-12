import { ElementRef, HostListener, Directive, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[autoresize]'
})

@HostListener('input', ['$event.target'])

export class Autoresize implements AfterContentChecked {
    onInput(textArea: HTMLTextAreaElement): void {
    this.autoresizer();
  }

  constructor(public element: ElementRef) {
    
  }

  ngAfterContentChecked(): void {
    this.autoresizer();
  }

  autoresizer(): void {
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
  }
}
