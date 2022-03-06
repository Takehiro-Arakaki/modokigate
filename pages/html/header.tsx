import {FC} from 'react'
import HtmlPlayGround from '@/components/templates/html_play_ground'

const HeaderHtml =
`<h1 class="hello">Hello PlayGround!</h1>
<h2 class="hello">Hello PlayGround!</h2>
<h3 class="hello">Hello PlayGround!</h3>`

const SampleHeaderHtml =
`<h1 class="hello">これは見本のテストです</h3>`

const htmlHeader: FC<{}> = () => {
  return (
    <HtmlPlayGround
      htmlSource={HeaderHtml}
      sampleHtmlSource={SampleHeaderHtml}
    />
  )
}

export default htmlHeader
