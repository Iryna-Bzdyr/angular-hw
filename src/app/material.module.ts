
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import {MatInputModule} from '@angular/material'
import {MatCheckboxModule} from '@angular/material'
@NgModule({
    imports: [MatButtonModule, MatInputModule, MatCheckboxModule],
    exports: [MatButtonModule, MatInputModule, MatCheckboxModule]
    })
    export class MaterialAppModule { }