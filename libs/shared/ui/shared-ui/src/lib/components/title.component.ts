import {Component, Input} from "@angular/core";

@Component({
    selector: 'fancy-app-title',
    template: `<h2>{{ title }}</h2>`
})
export class TitleComponent {
    @Input() title = '';
}
