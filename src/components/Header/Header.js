import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTelegram, BsLightningChargeFill } from 'react-icons/bs';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <BsLightningChargeFill size="3rem" /> <span>Portafólio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Proyectos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Tecnologías</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>Sobre mí</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/carlosb93">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://t.me/ms_charlie93">
          <BsTelegram size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/charlie_wave/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
