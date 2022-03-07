import {FC} from 'react'
import HtmlPlayGround from '@/components/templates/html_play_ground'

const ProtocolHeader = "テストヘッダー"

const Protocol = [
  {
    file_name: 'index.html',
    info: 'の部分を<h1>タグで囲んでください',
    link: 'hoge/2'
  },
  {
    file_name: 'index.html',
    info: 'の部分を<h2>タグで囲んでください',
    link: 'hoge/2'
  },
]

const HeaderHtml =
`<h1 class="hello">Hello PlayGround!</h1>
<h2 class="hello">Hello PlayGround!</h2>
<h3 class="hello">Hello PlayGround!</h3>`

const SampleHeaderHtml =
`<h1 class="hello">これは見本のテストです</h3>`


const htmlHeader: FC<{}> = () => {
  return (
    <HtmlPlayGround
      protocolHeader={ProtocolHeader}
      protocol={Protocol}
      htmlSource={HeaderHtml}
      sampleHtmlSource={SampleHeaderHtml}
    />
  )
}

export default htmlHeader
