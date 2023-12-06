import { Container, MediaQueries } from "@/styles/Utilities";
import styled, { keyframes } from "styled-components";
import { variables } from "@/styles/Variables";
import Link from "next/link";
import { pSmall, pXSmall } from "@/styles/Type";

const BuiltWithContainer = styled.div`
  padding-bottom: 80px;
`;

const wiggle = keyframes`
   0% {
      transform: rotate(0deg);
    }
    80% {
      transform: rotate(0deg);
    }
    85% {
      transform: rotate(10deg);
    }
    95% {
      transform: rotate(-10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  
`;

const BuiltWithInnerContainer = styled.div`
  ${Container}
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 50px;
  @media ${MediaQueries.tablet} {
    gap: 30px;
    flex-direction: column-reverse;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
    flex-direction: column-reverse;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 12px;
  @media ${MediaQueries.tablet} {
    width: 100%;

    justify-content: space-between;
    gap: 24px;
  }

  @media ${MediaQueries.mobile} {
    width: 100%;
    flex-direction: column;
    gap: 20px;
  }
`;

const ProjectImg = styled.img`
  width: 60%;
  height: auto;
  @media ${MediaQueries.tablet} {
    width: 100%;
  }
`;

const Description = styled.div`
  p {
    ${pSmall}
    margin-bottom: 4px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style-type: none;

    li {
      ${pSmall}
      &::before {
        content: "•";
        color: ${variables.color1};
        padding-right: 5px;
        font-size: 30px;
      }
    }
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${MediaQueries.tablet} {
    justify-content: center;
  }
`;

const IndividualCardContainer = styled.div`
  background-color: ${variables.black};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  justify-content: center;
`;

const Icon = styled.img`
  width: 50px;
  height: auto;
`;

const ExternalLink = styled(Link)`
  padding: 10px 20px;
  z-index: 1;
  background-color: ${variables.color1};
  top: 300px;
  max-width: 160px;
  width: 100%;
  display: flex;
  gap: 4px;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: ${variables.color2};
    transition: all 0.3s ease-in;
    &::after {
      animation: ${wiggle} 0.7s infinite;
    }
  }
  &::after {
    width: 20px;
    height: 20px;
    background-size: cover;
    background-repeat: no-repeat;
    content: "";
    display: block;
    background-image: url("/icons/external_link.svg");
  }
  @media ${MediaQueries.mobile} {
    max-width: unset;
    justify-content: center;
  }
`;

function BuiltWith({ data }) {
  const { description, builtWith, img, websiteUrl } = data;
  return (
    <BuiltWithContainer>
      <BuiltWithInnerContainer>
        <ContentContainer>
          <ExternalLink target="_blank" href={websiteUrl}>
            Visit Project
          </ExternalLink>
          <Description dangerouslySetInnerHTML={{ __html: description }} />
          <CardContainer>
            {builtWith.map((lang, index) => {
              const { icon, skill } = lang;
              return (
                <IndividualCardContainer key={`${skill}-${index}`}>
                  <Icon src={icon.src} alt={icon.alt}></Icon>
                </IndividualCardContainer>
              );
            })}
          </CardContainer>
        </ContentContainer>
        {img && (
          <ProjectImg width={300} height={100} src={img.src} alt={img.alt} />
        )}
      </BuiltWithInnerContainer>
    </BuiltWithContainer>
  );
}

export default BuiltWith;
