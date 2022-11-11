import { JSX } from '@builder.io/mitosis/jsx-runtime';
import { Show } from '@builder.io/mitosis';

interface WvContainerProps {
  heading?: string;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvContainer(props: WvContainerProps) {
  return (
    <div class="wv_container">
      <Show when={props.heading}>
        <h1 class="wv-font-kondolar wv-font-black wv-h4">{props.heading}</h1>
      </Show>

      {props.children}
    </div>
  );
}
