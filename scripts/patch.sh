curl --include --request PATCH http://localhost:4741/games/$ID \
  --header "Authorization: Token token=780db55556182c219300c54ea16b4d8f" \
  --header "Content-Type: application/json" \
  --data {
  "game": {
    "cell": {
      "index": 0,
      "value": "x"
    },
    "over": false
  }
}
