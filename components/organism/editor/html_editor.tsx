import {FC} from 'react'
import dynamic from 'next/dynamic'
import HtmlEditorNav from '@/components/molecules/editor/navigation/html_editor_nav'
import { RecoilState } from 'recoil';
import styles from '@/styles/components/editor/template.module.scss'

const SourceEditor = dynamic(import('@/components/molecules/editor/source_editor'), { ssr: false })

type HtmlEditorProps = {
  htmlSource: RecoilState<string>;
  cssSource: RecoilState<string>;
  jsSource: RecoilState<string>;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 }
  activeTab: RecoilState<0 | 1 | 2>;
};

const htmlEditor: FC<HtmlEditorProps> = (props) => {
  return (
    <div className={styles.editor}>
      <HtmlEditorNav
        tab={props.tab}
        activeTab={props.activeTab}
      />
      <SourceEditor
        htmlSource={props.htmlSource}
        cssSource={props.cssSource}
        jsSource={props.jsSource}
        tab={props.tab}
        activeTab={props.activeTab}
      />
    </div>
  )
}

export default htmlEditor
