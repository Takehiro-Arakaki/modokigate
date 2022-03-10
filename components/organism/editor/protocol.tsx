import {FC} from 'react'
import styles from '@/styles/components/organism/editor/template.module.scss'

type ProtocolProps = {
  protocolHeader: string;
  protocol: {
    file_name: string;
    info: string;
    link: string;
  }[]
};

const protocol: FC<ProtocolProps> = (props) => {
  const protocolList = []
  const protocolData = props.protocol

  for(const i in protocolData){
    protocolList.push(
      <li className={styles.protocol_list} key={i}>
        <div className={styles.protocol_card_header}>
          {protocolData[i].file_name}
        </div>
        <div className={styles.protocol_card_content}>
          {protocolData[i].info}
        </div>
      </li>
    );
  }

  return (
    <>
      <div className={styles.protocol}>
        <div className={styles.protocol_tab}>
          手順
        </div>
        <div className={styles.protocol_content}>
          <div className={styles.protocol_header}>{props.protocolHeader}</div>
          <ul className={styles.protocol_unordered}>
            {protocolList}
          </ul>
        </div>
      </div>
    </>
  )
}

export default protocol
