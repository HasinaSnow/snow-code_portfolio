import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { InputTextModule } from 'primeng/inputtext'
import { FormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { SelectButtonModule } from 'primeng/selectbutton'
import { TCategProject } from '../project.interface';

interface IFilter {
    label: string,
    value: TCategProject
}

@Component({
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ToolbarModule,
        ButtonModule,
        SelectButtonModule
    ],
    selector: 'app-project-filters',
    template: `
        <p-toolbar styleClass="border-none w-full flex flex-col md:flex-row">
            <div class="p-toolbar-group-start overflow-auto">
                <p-selectButton
                    styleClass="w-full flex flex-nowrap overflow-hidden"
                    [options]="filters" 
                    [(ngModel)]="value"
                    (onOptionClick)="filterCateg.emit(value)"
                    optionLabel="label" 
                    optionValue="value" />
            </div>
            <div class="p-toolbar-group-end">
                <span class="p-input-icon-left">
                    <i class="pi pi-search"></i>
                    <input type="text" pInputText [(ngModel)]="searchValue" placeholder="Search" />
                </span>
            </div>
        </p-toolbar>
    `
})
export class ProjectFiltersComponent {
    @Output() filterCateg: EventEmitter<TCategProject> = new EventEmitter()
    @Output() filterSearch: EventEmitter<string> = new EventEmitter()
    searchValue: WritableSignal<string> = signal('')
    effect = effect(() => {
        console.log('input change value', this.searchValue())
        this.filterSearch.emit(this.searchValue())
    })

    filters: IFilter[] = [
        { label: 'All', value: 'All' },
        { label: 'Fullstack', value: 'Fullstack' },
        { label: 'Frontend', value: 'Frontend' },
        { label: 'Backend', value: 'Backend' },
    ]
    value: TCategProject = 'All'

    onChange(value: string) {
        console.log('on change', value)
    }

}