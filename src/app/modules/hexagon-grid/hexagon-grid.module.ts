import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HexagonGridComponent} from './hexagon-grid.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HexagonGridComponent],
    exports: [HexagonGridComponent]
})
export class HexagonGridModule {
}
