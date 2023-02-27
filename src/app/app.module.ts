import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { RedditService } from './shared/services/reddit.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CoreModule,
  ],
  providers: [
    RedditService,
  ],
  exports: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
