import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import FrontEditor from '@/components/organism/editor/front_editor'
import FrontPreview from '@/components/organism/editor/front_preview'
import { htmlSource, cssSource, jsSource } from '@/hooks/setSourceAtoms';
import styles from '@/styles/components/editor/info/template.module.scss'
import { Grid } from '@material-ui/core';

const TAB = {
  HTML: 0 ,
  CSS: 1,
} as const;

const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

type stylingPlayGroundProps = {
  htmlSource: string;
  cssSource: string;
  sampleHtmlSource: string;
  sampleCssSource: string;
};

const stylingPlayGround: FC<stylingPlayGroundProps> = (props) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(htmlSource, props.htmlSource);
        set(cssSource, props.cssSource);
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
            cssSource={cssSource}
            sampleHtmlSource={props.sampleHtmlSource}
            sampleCssSource={props.sampleCssSource}
          />
        </Grid>
      </Grid>
    </RecoilRoot>
  )
}

export default stylingPlayGround
