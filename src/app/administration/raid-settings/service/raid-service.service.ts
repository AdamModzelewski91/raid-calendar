import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map, mergeMap, Observable, of, tap } from 'rxjs';
import { RaidSettings } from '../components/raid-form/raid-form.component';
import { environment } from 'src/environments/environment';
import { Database, ref, onValue } from "@angular/fire/database";
import { getAuth } from "@angular/fire/auth";







@Injectable({
  providedIn: 'root'
})
export class RaidSettingsService {

  raids$: Observable<any> = this.getRaidSettings();

  constructor(private db: Database) { }

  getRaidSettings(): any {



    const data = ref(this.db, 'administration')
    return onValue(data, (snapshot) => {
        return snapshot.val();

    }, {
      onlyOnce: true
    })
  }

  postRaidSettings(raid: RaidSettings[]) {
    console.log(raid)
  }
}
