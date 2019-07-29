import React, { PureComponent } from "react";
import { isEmpty } from "lodash";

export default class Report extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { songs } = this.props;

    if (isEmpty(songs)) {
      return "Loading...";
    }

    return (
      <ul>
        {songs.map(song => (
          <li>{song}</li>
        ))}
      </ul>
    );
  }
}
