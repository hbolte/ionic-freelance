import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class PreferenceService {
  constructor(public storage: Storage) {
  }

  public getConsent() {
    return this.storage.get('ion_did_consent');
  }

  public setConsent(shown: boolean) {
    this.storage.set('ion_did_consent', shown);
  }
}
