import {Component} from '@angular/core';
import {Platform} from '@ionic/angular';
import {AppService} from './core/provider/app.service';
import {ISettings} from './core/interfaces/settings.interface';
import {DeviceInfo, Plugins, StatusBarStyle} from '@capacitor/core';

const {Device} = Plugins;
const {StatusBar} = Plugins;
const {SplashScreen} = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'About',
      url: '/about'
    },
    {
      title: 'Projects',
      url: '/projects'
    },
    {
      title: 'Skills',
      url: '/skills'
    },
    {
      title: 'Contact',
      url: '/contact'
    }
  ];

  public legalPages = [
    {
      title: 'Imprint',
      url: '/imprint'
    },
    {
      title: 'Privacy',
      url: '/privacy'
    }
  ];

  public settings: ISettings;
  public info: DeviceInfo;

  constructor(
    private platform: Platform,
    private app: AppService) {
    this.initializeApp();
  }

  initializeApp() {
    this.app.listen();

    this.app.settings$.subscribe(data => this.settings = data);

    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.setStyle({
          style: this.platform.is('android') ? StatusBarStyle.Dark : StatusBarStyle.Light,
        });
        StatusBar.setBackgroundColor({color: '#949494'});
        SplashScreen.hide();
      }
    });

    this.getDeviceInfo();
  }

  private async getDeviceInfo() {
    this.info = await Device.getInfo();
  }

  public getAppVersion(): string {
    return this.info && this.info.appVersion ? this.info.appVersion : null;
  }
}
