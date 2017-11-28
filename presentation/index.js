// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Upgrade Your ScrollView
          </Heading>
          <Text margin="10px 0 0" textColor="primary" textSize={24} italic bold>
            Using Animations onScroll
          </Text>
          <Text margin="10px 0 0" textColor="primary" textSize={20} italic bold>
            - Jarret Moses
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading
            size={1}
            caps
            lineHeight={1}
            textColor="tertiary"
          >
            DEMO
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading
            margin="0 0 24px"
            size={4}
            caps
            lineHeight={1}
            textColor="tertiary"
          >
            Docs
          </Heading>
          <Text
            margin="10px 0 0"
            textColor="primary"
            textSize={21}
            italic
            bold
          >
            https://facebook.github.io/react-native/docs/scrollview.html
          </Text>
          <Text
            margin="24px 0 0"
            textColor="primary"
            textSize={21}
            italic
            bold
          >
            http://facebook.github.io/react-native/docs/animations.html#animated-api
          </Text>
          <Heading
            margin="40px 0 0"
            size={4}
            caps
            lineHeight={1}
            textColor="tertiary"
          >
            Example Code Repo
          </Heading>
          <Text
            margin="24px 0 0"
            textColor="primary"
            textSize={21}
            italic
            bold
          >
            https://github.com/jarretmoses/rn-meetup-scroll-example
          </Text>
          <Text
            margin="24px 0 0"
            textColor="primary"
            textSize={21}
            italic
            bold
          >
            https://github.com/jarretmoses/rn-meetup-slides
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
        >
          <Text
            margin="0 0 24px 0"
            bold
            italic
            textColor="tertiary"
          >
            @jarretmoses
          </Text>
          <Text
            margin="0 0 24px 0"
            bold
            italic textColor="tertiary"
          >
            jarret.moses@gmail.com
          </Text>
          <Text
            bold
            italic textColor="tertiary"
          >
            github.com/jarretmoses
          </Text>
        </Slide>
      </Deck>
    );
  }
}
