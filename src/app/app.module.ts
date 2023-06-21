import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { SocialComponent } from './social/social.component';
import { FruitCardComponent } from './social/fruit-card/fruit-card.component';
import { FruitBasketComponent } from './social/fruit-basket/fruit-basket.component';
import { FruitBowlComponent } from './social/fruit-bowl/fruit-bowl.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    SocialComponent,
    FruitCardComponent,
    FruitBasketComponent,
    FruitBowlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
