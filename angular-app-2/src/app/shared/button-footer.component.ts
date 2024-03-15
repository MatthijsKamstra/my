import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-footer',
  template: `
    <button
      class="link"
      [ngClass]="className"
      [attr.aria-label]="label"
      tabindex="0"
      [attr.data-id]="item.id"
      (click)="handleClick()"
    >
      <i [ngClass]="iconClasses"></i> <span>{{ label }}</span>
    </button>
  `
})
export class ButtonFooterComponent implements OnInit {
  @Input() label!: any;
  @Input() className!: any;
  @Input() iconClasses!: any;
  @Input() item!: any;
  @Input() dataId!: any;

  @Output() clicked = new EventEmitter<any>();

  ngOnInit() { }

  handleClick() {
    this.clicked.emit(this.item);
  }
}
