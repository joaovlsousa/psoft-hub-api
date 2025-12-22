import type {
  GetUserDataResponse,
  GetUserRepositoriesResponse,
  OAuthService,
} from '@domain/application/services/oauth-service.ts'
import { faker } from '@faker-js/faker'

export class TestOAuthService implements OAuthService {
  async getAccessToken(_code: string): Promise<string> {
    return faker.string.uuid()
  }

  async getUserData(_accessToken: string): Promise<GetUserDataResponse> {
    return {
      name: 'user',
      githubId: 1234,
      username: 'username',
      avatarUrl: 'http://github.com/username.png',
    }
  }

  async getUserRepositories(
    _accessToken: string
  ): Promise<GetUserRepositoriesResponse> {
    return {
      repositories: Array.from({ length: 5 }).map(() => faker.lorem.slug()),
    }
  }
}
