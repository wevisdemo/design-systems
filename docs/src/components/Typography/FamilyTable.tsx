import { useState } from "react";

const StyleButton = ({s,onHover}:{s:string,onHover:(name:string)=>void}) => {
  const [hoverColor, setHoverColor] = useState('hover:bg-neutral-200')

  const copyStyle = () => {
    navigator.clipboard.writeText(s).then(() => {
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
    className={`${hoverColor} rounded-md cursor-pointer py-1 px-4 w-full wv-b1 ${s}`}
    onClick={copyStyle}
    onMouseEnter={()=>onHover(s)}
  >
    Aก
  </button>
)}

export default () => {
  const [currentStyle, setCurrentStyle] = useState('wv-ibmplex')

  return (
    <>
      <div className="wv-b6">You can click at "Aก" to copy the style.</div>
      <table className="!mb-2 !mt-0" style={{ textAlign: 'center' }}>
        <thead>
          <tr>
            <td></td>
            <th className="leading-normal" scope="col">
              <span>Kondolar Thai</span><br/>
              <code>wv-kondolar</code>
            </th>
            <th className="leading-normal" scope="col">
              <span>IBM Plex Sans Thai</span><br/>
              <code>wv-ibmplex</code>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-right leading-normal"><span>400</span></th>
            <td><StyleButton onHover={setCurrentStyle} s="wv-kondolar" /></td>
            <td><StyleButton onHover={setCurrentStyle} s="wv-ibmplex" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>600</span><br/><code>wv-semibold</code>
            </th>
            <td></td>
            <td><StyleButton onHover={setCurrentStyle} s="wv-ibmplex wv-semibold" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>700</span><br/><code>wv-bold</code>
            </th>
            <td><StyleButton onHover={setCurrentStyle} s="wv-kondolar wv-bold" /></td>
            <td><StyleButton onHover={setCurrentStyle} s="wv-ibmplex wv-bold" /></td>
          </tr>
          <tr>
            <th scope="row" className="text-right leading-normal">
              <span>900</span><br/><code>wv-black</code>
            </th>
            <td><StyleButton onHover={setCurrentStyle} s="wv-kondolar wv-black" /></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-baseline justify-between">
        <div className="font-bold -mb-1.5 mt-2">Preview</div>
        <code className="wv-b6">{currentStyle}</code>
      </div>
      <p className={`border border-neutral-500 rounded-md border-dashed p-4 wv-b3 ${currentStyle}`}>
        Sphinx of black quartz, judge my vow!<br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
        นายสังฆภัณฑ์ เฮงพิทักษ์ฝั่ง ผู้เฒ่าซึ่งมีอาชีพเป็นฅนขายฃวด ถูกตำรวจปฏิบัติการจับฟ้องศาล ฐานลักนาฬิกาคุณหญิงฉัตรชฎา ฌานสมาธิ
      </p>
    </>
  )
}