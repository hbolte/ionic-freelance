import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IPersonal} from '../../core/interfaces/personal.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {AppService} from '../../core/provider/app.service';
import {ISettings} from '../../core/interfaces/settings.interface';
import {ModalController, Platform} from '@ionic/angular';
import {BioPage} from './bio/bio.page';


@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutPage {

  public team$: Observable<IPersonal[]>;
  public settings$: Observable<ISettings>;

  public translucentHeader: boolean;

  constructor(
    private afs: AngularFirestore,
    private app: AppService,
    private plt: Platform,
    private modalCtrl: ModalController)
  {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.team$ = this.afs.collection<IPersonal>('team').valueChanges();
    this.settings$ = this.afs.doc<ISettings>('settings/app').valueChanges();
  }

  public async openBiography(person: IPersonal) {
    const modal = await this.modalCtrl.create({
      component: BioPage,
      componentProps: {
        person
      }
    });

    await modal.present();
  }
}
