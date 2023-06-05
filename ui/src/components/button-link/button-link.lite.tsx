import { useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvButtonLinkProps {
  href: string;
  color?: 'blue' | 'black' | 'white';
  small?: boolean;
  target?: string | undefined;
  rel?: string | undefined;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvButtonLink(props: WvButtonLinkProps) {
  useDefaultProps<Omit<WvButtonLinkProps,'href'>>({
    color: 'blue',
    small: false,
    target: '_blank',
    rel: 'nofollow noopener noreferrer',
  });

  return (
    <a
      href={props.href}
      target={props.target || undefined}
      rel={props.rel || undefined}
      class={`wv_button-link wv-ibmplex wv_button-link--${props.color} ${
        props.small ? 'wv-b5 wv_button-link--small' : 'wv-b4'
      }`}
    >
      {props.children}
    </a>
  );
}
