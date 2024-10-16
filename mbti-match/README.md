# deploy

## 1

yarn build:h5-prod && zip -r dist.zip dist && scp /Users/oyt/a_oyt/develop/work/partTime/character_mbti/dist.zip root@yinian:/opt/deploy/ && rm dist.zip && ssh yinian

## 2

cd /opt/deploy && unzip dist.zip && rm -rf match_wiki && mv dist match_wiki && rm dist.zip && exit
