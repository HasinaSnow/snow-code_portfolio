export interface IProjectDetail {
    title: string,
    subtitle: string,
    category: TCategProject,
    images: IImageProject[]
    description: string,
    features: string[],
    stacks: string[],
    links?: IProjectLinks
}

export type TCategProject = 'All' | 'Fullstack' | 'Backend' | 'Frontend'

export interface IImageProject {
    src: string,
    title?: string,
    alt?: string,
}

export interface IProject {
    id: string,
    details: IProjectDetail
}

export interface IProjectLinks {
    repo?: string,
    site?: string,
    demo?: string
}

export interface IProjectIndex {
    id: string,
    title: string,
    subtitle: string,
    category: TCategProject,
    imgRef?: string,
    links?: IProjectLinks,
}