import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CardComponent } from './components/shared/components/card/card.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserCountComponent } from './components/user-count/user-count.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardItemProfileComponent } from './components/card-item-profile/card-item-profile.component';
import { CardUiComponent } from './components/card-ui/card-ui.component';
import { BtnLinkIconComponent } from './components/shared/components/btn-link-icon/btn-link-icon.component';
import { CardFoodComponent } from './components/card-food/card-food.component';
import { CardListUserComponent } from './components/card-list-user/card-list-user.component';
import { BtnLinkCustomComponent } from './components/shared/components/btn-link-custom/btn-link-custom.component';
import { SvgIconComponent } from './components/shared/components/svg-icon/svg-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CardComponent,
    UserInfoComponent,
    UserCountComponent,
    CardInfoComponent,
    CardItemProfileComponent,
    CardUiComponent,
    BtnLinkIconComponent,
    CardFoodComponent,
    CardListUserComponent,
    BtnLinkCustomComponent,
    SvgIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
