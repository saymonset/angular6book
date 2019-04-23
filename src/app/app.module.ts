import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaAttrDirective } from "./attr.directive";
import { PaModel } from "./twoway.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { AppComponent } from './app.component';
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { LOCALE_ID } from "@angular/core";
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { SimpleDataSource } from "./datasource.model";
import { Model } from "./repository.model";
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    PaAttrDirective,
    PaModel, PaStructureDirective, PaIteratorDirective,
    PaCellColor, PaCellColorSwitcher, ProductTableComponent,
	ProductFormComponent, PaToggleView, PaAddTaxPipe,
	PaCategoryFilterPipe,PaDiscountDisplayComponent, PaDiscountEditorComponent,
  PaDiscountPipe, PaDiscountAmountDirective],

  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" },DiscountService, SimpleDataSource , Model],
  bootstrap: [AppComponent]
})
export class AppModule { }
