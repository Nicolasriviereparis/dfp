let url = 'http://localhost/PROBTP-Larousse/graphql';

  const WPQL_QUERY = {
    query: `{
  posts(first: 99999) {
    edges {
      node {
        databaseId
        title
        slug
          defs {
            items {
              deprecated
                referto {
                ... on Post {
                  databaseId
                }
              }
              fullname
              type
              definition
              isMore
              moreContent
            }
          }
        }
      }
    }
  }
`,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(WPQL_QUERY),
  })
  .then((res) => res.json())
  .then((json) => {
    json = json.data.posts.edges.map(function (e) {
      return e.node;
    });
    json.sort(function (a, b) {
      var x = a.title.toLowerCase();
      var y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    JSON.stringify(json);
    // console.log(json[13]);
    return json;
  })
  .then((json) => (data = json))
  .then(() => showResult(data))
  .catch(err => console.log('Une erreur' + err));
