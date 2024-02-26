import { ExpoRequest, ExpoResponse } from 'expo-router/server';
import mysql from 'mysql';

const con = mysql.createConnection({
  host: process.env.EXPO_PUBLIC_DB_HOST,
  user: process.env.EXPO_PUBLIC_DB_USER,
  password: process.env.EXPO_PUBLIC_DB_PASSWORD,
});
// https://docs.expo.dev/guides/environment-variables/
// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://www.w3schools.com/nodejs/nodejs_mysql.asp
export function GET(request: ExpoRequest) {
  con.connect((err) => {
    if (err) {
      console.log('fail connect', err);
      return new ExpoResponse('error opening db', { status: 500 });
    }

    console.log('db query and get');
    con.end();
    return ExpoResponse.json({ hello: 'world' });
  });
}

export function POST(request: ExpoRequest) {
  console.log('update user ');
  return ExpoResponse.json({ hello: 'world' });
}
