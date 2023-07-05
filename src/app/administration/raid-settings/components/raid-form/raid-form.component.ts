import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RaidSettingsService } from '../../service/raid-service.service';

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
  @Output() savedRaid = new EventEmitter<RaidSettings[]>();

  @Input() raid!: any;

  form: FormGroup = this.fb.group({
    raids: this.fb.array([]),
  })

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    if (!this.raid?.raids?.length) {
      this.addRaid();
    } else {
      this.raid?.raids.forEach((r: RaidSettings) => {
        this.addRaid(r);
      })
    }
  }

  raids(): FormArray {
    return this.form.get('raids') as FormArray;
  }

  addRaid(raid?: RaidSettings): void {
    this.raids().push(
      this.fb.group({
        raidName: [raid?.raidName || null, Validators.required],
        size: [raid?.size || null, Validators.required],
        difficult: [raid?.difficult || null, Validators.required],
        raidingDays: this.fb.group({
          days: [raid?.raidingDays.days || [], Validators.required],
          hours: [raid?.raidingDays.hours || [], Validators.required],
        }),
      }),
    )
  }

  removeRaid(index: number): void {
    this.raids().removeAt(index);
  }

  saveRaid() {
    const { raids } = this.form.getRawValue()
    this.savedRaid.emit(raids)
  }


}
