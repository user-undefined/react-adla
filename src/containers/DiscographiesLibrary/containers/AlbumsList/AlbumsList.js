import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import List from "components/List";
import ExpandableContainer from "components/ExpandableContainer";

export default class AlbumsList extends PureComponent {
  constructor(props) {
    super(props);

    this.itemRenderer = this.itemRenderer.bind(this);
  }

  itemRenderer({ item }) {
    const ExpandElement = ExpandableContainer.ExpandElement(({ expanded }) => {
      return expanded ? <div>Expanded</div> : <div>Collapsed</div>;
    });
    console.log(ExpandElement);
    return (
      <List.Item key={item}>
        <ExpandableContainer>
          {`${item.band} - ${item.album}`}
          <ExpandElement />
          <ExpandableContainer.Expanded>
            <List
              items={item.songs}
              itemRenderer={({ item }) => <List.Item>{item}</List.Item>}
            />
          </ExpandableContainer.Expanded>
        </ExpandableContainer>
      </List.Item>
    );
  }

  render() {
    const { items } = this.props;

    console.log("props", this.props);
    if (isEmpty(items)) {
      return "No items";
    }

    return <List items={items} itemRenderer={this.itemRenderer} />;
  }
}
