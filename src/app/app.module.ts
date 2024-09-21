import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      SharedModule,
      MaterialModule
    ]
  })
  export class AppModule {}