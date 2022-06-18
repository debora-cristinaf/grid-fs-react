import React from "react";

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export default class Welcome extends React.Component {
  state = {
    src: null,
  };

  componentDidMount() {
    fetch(`http://localhost:4000/profile/62ad0fb99ca16159f02447c1`)
      .then(validateResponse)
      .then((response) => response.blob())
      .then((blob) => {
        this.setState({ src: URL.createObjectURL(blob) });
      });
  }

  render() {
    return (
      <div>{this.state.src && <img alt="home" src={this.state.src}></img>}</div>
    );
  }
}
