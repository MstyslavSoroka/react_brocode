import PropTypes from 'prop-types';

function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className="welcome_message">Welcome {props.username}</h2>
  );
  const loginPrompt = <h2 className="login_prompt">Please log in</h2>;
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}
UserGreeting.prototypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: 'guest',
};

export default UserGreeting;
