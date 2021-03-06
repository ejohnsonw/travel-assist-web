import {Routes} from '@angular/router';

import {DashboardComponent} from '../../pages/dashboard/dashboard.component';
import {UserComponent} from '../../pages/user/user.component';
import {TableComponent} from '../../pages/table/table.component';
import {TypographyComponent} from '../../pages/typography/typography.component';
import {IconsComponent} from '../../pages/icons/icons.component';
import {MapsComponent} from '../../pages/maps/maps.component';
import {NotificationsComponent} from '../../pages/notifications/notifications.component';
import {UpgradeComponent} from '../../pages/upgrade/upgrade.component';
import {TripComponent} from '../../trip/trip.component';
import {LocationsComponent} from '../../locations/locations.component';
import {CatalogComponent} from '../../catalog/catalog.component';
import {ShopComponent} from '../../shop/shop.component';
import {CartDialogComponent} from '../../cart-dialog/cart-dialog.component';
import {OrdersComponent} from '../../orders/orders.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'trip', component: TripComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'shop/:tripIdx', component: ShopComponent},
  {path: 'user', component: UserComponent},
  {path: 'table', component: TableComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'upgrade', component: UpgradeComponent},
  {path: 'viewCart', component: CartDialogComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'catalog/:publicId', component: CatalogComponent}
];
