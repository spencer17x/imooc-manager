import React, { Component } from 'react'
import './rich.less'
import { Card, Button, Modal } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import draftToHtml from 'draftjs-to-html'

export default class Rich extends Component {
  state = {
    editorContent: '',
    editorState: ''
  }
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Card>
          <Button type="primary" onClick={this.clearRichText}>清空内容</Button>
          <Button type="primary" style={{marginLeft: 20}} onClick={this.getHtmlRichText}>获取HTML文本</Button>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            editorState={editorState}
            onContentStateChange={this.onEditorChange}
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
      </div>
    )
  }
  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    })
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  clearRichText = () => {
    this.setState({
      editorState: '',
      editorContent: ''
    })
  }
  getHtmlRichText = () => {
    Modal.info({
      title: '富文本',
      content: draftToHtml(this.state.editorContent)
    })
  }
}
