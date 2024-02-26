import dotenv from 'dotenv';
import { ConfigContext, ExpoConfig } from 'expo/config';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log();

  config.plugins = config.plugins?.map((c) => {
    if (c[0] === 'expo-router') return [c[0], { ...c[1], origin: process.env.SERVER }];
    return c;
  });

  return config as ExpoConfig;
};
