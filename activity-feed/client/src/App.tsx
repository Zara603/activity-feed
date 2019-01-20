import React, { Component } from "react";
import ActivityFeed from "./interfaces/ActivityFeed";
import get from "./service";
import parseActivity from "./parser/ParseActivity";
import dataUrl from "./dataUrl";
import "./App.css";
import ActivityContainer from "./components/ActivityContainer";

interface State {
  activeItem: string | null;
  items: ActivityFeed;
}

interface Props {}

class App extends Component<Props, State> {
  state: State = {
    activeItem: "",
    items: { activity_feed: [], locations: [], profiles: [], tasks: [] }
  };

  componentDidMount() {
    get(dataUrl)
      .then(response => response.json())
      .then(data =>
        this.setState({
          items: data
        })
      );
  }

  private handleMouseOver = (arg: string) => {
    this.setState(() => ({
      activeItem: arg
    }));
  };

  private handleMouseOut = () => {
    this.setState(() => ({
      activeItem: null
    }));
  };

  render() {
    const { activity_feed, profiles, tasks } = this.state.items;
    const parsedItems = parseActivity(activity_feed, profiles, tasks);
    return (
      <div className="container">
          <ActivityContainer
              items={ parsedItems }
              onMouseOver={ this.handleMouseOver }
              onMouseOut={ this.handleMouseOut }
          />
          <div className="linkHint">
              {this.state.activeItem || 'Mouse over a user or task to get their path.'}
          </div>
      </div>
  )
  }
}

export default App;
