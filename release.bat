:: Build assets
:: npm run build

:: Commit sources to git repository
git add -A
git commit -m "[build] v%1"

:: Update version number
npm version %1 --message "[release] v%1"

:: Publish
git push
npm publish
