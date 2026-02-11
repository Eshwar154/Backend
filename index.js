require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
  "login": "Eshwar154",
  "id": 140734986,
  "node_id": "U_kgDOCGNyCg",
  "avatar_url": "https://avatars.githubusercontent.com/u/140734986?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Eshwar154",
  "html_url": "https://github.com/Eshwar154",
  "followers_url": "https://api.github.com/users/Eshwar154/followers",
  "following_url": "https://api.github.com/users/Eshwar154/following{/other_user}",
  "gists_url": "https://api.github.com/users/Eshwar154/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Eshwar154/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Eshwar154/subscriptions",
  "organizations_url": "https://api.github.com/users/Eshwar154/orgs",
  "repos_url": "https://api.github.com/users/Eshwar154/repos",
  "events_url": "https://api.github.com/users/Eshwar154/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Eshwar154/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Eshwar Paygude",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "👋 I'm Eshwar Paygude — AI developer with a background in Robotics, NLP, and ML.\r\nCurrently building LLM-powered agents & smart apps using LangChain",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 0,
  "following": 16,
  "created_at": "2023-07-27T15:37:34Z",
  "updated_at": "2026-01-19T10:23:50Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/github',(req,res)=>{
   res.json(githubData)
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur Code</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
