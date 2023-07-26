import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export interface RaidSettings {
  raidName: String ,
  size: Number ,
  difficult: String ,
  raidingDays: {
    days: Array<String>,
    hours: Array<Number>,
  },
}

@Component({
  selector: 'app-raid-form',
  templateUrl: './raid-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./raid-form.component.scss']
})
export class RaidFormComponent implements OnInit {
  @Output() savedRaid = new EventEmitter<any>();

  @Input() raid!: any;

  form: FormGroup = this.fb.group({
    raids: this.fb.array([]),
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initializeRaidForm();
  }

  raids(): FormArray {
    return this.form.get('raids') as FormArray;
  }

  initializeRaidForm() {
    if (!this.raid?.raids?.length) {
      this.addRaid();
    } else {
      this.raid?.raids.forEach((r: RaidSettings) => {
        this.addRaid(r);
      })
    }
  }

  addRaid(raid?: RaidSettings): void {
    this.raids().push(
      this.fb.group({
        raidName: [raid?.raidName || null, [Validators.required]],
        size: [raid?.size || null, [Validators.required]],
        difficult: [raid?.difficult || null, [Validators.required]],
        raidingDays: this.fb.group({
          days: [raid?.raidingDays.days || []],
          hours: [raid?.raidingDays.hours || []],
        }, {
          validators: this.checkSelectedRaidingDays()
        }),
      }),
    );
  }

  checkSelectedRaidingDays(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const days = control.value.days;
      const hours = control.value.hours;

      const bothSelected = days.length > 0 && hours.length > 0;
      return bothSelected ? null : {raidingDays: true};
    }
  }

  removeRaid(index: number): void {
    this.raids().removeAt(index);
  }

  saveRaid() {
    const { raids } = this.form.getRawValue();
    this.savedRaid.emit({raids: raids})
  }


}
