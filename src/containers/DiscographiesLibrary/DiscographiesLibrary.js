import React, { PureComponent } from "react";
import { isEmpty } from "lodash";
import List from "components/List";

export default class DiscographyLibrary extends PureComponent {
  constructor(props) {
    super(props);

    this.itemRenderer = this.itemRenderer.bind(this);
  }

  componentDidMount() {
    this.props.fetch();
  }

  itemRenderer({ item }) {
    return (
      <List.Item key={item}>
        {`${item.band} - ${item.album}`}
        <List
          items={item.songs}
          itemRenderer={({ item }) => <List.Item>{item}</List.Item>}
        />
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
