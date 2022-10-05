import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {FaWrench} from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Tecnologías</SectionTitle>
    <SectionText>
    He trabajado con una variedad de tecnologías en el mundo del desarrollo web.
      Desde BackEnd a FrontEnd, utilizando herramientas de trabajo modernas como Git y metodologias de desarrollo ágil
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiencia con <br />
            React.js Vue.js y básicos
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          Experiencia con <br />
            Node, PHP(Laravel), Python and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaWrench size="2rem" />
        </picture>
        <ListContainer>
          <ListTitle>Herramientas</ListTitle>
          <ListParagraph>
            VS Code, Postman, GIT,  DBmanager, Docker...
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
