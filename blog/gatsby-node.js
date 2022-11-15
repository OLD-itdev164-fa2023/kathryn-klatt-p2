const path = require(`path`);

exports.createPages = async ({ graphql, actions })=>{
  const { createPage } = actions;
return new Promise((resolve, reject) =>{
  graphql(`
  {
  allContentfulComics {
    edges {
      node {
        slug
      }
    }
  }
}
  `).then(result => {
    if(result.errors){
      reject(result.errors);
    }
    result.data.allContentfulComics.edges.forEach((edge)=>{
      createPage({
        path: edge.node.slug,
        component: path.resolve(`./src/templates/comic-page.js`),
        context: {
          slug: edge.node.slug,
        },
        defer:true,
      })
    })
    resolve();
  })
});
};
