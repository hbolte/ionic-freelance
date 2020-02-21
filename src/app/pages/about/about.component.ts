import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {IPersonal} from '../../core/interfaces/personal.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {AppService} from '../../core/provider/app.service';
import {ISettings} from '../../core/interfaces/settings.interface';
import {ModalController, Platform} from '@ionic/angular';
import {BioPage} from './bio/bio.page';
import {map} from 'rxjs/operators';


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
    this.settings$ = this.afs.doc<ISettings>('settings/app').valueChanges();

    // for team members we need the unique document id
    this.team$ = this.afs.collection('team').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as IPersonal;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
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
