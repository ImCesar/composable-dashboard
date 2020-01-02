import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, theme } from "../../themes/dark-theme";

type StoryBookWrapperProps = {
  background?: string;
}

const StoryBookWrapper: FunctionComponent<StoryBookWrapperProps> = ({ background, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle background={background}/>
      {children}
    </ThemeProvider>
  );
};

export default StoryBookWrapper;
