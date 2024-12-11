import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { getConfig } from '@edx/frontend-platform';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { AppContext } from '@edx/frontend-platform/react';
import { Dropdown } from '@openedx/paragon';
import messages from './messages';
var AuthenticatedUserDropdown = function AuthenticatedUserDropdown(_ref) {
  var intl = _ref.intl,
    username = _ref.username;
  var _useContext = useContext(AppContext),
    authenticatedUser = _useContext.authenticatedUser;
  var dashboardMenuItem = /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().LMS_BASE_URL, "/dashboard")
  }, intl.formatMessage(messages.dashboard));
  return /*#__PURE__*/React.createElement(React.Fragment, null, console.log('learning header'), /*#__PURE__*/React.createElement("a", {
    className: "btn-menu",
    href: "".concat(getConfig().SUPPORT_URL)
  }, intl.formatMessage(messages.help)), /*#__PURE__*/React.createElement(Dropdown, {
    className: "user-dropdown"
  }, /*#__PURE__*/React.createElement(Dropdown.Toggle, {
    variant: "outline-primary"
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faUserCircle,
    className: "d-md-none",
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    "data-hj-suppress": true,
    className: "d-none d-md-inline"
  }, username)), /*#__PURE__*/React.createElement(Dropdown.Menu, {
    className: "dropdown-menu-right"
  }, dashboardMenuItem, /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().ACCOUNT_PROFILE_URL, "/u/").concat(username)
  }, intl.formatMessage(messages.profile)), /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().ACCOUNT_SETTINGS_URL
  }, intl.formatMessage(messages.account)), getConfig().SHOW_TELEMETRY_LINKS_STUDENT == 'true' && /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().ACCOUNT_SETTINGS_URL.replace('account', 'dashboard'), "?page=student&view=general")
  }, intl.formatMessage(messages.telemetryUser)), (authenticatedUser === null || authenticatedUser === void 0 ? void 0 : authenticatedUser.administrator) && getConfig().SHOW_TELEMETRY_LINKS_ADMIN == 'true' && /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: "".concat(getConfig().ACCOUNT_SETTINGS_URL.replace('account', 'dashboard'), "?page=admin&view=general")
  }, intl.formatMessage(messages.telemetryAdmin)), getConfig().ORDER_HISTORY_URL && /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().ORDER_HISTORY_URL
  }, intl.formatMessage(messages.orderHistory)), /*#__PURE__*/React.createElement(Dropdown.Item, {
    href: getConfig().LOGOUT_URL
  }, intl.formatMessage(messages.signOut)))));
};
AuthenticatedUserDropdown.propTypes = {
  intl: intlShape.isRequired,
  username: PropTypes.string.isRequired
};
export default injectIntl(AuthenticatedUserDropdown);
//# sourceMappingURL=AuthenticatedUserDropdown.js.map