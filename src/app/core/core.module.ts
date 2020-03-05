import { LinkState } from './store/link.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

// NgXs modules
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { TextEllipsisPipe } from './pipes/text-ellipsis.pipe';

@NgModule({
  declarations: [TextEllipsisPipe],
  imports: [
    CommonModule,
    NgxsModule.forRoot([LinkState], {
      developmentMode: !environment.production
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['Links']
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })
  ],
  exports: [NgxsModule, TextEllipsisPipe]
})
export class CoreModule {}
