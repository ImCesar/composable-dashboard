import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

type themeModel = {
  color: {
    background: string;
    main: string;
    secondary: string;
    accent: string;
  }

}
export const theme: themeModel = {
  color: {
    background: "#222831",
    main: "#2d4059",
    secondary: "#ff5722",
    accent: "#eeeeee"
  }
};

type GlobalStyleProps = {
  background?: string;
}

export const GlobalStyle: GlobalStyleComponent<GlobalStyleProps, themeModel> = createGlobalStyle`
  * {
    color: #eeeeee;
    font-size: 62.5%;
    font-family: Roboto, sans-serif
  }

  html {
  background-color: ${props => props.background ? props.background : "#222831"};
  }
`;
