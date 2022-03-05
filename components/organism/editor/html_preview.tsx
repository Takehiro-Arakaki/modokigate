import {FC} from 'react'
import { RecoilState } from 'recoil';
import ShowPreview from '@/components/molecules/editor/preview/show_preview'
import SamplePreview from '@/components/molecules/editor/preview/sample_preview'

type HtmlPreviewProps = {
  htmlSource: RecoilState<string>;
  sampleHtmlSource: string;
};

const htmlEditor: FC<HtmlPreviewProps> = (props) => {
  return (
    <>
      <ShowPreview htmlSource={props.htmlSource} />
      <SamplePreview sampleHtmlSource={props.sampleHtmlSource} />
    </>
  )
}

export default htmlEditor
