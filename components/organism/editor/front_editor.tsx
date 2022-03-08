import {FC} from 'react'
import dynamic from 'next/dynamic'
import FrontEditorNav from '@/components/molecules/editor/navigation/front_editor_nav'
import { RecoilState } from 'recoil';
import styles from '@/styles/components/editor/template.module.scss'

const SourceEditor = dynamic(import('@/components/molecules/editor/source_editor'), { ssr: false })

type FrontEditorProps = {
  htmlSource: RecoilState<string>;
  cssSource: RecoilState<string>;
  jsSource: RecoilState<string>;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 }
  activeTab: RecoilState<0 | 1 | 2>;
};

const frontEditor: FC<FrontEditorProps> = (props) => {
  return (
    <div className={styles.editor}>
      <FrontEditorNav
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

export default frontEditor
