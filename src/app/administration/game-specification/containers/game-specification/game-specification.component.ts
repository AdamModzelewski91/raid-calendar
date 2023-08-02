import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-game-specification',
  templateUrl: './game-specification.component.html',
  styleUrls: ['./game-specification.component.scss']
})
export class GameSpecificationComponent implements OnInit {


  formList: Array<string> = ['Character Name'];

  constructor(private fb: NonNullableFormBuilder){}

  ngOnInit(){
  }

  saveBuilder() {
    console.log(this.formList)
  }
  getNewField(value: any){
    this.formList = [...this.formList, value];
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.formList, event.previousIndex, event.currentIndex);
  }

}
