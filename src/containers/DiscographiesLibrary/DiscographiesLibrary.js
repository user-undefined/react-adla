import React, { PureComponent } from "react";
import AlbumList from "./containers/AlbumsList";

export default class DiscographyLibrary extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <div>
        <AlbumList />
      </div>
    );
  }
}
