import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HexagonGridModule} from './modules/hexagon-grid/hexagon-grid.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HexagonGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
