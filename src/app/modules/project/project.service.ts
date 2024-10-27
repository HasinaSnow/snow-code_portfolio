import { Injectable, WritableSignal, signal } from "@angular/core";
import { IProject, IProjectIndex } from "./project.interface"
import { PROJECT_DATA } from "./project-data";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    projects: WritableSignal<IProject[]> = signal(PROJECT_DATA)

    getAll(): IProjectIndex[] {
        return  this.projects().map(project => ({
            id: project.id,
            imgRef: project.details.images[0].src,
            title: project.details.title,
            category: project.details.category,
            subtitle: project.details.subtitle,
            links: project.details.links
        } as IProjectIndex))
    }

    getOne(id: string) {
        return this.projects().find(project => project.id == id)
    }

}