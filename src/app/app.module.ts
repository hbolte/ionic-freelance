import {APP_INITIALIZER, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {ContentfulModule} from './core/contentful/contentful-module';
import {ContentfulConfig} from './core/contentful/models/contentful-config';
import {AboutPage} from './pages/about/about.component';
import {ContactPage} from './pages/contact/contact.component';
import {ProjectsPage} from './pages/projects/projects.component';
import {SkillsPage} from './pages/skills/skills.page';
import {ImprintPage} from './pages/imprint/imprint.page';
import {PrivacyPage} from './pages/privacy/privacy.page';
import {SocialLinksComponent} from './components/social-links/social-links.component';
import {SkeletonLoaderComponent} from './components/skeleton-loader/skeleton-loader.component';
import {IonicStorageModule} from '@ionic/storage';
import {CookieConsentService} from './provider/cookie-consent.service';
import {CONFIG, AngularFireAnalyticsModule, ScreenTrackingService, DEBUG_MODE} from '@angular/fire/analytics';
import {ServiceWorkerModule} from '@angular/service-worker';

const contentfulConfig: ContentfulConfig = {
  spaceId: environment.contentful.spaceId,
  accessToken: environment.contentful.accessToken
}

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    ContactPage,
    ProjectsPage,
    SkillsPage,
    ImprintPage,
    PrivacyPage,
    SocialLinksComponent,
    SkeletonLoaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({mode: 'md'}),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase.config),
    AngularFireAnalyticsModule,
    ContentfulModule.forRoot(contentfulConfig),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenTrackingService,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    {
      provide: APP_INITIALIZER,
      useFactory: (cookieConsentService: CookieConsentService) => {
        return () => cookieConsentService.initialize();
      },
      multi: true,
      deps: [CookieConsentService],
    },
    {
      provide: CONFIG,
      useValue: {
        send_page_view: environment.firebase.analytics.sendPageViews,
        allow_ad_personalization_signals: false,
        anonymize_ip: true
      }
    },
    {
      provide: DEBUG_MODE,
      useFactory: () => isDevMode()
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
