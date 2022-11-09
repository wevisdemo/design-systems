# Mitosis build
npx mitosis build --config=mitosis.config.cjs

# Flatten build dir
find react/src -wholename "*.tsx" -exec mv '{}' react \;
find svelte/src -wholename "*.svelte" -exec mv '{}' svelte \;
find vue2/src -wholename "*.vue" -exec mv '{}' vue2 \;

rm -r react/src
rm -r svelte/src
rm -r vue2/src

# Compile React TS package
npx tsc -p tsconfig.react.json
rm react/*.tsx
