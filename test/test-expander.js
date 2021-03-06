import React from 'react';
import expect from 'expect';
import {createRenderer} from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import {describe, it} from 'mocha'

import Expander from '../src/Expander.jsx'

let params = [
  {
    title: 'Display expander (expaneded).',
    actual: (<Expander defaultValue={true} />),
    expected: (
      <a href="#" className="component-expander expanded" onClick={function noRefCheck() {}}>
        <i className="material-icons">expand_more</i>
      </a>
    )
  },
  {
    title: 'Display expander (closeed).',
    actual: (<Expander defaultValue={false} />),
    expected: (
      <a href="#" className="component-expander " onClick={function noRefCheck() {}}>
        <i className="material-icons">expand_more</i>
      </a>
    )
  }
];


describe('Expander Component', () => {
  params.forEach((param) => {
    let renderer = createRenderer();
    it(param.title, () => {
      renderer.render(param.actual);
      let actualElement = renderer.getRenderOutput();
      let expectedElement = param.expected;
      expect(actualElement).toEqualJSX(expectedElement);
    });
  });
});
