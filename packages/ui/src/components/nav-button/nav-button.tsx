import '@builder.io/mitosis/dist/src/jsx-types';

interface WvNavButtonProps {
  dark?: boolean;
  active: boolean;
  onClick?: () => void;
  children?: JSX.Element;
}

export default function WvNavButton(props: WvNavButtonProps) {
  return (
    <button
      class={`wv_nav-button wv_font_anuphan wv_b7 ${
        props.dark !== undefined
          ? 'wv_nav-button--white'
          : 'wv_nav-button--black'
      } ${props.active !== undefined ? 'wv_nav-button--active' : ''}`}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
}
