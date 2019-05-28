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
import { NgcontentComponent } from './components/ngcontent/ngcontent.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { ContentChildComponent } from './components/content-child/content-child.component';
import { DirectiveUsingRendererComponent } from './components/directive-using-renderer/directive-using-renderer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HoverDirective } from './directives/hover/hover.directive';
import { DirectiveHostlistenerComponent } from './components/directive-hostlistener/directive-hostlistener.component';
import { Hover2Directive } from './directives/hover2/hover2.directive';
import { DirectiveHostbindingComponent } from './components/directive-hostbinding/directive-hostbinding.component';

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
    ViewChildComponent,
    NgcontentComponent,
    LifecycleHooksComponent,
    ContentChildComponent,
    DirectiveUsingRendererComponent,
    HighlightDirective,
    HoverDirective,
    DirectiveHostlistenerComponent,
    Hover2Directive,
    DirectiveHostbindingComponent
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
