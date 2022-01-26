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

<WvNavbar withDarkTheme title="SOME PROJECT">
  <WvNavButton withDarkTheme isActive>About</WvNavButton>
  <WvNavButton withDarkTheme>Report</WvNavButton>
</WvNavbar>

```jsx
import WvNavbar from '@wevisdemo/ui/components/navbar.{vue,jsx,svelte}';
import WvNavButton from '@wevisdemo/ui/components/nav-button.{vue,jsx,svelte}';

<WvNavbar withDarkTheme title="SOME PROJECT">
  <WvNavButton withDarkTheme isActive>
    About
  </WvNavButton>
  <WvNavButton withDarkTheme>Report</WvNavButton>
</WvNavbar>;
```
