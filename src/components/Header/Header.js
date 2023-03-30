import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';
import { FcBiotech } from "react-icons/fc";
// FcBiotech

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display: "flex", alignItems: "center", color: "white",marginBottom:"20px" }}>
        <FcBiotech size="3rem"/><Span>BKK</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Project</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#teach">
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href=''>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href=''>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href=''>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
