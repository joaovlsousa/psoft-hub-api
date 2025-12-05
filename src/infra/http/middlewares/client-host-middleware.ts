import { env } from '@config/env.ts'
import { ForbiddenError } from '@core/errors/forbidden-error.ts'
import type { FastifyRequest } from 'fastify'

export async function clientHostMiddleware(request: FastifyRequest) {
  if (
    !request.headers.origin ||
    request.headers.origin !== env.CLIENT_APP_URL
  ) {
    throw new ForbiddenError()
  }
}
