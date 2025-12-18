import { FastifyInstance } from "fastify"
import { getHealthStatus } from "../controllers/health.js"

async function healthRoutes(app: FastifyInstance) {
    app.get('/health', {
        schema: {
            description: 'Health check endpoint',
            tags: ['health'],
            response: {
                200: {
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        timestamp: { type: 'string' },
                        uptime: { type: 'number' },
                        environment: { type: 'string' },
                        memory: {
                            type: 'object',
                            properties: {
                                rss: { type: 'number' },
                                heapTotal: { type: 'number' },
                                heapUsed: { type: 'number' },
                                external: { type: 'number' },
                                arrayBuffers: { type: 'number' }
                            }
                        },
                        version: { type: 'string' }
                    }
                },
                500: {
                    type: 'object',
                    properties: {
                        status: { type: 'string' },
                        timestamp: { type: 'string' },
                        message: { type: 'string' }
                    }
                }
            }
        }
    }, getHealthStatus)
}

export default healthRoutes