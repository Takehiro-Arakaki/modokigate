import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import FrontEditor from '@/components/organism/editor/front_editor'
import FrontPreview from '@/components/organism/editor/front_preview'
import Protocol from '@/components/organism/editor/protocol'
import { htmlSource, cssSource, jsSource } from '@/hooks/setSourceAtoms';
import styles from '@/styles/components/template/template.module.scss'

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
      <div className={styles.play_ground}>
        <div className={styles.play_ground_protocol}>
          <Protocol
            protocolHeader={props.protocolHeader}
            protocol={props.protocol}
          />
        </div>
        <div className={styles.play_ground_editor}>
          <FrontEditor
            htmlSource={htmlSource}
            cssSource={cssSource}
            jsSource={jsSource}
            sampleHtmlSource={props.sampleHtmlSource}
            sampleCssSource={props.sampleCssSource}
            tab={TAB}
            activeTab={activeTab}
          />
        </div>
        <div className={styles.play_ground_preview}>
          <FrontPreview
            htmlSource={htmlSource}
            cssSource={cssSource}
            sampleHtmlSource={props.sampleHtmlSource}
            sampleCssSource={props.sampleCssSource}
          />
        </div>
      </div>
    </RecoilRoot>
  )
}

export default stylingPlayGround
