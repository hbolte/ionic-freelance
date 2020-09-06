import {NgModule, ModuleWithProviders} from '@angular/core'
import {ContentfulConfig} from './models/contentful-config'
import {ContentfulService} from './provider/contentful.service'
import {ContentfulConfigService} from './provider/contentful-config.service'

@NgModule()
export class ContentfulModule {
  static forRoot(config: ContentfulConfig): ModuleWithProviders {
    return {
      ngModule: ContentfulModule,
      providers: [
        ContentfulService,
        {
          provide: ContentfulConfigService,
          useValue: config,
        },
      ],
    }
  }
}
