import type { UniqueEntityID } from '@core/entities/unique-entity-id.ts'
import { User, type UserProps } from '@domain/entities/user.ts'
import { fakerPT_BR as faker } from '@faker-js/faker'

export function makeUser(
  override: Partial<UserProps> = {},
  id?: UniqueEntityID
): User {
  const user = User.create(
    {
      name: faker.person.fullName(),
      githubId: faker.number.int(),
      githubHashedAccessToken: faker.string.uuid(),
      username: faker.internet.username(),
      avatarUrl: faker.image.avatarGitHub(),
      ...override,
    },
    id
  )

  return user
}
