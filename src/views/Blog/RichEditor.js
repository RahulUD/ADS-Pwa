import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
class RichEditor extends React.Component {
    constructor (props) {
      super(props)
      this.state = { RicheditorHtml: '', theme: 'snow' }
    }
    
    handleThemeChange (newTheme) {
      if (newTheme === "core") newTheme = null;
      this.setState({ theme: newTheme })
    }
    
    render () {
      return (
        <div>
          <ReactQuill
            theme={this.state.theme}
            onChange={this.props.changeHandle}
            value={this.props.value}
            modules={RichEditor.modules}
            formats={RichEditor.formats}
            bounds={'.app'}
            placeholder={this.props.placeholder}
           />
         </div>
       )
    }
  }
  
  RichEditor.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill Richeditor formats
   * See https://quilljs.com/docs/formats/
   */
  RichEditor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'color', 'background'
  ]
  
  /* 
   * PropType validation
   */


  export default RichEditor