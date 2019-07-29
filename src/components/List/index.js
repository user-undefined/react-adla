import React from "react";
import Item from "./Item";

class List extends React.PureComponent {
  render() {
    const { items, itemRenderer } = this.props;
    return <ul>{items.map(item => itemRenderer({ item }))}</ul>;
  }
}

List.Item = Item;
export default List;
