import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-imcrement',
  templateUrl: './imcrement.component.html',
  styleUrls: ['./imcrement.component.scss'],
})
export class ImcrementComponent implements OnInit {
  @Input() progress!: number;
  @Input() btnClass = 'btn-primary';
  @Output() changeProgress: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeValue(val: number) {
    if (this.progress >= 100 && val >= 0) {
      this.progress = 100;
      this.changeProgress.emit(100);
    }
    if (this.progress <= 0 && val <= 0) {
      this.progress = 0;
      this.changeProgress.emit(0);
    }
    this.progress = this.progress + val;
    this.changeProgress.emit(this.progress);
  }

  changeInput(val: number) {
    if (val >= 100) {
      this.progress = 100;
    } else if (val < 0) {
      this.progress <= 0;
    } else {
      this.progress = val;
    }

    this.changeProgress.emit(this.progress);
  }
}
