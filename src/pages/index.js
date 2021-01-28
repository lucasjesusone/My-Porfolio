import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'PortFolio'}</title>
        <html lang={lang || 'pt-br'} />
        <meta name="description" content={description || 'PortFolio'} />
      </Helmet>
      <App />
    </>
  );
};
