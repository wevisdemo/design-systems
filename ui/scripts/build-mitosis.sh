# Mitosis build
npx mitosis build --config=mitosis.config.cjs

# Flatten build dir
find .mitosis/react/src -wholename "*.tsx" -exec mv '{}' .mitosis/react \;
find .mitosis/svelte/src -wholename "*.svelte" -exec mv '{}' .mitosis/svelte \;
find .mitosis/vue/src -wholename "*.vue" -exec mv '{}' .mitosis/vue \;
rm -r .mitosis/*/src

# Remove JSX type from Vue and Svelte file
find .mitosis/vue -type f -wholename "*.vue" -exec sed -i 's/JSX.Element/Element/g' {} \;
find .mitosis/svelte -type f -wholename "*.svelte" -exec sed -i 's/JSX.Element/Element/g' {} \;

# Fix React camelcase SVG property (fill-rule, clip-rule) https://github.com/BuilderIO/mitosis/issues/526
find .mitosis/react -type f -wholename "*.tsx" -exec sed -i 's/-rule=/Rule=/g' {} \;
