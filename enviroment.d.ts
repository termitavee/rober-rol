declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER: string;
      NODE_ENV: string;
    }
  }
}
