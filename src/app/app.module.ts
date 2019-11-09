import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';

import {SidebarModule} from './sidebar/sidebar.module';
import {FooterModule} from './shared/footer/footer.module';
import {NavbarModule} from './shared/navbar/navbar.module';
import {FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import {AppComponent} from './app.component';
import {AppRoutes} from './app.routing';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';
import {StagecardComponent} from './stagecard/stagecard.component';
import { TripComponent } from './trip/trip.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationcardComponent } from './locationcard/locationcard.component';
import { BusinesscardComponent } from './businesscard/businesscard.component';
import { AdvertisementcardComponent } from './advertisementcard/advertisementcard.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { ShopComponent } from './shop/shop.component';
import { ItineraryTripComponent } from './itinerary-trip/itinerary-trip.component';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component';
import { OrderInfoComponent } from './order-info/order-info.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemsComponent } from './order-items/order-items.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    HttpClientModule,
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
