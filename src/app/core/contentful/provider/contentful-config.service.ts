import {InjectionToken} from '@angular/core';
import {ContentfulConfig} from '../models/contentful-config';

export const ContentfulConfigService = new InjectionToken<ContentfulConfig>('ContentfulConfig');
