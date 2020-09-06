import {Injectable, Injector} from '@angular/core'
import {NavController, ToastController} from '@ionic/angular'
import {PreferenceService} from './preferences.service'

@Injectable({
  providedIn: 'root',
})
export class CookieConsentService {
  private get _navCtrl() {
    return this._injector.get(NavController)
  }

  constructor(
    private toastCtrl: ToastController,
    private prefs: PreferenceService,
    private _injector: Injector
  ) {}

  public async initialize() {
    this.prefs.getConsent().then(async (hasShown) => {
      if (!hasShown) {
        await this.showConsent()
      }
    })
  }

  private async showConsent() {
    const toast = await this.toastCtrl.create({
      header:
        'This website uses cookies to ensure you get the best experience on our website.',
      buttons: [
        {
          text: '',
          icon: 'book-outline',
          role: 'cancel',
          handler: () => {
            this._navCtrl.navigateForward('privacy')
            this.prefs.setConsent(true)
          },
        },
        {
          text: 'Got it!',
          icon: 'checkmark-outline',
          handler: () => this.prefs.setConsent(true),
        },
      ],
      animated: true,
      position: 'bottom',
      keyboardClose: false,
    })

    await toast.present()
  }
}
