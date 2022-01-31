import { useState } from '@builder.io/mitosis';

export default function WvNavDropdown(props) {
  const state = useState({
    isListOpened: false,
  });

  return (
    <div
      class={`wv_nav-dropdown ${
        props.dark !== undefined
          ? 'wv_nav-dropdown--black'
          : 'wv_nav-dropdown--white'
      }`}
    >
      <button
        class={`wv_font_anuphan wv_b7 wv_nav-button`}
        onClick={() => (state.isListOpened = !state.isListOpened)}
      >
        <span>{props.label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          xmlns="http://www.w3.org/2000/svg"
          style={`transform: rotate(${state.isListOpened ? 180 : 0}deg);`}
        >
          <path
            opacity="0.3"
            d="M5 6L0.669873 1.38009e-07L9.33013 8.95112e-07L5 6Z"
          />
        </svg>
      </button>

      <Show when={state.isListOpened}>
        <div class="wv_nav-dropdown-list">{props.children}</div>
      </Show>
    </div>
  );
}
