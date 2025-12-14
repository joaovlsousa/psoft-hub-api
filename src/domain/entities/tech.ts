import { Entity } from '@core/entities/entity.ts'
import type { UniqueEntityID } from '@core/entities/unique-entity-id.ts'
import type { Optional } from '@core/types/optional.ts'

export interface TechProps {
  name: string
  imageUrl: string
  imageId: string
  createdAt: Date
  updatedAt?: Date | null
}

export class Tech extends Entity<TechProps> {
  public static create(
    props: Optional<TechProps, 'createdAt'>,
    id?: UniqueEntityID
  ) {
    const tech = new Tech(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    )

    return tech
  }

  public get name(): string {
    return this.props.name
  }

  public get imageUrl(): string {
    return this.props.imageUrl
  }

  public get imageId(): string {
    return this.props.imageId
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }

  public get updatedAt(): Date | undefined | null {
    return this.props.updatedAt
  }
}
