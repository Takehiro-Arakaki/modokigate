import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import FrontEditor from '@/components/organism/editor/front_editor'
import FrontPreview from '@/components/organism/editor/front_preview'
import { htmlSource, cssSource, jsSource } from '@/hooks/setSourceAtoms';
import styles from '@/styles/components/editor/info/template.module.scss'
import { Grid } from '@material-ui/core';

const TAB = { HTML: 0 } as const;
const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

type HtmlPlayGroundProps = {
  htmlSource: string;
  sampleHtmlSource: string;
};

const htmlPlayGround: FC<HtmlPlayGroundProps> = (props) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(htmlSource, props.htmlSource);
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <div className={styles.hoge}></div>
        </Grid>
        <Grid item xs={6}>
          <FrontEditor
            htmlSource={htmlSource}
            cssSource={cssSource}
            jsSource={jsSource}
            tab={TAB}
            activeTab={activeTab}
          />
        </Grid>
        <Grid item xs={3}>
          <FrontPreview
            htmlSource={htmlSource}
            sampleHtmlSource={props.sampleHtmlSource}
          />
        </Grid>
      </Grid>
    </RecoilRoot>
  )
}

export default htmlPlayGround
