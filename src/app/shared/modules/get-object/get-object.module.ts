import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetObjService } from './services/get-obj.service';
import { CatagoryNamePipe } from './pipes/catagory-name.pipe';
import { ManufacturedNamePipe } from './pipes/manufactured-name.pipe';
import { UnitNamePipe } from './pipes/unit-name.pipe';
import { ProductPipe } from './pipes/product.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatagoryNamePipe,ManufacturedNamePipe,UnitNamePipe, ProductPipe],
  exports:[CatagoryNamePipe,ManufacturedNamePipe,UnitNamePipe,ProductPipe],
  providers:[GetObjService]
})
export class GetObjectModule { }
