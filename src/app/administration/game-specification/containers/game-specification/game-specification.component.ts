import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GameSpecificationService } from 'src/app/administration/game-specification/services/game-specification.service';

export interface CharacterBuilder  {
  fieldName: string,
  formControlName: string,
  selectOptions: any[],
}

@Component({
  selector: 'app-game-specification',
  templateUrl: './game-specification.component.html',
  styleUrls: ['./game-specification.component.scss'],
})
export class GameSpecificationComponent implements OnInit {
  formList: Array<CharacterBuilder> = [];

  constructor(
    private gameSpecificationService: GameSpecificationService
  ){}

  ngOnInit(){
    this.getBuilder()
  }


  saveBuilder() {
    this.gameSpecificationService.saveCharacterBuild(this.formList)
  }

  getBuilder() {
    this.gameSpecificationService.getCharacterBuild().subscribe(val => this.formList = val ? val['characterBuild'] : [
      {
        fieldName: "Character name",
        selectOptions: [],
        formControlName: "charactername"
      },
      {
        fieldName: "Roles",
        selectOptions: [
          "Tank",
          "Healer",
          "DPS"
        ],
        formControlName: "roles"
      },
      {
        fieldName: "Gear Score",
        selectOptions: [],
        formControlName: "gearscore"
      }
    ])
  }

  onChange(val: any, index: number) {
    this.formList[index].fieldName = val;
    this.formList[index].formControlName = val.toLocaleLowerCase().trim().split(' ').join('');
  }

  removeMovie(index: number) {
    this.formList.splice(index, 1)
  }

  trackByFn(index: number): number {
    return index
  }

  removeOption(i: number, j: number) {
    this.formList[i].selectOptions.splice(j, 1);
  }

  getNewField(value: any){
    this.formList = [...this.formList, value];
  };

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.formList, event.previousIndex, event.currentIndex);
  }

}
