import React from "react"
import Layout from "../components/layout"
import Welcome from "../components/welcome"
import About from "../components/about";
import { Waypoint } from "react-waypoint";
import Experience from "../components/experience";
import Projects from "../components/projects";

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
        <Welcome focus={this.state.focus === 'welcome'} />
        <About focus={this.state.focus === 'about'} />
        <Projects />
        <Experience focus={this.state.focus === 'projects'} />
      </Layout>
    )
  }
}

// <Waypoint onEnter={() => this.updateFocus('welcome')} />