import { Component } from '@angular/core';

@Component({
    selector: 'app-simple',
    template: `
        <div class="card mt-3">
            <div class="card-header">
                Components: Simple
                <span class="float-right badge badge-warning">Component</span>
            </div>
            <div class="card-body">
                <p class="card-text">A simple component that has been created manually.
                    <span class="redtext">Inline style directly from component class.</span>
                </p>
            </div>
        </div>
    `,
    styles: [`
    .redtext {
        color: red;
    }`]
})

export class SimpleComponent {
    constructor() {
    }
}