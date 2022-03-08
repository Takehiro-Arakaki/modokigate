import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import FrontEditor from '@/components/organism/editor/front_editor'
import FrontPreview from '@/components/organism/editor/front_preview'
import Protocol from '@/components/organism/editor/protocol'
import { htmlSource, cssSource, jsSource } from '@/hooks/setSourceAtoms';
import { Grid } from '@material-ui/core';

const TAB = { HTML: 0, CSS: 1 } as const;
const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

type StylingPlayGroundProps = {
  protocolHeader: string;
  protocol: {
    file_name: string;
    info: string;
    link: string;
  }[];
  htmlSource: string;
  cssSource: string;
  sampleHtmlSource: string;
  sampleCssSource: string;
};

const stylingPlayGround: FC<StylingPlayGroundProps> = (props) => {
  return (
    <RecoilRoot
      initializeState={({ set }) => {
        set(htmlSource, props.htmlSource);
        set(cssSource, props.cssSource);
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Protocol
            protocolHeader={props.protocolHeader}
            protocol={props.protocol}
          />
        </Grid>
        <Grid item xs={6}>
          <FrontEditor
            htmlSource={htmlSource}
            cssSource={cssSource}
            jsSource={jsSource}
            sampleHtmlSource={props.sampleHtmlSource}
            sampleCssSource={props.sampleCssSource}
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
