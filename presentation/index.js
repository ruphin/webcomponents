// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import CodeSlide
import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  party: require("../assets/party.gif"),
  whatDoesItMean: require("../assets/what-does-it-mean.gif"),
  browsers: require("../assets/browsers.gif"),
  how: require("../assets/how.gif"),
  shadow: require("../assets/shadow.gif"),
  glory: require("../assets/glory.gif"),
  holdOn: require("../assets/hold-on.gif")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4040"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Web Components
            </Heading>
            <Heading size={1} fit caps>
              The new v1 specification
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>A comprehensive breakdown</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} fit caps textColor="white">
              The v1 specification has officially landed
            </Heading>
            <Image src={images.party.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.whatDoesItMean.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["fade"]} bgColor="black" textColor="white" notes="Chrome and Opera full support, Safari and Firefox in nightlies, IE/Edge working on it">
            <Heading size={1} caps textColor="primary">
              Biggest changes
            </Heading>
            <List>
              <Appear><ListItem textSize="200%">More elegant API</ListItem></Appear>
              <Appear><ListItem textSize="200%">New ES6 Class Syntax</ListItem></Appear>
              <Appear><ListItem textSize="200%">Improved browser compatibility</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Some things never change
            </Heading>
            <Image src={images.browsers.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Heading size={1} caps lineHeight={2} textColor="primary">
              How elegant?
            </Heading>
            <Appear>
              <div>
                <CodePane
                  lang="html"
                  source={require("raw!../assets/code/1.html")}
                  margin="20px auto"
                />
                <Text textColor="white" textSize="250%" caps lineHeight={2}>This elegant</Text>
              </div>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.how.replace("/", "")} width="80%" />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading lineHeight={1.2} textColor="primary" size={1}>
              ¯\_(ツ)_/¯
            </Heading>
            <Cite textSize="150%">You <Appear><span>(probably)</span></Appear> <Appear><span>(possibly)</span></Appear> <Appear><span>(maybe)</span></Appear></Cite>
            <Appear><Text textColor="primary" textSize="250%" caps lineHeight={2}>Lets fix that!</Text></Appear>
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/1.html")}
            ranges={[
              { loc: [0, 13], note: "Let's go!"},
              { loc: [0, 1], note: "Standard HTML"},
              { loc: [2, 3], note: "Use our element" },
              { loc: [4, 13], note: "That's it for the HTML, only Script left" },
              { loc: [5, 6], note: "Start with creating a Class for our Element" },
              { loc: [5, 10], note: "Our Class has only one Method" },
              { loc: [6, 9], note: "connectedCallback() is called when an element is attached to the DOM" },
              { loc: [7, 8], note: "We're just dropping some content in there" },
              { loc: [11, 12], note: "Then we tell the browser about our element" },
              { loc: [0, 13], note: "That is all" },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/2.html")}
            ranges={[
              { loc: [0, 20], note: "Let's get rid of that innerHTML" },
              { loc: [4, 8], note: "We define a template for our content" },
              { loc: [11, 16], note: "Attach it in the connectedCallback" },
              { loc: [12, 13], note: "First we find our Template" },
              { loc: [12, 14], note: "Then we clone the content" },
              { loc: [12, 15], note: "And finally attach that to our element" },
              { loc: [10, 17], note: "Within our Class context `this` refers to the instance of our Element" },
              { loc: [0, 20] },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/3.html")}
            ranges={[
              { loc: [0, 16], },
              { loc: [9, 14], note: "Styling is easy" },
              { loc: [6, 15], note: "We just use a <style> tag in our Template" },
              { loc: [17, 29], note: "No other changes" },
              { loc: [2, 5], note: "But it's not perfect" },
              { loc: [0, 20] },
            ]}></CodeSlide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps fit textColor="primary">
              Shadow DOM to the rescue!
            </Heading>
            <Image src={images.shadow.replace("/", "")} width="80%" />
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/4.html")}
            ranges={[
              { loc: [6, 15], note: "ShadowDOM encapsulates our styles within our element"},
              { loc: [18, 24], note: "We just have to change our connectedCallback a little" },
              { loc: [19, 21], note: "Still get our template and clone the content" },
              { loc: [19, 22], note: "But this time we attach a shadowRoot to ourself" },
              { loc: [19, 23], note: "And put the content in there!" },
              { loc: [0, 5] },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/5.html")}
            ranges={[
              { loc: [4, 9], note: "Properties and Attributes"},
              { loc: [25, 26], note: "Properties are like instance variables"},
              { loc: [2, 3], note: "Attributes live only in the DOM-part of your Element, and are not part of your Class"},
              { loc: [18, 20], note: "Use the normal DOM API to get and set them"},
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/6.html")}
            ranges={[
              { loc: [10, 23], note: "The Constructor"},
              { loc: [9, 11], note: "We use normal ES6 Classes, so we can also use the constructor()"},
              { loc: [10, 12], note: "The constructor has a few rules. The first one: always call super() first"},
              { loc: [10, 17], note: "We can use the constructor to set up some basics like creating our shadowRoot"},
              { loc: [10, 19], note: "Or setting initial properties"},
              { loc: [23, 29], note: "But remember: when the constructor runs we are not attached to the DOM yet"},
              { loc: [23, 29], note: "This means you CANNOT manipulate your children and you CANNOT read or write your attributes"},
              { loc: [23, 29], note: "So do those things in the attachedCallback"},
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/7.html")}
            ranges={[
              { loc: [0, 14], note: "Additional styling"},
              { loc: [8, 14], note: "In your stylesheet, the :host selector refers to your element itself"},
              { loc: [14, 17], note: "Pseudo-selectors work like this"},
              { loc: [17, 20], note: "Attribute selectors too"},
              { loc: [20, 23], note: "You can nest selectors like normal"},
            ]}></CodeSlide>

          <Slide transition={["zoom", "spin"]} bgColor="primary">
            <Interactive/>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.holdOn.replace("/", "")} width="100%" />
          </Slide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/8.html")}
            ranges={[
              { loc: [0, 17], note: "Let's do some more advanced stuff"},
              { loc: [4, 9], note: "We want a nice way to access our internal elements with an ID"},
              { loc: [18, 24], note: "Clean up a bit by putting the template attaching in an internal method"},
              { loc: [24, 32], note: "Create an internal method to create our cache"},
              { loc: [25, 26], note: "Set a familiar property to use as a map"},
              { loc: [25, 27], note: "Loop over all our internal elements"},
              { loc: [25, 31], note: "If they have an ID, add them to our map"},
              { loc: [16, 17], note: "Now we can easily access stuff"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/9.html")}
            ranges={[
              { loc: [0, 17], note: "State Management"},
              { loc: [4, 9], note: "Lets say we have some state that we need to reflect in an internal component"},
              { loc: [12, 18], note: "We want that state to be represented by properties"},
              { loc: [18, 25], note: "Use getter and setter functions to control side effects of state change"},
              { loc: [18, 22], note: "The setter function is called when setting our property"},
              { loc: [19, 20], note: "If our property is set, we store the value in an internal variable"},
              { loc: [19, 21], note: "We also reflect the state change in other places in our element"},
              { loc: [22, 25], note: "The getter is easy, we just return our internal variable"},
              { loc: [16, 18], note: "It still feels like we are just using a property"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/10.html")}
            ranges={[
              { loc: [0, 17], note: "We can use this for 'data-binding'"},
              { loc: [4, 9], note: "Lets say we want to make a simple counter"},
              { loc: [6, 7], note: "Create a placeholder element where we can fill our value"},
              { loc: [12, 19], note: "A property holds our state"},
              { loc: [12, 19], note: "Clicking the button just updates our state"},
              { loc: [19, 23], note: "Use the setter to insert our property value into the placeholder"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/11.html")}
            ranges={[
              { loc: [0, 17], note: "Attributes are useful to semantically set our initial state"},
              { loc: [2, 3], note: "We want our element to be configurable from HTML"},
              { loc: [19, 22], note: "createdCallback to the rescue! All we have to do is set the state"},
              { loc: [0, 17], },
            ]}></CodeSlide>

          <CodeSlide
            maxWidth="95vw"
            maxHeight="90vh"
            padding="0"
            transition={["slide"]}
            lang="html"
            code={require("raw!../assets/code/12.html")}
            ranges={[
              { loc: [0, 17], note: "We can also observe changes to our attribute"},
              { loc: [19, 22], note: "We have to tell the browser what attributes we want to observe"},
              { loc: [19, 22], note: "createdCallback to the rescue! All we have to do is set the state"},
              { loc: [0, 17], },
            ]}></CodeSlide>








          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.glory.replace("/", "")} width="100%" />
          </Slide>



          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.glory}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
