import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-key';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { AboutComponent } from './about/about.component';
import { FormatPipe } from './format.pipe';
import { PhotographerDetailComponent } from './photographer-detail/photographer-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditPhotographerComponent } from './edit-photographer/edit-photographer.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    PhotographersComponent,
    AboutComponent,
    FormatPipe,
    PhotographerDetailComponent,
    AdminComponent,
    EditPhotographerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
