import React from 'react';

import { Section, SectionText, SectionTitle, Capsule, CapsuleText } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from "next/link";

const Hero = (props) => {

  const handleClick = () => {
    const url= 'https://github.com/carlosb93'
    console.log(url);
  }
  
  return (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hola <br />
          Soy Carlos, un </SectionTitle><Capsule><CapsuleText>Programador</CapsuleText></Capsule> 
      
        <SectionText>
       Soy un Ingeniero Eléctrico & Programador de 29 años
        </SectionText>
        <Link href="https://github.com/carlosb93">
          <Button >Ver más</Button>
          </Link>
        
      </LeftSection>
    </Section>
  </>
  );
};

export default Hero;