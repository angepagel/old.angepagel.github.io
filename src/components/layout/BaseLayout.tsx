import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

export default function BaseLayout(props: React.ComponentProps<'div'>) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}