rm -rf react svelte vue2

npx mitosis build --config=mitosis.config.cjs

find react -wholename "*.tsx" -exec mv '{}' react \;
find svelte -wholename "*.svelte" -exec mv '{}' svelte \;
find vue2 -wholename "*.vue" -exec mv '{}' vue2 \;

rm -r react/src
rm -r svelte/src
rm -r vue2/src

npx tsc -p tsconfig.react.json
rm react/*.tsx
