import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

class RichTextEditor extends Component {
  state = {
    addData: "",
    showData: false,
  };

  handleChange = (event, editor) => {
    const data = editor.getData();
    this.setState({
      addData: data,
    });
  };

  render() {
    return (
      <div>
        <CKEditor
          editor={ClassicEditor}
          data={this.state.addData}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            if (this.state.showData === false) {
              this.setState({
                showData: true,
              });
            } else {
              this.setState({
                showData: false,
              });
            }
          }}
        >
          {this.state.showData ? "CloseData" : "ShowData"}
        </button>
        <div>
          {this.state.showData ? ReactHtmlParser(this.state.addData) : ""}
        </div>
      </div>
    );
  }
}

export default RichTextEditor;
