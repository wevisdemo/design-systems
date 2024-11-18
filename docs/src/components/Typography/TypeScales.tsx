import { useState } from 'react';

const SPEC: Record<
  string,
  {
    size: { desktop: number; mobile: number };
    leading: number;
  }
> = {
  h1: { size: { desktop: 100, mobile: 60 }, leading: 125 },
  h2: { size: { desktop: 72, mobile: 48 }, leading: 125 },
  h3: { size: { desktop: 60, mobile: 36 }, leading: 125 },
  h4: { size: { desktop: 48, mobile: 32 }, leading: 140 },
  h5: { size: { desktop: 36, mobile: 28 }, leading: 140 },
  h6: { size: { desktop: 32, mobile: 24 }, leading: 140 },
  h7: { size: { desktop: 28, mobile: 21 }, leading: 140 },
  h8: { size: { desktop: 24, mobile: 18 }, leading: 140 },
  h9: { size: { desktop: 21, mobile: 16 }, leading: 140 },
  h10: { size: { desktop: 18, mobile: 15 }, leading: 140 },
  h11: { size: { desktop: 16, mobile: 14 }, leading: 140 },
  b1: { size: { desktop: 32, mobile: 24 }, leading: 150 },
  b2: { size: { desktop: 24, mobile: 21 }, leading: 150 },
  b3: { size: { desktop: 21, mobile: 18 }, leading: 150 },
  b4: { size: { desktop: 18, mobile: 16 }, leading: 150 },
  b5: { size: { desktop: 16, mobile: 14 }, leading: 150 },
  b6: { size: { desktop: 14, mobile: 12 }, leading: 150 },
  b7: { size: { desktop: 12, mobile: 10 }, leading: 150 },
};

const U_SPEC: Record<
  string,
  {
    size: number;
    leading: { regular: number; semibold: number };
  }
> = {
  u1: { size: 20, leading: { regular: 125, semibold: 130 } },
  u2: { size: 18, leading: { regular: 125, semibold: 130 } },
  u3: { size: 16, leading: { regular: 125, semibold: 125 } },
  u4: { size: 14, leading: { regular: 125, semibold: 125 } },
  u5: { size: 12, leading: { regular: 125, semibold: 125 } },
};


const BODY_FIXED_SPEC: Record<
  string,
  {
    size: number;
    leading: number;
  }
> = {
  'fixed-2': { size: 18, leading: 150 },
  'fixed-3': { size: 16, leading: 150 },
  'fixed-4': { size: 14, leading: 150 },
  'fixed-5': { size: 12, leading: 150 },
  'fixed-1': { size: 21, leading: 150 },
};

const DESC: Record<string, string> = {
  h: 'For headers',
  b: 'For body text',
  u: 'For UI components (such as buttons)',
  fixed: 'For body text (Fixed size)',
};

const StyleButton = ({
  s,
  onHover,
}: {
  s: string;
  onHover: (name: string) => void;
}) => {
  const [hoverColor, setHoverColor] = useState('hover:bg-neutral-200');

  const copyStyle = () => {
    navigator.clipboard
      .writeText(`wv-${s}`)
      .then(() => {
        setHoverColor('hover:bg-lime-200');
      })
      .catch(() => {
        setHoverColor('hover:bg-red-200');
      })
      .finally(() => {
        setTimeout(() => setHoverColor('hover:bg-neutral-200'), 200);
      });
  };

  return (
    <button
      type="button"
      title={`Click to copy - "${s}"`}
      className={`${hoverColor} h-auto cursor-pointer rounded-md p-1 uppercase transition-colors wv-${s}`}
      onClick={copyStyle}
      onMouseEnter={() => onHover(s)}
    >
      {s}
    </button>
  );
};

export default () => {
  const [currentScale, setCurrentScale] = useState('h1');

  return (
    <>
      <div className="-mb-1.5 mt-2 font-bold">Header</div>
      <div className="wv-kondolar relative flex items-baseline flex-wrap">
        {new Array(11).fill``.map((_, i) => (
          <StyleButton key={i} s={`h${i + 1}`} onHover={setCurrentScale} />
        ))}
      </div>
      <div className="flex flex-col items-end sm:flex-row">
        <div className="basis-7/12">
          <div className="-mb-1.5 mt-2 font-bold">Body</div>
          <div className="relative flex items-baseline">
            {new Array(7).fill``.map((_, i) => (
              <StyleButton key={i} s={`b${i + 1}`} onHover={setCurrentScale} />
            ))}
          </div>
          <div className="-mb-1.5 mt-2 font-bold">UI</div>
          <div className="relative flex items-baseline">
            {new Array(5).fill``.map((_, i) => (
              <StyleButton key={i} s={`u${i + 1}`} onHover={setCurrentScale} />
            ))}
          </div>
          <div className="-mb-1.5 mt-2 font-bold">Body Fixed</div>
          <div className="relative flex items-baseline flex-wrap">
            {new Array(5).fill``.map((_, i) => (
              <StyleButton key={i} s={`fixed-${i + 1}`} onHover={setCurrentScale} />
            ))}
          </div>
          <div className="wv-b6 mt-2">You can click at the style to copy.</div>
        </div>
        <div className="mt-4 flex h-[127px] basis-5/12 items-center gap-2">
          <div className="flex flex-col items-end">
            <div className="wv-b3">
              <code>wv-{currentScale}</code>
            </div>
            {currentScale.includes('u') ? (
              <>
                <div>
                  <span className="font-bold">Semibold:</span>{' '}
                  {U_SPEC[currentScale]?.size}px/
                  {U_SPEC[currentScale]?.leading.semibold}%
                </div>
                <div>
                  <span className="font-bold">Regular:</span>{' '}
                  {U_SPEC[currentScale]?.size}px/
                  {U_SPEC[currentScale]?.leading.regular}%
                </div>
              </>
            ) : (
              <>
                <div>
                  <span className="font-bold">Desktop:</span>{' '}
                  {currentScale.includes('fixed')
                    ? BODY_FIXED_SPEC[currentScale]?.size
                    : SPEC[currentScale]?.size.desktop}
                  px/
                  {currentScale.includes('fixed')
                    ? BODY_FIXED_SPEC[currentScale]?.leading
                    : SPEC[currentScale]?.leading}
                  %
                </div>
                <div>
                  <span className="font-bold">Mobile:</span>{' '}
                  {currentScale.includes('fixed')
                    ? BODY_FIXED_SPEC[currentScale]?.size
                    : SPEC[currentScale]?.size.mobile}
                  px/
                  {currentScale.includes('fixed')
                    ? BODY_FIXED_SPEC[currentScale]?.leading
                    : SPEC[currentScale]?.leading}
                  %
                </div>
              </>
            )}
            <div className="wv-b5">  {currentScale.includes('fixed')
                ? DESC['fixed']
                : DESC[currentScale[0]]}</div>
          </div>
          <div
            className={`flex  h-full min-h-[110px] min-w-[138px] items-center justify-center rounded-md border border-dashed border-neutral-500 p-1 uppercase !leading-none wv-${currentScale} ${currentScale.includes('h') ? 'wv-kondolar' : ''}`}
          >
            {currentScale}
          </div>
        </div>
      </div>
    </>
  );
};
