import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject, Observable} from 'rxjs';
import {ISettings} from '../interfaces/settings.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private settingsState = new BehaviorSubject<ISettings>(null);
  public settings$ = this.settingsState.asObservable();

  constructor(private afs: AngularFirestore) {
    this.listen();
  }

  private listen(): void {
    this.afs.doc<ISettings>('settings/app').valueChanges().subscribe(data => this.settingsState.next(data));
  }

}
