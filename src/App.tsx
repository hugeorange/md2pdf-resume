import { useEffect } from 'react'
import { callPrinter } from 'call-printer'
import { toast } from 'react-toastify'
import { download } from './utils'
import { getTemplate, PRESETTPL } from './template'
import './App.scss'

function App() {
  useEffect(() => {
    window.mdEditor = new window.tui.Editor({
      el: document.querySelector('#MdEditor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '100%',
      language: 'zh_CN',
      placeholder: '请输入正文...',
      usageStatistics: false,
      exts: ['scrollFollow', 'colorSyntax'],
      // events: { change: updatePreview },
    })
    const mdtext = window.localStorage.getItem('mdtext') || PRESETTPL
    window.mdEditor.setValue(mdtext)
  }, [])

  // const downloadMD = () => {
  //   download('resume-template.MD', window.mdEditor.getValue())
  // }
  const makepdf = () => {
    const content = document.querySelectorAll('.tui-editor-contents')[0]
    const tpl = getTemplate(content.innerHTML)
    console.log('tpl--->', tpl)
    callPrinter(tpl)
  }
  const makeNewWindowpdf = () => {
    const content = document.querySelectorAll('.tui-editor-contents')[0]
    const tpl = getTemplate(content.innerHTML)
    let myWindow = window.open('', '', 'width:100%,height:100%') as any
    myWindow.document.write(tpl) //info为html的字符串
    myWindow.document.close() //必须关闭流，否则表单不生效
    myWindow.focus()
  }
  const saveMd = () => {
    try {
      window.localStorage.setItem('mdtext', window.mdEditor.getValue())
      toast.success('save successful')
    } catch (error) {
      console.log(error)
      toast.error(JSON.stringify(error))
    }
  }
  return (
    <div className='App'>
      <div className='Container'>
        <div className='SideBar'>
          <img src='https://avatars.githubusercontent.com/u/18440746' alt='' />
          <div className='SideMenu'>
            <div onClick={makepdf}>直接打印</div>
            <div onClick={makeNewWindowpdf}>窗口打印</div>
            <div onClick={saveMd}>本地存储</div>
          </div>
        </div>

        <div className='WorkingBox'>
          <div id='MdEditor'></div>
        </div>
      </div>
    </div>
  )
}

export default App
