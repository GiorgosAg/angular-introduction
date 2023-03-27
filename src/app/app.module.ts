import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewHelloComponent } from './new-hello/new-hello.component';
import { MyHelloComponentComponent } from './my-hello-component/my-hello-component.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, NewHelloComponent, MyHelloComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
