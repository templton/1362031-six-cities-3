import React, {PureComponent} from "react";

const withToggleElement = (Component, initialActiveState = false) => {
  class WithToggleElement extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isToggleElementActive: initialActiveState
      };

      this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
      this.setState((prev) => ({
        isToggleElementActive: !prev.isToggleElementActive
      }));
    }

    render() {
      const {isToggleElementActive} = this.state;
      return (
        <Component
          {...this.props}
          handleToggle = {this.handleToggle}
          isToggleElementActive = {isToggleElementActive}
        />
      );
    }
  }

  return WithToggleElement;
};

export default withToggleElement;
