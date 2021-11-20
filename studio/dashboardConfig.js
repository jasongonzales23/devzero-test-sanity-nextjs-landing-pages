export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619962dabe4542c32442b170',
                  title: 'Sanity Studio',
                  name: 'devzero-test-sanity-nextjs-landing-pages-studio',
                  apiId: '42efb262-1fcc-4a2a-a510-e9ffbbec882d'
                },
                {
                  buildHookId: '619962da100b5ec32b04498e',
                  title: 'Landing pages Website',
                  name: 'devzero-test-sanity-nextjs-landing-pages',
                  apiId: 'a1ea0084-aeac-4c7d-b046-17f8848653df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasongonzales23/devzero-test-sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://devzero-test-sanity-nextjs-landing-pages.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
