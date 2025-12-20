import { GITHUB_API_URL, GITHUB_LOGIN_URL } from '@config/constants.ts'
import { env } from '@config/env.ts'
import type {
  GetUserDataResponse,
  OAuthService,
} from '@domain/application/services/oauth-service.ts'
import { z } from 'zod'

export class GithubOAuthService implements OAuthService {
  async getAccessToken(code: string): Promise<string> {
    const githubOAuthURL = new URL(GITHUB_LOGIN_URL)

    githubOAuthURL.searchParams.set('client_id', env.GITHUB_OAUTH_CLIENT_ID)
    githubOAuthURL.searchParams.set(
      'client_secret',
      env.GITHUB_OAUTH_CLIENT_SECRET
    )
    githubOAuthURL.searchParams.set(
      'redirect_uri',
      env.GITHUB_OAUTH_CLIENT_REDIRECT_URI
    )
    githubOAuthURL.searchParams.set('code', code)

    const githubAccessTokenResponse = await fetch(githubOAuthURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const githubAccessTokenData = await githubAccessTokenResponse.json()

    const { access_token: githubAccessToken } = z
      .object({
        access_token: z.string(),
        token_type: z.literal('bearer'),
        scope: z.string(),
      })
      .parse(githubAccessTokenData)

    return githubAccessToken
  }

  async getUserData(accessToken: string): Promise<GetUserDataResponse> {
    const githubUserResponse = await fetch(`${GITHUB_API_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    })

    const githubUserData = await githubUserResponse.json()

    const {
      name,
      avatar_url: avatarUrl,
      id: githubId,
      login: username,
    } = z
      .object({
        avatar_url: z.url(),
        name: z.string().nullable(),
        id: z.number(),
        login: z.string(),
      })
      .parse(githubUserData)

    return {
      name: name ?? 'User',
      githubId,
      username,
      avatarUrl,
    }
  }
}
