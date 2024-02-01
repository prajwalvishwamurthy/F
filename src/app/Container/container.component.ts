import { Component, Input } from "@angular/core";

@Component( {
    selector: 'app-container',
    templateUrl : './container.component.html',
    styleUrls : ['./container.component.css']
})

class MainContainer {
    @Input() modelToggle = false;

    onClick() {
        this.modelToggle = true;
    }
}

export default MainContainer;