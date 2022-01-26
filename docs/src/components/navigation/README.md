# Navigation Group

Navigation is a combination of

- Navbar
- NavButton

<WvNavbar title="SOME PROJECT">
  <WvNavButton isActive>About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>

```jsx
import WvNavbar from '@wevisdemo/ui/components/navbar.{vue,jsx,svelte}';
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavbar title="SOME PROJECT">
  <WvNavButton isActive>About</WvNavButton>
  <WvNavButton>Report</WvNavButton>
</WvNavbar>;
```

**With dark theme**

<WvNavbar dark title="SOME PROJECT">
  <WvNavButton dark isActive>About</WvNavButton>
  <WvNavButton dark>Report</WvNavButton>
</WvNavbar>

```jsx
import WvNavbar from '@wevisdemo/ui/components/navbar.{vue,jsx,svelte}';
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavbar dark title="SOME PROJECT">
  <WvNavButton dark isActive>
    About
  </WvNavButton>
  <WvNavButton dark>Report</WvNavButton>
</WvNavbar>;
```
