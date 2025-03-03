import { css } from "lit";

export const Styles = css`
:host {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: rgb(95, 9, 9);
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  background-color:rgba(13, 0, 42, 0.59); 
}

main {
  flex-grow: 1;
}

.logo {
  margin-top: 36px;
  animation: app-logo-spin infinite 20s linear;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.app-footer {
  font-size: calc(12px + 0.5vmin);
  align-items: center;
}

.app-footer a {
  margin-left: 5px;
}
`;