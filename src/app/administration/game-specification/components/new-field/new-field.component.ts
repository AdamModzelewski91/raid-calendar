import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

export interface NewField {
  fieldName: string,
  fieldDescription: string,
  selectOptions: string,
}

@Component({
  selector: 'app-new-field',
  templateUrl: './new-field.component.html',
  styleUrls: ['./new-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewFieldComponent {
  @Output() newField = new EventEmitter();

  @ViewChild('myForm') myForm!: NgForm;

  form: FormGroup = this.fb.group({
    fieldName: ['', [Validators.required]],
    selectOptions: this.fb.array([]),
  });

  fieldDescription = true;

  selectTextArea = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder){ }

  addControlName(val: NewField) {
    const { fieldName, fieldDescription, selectOptions} = val;
    const formControlName = fieldName.toLocaleLowerCase().trim().split(' ').join('');

    return {
      fieldName,
      fieldDescription,
      selectOptions,
      formControlName,
    }
  }

  get selectOptions(): FormArray {
    return this.form.get('selectOptions') as FormArray;
  }

  addNewButton() {
    this.selectOptions.push(this.fb.control(this.selectTextArea.value));
    this.selectTextArea.reset();
  }

  removeOption(index: number) {
    this.selectOptions.removeAt(index);
  }

  trackByFn(index: number): number {
    return index
  }

  changeOption(event: any){
    this.fieldDescription = event.value === 'normal' ? true : false
  }

  clearFormArray() {
    while (this.selectOptions.length !== 0) {
      this.removeOption(0);
    }
  }

  submit(){
    const newValue = this.addControlName(this.form.value);
    this.newField.emit(newValue)
    this.form.reset();
    this.myForm.resetForm();
    this.selectTextArea.reset();
    this.clearFormArray();
  }
}
