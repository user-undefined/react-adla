import React from "react";

const ExpandContext = React.createContext();

class ExpandableContainer extends React.Component {
  render() {
    const { children, onExpand, expanded } = this.props;
    return (
      <ExpandContext.Provider value={{ onExpand, expanded }}>
        {children}
      </ExpandContext.Provider>
    );
  }
}

class UncontrollableExpandableContaier extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { expanded } = this.state;
    this.setState({
      expanded: !expanded
    });
  }

  render() {
    const { expanded } = this.state;
    const { children } = this.props;
    return (
      <ExpandableContainer onExpand={this.toggle} expanded={expanded}>
        {children}
      </ExpandableContainer>
    );
  }
}

const Expanded = ({ children }) => {
  return (
    <ExpandContext.Consumer>
      {({ expanded }) => {
        return expanded ? children : "";
      }}
    </ExpandContext.Consumer>
  );
};
ExpandableContainer.Expanded = Expanded;

const Collapsed = ({ children }) => {
  return (
    <ExpandContext.Consumer>
      {({ expanded }) => {
        return !expanded ? children : "";
      }}
    </ExpandContext.Consumer>
  );
};
ExpandableContainer.Collapsed = Collapsed;

const ExpandElement = element => {
  return () => (
    <ExpandContext.Consumer>
      {({ expanded, onExpand }) => {
        const Element = () => element({ expanded });
        return (
          <div onClick={onExpand}>
            <Element />
          </div>
        );
      }}
    </ExpandContext.Consumer>
  );
};
ExpandableContainer.ExpandElement = ExpandElement;

export default ExpandableContainer;
export { UncontrollableExpandableContaier };
