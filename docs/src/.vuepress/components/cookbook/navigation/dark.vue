<template>
  <WvNavbar :dark="true" title="SOME PROJECT">
    <WvNavDropdown :dark="true" label="Topic">
      <WvNavDropdownItem :dark="true">Topic 1</WvNavDropdownItem>
      <WvNavDropdownItem :dark="true">Topic 2</WvNavDropdownItem>
      <WvNavDropdownItem :dark="true">Topic Something</WvNavDropdownItem>
    </WvNavDropdown>

    <WvNavButton :dark="true" active>About</WvNavButton>
    <WvNavButton :dark="true">Report</WvNavButton>
  </WvNavbar>
</template>
