import React, { Component } from 'react';
import SplitterLayout from 'react-splitter-layout';

class App extends Component {
  render() {
    return (
      <SplitterLayout vertical percentage secondaryInitialSize={80}>
        <div>1</div>
        <SplitterLayout percentage secondaryInitialSize={66}>
          <div>2</div>
          <SplitterLayout percentage secondaryInitialSize={50}>
            <div>3</div>
            <div>4</div>
          </SplitterLayout>
        </SplitterLayout>
      </SplitterLayout>
    );
  }
}

export default App;
