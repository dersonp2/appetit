import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './components/template/nav/nav.component';

import {PedidosComponent} from './views/pedidos/pedidos.component';


import {MatSidenavModule} from '@angular/material/sidenav'
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        PedidosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,

        //    Angular Material
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
