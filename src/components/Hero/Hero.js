import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
       This is BKK<br/>
       personal page.
      </SectionTitle>
      <SectionText>
        I am recently graduate from UClan with first class degree🎓, and I want to work as front-end developer.🚀 
      </SectionText>
      <Button onclick={()=> {
        window.location="https://google.com"
      }}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;