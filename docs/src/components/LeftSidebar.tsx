import { useState } from 'react';
import type {Sidebar} from '../config'

import '@wevisdemo/ui/styles/button.css';
import WvButton from '@wevisdemo/ui/.mitosis/react/button';

export default function ({ currentPage, sidebar }:{
  currentPage: string;
  sidebar: Sidebar
}) {
  const [isSidebarShow, setSidebarVisibility] = useState(false);

  const currentPageMatch = currentPage.endsWith('/')
  ? currentPage.slice(1, -1)
  : currentPage.slice(1);

  return (
    <aside id="grid-left" className={`absolute z-10 top-[40px] md:top-[52px] left-0 ${isSidebarShow ? 'bg-white shadow-md lg:shadow-none' : ''} px-4 py-2 rounded-md lg:static lg:p-0`} title="Site Navigation">
      <div className='lg:hidden mb-2' >
        <WvButton small onClick={() => setSidebarVisibility(e => !e)}>
          Open Site Navigation
        </WvButton>
      </div>
      <nav className={`${isSidebarShow ? '' : 'hidden lg:block'} max-h-[calc(100vh_-_2rem)] overflow-y-auto sticky top-4`} aria-labelledby="grid-left">
        <ul>
          {
            sidebar.map((item) =>
              'header' in item ? (
                <li key={item.header} className="mt-2 first:mt-0">
                  <h4 className="wv-kondolar wv-h9 wv-bold mb-1">{item.header}</h4>
                  <ul>
                    {item.pages.map((page) => (
                      <li key={page.text}>
                        <a
                          className="sidebar-li-a"
                          href={`${import.meta.env.BASE_URL}${page.link}`}
                          aria-current={
                            currentPageMatch === page.link ? 'page' : false
                          }
                        >
                          {page.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.text}>
                  <a
                    className="sidebar-li-a"
                    href={`${import.meta.env.BASE_URL}${item.link}`}
                    aria-current={currentPageMatch === item.link ? 'page' : false}
                  >
                    {item.text}
                  </a>
                </li>
              )
            )
          }
        </ul>
      </nav>
    </aside>
  )
}