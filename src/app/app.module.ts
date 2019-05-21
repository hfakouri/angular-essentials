import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCliComponent } from './components/angular-cli/angular-cli.component';
import { SimpleComponent } from './components/simple/simple.component';
import { AttributeSelectorComponent } from './components/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './components/class-selector/class-selector.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCliComponent,
    SimpleComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    InterpolationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
