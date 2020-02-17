import {Component} from '@angular/core';
import {ISkill} from '../../core/interfaces/skill.interface';
import {Subscription} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage {

  public skills: ISkill[];
  private skillsSub: Subscription;

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.skillsSub = this.afs.collection<ISkill>('skills', ref => ref.orderBy('createdAt', 'asc'))
      .valueChanges().subscribe(data => {
        this.skills = data;
      })
  }

  public ionViewDidLeave() {
    if (this.skillsSub) {
      this.skillsSub.unsubscribe();
    }
  }
}
