import {Component} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {IProject} from '../../core/interfaces/project.interface';
import {Plugins} from '@capacitor/core';
import {Platform} from '@ionic/angular';

const {Browser} = Plugins;

@Component({
  selector: 'app-projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsPage {

  public projects$: Observable<IProject[]>;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.projects$ = this.afs.collection<IProject>(
      'projects',
      ref => ref.orderBy('createdAt', 'desc'))
    .valueChanges()
  }

  public async openLink(repo: string) {
    await Browser.open({
      url: repo
    });
  }
}
