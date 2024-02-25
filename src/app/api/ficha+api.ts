import { ExpoRequest, ExpoResponse } from 'expo-router/server';
// https://www.w3schools.com/nodejs/nodejs_mysql.asp
export function GET(request: ExpoRequest) {
  console.log('db query and get');
  return ExpoResponse.json({ hello: 'world' });
}

export function POST(request: ExpoRequest) {
  console.log('update user ');
  return ExpoResponse.json({ hello: 'world' });
}
