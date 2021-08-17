from following [React + Flux Backed by Rails API - Part 1 | Fancy Pixel](https://fancypixel.github.io/blog/2015/01/28/react-plus-flux-backed-by-rails-api/)

[OAuth2 Resource Owner Password Credentials Grant](https://oauthlib.readthedocs.io/en/latest/oauth2/grants/password.html) type flow

confirm login works:
```bash
$ curl localhost:5000/v1/login --ipv4 -d "username=somebody&email=somebody@email.com&password=password"
{"email":"somebody@email.com","username":"somebody","token_type":"Bearer","user_id":1,"access_token":"1:VZLV3soLtVF9G5Wxpayf"}
```