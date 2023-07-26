#!/bin/bash
curl -X POST  -H "Accept: Application/json" -H "Content-Type: application/json" http://localhost:3000/messages -d '{"from":"'"$1"'", "to":"'"$2"'", "content": "'"$3"'" }' | json_pp
