import { InMemoryUsersRepository } from '@test/repositories/in-memory-users-repository.ts'
import { TestOAuthService } from '@test/services/test-oauth-service.ts'
import { expect, it } from 'vitest'
import { AuthenticateWithGithubUseCase } from './authenticate-with-github.ts'

it('', async () => {
  const inMemoryUsersRepository = new InMemoryUsersRepository()
  const testOAuthService = new TestOAuthService()

  const authenticateWithGithubUseCase = new AuthenticateWithGithubUseCase(
    testOAuthService,
    inMemoryUsersRepository
  )

  const { token: token1 } = await authenticateWithGithubUseCase.execute({
    code: 'test-code',
  })

  console.log('passou')

  const { token: token2 } = await authenticateWithGithubUseCase.execute({
    code: 'test-code',
  })

  expect(token1).toBeTruthy()
  expect(token2).toBeTruthy()
  expect(inMemoryUsersRepository.users).toHaveLength(1)
})
