# App Component (task 1)

The purpose of this component is to render the main layout of an application, including the header, footer, and content area. Additionally, it handles user authentication and displays either a login form or a course list based on the user's login status.

## Component Structure:

The App component renders the overall structure of the application, including the header, footer, and main content area.
It also renders the Notifications component, which displays notifications to the user.

### User Authentication:

The isLoggedIn prop is used to determine whether the user is logged in or not. If the user is logged in (isLoggedIn is true), the CourseList component is rendered, showing a list of available courses. If not, the Login component is rendered, prompting the user to log in.

### Keyboard Event Handling:

The component listens for a specific keyboard event (Ctrl + H) using the componentDidMount lifecycle method. When this combination is detected, it triggers an alert message indicating that the user is being logged out.
Additionally, it calls the logOut function provided as a prop, which is expected to handle the logout process. This allows for a quick way to log out users without needing to interact with UI elements.
Notification Display:

The Notifications component is displayed with a list of notifications. This can be useful for providing users with important information or updates about the application.


The bigger picture reason for this setup is to provide a user-friendly and interactive experience for the application's users:

Users can easily navigate through the application using the header and footer components.
They can see notifications to stay informed about important events or updates.
The login/logout functionality allows for secure access to the application's features and content.
Handling keyboard shortcuts like Ctrl + H provides users with convenient ways to perform actions without relying solely on mouse interactions.
Overall, this App component serves as the main entry point for the application, orchestrating various UI elements and user interactions to create a seamless experience for the user.