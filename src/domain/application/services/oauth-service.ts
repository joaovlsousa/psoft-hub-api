export interface GetUserDataResponse {
  name: string
  githubId: number
  username: string
  avatarUrl: string
}

export interface OAuthService {
  getAccessToken(code: string): Promise<string>
  getUserData(accessToken: string): Promise<GetUserDataResponse>
}
