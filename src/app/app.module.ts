import { CoreModule } from './core/core.module';
import { MaterialUiModule } from './utils/material-ui/material-ui.module';
import { ResultComponent } from './containers/result/result.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputCardComponent } from './components/input-card/input-card.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkDetailCardComponent } from './components/link-detail-card/link-detail-card.component';

// App components
const COMPONENTS = [
  OverviewComponent,
  ResultComponent,
  InputCardComponent,
  LinkDetailCardComponent
];

// App modules
const MODULES = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MaterialUiModule,
  CoreModule
];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [AppRoutingModule, ...MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
