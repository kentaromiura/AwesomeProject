const React = require('React');
const {Component} = React;
const ReactNativeMock = Object.create(null);

class Image extends Component {
  render() {
    const {children, ...props} = this.props;
    return React.createElement('Image', props, children);
  }
}

class Text extends Component {
  render() {
    const {children, ...props} = this.props;
    return React.createElement('Text', props, children);
  }
}
class View extends Component {
  render() {
    const {children, ...props} = this.props;
    return React.createElement('View', props, children);
  }
}

const StyleSheet = {
  create(id){
    return id;
  }
}

ReactNativeMock.Image = Image;
ReactNativeMock.Text = Text;
ReactNativeMock.View = View;
ReactNativeMock.StyleSheet = StyleSheet;

module.exports = ReactNativeMock;
