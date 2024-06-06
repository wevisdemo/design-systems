import { useState } from 'react';

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
      .writeText(s)
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
      className={`${hoverColor} wv-b1 w-full cursor-pointer rounded-md px-4 py-1 ${s}`}
      onClick={copyStyle}
      onMouseEnter={() => onHover(s)}
    >
      Aอ
    </button>
  );
};

export default () => {
  const [currentStyle, setCurrentStyle] = useState('wv-ibmplex');

  return (
    <>
      <div className="wv-b6">You can click at "Aก" to copy the style.</div>
      <table className="!mb-2 !mt-0" style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <td></td>
            <th className="leading-normal" scope="col">
              <span>Kondolar Thai</span>
              <br />
              <code>wv-kondolar</code>
            </th>
            <th className="leading-normal" scope="col">
              <span>IBM Plex Sans Thai</span>
              <br />
              <code>wv-ibmplex</code>
            </th>
            <th className="leading-normal" scope="col">
              <span>IBM Plex Sans Thai Looped</span>
              <br />
              <code>wv-ibmplexlooped</code>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>400</span>
            </th>
            <td>
              <StyleButton onHover={setCurrentStyle} s="wv-kondolar" />
            </td>
            <td>
              <StyleButton onHover={setCurrentStyle} s="wv-ibmplex" />
            </td>
            <td>
              <StyleButton onHover={setCurrentStyle} s="wv-ibmplexlooped" />
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>600</span>
              <br />
              <code>wv-semibold</code>
            </th>
            <td></td>
            <td>
              <StyleButton
                onHover={setCurrentStyle}
                s="wv-ibmplex wv-semibold"
              />
            </td>
            <td>
              <StyleButton
                onHover={setCurrentStyle}
                s="wv-ibmplexlooped wv-semibold"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>700</span>
              <br />
              <code>wv-bold</code>
            </th>
            <td>
              <StyleButton onHover={setCurrentStyle} s="wv-kondolar wv-bold" />
            </td>
            <td>
              <StyleButton onHover={setCurrentStyle} s="wv-ibmplex wv-bold" />
            </td>
            <td>
              <StyleButton
                onHover={setCurrentStyle}
                s="wv-ibmplexlooped wv-bold"
              />
            </td>
          </tr>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>900</span>
              <br />
              <code>wv-black</code>
            </th>
            <td>
              <StyleButton onHover={setCurrentStyle} s="wv-kondolar wv-black" />
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-baseline justify-between">
        <div className="-mb-1.5 mt-2 font-bold">Preview</div>
        <code className="wv-b6">{currentStyle}</code>
      </div>
      <p
        className={`wv-b3 rounded-md border border-dashed border-neutral-500 p-4 ${currentStyle}`}
      >
        Sphinx of black quartz, judge my vow!
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        <br />
        นายสังฆภัณฑ์ เฮงพิทักษ์ฝั่ง ผู้เฒ่าซึ่งมีอาชีพเป็นฅนขายฃวด
        ถูกตำรวจปฏิบัติการจับฟ้องศาล ฐานลักนาฬิกาคุณหญิงฉัตรชฎา ฌานสมาธิ
      </p>
    </>
  );
};
