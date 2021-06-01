import { css, Global } from "@emotion/react";

export const GlobalStyles = () => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
          "Segoe UI Symbol";
      }
    `}
  />
);
