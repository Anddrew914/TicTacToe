({
  url: config.apiOrigin + '/games/' + store.user.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + store.user.token
  },
  data: {}
})
}

curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
    }
  }'
  curl --include --request PATCH http://localhost:4741/change-password/$ID \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \
    --data '{
      "passwords": {
        "old": "an example password",
        "new": "super sekrit"
      }
    }'
