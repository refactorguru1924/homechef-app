import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({
  logger: {
    level: process.env.LOG_LEVEL || 'info',
  },
});

// Register CORS
await fastify.register(cors, {
  origin: true,
});

// Health check endpoint
fastify.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// DB User endpoint
fastify.get('/db-user', async () => {
  const dbUser = process.env.DB_USER;
  if (!dbUser) {
    return { message: 'DB_USER environment variable not found' };
  }
  return { dbUser };
});

// Sample routes
fastify.get('/api/users', async () => {
  return [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ];
});

fastify.get<{ Params: { id: string } }>('/api/users/:id', async (request, reply) => {
  const { id } = request.params;
  
  // Mock data
  const user = { id: parseInt(id), name: 'John Doe', email: 'john@example.com' };
  
  if (!user) {
    return reply.status(404).send({ error: 'User not found' });
  }
  
  return user;
});

interface CreateUserBody {
  name: string;
  email: string;
}

fastify.post<{ Body: CreateUserBody }>('/api/users', async (request, reply) => {
  const { name, email } = request.body;
  
  // Basic validation
  if (!name || !email) {
    return reply.status(400).send({ error: 'Name and email are required' });
  }
  
  // Mock creation
  const newUser = {
    id: Math.floor(Math.random() * 1000),
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  
  return reply.status(201).send(newUser);
});

fastify.put<{ Params: { id: string }; Body: Partial<CreateUserBody> }>(
  '/api/users/:id',
  async (request, reply) => {
    const { id } = request.params;
    const updates = request.body;
    
    // Mock update
    const updatedUser = {
      id: parseInt(id),
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    return updatedUser;
  }
);

fastify.delete<{ Params: { id: string } }>('/api/users/:id', async (request, reply) => {
  const { id } = request.params;
  
  return reply.status(204).send();
});

// Error handler
fastify.setErrorHandler((error, request, reply) => {
  fastify.log.error(error);
  
  reply.status(error.statusCode || 500).send({
    error: error.message || 'Internal Server Error',
    statusCode: error.statusCode || 500,
  });
});

// Start server
const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '8080');
    const host = process.env.HOST || '0.0.0.0';
    
    await fastify.listen({ port, host });
    console.log(`Server listening on ${host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
