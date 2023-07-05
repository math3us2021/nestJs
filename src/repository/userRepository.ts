export abstract class UserRepository {
  abstract create(name: string, email: string, memberFunction: string): Promise<void>;
}