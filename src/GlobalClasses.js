import { css } from "styled-components";

export const GlobalClasses = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");
  body {
    font-family: "Poppins", sans-serif;
  }
  .demo {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input,
  textarea {
    outline: none;
  }
`;
