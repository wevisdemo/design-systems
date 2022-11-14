import { onMount, useStore, Show, useDefaultProps } from '@builder.io/mitosis';

interface WvSharerProps {
  url?: string;
  label?: string;
  hideLabel?: boolean;
  light?: boolean;
  center?: boolean;
  outline?: boolean;
  allowCopyLink?: boolean;
}

export default function WvSharer(props: WvSharerProps) {
  useDefaultProps<WvSharerProps>({
    url: undefined,
    label: 'Share',
    hideLabel: false,
    light: false,
    center: false,
    outline: false,
    allowCopyLink: false,
  });

  const state = useStore({
    encodedURL: '',
    copyToClipboard() {
      window.navigator.clipboard.writeText(state.encodedURL);
    },
  });

  onMount(() => {
    state.encodedURL = encodeURI(props.url || window.location.href);
  });

  return (
    <div
      class={`wv_sharer ${
        props.light ? 'wv_sharer--light' : 'wv_sharer--dark'
      } ${props.center ? 'wv_sharer--center' : ''}`}
    >
      <Show when={!props.hideLabel}>
        <span class="wv-b5">{props.label}</span>
      </Show>

      <Show when={props.allowCopyLink}>
        <div class="wv_sharer__share-link" onClick={state.copyToClipboard}>
          <svg viewBox="0 0 28 28">
            <path
              class="outline"
              d="M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"
            />
            <path d="M9.9751 16.5375C11.1832 16.5375 12.1626 15.5581 12.1626 14.35C12.1626 13.1419 11.1832 12.1625 9.9751 12.1625C8.76697 12.1625 7.7876 13.1419 7.7876 14.35C7.7876 15.5581 8.76697 16.5375 9.9751 16.5375Z" />
            <path d="M17.6313 21.4594C18.8395 21.4594 19.8188 20.48 19.8188 19.2719C19.8188 18.0638 18.8395 17.0844 17.6313 17.0844C16.4232 17.0844 15.4438 18.0638 15.4438 19.2719C15.4438 20.48 16.4232 21.4594 17.6313 21.4594Z" />
            <path d="M17.6313 11.6156C18.8395 11.6156 19.8188 10.6362 19.8188 9.42812C19.8188 8.22 18.8395 7.24062 17.6313 7.24062C16.4232 7.24062 15.4438 8.22 15.4438 9.42812C15.4438 10.6362 16.4232 11.6156 17.6313 11.6156Z" />
            <path d="M15.7915 10.6109L11.8149 13.1673" />
            <path d="M11.8149 15.5327L15.7915 18.0891" />
          </svg>
        </div>
      </Show>

      <a
        href={`http://www.facebook.com/sharer/sharer.php?u=${state.encodedURL}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Show when={props.outline}>
          <svg viewBox="0 0 28 28">
            <path
              class="outline"
              d="M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"
            />
            <path d="M11.8096 18.2251C11.8096 16.9154 11.8022 15.6057 11.817 14.2959C11.817 14.074 11.7578 14.0074 11.5358 14.0148C11.1289 14.0296 10.7219 14.0148 10.3075 14.0222C10.1447 14.0296 10.0781 13.9778 10.0855 13.8076C10.0929 12.9936 10.0929 12.1723 10.0855 11.3583C10.0855 11.2029 10.1299 11.1511 10.2927 11.1511C10.7071 11.1585 11.1289 11.1363 11.5432 11.1585C11.7874 11.1733 11.8318 11.0845 11.8318 10.8625C11.817 10.241 11.817 9.61941 11.8318 8.99785C11.8466 8.23569 12.0538 7.52533 12.5052 6.91117C13.0749 6.12681 13.8889 5.77163 14.8286 5.72724C15.7906 5.68284 16.7599 5.70504 17.7293 5.69764C17.8625 5.69764 17.9069 5.74204 17.9069 5.87523C17.8995 6.70398 17.8995 7.53273 17.9069 8.35409C17.9069 8.50208 17.8625 8.54648 17.7145 8.54648C17.2483 8.53908 16.7821 8.53908 16.3234 8.54648C15.7018 8.54648 15.3318 8.86466 15.2948 9.47882C15.2652 9.9672 15.2874 10.463 15.2726 10.9587C15.2652 11.1363 15.3762 11.1215 15.4872 11.1215C16.1902 11.1215 16.9005 11.1289 17.6035 11.1141C17.8107 11.1141 17.8773 11.1585 17.8551 11.3731C17.7663 12.1945 17.6923 13.0158 17.6183 13.8446C17.6035 14.0296 17.5147 14.0666 17.3519 14.0666C16.7969 14.0592 16.2346 14.0592 15.6796 14.0666C15.28 14.0666 15.317 14.0074 15.317 14.4143C15.317 16.982 15.3096 19.5422 15.3244 22.1099C15.3244 22.3837 15.2578 22.4503 14.9914 22.4429C14.0369 22.4281 13.0749 22.4281 12.1204 22.4429C11.854 22.4503 11.8096 22.3541 11.8096 22.1173C11.8096 20.8076 11.8096 19.5201 11.8096 18.2251Z" />
          </svg>
        </Show>
        <Show when={!props.outline}>
          <svg viewBox="0 0 30 30">
            <path d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM18.975 9.15C18.45 9.15 18 9.15 17.475 9.15C16.8 9.15 16.425 9.525 16.35 10.125C16.35 10.65 16.35 11.175 16.35 11.7C16.35 11.925 16.425 11.85 16.575 11.85C17.325 11.85 18.075 11.85 18.825 11.85C19.05 11.85 19.125 11.925 19.125 12.15C19.05 13.05 18.975 13.875 18.9 14.775C18.9 15 18.825 15 18.6 15C18 15 17.4 15 16.8 15C16.35 15 16.425 14.925 16.425 15.375C16.425 18.15 16.425 20.85 16.425 23.625C16.425 23.925 16.35 24 16.05 24C15 24 14.025 24 12.975 24C12.675 24 12.675 23.925 12.675 23.625C12.675 22.275 12.675 20.85 12.675 19.5C12.675 18.075 12.675 16.725 12.675 15.3C12.675 15.075 12.6 15 12.375 15C11.925 15 11.475 15 11.025 15C10.875 15 10.8 14.925 10.8 14.775C10.8 13.875 10.8 13.05 10.8 12.15C10.8 12 10.875 11.925 11.025 11.925C11.475 11.925 11.925 11.925 12.375 11.925C12.6 11.925 12.675 11.85 12.675 11.625C12.675 10.95 12.675 10.275 12.675 9.6C12.675 8.775 12.9 8.025 13.425 7.35C14.025 6.525 14.925 6.15 15.9 6.075C16.95 6 18 6.075 18.975 6.075C19.125 6.075 19.125 6.15 19.125 6.3C19.125 7.2 19.125 8.1 19.125 8.925C19.2 9.075 19.125 9.15 18.975 9.15Z" />
          </svg>
        </Show>
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${state.encodedURL}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Show when={props.outline}>
          <svg viewBox="0 0 28 28">
            <path
              class="outline"
              d="M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"
            />
            <path d="M11.2001 17.0552C10.2628 17.0401 9.44037 16.5796 8.94642 15.8937C9.2129 15.8792 9.47567 15.8385 9.72249 15.7755L9.69207 14.7998C8.65313 14.6027 7.83639 13.8572 7.55634 12.9031C7.83749 12.9772 8.13206 13.0218 8.43395 13.0304L10.2318 13.0822L8.71859 12.11C7.95913 11.6221 7.47591 10.7987 7.47591 9.87883C7.47591 9.63889 7.51049 9.4057 7.5748 9.18223C9.27121 10.8887 11.6079 11.9824 14.2094 12.1074L14.8714 12.1392L14.7202 11.4939C14.6712 11.2849 14.6449 11.0831 14.6449 10.8791C14.6449 9.41934 15.8767 8.2 17.4437 8.2C18.2545 8.2 18.9792 8.53045 19.4911 9.05665L19.6796 9.25048L19.9451 9.19877C20.1542 9.15803 20.3601 9.10894 20.5623 9.05175C20.464 9.12724 20.36 9.19682 20.2509 9.25989L20.5589 10.1894C20.6502 10.1788 20.7411 10.1666 20.8314 10.1527C20.7126 10.2498 20.5901 10.3425 20.4643 10.4304L20.2354 10.5903L20.2515 10.8691C20.2585 10.992 20.2587 11.1097 20.2587 11.2513C20.2587 15.2208 17.1264 19.8 11.369 19.8C10.3221 19.8 9.32078 19.6253 8.38835 19.306C9.54627 19.1008 10.6056 18.6263 11.4938 17.9538L12.6496 17.0786L11.2001 17.0552Z" />
          </svg>
        </Show>
        <Show when={!props.outline}>
          <svg viewBox="0 0 30 30">
            <path d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.2 11.325C22.2 11.475 22.2 11.625 22.2 11.775C22.2 16.65 18.45 22.35 11.625 22.35C9.525 22.35 7.575 21.75 5.925 20.7C6.225 20.7 6.525 20.775 6.825 20.775C8.55 20.775 10.125 20.175 11.4 19.2C9.75 19.2 8.4 18.075 7.95 16.65C8.175 16.725 8.4 16.725 8.625 16.725C9 16.725 9.3 16.65 9.6 16.575C7.875 16.2 6.6 14.7 6.6 12.975C6.6 12.975 6.6 12.975 6.6 12.9C7.125 13.2 7.65 13.35 8.25 13.35C7.35 12.6 6.75 11.475 6.75 10.2C6.75 9.525 6.9 8.85 7.275 8.325C9.075 10.575 11.85 12.075 14.925 12.225C14.85 11.925 14.85 11.7 14.85 11.4C14.85 9.375 16.5 7.725 18.525 7.725C19.575 7.725 20.55 8.175 21.225 8.925C22.05 8.775 22.875 8.475 23.55 8.025C23.25 8.925 22.65 9.6 21.9 10.05C22.65 9.975 23.4 9.75 24 9.45C23.55 10.125 22.875 10.8 22.2 11.325Z" />
          </svg>
        </Show>
      </a>

      <a
        href={`https://social-plugins.line.me/lineit/share?url=${state.encodedURL}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Show when={props.outline}>
          <svg viewBox="0 0 28 28">
            <path
              class="outline"
              d="M27.5 14C27.5 21.4564 21.4564 27.5 14 27.5C6.54358 27.5 0.5 21.4564 0.5 14C0.5 6.54358 6.54358 0.5 14 0.5C21.4564 0.5 27.5 6.54358 27.5 14Z"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.4949 16.8789C19.4835 18.1348 15.0479 21.1492 14.01 21.764C13.5869 22.0152 13.0515 21.7111 13.0515 21.2153V19.6817C10.5726 19.5825 6.13696 17.3879 6.13696 13.1175C6.13696 8.66867 10.5858 6.50705 13.9836 6.50705C17.659 6.50705 21.8434 8.94631 21.8434 13.0778C21.85 14.2413 21.5129 15.6163 20.4949 16.8789ZM12.0731 11.0218C11.8682 11.0218 11.7029 11.1989 11.7029 11.4184V14.464C11.7029 14.6835 11.8682 14.8606 12.0731 14.8606C12.278 14.8606 12.4433 14.6835 12.4433 14.464V11.4184C12.4433 11.1989 12.278 11.0218 12.0731 11.0218ZM15.0544 11.4184C15.0544 11.1989 15.2196 11.0218 15.4246 11.0218C15.6295 11.0218 15.7947 11.1989 15.7881 11.4184V14.464C15.7881 14.634 15.6824 14.7827 15.5303 14.8394C15.4973 14.8535 15.4576 14.8606 15.418 14.8606C15.3056 14.8606 15.1932 14.8039 15.1205 14.6977L13.7852 12.7287V14.464C13.7852 14.6835 13.6199 14.8606 13.415 14.8606C13.2101 14.8606 13.0448 14.6835 13.0448 14.464V11.5034C13.0448 11.3335 13.1506 11.1847 13.3026 11.1281C13.4546 11.0714 13.6265 11.1281 13.7191 11.2697L15.0544 13.2387V11.4184ZM11.0351 14.0744H10.0502V11.4255C10.0502 11.2059 9.88492 11.0289 9.68 11.0289C9.47508 11.0289 9.30981 11.2059 9.30981 11.4255V14.471C9.30981 14.6906 9.47508 14.8677 9.68 14.8677H11.0351C11.2401 14.8677 11.4053 14.6906 11.4053 14.471C11.4053 14.2515 11.2335 14.0744 11.0351 14.0744ZM17.0307 14.0036H18.4982C18.7031 14.0036 18.8684 14.1807 18.8684 14.4003C18.8684 14.6198 18.7031 14.7969 18.4982 14.7969H16.6605C16.4556 14.7969 16.2903 14.6198 16.2903 14.4003V12.8775V11.3547C16.2903 11.1352 16.4556 10.9581 16.6605 10.9581H18.4387C18.6437 10.9581 18.8089 11.1352 18.8089 11.3547C18.8089 11.5743 18.6437 11.7514 18.4387 11.7514H17.0307V12.4809H18.1743C18.3792 12.4809 18.5445 12.6579 18.5445 12.8775C18.5445 13.0971 18.3792 13.2741 18.1743 13.2741H17.0307V14.0036Z"
            />
          </svg>
        </Show>
        <Show when={!props.outline}>
          <svg viewBox="0 0 30 30">
            <path d="M12.75 11.4751C12.525 11.4751 12.3 11.7001 12.3 11.9251V15.3001C12.3 15.5251 12.525 15.7501 12.75 15.7501C12.975 15.7501 13.2 15.5251 13.2 15.3001V11.9251C13.2 11.7001 12.975 11.4751 12.75 11.4751Z" />
            <path d="M16.725 11.4751C16.5 11.4751 16.275 11.7001 16.275 11.9251V13.9501L14.7 11.7751C14.625 11.6251 14.4 11.5501 14.175 11.6251C14.025 11.7001 13.875 11.8501 13.875 12.0751V15.3751C13.875 15.6001 14.1 15.8251 14.325 15.8251C14.55 15.8251 14.775 15.6001 14.775 15.3751V13.4251L16.35 15.6001C16.425 15.7501 16.575 15.7501 16.725 15.7501C16.8 15.7501 16.8 15.7501 16.875 15.7501C17.025 15.6751 17.175 15.5251 17.175 15.3001V11.9251C17.1 11.7001 16.95 11.4751 16.725 11.4751Z" />
            <path d="M11.475 14.8501H10.275V11.9251C10.275 11.7001 10.05 11.4751 9.825 11.4751C9.6 11.4751 9.375 11.7001 9.375 11.9251V15.3001C9.375 15.5251 9.6 15.7501 9.825 15.7501H11.4C11.625 15.7501 11.85 15.5251 11.85 15.3001C11.85 15.0751 11.775 14.8501 11.475 14.8501Z" />
            <path d="M20.325 14.775H18.6V13.95H19.95C20.175 13.95 20.4 13.725 20.4 13.5C20.4 13.275 20.175 13.05 19.95 13.05H18.6V12.225H20.25C20.475 12.225 20.7 12 20.7 11.775C20.7 11.55 20.475 11.325 20.25 11.325H18.15C17.925 11.325 17.7 11.55 17.7 11.775V13.425V15.075C17.7 15.3 17.925 15.525 18.15 15.525H20.325C20.55 15.525 20.775 15.3 20.775 15.075C20.775 14.85 20.55 14.775 20.325 14.775Z" />
            <path d="M15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15C30 6.75 23.25 0 15 0ZM22.725 18.225C21.525 19.725 16.275 23.25 15.075 24C14.55 24.3 13.95 23.925 13.95 23.325V21.525C11.025 21.375 5.775 18.825 5.775 13.725C5.775 8.475 11.025 5.925 15.075 5.925C19.425 5.925 24.375 8.775 24.375 13.725C24.3 15.075 23.925 16.725 22.725 18.225Z" />
          </svg>
        </Show>
      </a>
    </div>
  );
}
