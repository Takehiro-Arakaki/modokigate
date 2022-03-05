import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import dynamic from 'next/dynamic'
import HtmlTemplateNav from '../../components/molecules/editor/navigation/html/template'
import HtmlTemplate from '../../components/molecules/editor/result/html_template'
import { htmlSource, cssSource, jsSource } from '../../hooks/setSourceAtoms';
const SourceEditor = dynamic(import('../../components/molecules/editor/source_editor'), { ssr: false })

const TAB = { HTML: 0 } as const;
const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

const HeaderHtml =
  `<div class="hello">Hello PlayGround!</div>`

const htmlHeader: FC<{}> = () => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(htmlSource, HeaderHtml);
      }}
    >
      <div className="playground-render">
        <HtmlTemplate
          htmlSource={htmlSource}
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
