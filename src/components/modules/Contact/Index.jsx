import styled from "styled-components";
import Form from "./Form/Index";
import Header from "@/components/ui/Header/Index";
import { Container, MediaQueries } from "@/styles/Utilities";
import { pBase } from "@/styles/Type";

const ContactContainer = styled.div`
  padding: 80px 0;
`;

const ContactInnerContainer = styled.div`
  ${Container}
  display: flex;
  justify-content: space-between;
  gap: 50px;
  flex-direction: column;
  align-items: center;
  @media ${MediaQueries.tablet} {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }
  @media ${MediaQueries.mobile} {
    gap: 20px;
    align-items: flex-start;
  }
`;

const ContactContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media ${MediaQueries.tablet} {
    gap: 12px;
    align-items: center;
  }
  @media ${MediaQueries.mobile} {
    gap: 12px;
    align-items: flex-start;
  }
`;

const Description = styled.p`
  ${pBase}
`;

function Contact({ data }) {
  const { header, description, id } = data;
  return (
    <ContactContainer id={id}>
      <ContactInnerContainer>
        <ContactContentContainer>
          <Header data={header} />
          <Description>{description}</Description>
        </ContactContentContainer>
        <Form />
      </ContactInnerContainer>
    </ContactContainer>
  );
}

export default Contact;
