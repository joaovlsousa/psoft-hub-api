import type { Project } from '@domain/entities/project.ts'

export interface UpdateImageParams {
  projectId: string
  imageId: string
  imageUrl: string
}

export interface ProjectsRespository {
  findByUserId(userId: string): Promise<Project[]>
  findById(projectId: string): Promise<Project | null>
  save(project: Project): Promise<void>
  create(project: Project): Promise<void>
  delete(projectId: string): Promise<void>
}
