// declare namespace fastify{
//   export interface Request {
//     request: {
//       file: any
//     }
//   }
// }

export {};

declare global {
  namespace fastify {
    interface FastifyRequest {
      file: any;
    }
  }
}
