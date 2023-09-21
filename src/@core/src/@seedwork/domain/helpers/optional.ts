/**
 *  Make some property on type
 *
 * @example
 *
 * type User {
 *  id: string
 *  name: string
 *  email: number
 *  password: string
 * }
 *  Optional<User, 'id', 'email'>
 */
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
