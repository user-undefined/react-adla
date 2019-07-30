import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import List from "components/List";
import ExpandableCollection, {
  ExpandableElement
} from "components/ExpandableCollection/ExpandableCollection";

export default class AlbumsList extends PureComponent {
  constructor(props) {
    super(props);

    this.itemRenderer = this.itemRenderer.bind(this);
  }

  itemRenderer({ item }) {
    const ExpandElement = ExpandableElement.ExpandElement(({ expanded }) => {
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
        <ExpandableElement id={`${item.band}-${item.album}`}>
          <div className="albums__item">
            {`${item.band} - ${item.album}`}
            <ExpandElement />
          </div>
          <ExpandableElement.Expanded>
            <List
              items={item.songs}
              itemRenderer={({ item }) => <List.Item>{item}</List.Item>}
            />
          </ExpandableElement.Expanded>
        </ExpandableElement>
      </List.Item>
    );
  }

  render() {
    const { items } = this.props;

    console.log("props", this.props);
    if (isEmpty(items)) {
      return "No items";
    }

    const ExpandAllElement = ExpandableCollection.ExpandAllElement(
      ({ expanded }) => {
        return expanded ? (
          <div className="expand">
            <div className="albums__expand-element albums__expand-element--expanded" />
          </div>
        ) : (
          <div className="albums__expand-element albums__expand-element--collapsed" />
        );
      }
    );

    return (
      <ExpandableCollection
        items={items.map(({ band, album }) => band + "-" + album)}
      >
        Albums
        <ExpandAllElement />
        <List items={items} itemRenderer={this.itemRenderer} />
      </ExpandableCollection>
    );
  }
}
