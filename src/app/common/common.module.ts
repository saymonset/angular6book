import { NgModule } from "@angular/core";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaAttrDirective } from "./attr.directive";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaCellColor } from "./cellColor.directive";
import { PaCellColorSwitcher } from "./cellColorSwitcher.directive";
import { PaDiscountPipe } from "./discount.pipe";
import { PaDiscountAmountDirective } from "./discountAmount.directive";
import { PaIteratorDirective } from "./iterator.directive";
import { PaStructureDirective } from "./structure.directive";
import { PaModel } from "./twoway.directive";
//import { VALUE_SERVICE, PaDisplayValueDirective} from "./valueDisplay.directive";
import { DiscountService } from "./discount.service";
import { LogService,LOG_LEVEL, LOG_SERVICE,LogLevel } from "./log.service";
import { ModelModule } from "../model/model.module";

@NgModule({imports: [ModelModule],
	 providers: [DiscountService, 
                { provide: LOG_LEVEL, useValue: LogLevel.DEBUG },
                { provide: LogService,
                deps: [LOG_LEVEL],
                useFactory: (level) => {
                let logger = new LogService();
                logger.minimumLevel = level;
                return logger;
                }
                }],
 
declarations: [PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe,
PaCellColor, PaCellColorSwitcher, PaDiscountPipe,
PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
PaModel],
exports: [PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe,
PaCellColor, PaCellColorSwitcher, PaDiscountPipe,
PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective,
PaModel]
})
export class CommonModule { }