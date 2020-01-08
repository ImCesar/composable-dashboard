import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

type ThemeModel = {
  color: {
    background: string;
    main: string;
    secondary: string;
    accent: string;
  };

}
export const theme: ThemeModel = {
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

export const GlobalStyle: GlobalStyleComponent<GlobalStyleProps, ThemeModel> = createGlobalStyle`
  * {
    color: #eeeeee;
    font-family: Roboto, sans-serif;
  }

  html {
    font-size: 62.5%;
    background-color: ${props => props.background ? props.background : "#222831"};
  }

  p {
    font-size: 1.4rem;
    margin: 0;
  }
`;
