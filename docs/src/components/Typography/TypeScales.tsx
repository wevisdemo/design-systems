import { useState } from "react";

const SPEC: Record<string, {
  size: {desktop: number, mobile: number};
  leading: number
}> = {
  h1: {size:{desktop:100, mobile:60}, leading:125},
  h2: {size:{desktop:72, mobile:48}, leading:125},
  h3: {size:{desktop:60, mobile:36}, leading:125},
  h4: {size:{desktop:48, mobile:32}, leading:140},
  h5: {size:{desktop:36, mobile:28}, leading:140},
  h6: {size:{desktop:32, mobile:24}, leading:140},
  h7: {size:{desktop:28, mobile:21}, leading:140},
  h8: {size:{desktop:24, mobile:18}, leading:140},
  h9: {size:{desktop:21, mobile:16}, leading:140},
  h10: {size:{desktop:18, mobile:15}, leading:140},
  h11: {size:{desktop:16, mobile:14}, leading:140},
  b1: {size:{desktop:32, mobile:24}, leading:150},
  b2: {size:{desktop:24, mobile:21}, leading:150},
  b3: {size:{desktop:21, mobile:18}, leading:150},
  b4: {size:{desktop:18, mobile:16}, leading:150},
  b5: {size:{desktop:16, mobile:14}, leading:150},
  b6: {size:{desktop:14, mobile:12}, leading:150},
  b7: {size:{desktop:12, mobile:10}, leading:150},
}

const U_SPEC: Record<string, {
  size: number;
  leading: {regular: number, semibold: number}
}> = {
  u1: {size:20, leading:{regular:125, semibold:130}},
  u2: {size:18, leading:{regular:125, semibold:130}},
  u3: {size:16, leading:{regular:125, semibold:125}},
  u4: {size:14, leading:{regular:125, semibold:125}},
  u5: {size:12, leading:{regular:125, semibold:125}},
}

const DESC: Record<string, string> = {
  h: 'For headers',
  b: 'For body text',
  u: 'For UI components (such as buttons)',
}

const StyleButton = ({s,onHover}:{s:string,onHover:(name:string)=>void}) => {
  const [hoverColor, setHoverColor] = useState('hover:bg-neutral-200')

  const copyStyle = () => {
    navigator.clipboard.writeText(`wv-${s}`).then(() => {
      setHoverColor('hover:bg-lime-200');
    }).catch(()=> {
      setHoverColor('hover:bg-red-200');
    }).finally(() => {
      setTimeout(() => setHoverColor('hover:bg-neutral-200'), 200);
    });
  }

  return (
    <button
      type="button"
      title={`Click to copy - "${s}"`}
      className={`${hoverColor} rounded-md cursor-pointer uppercase h-auto p-1 transition-colors wv-${s}`}
      onClick={copyStyle}
      onMouseEnter={()=>onHover(s)}
    >
      {s}
    </button>
)}

export default () => {
  const [currentScale, setCurrentScale] = useState('h1')

  return (
    <>
      <div className="font-bold -mb-1.5 mt-2">Header</div>
      <div className="flex items-baseline wv-kondolar relative">
        {new Array(11).fill``.map((_,i) => <StyleButton key={i} s={`h${i+1}`} onHover={setCurrentScale} />)}
      </div>
      <div className="flex items-end">
        <div className="flex-1">
          <div className="font-bold -mb-1.5 mt-2">Body</div>
          <div className="flex items-baseline relative">
            {new Array(7).fill``.map((_,i) => <StyleButton key={i} s={`b${i+1}`} onHover={setCurrentScale} />)}
          </div>
          <div className="font-bold -mb-1.5 mt-2">UI</div>
          <div className="flex items-baseline relative">
            {new Array(5).fill``.map((_,i) => <StyleButton key={i} s={`u${i+1}`} onHover={setCurrentScale} />)}
          </div>
          <div className="wv-b6 mt-2">You can click at the style to copy.</div>
        </div>
        <div className="flex h-[127px] items-center gap-4 mt-4">
          <div className="flex flex-col items-end">
            <div className="wv-b3"><code>wv-{currentScale}</code></div>
            {
              currentScale.includes('u') ?
              <>
                <div><span className="font-bold">Semibold:</span> {U_SPEC[currentScale]?.size}px/{U_SPEC[currentScale]?.leading.semibold}%</div>
                <div><span className="font-bold">Regular:</span> {U_SPEC[currentScale]?.size}px/{U_SPEC[currentScale]?.leading.regular}%</div>
              </>
              :
              <>
                <div><span className="font-bold">Desktop:</span> {SPEC[currentScale]?.size.desktop}px/{SPEC[currentScale]?.leading}%</div>
                <div><span className="font-bold">Mobile:</span> {SPEC[currentScale]?.size.mobile}px/{SPEC[currentScale]?.leading}%</div>
              </>
            }
            <div className="wv-b5">{DESC[currentScale[0]]}</div>
          </div>
          <div className={`flex items-center w-[138px] p-1 justify-center uppercase border border-neutral-500 rounded-md border-dashed h-full !leading-none wv-${currentScale} ${currentScale.includes('h') ? 'wv-kondolar' : ''}`}>
            {currentScale}
          </div>
        </div>
      </div>
    </>
  )
}