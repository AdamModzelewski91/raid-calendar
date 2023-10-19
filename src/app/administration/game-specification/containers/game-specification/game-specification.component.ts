import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { GameSpecificationService } from 'src/app/administration/game-specification/services/game-specification.service';
import { ReplaySubject, takeUntil } from 'rxjs';

export interface CharacterBuilder  {
  fieldName: string,
  formControlName: string,
  selectOptions: any[],
}

@Component({
  selector: 'app-game-specification',
  templateUrl: './game-specification.component.html',
  styleUrls: ['./game-specification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameSpecificationComponent implements OnInit, OnDestroy {
  formList: Array<CharacterBuilder> = [];

  destroy$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(
    private gameSpecificationService: GameSpecificationService,
    private ref: ChangeDetectorRef,
  ){}

  ngOnInit(){
    this.getBuilder()
  }

  saveBuilder() {
    this.gameSpecificationService.saveCharacterBuild(this.formList)
  }

  getBuilder() {
    this.gameSpecificationService.getCharacterBuild()
      .pipe(takeUntil(this.destroy$))
      .subscribe(val => {
        this.formList = val ? val['characterBuild'] : [
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
        ]
      this.ref.detectChanges();
    })
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
