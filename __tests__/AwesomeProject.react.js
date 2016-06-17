global.__DEV__ = false;
const React = require('React');
let AwesomeProject;
const ReactNativeMock = require('../test/ReactNativeMock');
jest.unmock('react/lib/ReactTestRenderer');
const renderer = require('react/lib/ReactTestRenderer');
describe('AwesomeProject', () => {
    
    beforeEach (() => {        
        jest.setMock('react-native', ReactNativeMock);
        AwesomeProject = require('../AwesomeProject.react');
    })
    
    it('should work', () => {
      const example = <AwesomeProject />;      
      const tree = renderer.create(example);
      expect(tree.toJSON()).toMatchSnapshot();  
    })

})