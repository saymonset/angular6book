import { NgModule } from "@angular/core";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource, REST_URL } from "./rest.datasource";
import { Model } from "./repository.model";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
@NgModule({
	imports: [HttpClientModule, HttpClientJsonpModule],
	providers: [Model, RestDataSource,
				{ provide: REST_URL, useValue: `http://${location.hostname}:3500/products` }]
})
export class ModelModule { }