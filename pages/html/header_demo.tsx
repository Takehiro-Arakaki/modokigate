import {FC} from 'react'
import StylingPlayGround from '@/components/templates/styling_play_ground'

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
`<h1 class="hello">これは見本のテストです<`

const SampleHeaderHtml =
`<h1 class="hello">これは見本のテストです</h1>`

const HeaderCss =
`.hello {
  color: red
}`

const SampleHeaderCss =
`.hello {
  color: blue;
}`

const htmlHeader: FC<{}> = () => {
  return (
    <StylingPlayGround
      protocolHeader={ProtocolHeader}
      protocol={Protocol}
      htmlSource={HeaderHtml}
      cssSource={HeaderCss}
      sampleHtmlSource={SampleHeaderHtml}
      sampleCssSource={SampleHeaderCss}
    />
  )
}

export default htmlHeader
