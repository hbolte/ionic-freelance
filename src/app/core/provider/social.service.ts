import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';
import {ISocialLink} from '../interfaces/social.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  private socialLinksState = new BehaviorSubject<ISocialLink[]>(null);
  public links$ = this.socialLinksState.asObservable();

  constructor(private afs: AngularFirestore) {}

  public listen(): void {
    this.afs.collection<ISocialLink>('social')
      .valueChanges()
      .subscribe(data => this.socialLinksState.next(data));
  }
}
