export interface Token {
  authenticated: boolean;
  internalUserId: number;
  internalUserUUID: string;
  privileges: string;
  token: string;
  type: number;
  userId: string;
}