import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 20px;
  display: flex;
justify-content: center;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      © Fozima {currentYear}
    </StyledFooter>
  );
}