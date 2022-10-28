import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GroupKeyComponent } from "./group-key.component";

const groupKeyRoutes: Routes = [
    {
        path: '',
        component: GroupKeyComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(groupKeyRoutes),
        CommonModule
    ],
    exports: [],
    declarations: [],
    providers: []
})
export class GroupKeyRoutingModule { }