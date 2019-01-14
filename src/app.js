import React from "react";
import ReactDOM from "react-dom";
import { Tweet } from "./tweet";
import { data } from "./data";

import "/css/styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {data.map((user, index) => (
          <Tweet
            name={user.name}
            handle={user.handle}
            message={user.message}
            avatarUrl={user.avatarUrl}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
