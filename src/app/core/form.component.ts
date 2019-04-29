import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model";
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs";
import { filter, map, distinctUntilChanged, skipWhile } from "rxjs/operators";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
	selector: "paForm",
	templateUrl: "form.component.html",
	styleUrls: ["form.component.css"]
})
export class FormComponent {
	
	product: Product = new Product();

	originalProduct = new Product();

	constructor(private model: Model, activeRoute: ActivatedRoute,
					private router: Router) {

	   		activeRoute.params.subscribe(params => {
				this.editing = params["mode"] == "edit";
				let id = params["id"];
				if (id != null) {
					Object.assign(this.product, model.getProduct(id) || new Product());
					Object.assign(this.originalProduct, this.product);
				}
			})
	}


	editing: boolean = false;

	submitForm(form: NgForm) {
		if (form.valid) {
			this.model.saveProduct(this.product);
			this.originalProduct = this.product;
			/*this.product = new Product();
			form.reset();*/
			this.router.navigateByUrl("/");
		}
	}

	resetForm() {
		this.product = new Product();
	}
//ngDoCheck() {
// if (this.lastId != this.state.id) {
// this.product = new Product();
// if (this.state.mode == MODES.EDIT) {
// Object.assign(this.product, this.model.getProduct(this.state.id));
// }
// this.lastId = this.state.id;
// }
//}
/*	get editing(): boolean {
		return this.state.mode == MODES.EDIT;
	}
	submitForm(form: NgForm) {
		if (form.valid) {
			this.model.saveProduct(this.product);
			this.product = new Product();
			form.reset();
		}
	}
	resetForm() {
		this.product = new Product();
	}*/
}