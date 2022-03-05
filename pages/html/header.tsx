import {FC} from 'react'
import HtmlPlayGround from '@/components/templates/html_play_ground'

const HeaderHtml =
  `<div class="hello">Hello PlayGround!</div>`

const SampleHeaderHtml =
  `<div class="hello">hoge</div>`

const htmlHeader: FC<{}> = () => {
  return (
    <HtmlPlayGround
      htmlSource={HeaderHtml}
      sampleHtmlSource={SampleHeaderHtml}
    />
  )
}

export default htmlHeader
