import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import List from "components/List";
import ExpandableContainer from "components/ExpandableContainer";

export default class DiscographyLibrary extends PureComponent {
  constructor(props) {
    super(props);

    this.itemRenderer = this.itemRenderer.bind(this);
  }

  componentDidMount() {
    this.props.fetch();
  }

  itemRenderer({ item }) {
    const ExpandElement = ExpandableContainer.ExpandElement(({ expanded }) => {
      return expanded ? <div>Expanded</div> : <div>Collapsed</div>;
    });
    console.log(ExpandElement);
    return (
      <List.Item key={item}>
        <ExpandableContainer>
          <ExpandableContainer.Expanded>
            {`${item.band} - ${item.album}`}
            <List
              items={item.songs}
              itemRenderer={({ item }) => <List.Item>{item}</List.Item>}
            />
          </ExpandableContainer.Expanded>
          <ExpandableContainer.Collapsed>
            {`${item.band} - ${item.album}`}
          </ExpandableContainer.Collapsed>
          <ExpandElement />
        </ExpandableContainer>
      </List.Item>
    );
  }

  render() {
    const { songs, aggregate } = this.props;

    console.log("props", this.props);
    if (isEmpty(songs)) {
      return "Loading...";
    }

    return <List items={aggregate} itemRenderer={this.itemRenderer} />;
  }
}
