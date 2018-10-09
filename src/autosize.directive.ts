import { ElementRef, HostListener, Directive, AfterContentChecked } from '@angular/core';

@Directive({
  selector: '[autosize]'
})

@HostListener('input', ['$event.target'])

export class Autosize implements AfterContentChecked {
    onInput(textArea: HTMLTextAreaElement): void {
    this.autosizer();
  }

  constructor(public element: ElementRef) {
    
  }

  ngAfterContentChecked(): void {
    this.autoresizer();
  }

  autosizer(): void {
    this.element.nativeElement.style.overflow = 'hidden';
    this.element.nativeElement.style.height = 'auto';
    this.element.nativeElement.style.height = this.element.nativeElement.scrollHeight + "px";
  }
}
