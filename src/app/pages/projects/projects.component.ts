import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
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

  public projects: IProject[];
  private projectsSub: Subscription;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.projectsSub = this.afs.collection<IProject>('projects', ref => ref.orderBy('createdAt', 'desc'))
      .valueChanges().subscribe(data => {
        this.projects = data;
      })
  }

  public ionViewDidLeave() {
    if (this.projectsSub) {
      this.projectsSub.unsubscribe();
    }
  }

  public async openLink(repo: string) {
    await Browser.open({
      url: repo
    });
  }
}
