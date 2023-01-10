import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { Show, useDefaultProps, useStore } from '@builder.io/mitosis';

interface WvNavDropdownProps {
  dark?: boolean;
  label?: string;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvNavDropdown(props: WvNavDropdownProps) {
  useDefaultProps<WvNavDropdownProps>({
    dark: false,
    label: '',
  });

  const state = useStore({
    isListOpened: false,
    toggleList(event: MouseEvent) {
      event.stopPropagation();
      state.isListOpened = !state.isListOpened;
    },
  });

  return (
    <div
      class={`wv_nav-dropdown ${
        props.dark ? 'wv_nav-dropdown--black' : 'wv_nav-dropdown--white'
      }`}
    >
      <button
        class="wv-font-ibmplex wv-b7 wv_nav-button"
        onClick={(event) => state.toggleList(event)}
      >
        <span>{props.label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          class={`wv_nav-button-chevron ${
            state.isListOpened ? 'wv_nav-button-chevron--opened' : ''
          }`}
        >
          <path
            opacity="0.3"
            d="M5 6L0.669873 1.38009e-07L9.33013 8.95112e-07L5 6Z"
          />
        </svg>
      </button>

      <Show when={state.isListOpened}>
        <div
          class="wv_nav-dropdown-list"
          onClick={() => (state.isListOpened = false)}
        >
          {props.children}
        </div>
      </Show>
    </div>
  );
}
