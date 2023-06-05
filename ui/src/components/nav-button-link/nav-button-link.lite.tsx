import { useDefaultProps } from '@builder.io/mitosis';
import { JSX } from '@builder.io/mitosis/jsx-runtime';

interface WvNavButtonLinkProps {
  href: string;
  target?: string | undefined;
  rel?: string | undefined;
  dark?: boolean;
  children?: JSX.Element | JSX.Element[] | string | number;
}

export default function WvNavButtonLink(props: WvNavButtonLinkProps) {
  useDefaultProps<Omit<WvNavButtonLinkProps,'href'>>({
    target: '_blank',
    rel: 'nofollow noopener noreferrer',
    dark: false,
  });

  return (
    <a
      href={props.href}
      target={props.target || undefined}
      rel={props.rel || undefined}
      class={`wv_nav-button-link wv-ibmplex wv-b7 ${
        props.dark ? 'wv_nav-button-link--white' : 'wv_nav-button-link--black'
      }`}
    >
      {props.children}
    </a>
  );
}
