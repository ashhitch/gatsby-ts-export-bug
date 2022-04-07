const path = require('path');
export const createPages = async (gatsbyUtilities) => {
  const { reporter, actions } = gatsbyUtilities;
  reporter.info(`Build Demo Page`);
  const component  = path.resolve(`./src/templates/demo.tsx`);
  const context = {
    id: 'demo-page',
    title: 'Demo Page',
    more: 'more-context',
};

  actions.createPage({
    path: `/demo-page`,
    component,
    context,
});

}