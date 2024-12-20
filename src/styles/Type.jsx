import { MediaQueries } from "./Utilities";
import { css } from "styled-components";
import { keyframes } from "styled-components";

const monsterrat = `Montserrat, sans-serif`;
const openSans = "Open Sans, sans-serif";

export const h1styles = css`
  font-family: ${monsterrat};
  text-transform: uppercase;
  font-size: 8rem;
  line-height: 9.4rem;
  color: #ffff;

  @media ${MediaQueries.tablet} {
    font-size: 4rem;
    line-height: 4.8rem;
  }

  @media ${MediaQueries.mobile} {
    font-size: 3rem;
    line-height: 3.2rem;
  }
`;

export const h2styles = css`
  font-family: ${monsterrat};
  font-size: 3.4rem;
  line-height: 4.5rem;
  color: #ffff;

  @media ${MediaQueries.tablet} {
    font-size: 3.5rem;
    line-height: 3.7rem;
  }

  @media ${MediaQueries.mobile} {
    font-size: 2.9rem;
    line-height: 3rem;
  }
`;

export const h3styles = css`
  font-family: ${monsterrat};
  font-size: 5.2rem;
  line-height: 6.3rem;
  font-weight: 300;
  color: #ffff;

  @media ${MediaQueries.tablet} {
    font-size: 3.7rem;
    line-height: 3.8rem;
  }

  @media ${MediaQueries.mobile} {
    font-size: 3.2rem;
    line-height: 3.3rem;
  }
`;

export const h4styles = css`
  font-family: ${monsterrat};
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 300;
  color: #ffff;

  @media ${MediaQueries.tablet} {
    font-size: 1.8rem;
    line-height: 3rem;
  }

  @media ${MediaQueries.mobile} {
    font-size: 1.6rem;
    line-height: 2.8rem;
  }
`;

export const pLarge = css`
  font-family: ${monsterrat};
  font-size: 2.4rem;
  line-height: 3.2rem;
  font-weight: 300;
  color: #ffff;

  @media ${MediaQueries.tablet} {
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
`;

export const pBase = css`
  font-family: ${monsterrat};
  font-size: 1.5rem;
  line-height: 1.7rem;
  font-weight: 300;
  color: #ffff;

  @media ${MediaQueries.tablet} {
    font-size: 1.3rem;
    line-height: 1.4rem;
  }
`;

export const pSmall = css`
  font-family: ${monsterrat};
  font-size: 1.1rem;
  line-height: 1.3rem;
  font-weight: 300;
  color: #ffff;
`;

export const pXSmall = css`
  font-family: ${monsterrat};
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 300;
  color: #ffff;
`;

export const buttonType = css`
  font-family: ${monsterrat};
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  color: #ffff;
`;
