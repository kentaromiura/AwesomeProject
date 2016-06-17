const React = require('React');
const {Component} = React;
const ReactNativeMock = Object.create(null);
class View extends Component {
    render() {                
        const {children} = this.props;
        const rest = Object.assign({}, this.props);
        delete rest.children;
        return <view {...rest}>{this.props.children}</view>;
    }
}
class Text extends Component {
    render() {
        const {children} = this.props;
        const rest = Object.assign({}, this.props);
        delete rest.children;
        return <text {...rest}>{children}</text>;
    }
}
const StyleSheet = {create(what){return what}}
ReactNativeMock.Text = Text;
ReactNativeMock.View = View;
ReactNativeMock.StyleSheet = StyleSheet;

module.exports = ReactNativeMock;