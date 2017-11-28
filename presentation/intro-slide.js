import React, { Component } from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text
} from "spectacle";


export default class IntroSlide extends Component {
  render() {
    return (
      <Slide transition={["fade"]} bgColor="tertiary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Upgrade Your ScrollView
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          How to take your ScrollView to the next level
        </Text>
      </Slide>
    );
  }
}
