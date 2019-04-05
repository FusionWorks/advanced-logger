#!/bin/bash
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
REMOTE_VERSION=$(npm show @fusionworks/advanced-logger version)
echo "Local version: $PACKAGE_VERSION"
echo "Remote version: $REMOTE_VERSION"

if [[ $PACKAGE_VERSION != $REMOTE_VERSION ]]; then
  echo "Version mismatch. Skip deploy."
elif [[ $TRAVIS_PULL_REQUEST = false && $TRAVIS_BRANCH == "master" ]]; then
  git checkout master
  git pull origin master
  LAST_AUTHOR="$(git log -1 --pretty=format:'%an')"
  if [[ $LAST_AUTHOR == "Travis CI User" ]]; then 
    echo "Skip deploy as last commit was made by travis."
  fi
  npm run release
  git push "https://${GITHUB_TOKEN}@github.com/@fusionworks/advanced-logger.git" master

	git checkout -
else
	echo "Thats not master or pull-request to master. Skip deploy."
fi
