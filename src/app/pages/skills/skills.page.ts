import {Component} from '@angular/core';
import {ISkill} from '../../core/interfaces/skill.interface';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss'],
})
export class SkillsPage {

  public skills$: Observable<ISkill[]>;

  public options = {
    initialSlide: 0,
    speed: 500,
    autoplay: {
      delay: 4000
    },
    loop: true
  };

  public translucentHeader: boolean;

  constructor(private afs: AngularFirestore, private plt: Platform) {
    this.plt.ready().then(() => this.translucentHeader = this.plt.is('ios'));
  }

  public ionViewDidEnter() {
    this.skills$ = this.afs.collection<ISkill>(
      'skills',
      ref => ref.orderBy('createdAt', 'asc'))
    .valueChanges()
  }

}
