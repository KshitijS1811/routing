import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TypingComponent } from './common/typing/typing.component';
import { PwgComponent } from './common/pwg/pwg.component';
import { Route, RouterModule } from '@angular/router';
import { BothComponent } from './both/both.component';
import { Both1Component } from './both1/both1.component';
import { SearchBarComponent } from './common2/search-bar/search-bar.component';
import { PageListComponent } from './common2/page-list/page-list.component';

const routes : Route[] = [
  {path:'typing', component : TypingComponent},
  {path:'pwg', component : PwgComponent},
  {path: 'both', component: BothComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TypingComponent,
    PwgComponent,
    BothComponent,
    Both1Component,
    SearchBarComponent,
    PageListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
