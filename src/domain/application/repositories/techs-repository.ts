import type { Tech } from '@domain/entities/tech.ts'

export interface TechsRespository {
  findAll(): Promise<Tech[]>
  findManyByIdList(techsIds: string[]): Promise<Tech[]>
  create(tech: Tech): Promise<void>
  delete(techId: string): Promise<void>
}
