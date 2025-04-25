import styled, { css } from "styled-components"
import useInView from '../hooks/useInView';

const Section = styled.section`
  opacity: 0;
  transform: translateY(2rem); 
  transition: opacity 1s ease-out, transform 1s ease-out;

  ${(props) =>
    props.$isVisible &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`

const FadeInSection = ({ name, children }) => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <Section id={name} ref={ref} $isVisible={isInView}>
      {children}
    </Section>
  );
};

export default FadeInSection
