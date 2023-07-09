import { Component } from '@angular/core';
import { RaidSettings } from '../../components/raid-form/raid-form.component';
import { RaidSettingsService } from '../../service/raid-service.service';


@Component({
  selector: 'app-raid-settings',
  templateUrl: './raid-settings.component.html',
  styleUrls: ['./raid-settings.component.scss']
})
export class RaidSettingsComponent {
  raids$ = this.raidSettings.raids$;

  constructor(private raidSettings: RaidSettingsService) {}

  postRaidSettings(raid: RaidSettings[]) {
    this.raidSettings.postRaidSettings(raid);
  }

  updateRaidSettings(raid: RaidSettings[]) {
    this.raidSettings.updateRaidSettings(raid);
  }
}
