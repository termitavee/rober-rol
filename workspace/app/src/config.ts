import { Platform } from 'react-native';

type Subplatform = 'electron' | 'tv' | undefined;
// | 'browser-ext' | 'android-tv' | 'tvos' | 'next' | undefined;

export const isDev = __DEV__;

// Tells on what variant of the platform we're running
export const platform = Platform.OS;
let subplatform: Subplatform;

export const getSubPlatform = () => subplatform;
// TODO electron
if (Platform.isTV) {
  subplatform = 'tv';
}
// Injected in electron and browser-extension builds.
// if (typeof __SUBPLATFORM__ === "string") {
//   subplatform = __SUBPLATFORM__
// }
// else
// For tvOS and Android TV, we can check the Platform.isTV field
// if (Platform.isTV && Platform.OS === 'ios') {
//   subplatform = 'tvos';
// } else if (Platform.isTV && Platform.OS === 'android') {
//   subplatform = 'android-tv';
// }
