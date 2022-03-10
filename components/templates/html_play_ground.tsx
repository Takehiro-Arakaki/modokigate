import {FC} from 'react'
import { RecoilRoot, atom } from "recoil";
import FrontEditor from '@/components/organism/editor/front_editor'
import FrontPreview from '@/components/organism/editor/front_preview'
import Protocol from '@/components/organism/editor/protocol'
import { htmlSource, cssSource, jsSource } from '@/hooks/setSourceAtoms';
import styles from '@/styles/components/template/template.module.scss'


const TAB = { HTML: 0 } as const;
const activeTab = atom<0 | 1 | 2>({ key: "active", default: TAB.HTML });

type HtmlPlayGroundProps = {
  protocolHeader: string;
  protocol: {
    file_name: string;
    info: string;
    link: string;
  }[];
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
            tab={TAB}
            activeTab={activeTab}
            sampleHtmlSource={props.sampleHtmlSource}
          />
        </div>
        <div className={styles.play_ground_preview}>
          <FrontPreview
            htmlSource={htmlSource}
            sampleHtmlSource={props.sampleHtmlSource}
          />
        </div>
      </div>
    </RecoilRoot>
  )
}

export default htmlPlayGround
