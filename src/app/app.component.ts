import { ApplicationRef,Component } from '@angular/core';
import { Model } from "./repository.model";
import { Product } from "./product.model";
@Component({
  selector: 'app',
  templateUrl: './template.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
		(<any>window).appRef = ref;
		(<any>window).model = this.model;
	}

	getClasses(key: number): string {
		let product = this.model.getProduct(key);
		return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
	}

	getClassMap(key: number): Object {
		let product = this.model.getProduct(key);
			return {
					"text-center bg-danger": product.name == "Kayak",
					"bg-info": product.price < 50
			};
		}

		getProductByPosition(position: number): Product {
			return this.model.getProducts()[position];
		}
		
		getClassesByPosition(position: number): string {
			let product = this.getProductByPosition(position);
			return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning");
		}
}
