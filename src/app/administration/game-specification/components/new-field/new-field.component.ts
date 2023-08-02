import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-field',
  templateUrl: './new-field.component.html',
  styleUrls: ['./new-field.component.scss'],
})
export class NewFieldComponent {
  @Output() newField = new EventEmitter();

  form: FormGroup = this.fb.group({
    fieldName: ['', [Validators.required]],
    fieldDescription: [{value: '', disabled: true}, [Validators.required]],
    selectOptions: [''],
  });

  constructor(private fb: FormBuilder){ }

  addControlName(val: {fieldName: string, fieldDescription: string}) {
    const { fieldName, fieldDescription} = val;
    const formControlName = fieldName.trim().split(' ').join('');

    return {
      fieldName,
      fieldDescription,
      formControlName,
    }
  }


  changeOption(event: any){
    event.target.value === 'normal' ?
      this.form.get('fieldDescription')?.disable() :
      this.form.get('fieldDescription')?.enable();
  }

  submit(){
    const newValue = this.addControlName(this.form.value);
    this.newField.emit(newValue)
  }
}
