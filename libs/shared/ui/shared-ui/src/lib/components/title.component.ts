import {Component, Input} from "@angular/core";

@Component({
    selector: 'fancy-app-title',
    template: `<h1>{{ title }}</h1>`
})
export class TitleComponent {
    @Input() title = '';
}
