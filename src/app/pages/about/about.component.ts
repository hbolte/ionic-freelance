import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IPersonal} from '../../core/interfaces/personal.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {AppService} from '../../core/provider/app.service';
import {ISettings} from '../../core/interfaces/settings.interface';
import {Platform} from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutPage {

  public personal$: Observable<IPersonal>;
  public settings$: Observable<ISettings>;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private app: AppService, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.personal$ = this.afs.doc<IPersonal>('personal/data').valueChanges();
    this.settings$ = this.afs.doc<ISettings>('settings/app').valueChanges();
  }

}
