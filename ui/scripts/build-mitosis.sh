# Mitosis build
npx mitosis build --config=mitosis.config.cjs

# Flatten build dir
find .mitosis/react/src -wholename "*.tsx" -exec mv '{}' .mitosis/react \;
find .mitosis/svelte/src -wholename "*.svelte" -exec mv '{}' .mitosis/svelte \;
find .mitosis/vue/src -wholename "*.vue" -exec mv '{}' .mitosis/vue \;

rm -r .mitosis/*/src
