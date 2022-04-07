import React from 'react';
import { GatsbyBrowser } from 'gatsby';


const BaseLayout =({children}) => {
  return (
    <main>
      <h1>The site</h1>
      {children}
    </main>
  )
}
export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({ element, props }) => (
  <BaseLayout {...props}>{element}</BaseLayout>
);
