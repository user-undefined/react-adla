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

    const allExpanded = false;
    this.state = {
      expanded,
      allExpanded
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
    const { expanded: prevExpanded, allExpanded } = this.state;
    const expanded = Object.keys(prevExpanded).reduce((expanded, id) => {
      expanded[id] = !allExpanded;
      return expanded;
    }, {});

    this.setState({ expanded, allExpanded: !allExpanded });
  }

  render() {
    const { children } = this.props;
    const { expanded, allExpanded } = this.state;
    console.log(children);
    return (
      <ExpandedContext.Provider value={{ expanded, onExpand: this.expand }}>
        {children({ onExpandAll: this.expandAll, allExpanded })}
      </ExpandedContext.Provider>
    );
  }
}

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

ExpandableElement.Collapsed = ExpandableContainer.Collapsed;
ExpandableElement.Expanded = ExpandableContainer.Expanded;
ExpandableElement.ExpandElement = ExpandableContainer.ExpandElement;
