import type { Tech } from '@domain/enterprise/entities/tech.ts'

export interface TechsRespository {
  findAll(): Promise<Tech[]>
  create(tech: Tech): Promise<void>
  delete(techId: string): Promise<void>
}
