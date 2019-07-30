import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import List from "components/List";
import ExpandableContainer, {
  UncontrollableExpandableContaier
} from "components/ExpandableContainer";

export default class AlbumsList extends PureComponent {
  constructor(props) {
    super(props);

    this.itemRenderer = this.itemRenderer.bind(this);
  }

  itemRenderer({ item }) {
    const ExpandElement = ExpandableContainer.ExpandElement(({ expanded }) => {
      return expanded ? (
        <div className="expand">
          <div className="albums__expand-element albums__expand-element--expanded" />
        </div>
      ) : (
        <div className="albums__expand-element albums__expand-element--collapsed" />
      );
    });

    return (
      <List.Item key={item}>
        <UncontrollableExpandableContaier>
          <div className="albums__item">
            {`${item.band} - ${item.album}`}
            <ExpandElement />
          </div>
          <ExpandableContainer.Expanded>
            <List
              items={item.songs}
              itemRenderer={({ item }) => <List.Item>{item}</List.Item>}
            />
          </ExpandableContainer.Expanded>
        </UncontrollableExpandableContaier>
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
