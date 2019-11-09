import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  token;
  roles;
  baseUrl;
  authenticated = false;

  baseUrlSecurity;
  clientId = 'events.travelful.co';

  prepareHeaders() {
    if (typeof  this.token !== 'undefined') {
      return {'headers': {'Access-Control-Request-Method': 'POST,GET,DELETE,PUT', 'Authorization': 'Bearer ' + this.token['access_token']}};
    } else {
      return {'headers': {'Access-Control-Request-Method': 'POST,GET,DELETE,PUT'}};
    }

  }


  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  stages(bookingId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.get(this.baseUrl + 'travel-assist/trip/' + bookingId);
  }

  itinerary(bookingId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    let request = {'bookingId': bookingId}
    return this.http.post(this.baseUrl + 'travel-assist/itinerary/', request);
  }

  createOrder(order) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.post(this.baseUrl + 'travel-assist/createOrder/', order);
  }

  servicesForStages(typeId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.get(this.baseUrl + 'travel-assist/servicesForStages/' + typeId);
  }

  businessSearchByVenue(request) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    return this.http.post(environment.travelful + 'search/globalVenue/', request);
  }

  catalogsForBusiness(publicId) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);
    let request = {'publicId': publicId}
    return this.http.post(environment.travelful + 'business/catalogsForBusiness', request);
  }

  catalogsByName(request) {
    // const headers = new HttpHeaders().set("Authorization", "Bearer "+this.token.accessToken);

    return this.http.post(environment.travelful + 'business/catalogsByName', request);
  }


}
