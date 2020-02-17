import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {IPersonal} from '../../core/interfaces/personal.interface';
import {AngularFirestore} from '@angular/fire/firestore';
import {AppService} from '../../core/provider/app.service';
import {ISettings} from '../../core/interfaces/settings.interface';
import {Platform} from '@ionic/angular';

export interface Project {
  name: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.scss']
})
export class AboutPage {

  public personal: IPersonal;
  private personalSub: Subscription;

  public settings: ISettings;
  public settingsSub: Subscription;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private app: AppService, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.personalSub = this.afs.doc<IPersonal>('personal/data').valueChanges().subscribe(data => {
      this.personal = data;
    });

    this.settingsSub = this.app.settings$.subscribe(data => this.settings = data);
  }

  public ionViewDidLeave() {
    if (this.personalSub) {
      this.personalSub.unsubscribe();
    }

    if (this.settingsSub) {
      this.settingsSub.unsubscribe();
    }
  }

}
