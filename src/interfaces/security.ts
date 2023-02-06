import crypto from 'crypto';

export interface ISecurity {
  generateApiKey: () => string;
  generateApiSecret: (key: crypto.BinaryLike) => string;
  authenticateApiKey: (
    storedKey: string,
    suppliedKey: crypto.BinaryLike
  ) => boolean;
}
