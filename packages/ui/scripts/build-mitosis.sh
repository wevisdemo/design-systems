rm -rf components

npx mitosis build --config=mitosis.config.cjs

cd components

find . -wholename "*.tsx" -exec mv '{}' . \;
find . -wholename "*.svelte" -exec mv '{}' . \;
find . -wholename "*.vue" -exec mv '{}' . \;

rm -r react
rm -r svelte
rm -r vue2

npx tsc -p tsconfig.react.json

rm *.tsx

cd ..
