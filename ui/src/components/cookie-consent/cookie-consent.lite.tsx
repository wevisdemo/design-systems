import { For, Show, useStore } from '@builder.io/mitosis';

type CookieSelection = Record<string, boolean>;

interface WvCookieBannerProps {
  policyUrl: string;
  cookieOptions?: string[];
  onAccept?: (selectedCookies: CookieSelection) => void;
}

const langs = ['ไทย', 'EN'];

const translation: Record<string, Record<string, string>> = {
  bannerBody: {
    ไทย: 'เว็บไซต์นี้ใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์ โดยเราจะใช้คุกกี้เมื่อท่านเข้ามาหน้าเว็บไซต์ คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่',
    EN: 'This website uses cookies to improve your online experience. They were placed on your browser when you launched this website. You can read more detail by clicking',
  },
  popupBody: {
    ไทย: 'คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์และไม่สามารถปิดได้จากหน้าเว็บไซต์ อย่างไรก็ตาม ท่านสามารถบล็อคการใช้งานคุกกี้ได้จากบราวเซอร์ของท่านซึ่งอาจจะส่งผลกระทบกับการใช้งานเว็บไซต์ได้ คุณสามารถอ่านรายละเอียดเพิ่มเติมได้ที่',
    EN: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information. You can read more detail by clicking Cookie Policy',
  },
  policyLink: {
    ไทย: 'นโยบายคุกกี้',
    EN: 'Cookie Policy',
  },
  acceptAll: {
    ไทย: 'ยอมรับทั้งหมด',
    EN: 'Accept all',
  },
  setting: {
    ไทย: 'การตั้งค่าคุกกี้',
    EN: 'Cookie setting',
  },
  save: {
    ไทย: 'บันทึกการตั้งค่า',
    EN: 'Save setting',
  },
};

export default function WvCookieBanner(props: WvCookieBannerProps) {
  const state = useStore({
    activeLang: 'ไทย',
    isShow: true,
    isSettingOpen: false,
    selectedCookies: {} as CookieSelection,
    createCookieSelection(value: boolean) {
      return props.cookieOptions
        ? props.cookieOptions.reduce(
            (obj, option) => ({ ...obj, [option]: value }),
            {}
          )
        : {};
    },
    openSetting() {
      state.selectedCookies = state.createCookieSelection(false);
      state.isSettingOpen = true;
    },
    saveSetting() {
      props.onAccept?.(state.selectedCookies);
      state.isShow = false;
    },
    acceptAll() {
      props.onAccept?.(state.createCookieSelection(true));
      state.isShow = false;
    },
  });

  return (
    <Show when={state.isShow}>
      <div
        class={`wv_cookie-consent wv_cookie-consent--${
          state.isSettingOpen ? 'popup' : 'banner'
        }`}
      >
        <Show when={state.isSettingOpen}>
          <button
            class="wv_cookie-consent__close"
            onClick={() => (state.isSettingOpen = false)}
          >
            <svg width="13" height="13" viewBox="0 0 13 13">
              <rect
                x="13"
                y="1.41431"
                width="15"
                height="2"
                transform="rotate(135 13 1.41431)"
                fill="white"
              />
              <rect
                x="2.39355"
                y="0.0314941"
                width="15"
                height="2"
                transform="rotate(45 2.39355 0.0314941)"
                fill="white"
              />
            </svg>
          </button>
        </Show>

        <div class="wv_cookie-consent__container wv-font-baijamjuri">
          <div class="wv_cookie-consent__lang wv-b7">
            <For each={langs}>
              {(lang) => (
                <button
                  key={lang}
                  class={`wv-font-baijamjuri ${
                    state.activeLang === lang ? '' : 'inactive'
                  }`}
                  onClick={() => (state.activeLang = lang)}
                >
                  {lang}
                </button>
              )}
            </For>
          </div>

          <Show when={state.isSettingOpen}>
            <div class="wv_cookie-consent__options wv-font-bold">
              <h2 class="wv-b3">{translation.setting[state.activeLang]}</h2>
              <div>
                <input type="checkbox" id="cookie-necessary" checked disabled />
                <label htmlFor="cookie-necessary">
                  Strictly Necessary Cookies
                </label>
              </div>
              <Show when={props.cookieOptions}>
                <For each={props.cookieOptions}>
                  {(option) => (
                    <div key={option}>
                      <input
                        type="checkbox"
                        id={`cookie-${option.toLowerCase()}`}
                        checked={state.selectedCookies[option]}
                        onChange={(event) =>
                          (state.selectedCookies = {
                            ...state.selectedCookies,
                            [option]: event.target.checked,
                          })
                        }
                      />
                      <label htmlFor={`cookie-${option.toLowerCase()}`}>
                        {option}
                        {` `}Cookies
                      </label>
                    </div>
                  )}
                </For>
              </Show>
            </div>
          </Show>

          <div class="wv_cookie-consent__body wv-b5">
            {
              translation[state.isSettingOpen ? 'popupBody' : 'bannerBody'][
                state.activeLang
              ]
            }{' '}
            <a href={props.policyUrl} target="_blank">
              {translation.policyLink[state.activeLang]}
            </a>
          </div>

          <div class="wv_cookie-consent__actions wv-u2">
            <Show
              when={state.isSettingOpen}
              else={
                <button
                  class="wv-font-anuphan"
                  onClick={() => state.openSetting()}
                >
                  {translation.setting[state.activeLang]}
                </button>
              }
            >
              <button
                class="wv-font-anuphan"
                onClick={() => state.saveSetting()}
              >
                {translation.save[state.activeLang]}
              </button>
            </Show>

            <button class="wv-font-anuphan" onClick={() => state.acceptAll()}>
              {translation.acceptAll[state.activeLang]}
            </button>
          </div>
        </div>
      </div>
    </Show>
  );
}
