import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserComponent} from '../../pages/user/user.component';
import {TableComponent} from '../../pages/table/table.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UpgradeComponent} from '../../pages/upgrade/upgrade.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StagecardComponent} from '../../stagecard/stagecard.component';
import {TripComponent} from '../../trip/trip.component';
import {LocationsComponent} from '../../locations/locations.component';
import {LocationcardComponent} from '../../locationcard/locationcard.component';
import {BusinesscardComponent} from '../../businesscard/businesscard.component';
import {AdvertisementcardComponent} from '../../advertisementcard/advertisementcard.component';
import {CatalogComponent} from '../../catalog/catalog.component';
import {CategorylistComponent} from '../../categorylist/categorylist.component';
import {ShopComponent} from '../../shop/shop.component';
import {ItineraryComponent} from '../../itinerary/itinerary.component';
import {ItineraryTripComponent} from '../../itinerary-trip/itinerary-trip.component';
import {ModalModule} from '../../_modal';
import {CartDialogComponent} from '../../cart-dialog/cart-dialog.component';
import {OrderInfoComponent} from '../../order-info/order-info.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ModalModule,

  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    StagecardComponent,
    TripComponent,
    LocationsComponent,
    LocationcardComponent,
    BusinesscardComponent,
    AdvertisementcardComponent,
    CatalogComponent,
    CategorylistComponent,
    ShopComponent,
    ItineraryComponent,
    ItineraryTripComponent,
    CartDialogComponent,
    OrderInfoComponent,
  ]
})

export class AdminLayoutModule {
}
