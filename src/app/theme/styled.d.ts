import 'styled-components/native';
import { type theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
