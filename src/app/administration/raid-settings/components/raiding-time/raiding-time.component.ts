import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-raiding-time',
  templateUrl: './raiding-time.component.html',
  styleUrls: ['./raiding-time.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RaidingTimeComponent),
      multi: true,
    }
  ]
})
export class RaidingTimeComponent  implements OnInit, AfterViewInit, ControlValueAccessor {
  @Input() selectTime: string = 'days';
  @Input() index!: number;

  days: string[] = ['Monday', 'Thousday', 'Wendsday', 'Thoursday', 'Friday', 'Saturday', 'Sunday'];

  hours: number[] = [ 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ];

  iterates: any[] = [];

  value: any;

  selectedValues: (string | number)[] = [];

  private onChange = (fn: any) => {};

  private onTounch = (fn: any) => {};

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.iterates = this.selectTime === 'days' ? this.days : this.hours;
  }

  ngAfterViewInit(): void {
    this.selectedValues = this.value;
    this.updateCheckBoxState(true);
  }

  writeValue(value: any): void {
    this.value = value
    this.selectValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTounch = fn;
  }

  selectValue(value: any): void{
    if (!value || Array.isArray(value)) return;

    if (this.checkDuplicate(value)) {
      this.selectedValues = [...this.selectedValues, value];
    } else {
      this.selectedValues = this.selectedValues.filter(val => val !== value);
    }
    this.onChange(this.selectedValues);
    this.onTounch(this.selectedValues);
  }

  checkDuplicate(value: string | number): boolean {
    return !this.selectedValues.find(val => val === value);
  }

  selectAll(value: any[]) {
    if (this.selectedValues.length !== value.length) {
      this.selectedValues = value;
      this.updateCheckBoxState(true);
    } else {
      this.updateCheckBoxState(false);
      this.selectedValues = [];
    }
    this.onChange(this.selectedValues);
    this.onTounch(this.selectedValues);
  }

  updateCheckBoxState(isChecked: boolean) {
    const buttons = this.elementRef.nativeElement.firstChild.childNodes[0].children as HTMLCollection;
    this.selectedValues.forEach((val) => {
      if (val) {
        const btn = buttons.namedItem(this.index + '_' + val) as HTMLInputElement;
        btn.checked = isChecked;
      }
    })
  }
}
