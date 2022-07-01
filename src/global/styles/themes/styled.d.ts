import "styled-components";

/**
 * Reescrita da tipagem das props do Styled-Components, utilizada para redefinir o tema
 * @internal
 */

declare module "styled-components" {
  /**
   * Interface da formatação das cores padrões
   */
  interface DesignSystem {
    white: string;
    gray_100: string;
    gray_500: string;
    gray_600: string;
    gray_700: string;
    gray_900: string;
    cyan_500: string;
    yellow_500: string;
  }

  /**
   * Interface para o tema completo
   */
  export interface DefaultTheme {
    title: string;
    colors: DesignSystem;
  }
}
