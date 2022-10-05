import React from 'react';

import { Section, SectionText, SectionTitle, Capsule, CapsuleText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hola <br />
          Soy Carlos, un </SectionTitle><Capsule><CapsuleText>Programador</CapsuleText></Capsule> 
      
        <SectionText>
       Soy un Ingeniero Eléctrico & Programador de 29 años
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;