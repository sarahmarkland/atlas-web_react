README for TASK 5

## Declare a pure component
```
In this version of NotificationItem:

The component is defined as a arrow function component.
React.memo is used to memoize the component, ensuring it only re-renders if its props have changed.
NotificationItem's props are declared using destructuring in the function parameters.
The component's propTypes remain the same.
With these changes, NotificationItem will only re-render when its props have changed, making it a pure component.

In the new tests:

We create a spy on the shouldComponentUpdate method of the Notifications component prototype.
We render the Notifications component with an initial list of notifications.
We use the setProps function to update the props of the component with the same list of notifications in the first test and with a longer list of notifications in the second test.
We expect that the shouldComponentUpdate method is not called when updating props with the same list and is called when updating props with a longer list.
These tests ensure that the Notifications component behaves as expected when updating its props.
```
