/** @jsx React.DOM */
require('./style.scss');

var React = require('react');
var component = require('../../component');

var Menu = require('../../controls/Menu');

module.exports = component('UserShortcuts', {
  render: function () {
    var items = [
      {
        value: 'siteNavigation',
        icon: 'bars',
        onClick: this.props.onClick
      },
      {
        value: 'search',
        icon: 'search',
        onClick: this.props.onClick
      },
      {
        value: 'messages',
        icon: 'envelope',
        onClick: this.props.onClick
      },
      {
        value: 'settings',
        icon: 'cog',
        onClick: this.props.onClick
      },
      {
        value: 'signOut',
        icon: 'sign-out',
        onClick: this.props.onClick
      }
    ];

    return (
      <Menu className={this.className()} horizontal={true} items={items} />
    );
  },
});