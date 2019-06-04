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
import { Hover3Directive } from './directives/hover3/hover3.directive';
import { DirectivePropertyBindingComponent } from './components/directive-property-binding/directive-property-binding.component';
import { UnlessDirective } from './directives/unless/unless.directive';
import { DirectiveUnlessComponent } from './components/directive-unless/directive-unless.component';
import { NgswitchDirectiveComponent } from './components/ngswitch-directive/ngswitch-directive.component';
import { LogingComponentComponent } from './components/loging-component/loging-component.component';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './components/all/all.component';
import { FundamentalsRoutingComponent } from './components/fundamentals-routing/fundamentals-routing.component';

const appRoutes: Routes = [
  { path: '', component: AllComponent },

  { path: 'components/simple', component: SimpleComponent },
  { path: 'components/angular-cli', component: AngularCliComponent },
  { path: 'components/attribute-selector', component: AttributeSelectorComponent },
  { path: 'components/class-selector', component: ClassSelectorComponent },
  { path: 'components/lifecycle-hooks', component: LifecycleHooksComponent },

  { path: 'databinding/interpolation', component: InterpolationComponent },
  { path: 'databinding/property-binding', component: PropertyBindingComponent },
  { path: 'databinding/event-binding', component: EventBindingComponent },
  { path: 'databinding/two-way-binding', component: TwoWayBindingComponent },
  { path: 'databinding/input', component: InputDatabindingComponent },
  { path: 'databinding/output', component: OutputDatabindingComponent },

  { path: 'directives/ng-if-else', component: NgifElseDirectiveComponent },
  { path: 'directive/ng-style', component: NgstyleDirectiveComponent },
  { path: 'directive/ng-class', component: NgclassDirectiveComponent },
  { path: 'directive/ng-for', component: NgforDirectiveComponent },
  { path: 'directive/renderer', component: DirectiveUsingRendererComponent },
  { path: 'directive/host-listener', component: DirectiveHostlistenerComponent },
  { path: 'directive/host-binding', component: DirectiveHostbindingComponent },
  { path: 'directive/property-binding', component: DirectivePropertyBindingComponent },
  { path: 'directive/unless', component: DirectiveUnlessComponent },
  { path: 'directive/ng-switch', component: NgswitchDirectiveComponent },

  { path: 'services/logging-service', component: LogingComponentComponent },

  { path: 'routing/fundamentals', component: FundamentalsRoutingComponent },

  { path: 'others/view-encapsulation', component: ViewEncapsulationComponent },
  { path: 'others/local-reference', component: LocalReferenceComponent },
  { path: 'others/view-child', component: ViewChildComponent },
  { path: 'others/ng-content', component: NgcontentComponent },
  { path: 'others/content-child', component: ContentChildComponent }
];

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
    DirectiveHostbindingComponent,
    Hover3Directive,
    DirectivePropertyBindingComponent,
    UnlessDirective,
    DirectiveUnlessComponent,
    NgswitchDirectiveComponent,
    LogingComponentComponent,
    AllComponent,
    FundamentalsRoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
