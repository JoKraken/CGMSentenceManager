import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { FormsModule } from '@angular/forms'; 
=======
import { FormsModule } from '@angular/forms';
>>>>>>> Stashed changes

import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { ListItemComponent } from './component/list-item/list-item.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { EditAlertComponent } from './component/edit-alert/edit-alert.component';
<<<<<<< Updated upstream
=======
import {StoreModule} from "@ngrx/store";
import { sentenceReducer} from "./reducers/sentence.reducer";
>>>>>>> Stashed changes

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    NavbarComponent,
    EditAlertComponent,
  ],
  imports: [
    BrowserModule,
<<<<<<< Updated upstream
    FormsModule
=======
    FormsModule,
    StoreModule.forRoot({product: sentenceReducer})
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
