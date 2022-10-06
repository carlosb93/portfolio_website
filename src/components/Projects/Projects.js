import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { projects } from '../../constants/constants';

const Projects = () => {

  const handleClick = (url) => {
    window.location.href = url;
  }


  return(

  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Proyectos</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <Button OnClick={handleClick(p.source)}>Source</Button>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);
    };

export default Projects;