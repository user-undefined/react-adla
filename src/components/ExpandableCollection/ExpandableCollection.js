import React from "react";
import ExpandableContainer from "components/ExpandableContainer";

const ExpandedContext = React.createContext();

class ExpandableCollection extends React.Component {
  constructor(props) {
    super(props);
    const { items } = this.props;
    console.log(items);
    const expanded = items.reduce((expanded, id) => {
      expanded[id] = false;
      return expanded;
    }, {});

    this.state = {
      expanded
    };

    this.expand = this.expand.bind(this);
    this.expandAll = this.expandAll.bind(this);
  }

  expand(id) {
    this.setState(({ expanded }) => ({
      expanded: {
        ...expanded,
        [id]: !expanded[id]
      }
    }));
  }

  expandAll() {
    const { expanded: prevExpanded } = this.state;
    const expanded = Object.keys(prevExpanded).reduce((expanded, id) => {
      expanded[id] = !prevExpanded[id];
      return expanded;
    }, {});

    this.setState({ expanded });
  }

  render() {
    const { children } = this.props;
    const { expanded } = this.state;
    console.log(children);
    return (
      <ExpandedContext.Provider
        value={{ expanded, onExpand: this.expand, onExpandAll: this.expandAll }}
      >
        {children}
      </ExpandedContext.Provider>
    );
  }
}

const ExpandAllElement = element => {
  return () => (
    <ExpandedContext.Consumer>
      {({ onExpandAll }) => {
        const Element = () => element({});
        return (
          <div onClick={onExpandAll}>
            <Element />
          </div>
        );
      }}
    </ExpandedContext.Consumer>
  );
};

function ExpandableElement({ id, children }) {
  console.log(id, children);
  return (
    <ExpandedContext.Consumer>
      {({ expanded, onExpand }) => {
        return (
          <ExpandableContainer
            expanded={!!expanded[id]}
            onExpand={() => onExpand(id)}
          >
            {children}
          </ExpandableContainer>
        );
      }}
    </ExpandedContext.Consumer>
  );
}

export default ExpandableCollection;
export { ExpandableElement };

ExpandableCollection.ExpandableElement = ExpandableElement;
ExpandableCollection.ExpandAllElement = ExpandAllElement;

ExpandableElement.Collapsed = ExpandableContainer.Collapsed;
ExpandableElement.Expanded = ExpandableContainer.Expanded;
ExpandableElement.ExpandElement = ExpandableContainer.ExpandElement;
