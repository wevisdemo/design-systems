import '@builder.io/mitosis/dist/src/jsx-types';

interface WvButtonGroupProps {
  center?: boolean;
  children?: JSX.Element;
}

export default function WvButtonGroup(props: WvButtonGroupProps) {
  return (
    <div
      class={`wv_button-group ${
        props.center !== undefined ? 'wv_button-group--center' : ''
      }`}
    >
      {props.children}
    </div>
  );
}
