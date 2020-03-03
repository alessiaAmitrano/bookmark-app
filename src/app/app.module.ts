import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { ResultComponent } from './result/result.component';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

// NgXs modules
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App components
const COMPONENTS = [OverviewComponent, ResultComponent];

// App modules
const MODULES = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  NgxsModule.forRoot([]),
  NgxsStoragePluginModule.forRoot(),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  BrowserAnimationsModule,
  MaterialUiModule
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [AppRoutingModule, ...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
