import {FC} from 'react'
import BasicPlayGround from '@/components/templates/basic_play_ground'

const HeaderHtml =
  `<div class="hello">Hello PlayGround!</div>`

const SampleHeaderHtml =
  `<div class="hello">hoge</div>`

const htmlHeader: FC<{}> = () => {
  return (
    <BasicPlayGround
      htmlSource={HeaderHtml}
      sampleHtmlSource={SampleHeaderHtml}
    />
  )
}

export default htmlHeader
