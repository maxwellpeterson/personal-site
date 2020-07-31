import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/welcome"
import About from "../components/about";
import { Waypoint } from "react-waypoint";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: 'welcome'
    };
  }

  updateFocus(sectionInFocus) {
    this.setState({focus: sectionInFocus});
  }

  render() {
    return (
      <Layout>
        <Waypoint onEnter={() => this.updateFocus('welcome')} />
        <Welcome focus={this.state.focus === 'welcome'} />
        <Waypoint onEnter={() => this.updateFocus('about')} />
        <About focus={this.state.focus === 'about'} />
        <Waypoint onEnter={() => this.updateFocus('projects')} />
        <Welcome focus={this.state.focus === 'projects'} />
      </Layout>
    )
  }
}