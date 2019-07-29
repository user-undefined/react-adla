import React from "react";

const ExpandContext = React.createContext();

class ExpandableContainer extends React.PureComponent {
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
    const { children } = this.props;
    return (
      <ExpandContext.Provider
        value={{ onExpand: this.toggle, expanded: this.state.expanded }}
      >
        {children}
      </ExpandContext.Provider>
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
  console.log("element", element);
  return () => (
    <ExpandContext.Consumer>
      {({ expanded, onExpand }) => {
        const Element = () => element({ expanded });
        console.log("Element", Element);
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
