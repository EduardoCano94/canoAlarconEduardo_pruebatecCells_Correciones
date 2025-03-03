import { css } from "lit";

export const Styles = css`
  h1 {
    color:rgba(3, 54, 29, 0.68);
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    padding: 16px;
  }

  @media (min-width: 1024px) {
    .grid-container {
      grid-template-columns: repeat(
        4,
        1fr
      );
    }
  }
`;
