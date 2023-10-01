import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { MyProfileService } from '../services/my-profile.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {
  form: FormGroup = this.fb.group({})

  characterBuilder$: Observable<any> = this.myProfileService.getBuilder().pipe(tap(
    val => {
      val?.characterBuild.forEach((char: any) => {
        this.form.addControl(char.formControlName, this.fb.control(''));
      })
    }
  ));

  constructor(
    private fb: FormBuilder,
    private myProfileService: MyProfileService,
    private router: Router,
  ){

  }

  AddCharacter(){
    this.myProfileService.putCharacterList(this.form.value)
  }

  visitMenu(){
    this.router.navigate(['/administration/game-specification'])
  }
}
