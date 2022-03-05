import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import HtmlEditor from '@/components/organism/editor/html_editor'
import HtmlPreview from '@/components/organism/editor/html_preview'
import { htmlSource, cssSource, jsSource } from '@/hooks/setSourceAtoms';
import info_styles from '@/styles/components/editor/info/template.module.scss'
import { Grid } from '@material-ui/core';

const TAB = { HTML: 0 } as const;
const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

type BasicPlayGroundProps = {
  htmlSource: string;
  sampleHtmlSource: string;
};

const basicPlayGround: FC<BasicPlayGroundProps> = (props) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(htmlSource, props.htmlSource);
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div className={info_styles.hoge}></div>
        </Grid>
        <Grid item xs={6}>
          <HtmlEditor
            htmlSource={htmlSource}
            cssSource={cssSource}
            jsSource={jsSource}
            tab={TAB}
            activeTab={activeTab}
          />
        </Grid>
        <Grid item xs={3}>
          <HtmlPreview
            htmlSource={htmlSource}
            sampleHtmlSource={props.sampleHtmlSource}
          />
        </Grid>
      </Grid>
    </RecoilRoot>
  )
}

export default basicPlayGround
