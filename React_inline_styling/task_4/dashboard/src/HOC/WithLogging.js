import React, { Component } from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${getComponentName(WrappedComponent)} is mounted on componentDidMount()`);
    }

    componentWillUnmount() {
      console.log(`Component ${getComponentName(WrappedComponent)} is going to unmount on componentWillUnmount()`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

const getComponentName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default WithLogging;
