import { UnauthorizedError } from '@core/errors/unauthorized-error.ts'
import { JwtService } from '@core/services/jwt-service.ts'
import type { FastifyRequest } from 'fastify'

export async function authMiddleware(request: FastifyRequest) {
  request.getCurrentUserId = () => {
    const token = request.headers.authorization

    if (!token) {
      throw new UnauthorizedError()
    }

    const [tokenType, code] = token.split(' ')

    if (tokenType !== 'Bearer') {
      throw new UnauthorizedError()
    }

    const { sub } = JwtService.verify(code)

    return sub
  }
}
