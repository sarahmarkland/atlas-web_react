README for TASK 4

## WithLogging HOC
```
In this HOC:

The WithLogging function takes a WrappedComponent as its argument and returns a new component that logs the mounting and unmounting events.
Inside the returned component's componentDidMount and componentWillUnmount lifecycle methods, appropriate console logs are made indicating when the component is mounted and about to unmount.
The getComponentName function is a helper function to extract the name of the wrapped component. It first checks if the wrapped component has a displayName, then its name, and defaults to 'Component' if none is found.
Finally, the HOC is exported for use in other components.
```
