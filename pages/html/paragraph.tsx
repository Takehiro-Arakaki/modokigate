import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import dynamic from 'next/dynamic'
import HtmlTemplateNav from '../../components/molecules/editor/navigation/html/template'
import HtmlTemplate from '../../components/molecules/editor/result/html_template'
const SourceEditor = dynamic(import('../../components/molecules/editor/source_editor'), { ssr: false })

const TAB = {
  HTML: 0,
  CSS: 1,
  JS: 2,
} as const;

const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });
const htmlSource = atom({ key: "html", default: "" })
const cssSource = atom({ key: "css", default: "" })
const jsSource = atom({ key: "js", default: "" })

const HeaderHtml =
  `<div class="hello">Hello PlayGround!</div>`

const HeaderCss =
  `.hello {\n  background: #f48;\n}`

const HeaderJs =
  `const elem = document.querySelector(".hello");\nelem.style.color ="#fff";`


const htmlHeader: FC<{}> = () => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(htmlSource, HeaderHtml);
        set(cssSource, HeaderCss);
        set(jsSource, HeaderJs);
      }}
    >
      <div className="playground-render">
        <HtmlTemplate
          htmlSource={htmlSource}
          cssSource={cssSource}
          jsSource={jsSource}
        />
        <div className="playground-edit">
          <HtmlTemplateNav
            tab={TAB}
            activeTab={activeTab}
          />
          <SourceEditor
            htmlSource={htmlSource}
            cssSource={cssSource}
            jsSource={jsSource}
            tab={TAB}
            activeTab={activeTab}
          />
        </div>
      </div>
    </RecoilRoot>
  )
}

export default htmlHeader
