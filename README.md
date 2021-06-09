# Trending Repos Web Page

A simple web page to display trending repos in github

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Files Structure
github-repos-list
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── actions
    │   ├── repos.js
    │   └── users.js
    ├── components
    │   ├── App.js
    │   └── ReposList.js
    ├── middleware
    │   └── index.js
    └── reducers
    │   ├── index.js
    │   └── repos.js
    └── utils
        ├── _data.js
        ├── api.js
        └── helpers.js

** Your code will talk to the database via 1 method
src/utils/api.js --> getInitialData()

### Sample Request and Data
cmd: curl -v - L "https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=1"
Piece of Result:
{
  "total_count": 33454392,
  "incomplete_results": true,
  "items": [
    {
      "id": 118366160,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMTgzNjYxNjA=",
      "name": "weave",
      "full_name": "iov-one/weave",
      "private": false,
      "owner": {
        "login": "iov-one",
        "id": 34400253,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjM0NDAwMjUz",
        "avatar_url": "https://avatars.githubusercontent.com/u/34400253?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/iov-one",
        "html_url": "https://github.com/iov-one",
        "followers_url": "https://api.github.com/users/iov-one/followers",
        "following_url": "https://api.github.com/users/iov-one/following{/other_user}",
        "gists_url": "https://api.github.com/users/iov-one/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/iov-one/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/iov-one/subscriptions",
        "organizations_url": "https://api.github.com/users/iov-one/orgs",
        "repos_url": "https://api.github.com/users/iov-one/repos",
        "events_url": "https://api.github.com/users/iov-one/events{/privacy}",
        "received_events_url": "https://api.github.com/users/iov-one/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/iov-one/weave",
      "description": "Easy-to-use SDK to build Tendermint ABCI applications",
      "fork": false,
      "url": "https://api.github.com/repos/iov-one/weave",
      "forks_url": "https://api.github.com/repos/iov-one/weave/forks",
      "keys_url": "https://api.github.com/repos/iov-one/weave/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/iov-one/weave/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/iov-one/weave/teams",
      "hooks_url": "https://api.github.com/repos/iov-one/weave/hooks",
      "issue_events_url": "https://api.github.com/repos/iov-one/weave/issues/events{/number}",
      "events_url": "https://api.github.com/repos/iov-one/weave/events",
      "assignees_url": "https://api.github.com/repos/iov-one/weave/assignees{/user}",
      "branches_url": "https://api.github.com/repos/iov-one/weave/branches{/branch}",
      "tags_url": "https://api.github.com/repos/iov-one/weave/tags",
      "blobs_url": "https://api.github.com/repos/iov-one/weave/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/iov-one/weave/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/iov-one/weave/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/iov-one/weave/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/iov-one/weave/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/iov-one/weave/languages",
      "stargazers_url": "https://api.github.com/repos/iov-one/weave/stargazers",
      "contributors_url": "https://api.github.com/repos/iov-one/weave/contributors",
      "subscribers_url": "https://api.github.com/repos/iov-one/weave/subscribers",
      "subscription_url": "https://api.github.com/repos/iov-one/weave/subscription",
      "commits_url": "https://api.github.com/repos/iov-one/weave/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/iov-one/weave/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/iov-one/weave/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/iov-one/weave/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/iov-one/weave/contents/{+path}",
      "compare_url": "https://api.github.com/repos/iov-one/weave/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/iov-one/weave/merges",
      "archive_url": "https://api.github.com/repos/iov-one/weave/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/iov-one/weave/downloads",
      "issues_url": "https://api.github.com/repos/iov-one/weave/issues{/number}",
      "pulls_url": "https://api.github.com/repos/iov-one/weave/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/iov-one/weave/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/iov-one/weave/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/iov-one/weave/labels{/name}",
      "releases_url": "https://api.github.com/repos/iov-one/weave/releases{/id}",
      "deployments_url": "https://api.github.com/repos/iov-one/weave/deployments",
      "created_at": "2018-01-21T19:24:31Z",
      "updated_at": "2021-04-24T23:23:44Z",
      "pushed_at": "2020-05-25T13:53:12Z",
      "git_url": "git://github.com/iov-one/weave.git",
      "ssh_url": "git@github.com:iov-one/weave.git",
      "clone_url": "https://github.com/iov-one/weave.git",
      "svn_url": "https://github.com/iov-one/weave",
      "homepage": "https://weave.iov.one/docs/intro.html",
      "size": 6685,
      "stargazers_count": 1120,
      "watchers_count": 1120,
      "language": "Go",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": false,
      "forks_count": 45,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 19,
      "license": {
        "key": "apache-2.0",
        "name": "Apache License 2.0",
        "spdx_id": "Apache-2.0",
        "url": "https://api.github.com/licenses/apache-2.0",
        "node_id": "MDc6TGljZW5zZTI="
      },
      "forks": 45,
      "open_issues": 19,
      "watchers": 1120,
      "default_branch": "master",
      "score": 1.0
    },
    .
    .
    .
  ]
}
