yarn run mitosis build

cp components/react/**/*.tsx components/react
cp components/svelte/**/*.svelte components/svelte
cp components/vue2/**/*.vue components/vue2

rm -r components/react/src
rm -r components/svelte/src
rm -r components/vue2/src
