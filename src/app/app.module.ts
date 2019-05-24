import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularCliComponent } from './components/angular-cli/angular-cli.component';
import { SimpleComponent } from './components/simple/simple.component';
import { AttributeSelectorComponent } from './components/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './components/class-selector/class-selector.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { NgifElseDirectiveComponent } from './components/ngif-else-directive/ngif-else-directive.component';
import { NgstyleDirectiveComponent } from './components/ngstyle-directive/ngstyle-directive.component';
import { NgclassDirectiveComponent } from './components/ngclass-directive/ngclass-directive.component';
import { NgforDirectiveComponent } from './components/ngfor-directive/ngfor-directive.component';
import { InputDatabindingComponent } from './components/input-databinding/input-databinding.component';
import { OutputDatabindingComponent } from './components/output-databinding/output-databinding.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { LocalReferenceComponent } from './components/local-reference/local-reference.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularCliComponent,
    SimpleComponent,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    NgifElseDirectiveComponent,
    NgstyleDirectiveComponent,
    NgclassDirectiveComponent,
    NgforDirectiveComponent,
    InputDatabindingComponent,
    OutputDatabindingComponent,
    ViewEncapsulationComponent,
    LocalReferenceComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
