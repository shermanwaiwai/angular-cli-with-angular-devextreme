For Demo
Install DevExtreme
npm install --save devextreme devextreme-angular
Import DevExtreme Modules

Go to your main .ts file (usuallysrc/app.module.ts) and import the required modules to your app:

example:

app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DxButtonModule } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DxButtonModule,
    DevExtremeModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';

  helloWorld() {
    alert('Hello world!');
  }
}

//app.component.html

<dx-button text="Press me" (onClick)="helloWorld()"></dx-button>
