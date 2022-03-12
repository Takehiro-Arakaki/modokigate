import {FC, useState} from 'react'
import dynamic from 'next/dynamic'
import FrontNav from '@/components/molecules/editor/front/nav'
import { RecoilState, useRecoilState, useRecoilValue, SetterOrUpdater } from 'recoil';
import styles from '@/styles/components/organism/editor/template.module.scss'
import EditorFooter from '@/components/molecules/editor/footer';

const SourceEditor = dynamic(import('@/components/molecules/editor/source_editor'), { ssr: false })

type FrontEditorProps = {
  htmlSource: RecoilState<string>;
  cssSource: RecoilState<string>;
  jsSource: RecoilState<string>;
  sampleHtmlSource: string;
  sampleCssSource?: string;
  sampleJsSource?: string;
  tab: { HTML?: 0; CSS?: 1; JS?: 2 };
  activeTab: RecoilState<0 | 1 | 2>;
};

export type SourceType = {[key: number]: SourceContentType}
export type SourceContentType = {
  aceMode: string;
  source: string;
  sampleSource: string;
  change: SetterOrUpdater<string>;
}

const frontEditor: FC<FrontEditorProps> = (props) => {
  const [html, changeHtml] = useRecoilState(props.htmlSource)
  const [css, changeCss] = useRecoilState(props.cssSource)
  const [js, changeJs] = useRecoilState(props.jsSource)
  const active = useRecoilValue(props.activeTab)

  const source: SourceType =  {
    [props.tab.HTML]: {
      aceMode: 'html',
      source: html,
      sampleSource: props.sampleHtmlSource,
      change: changeHtml,
    },
    [props.tab.CSS]: {
      aceMode: 'css',
      source: css,
      sampleSource: props.sampleCssSource,
      change: changeCss,
    },
    [props.tab.JS]: {
      aceMode: 'javascript',
      source: js,
      sampleSource: props.sampleJsSource,
      change: changeJs,
    },
  }

  const target = source[active]

  return (
    <div className={styles.editor}>
      <FrontNav
        tab={props.tab}
        activeTab={props.activeTab}
      />
      <SourceEditor
        tab={props.tab}
        activeTab={props.activeTab}
        target={target}
      />
      <EditorFooter
        tab={props.tab}
        activeTab={props.activeTab}
        mode={target.aceMode}
        source={source}
        target={target}
      />
    </div>
  )
}

export default frontEditor
