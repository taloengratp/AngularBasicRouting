import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { InputInsertComponent } from './input-insert/input-insert.component';
import { ShowInputDataComponent } from './show-input-data/show-input-data.component'

import { MatCardModule, MatCard } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RoutingMainModule } from './routing-main/routing-main.module';



@NgModule({
  declarations: [
    AppComponent,
    InputInsertComponent,
    ShowInputDataComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    RoutingMainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
