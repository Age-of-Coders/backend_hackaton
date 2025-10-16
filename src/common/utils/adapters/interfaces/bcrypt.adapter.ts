export interface BcryptAdapter {
  hash(value: string): Promise<string>;
  compare(value: string, hashed: string): Promise<boolean>;
}