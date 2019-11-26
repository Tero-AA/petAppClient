import React, { PureComponent } from 'react';
import { Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Box } from "react-native-design-utility";

const { width: WIDTH } = Dimensions.get('window')

const DOT_SIZE = 10;
const TIME = 3000;

const images = [
  require('../../assets/img/american-journey-salmon-dry-dog-food-black-friday-deals.png'),
  require('../../assets/img/freebies2deals-wag-25-discount.png'),
  require('../../assets/img/petsmart-black-friday-2018.png'),
];

class DealCaroussel extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    }

    this.ScrollView = React.createRef()
  }

  handleScroll = () => {
    const newIndex = this.state.currentIndex + 1;

    if (newIndex < images.length) {
      this.ScrollView.current.scrollTo({
        x: newIndex * WIDTH,
        animated: true,
      })


      this.setState({ currentIndex: newIndex });
    } else {
      this.ScrollView.current.scrollTo({
        x: 0,
        animated: true,
      })

      this.setState({ currentIndex: 0 });
    }
  }

  onScroll = (event) => {
    const { contentOffset } = event.nativeEvent

    const currentIndex = Math.round(contentOffset.x / WIDTH)

    if (this.state.currentIndex !== currentIndex) {
      this.setState({ currentIndex })
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.handleScroll()
    }, TIME);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }




  render() {
    return (
      <Box>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={this.ScrollView}
          onScroll={this.onScroll}
        >
          {images.map((img, i) => (
            <Box key={i} position="relative">
              <Image source={img} />
              <Box
                position="absolute"
                dir="row"
                style={{ height: 250, width: WIDTH }}
                align="end"
                justify="center"
                pb="xs"
              >
                {Array.from({ length: images.length }).map((_, index) => (
                  <Box
                    key={index}
                    bg={this.state.currentIndex === index ? 'black' : 'transparent'}
                    style={{ borderWidth: 1, borderColor: 'black' }}
                    circle={DOT_SIZE}
                    mx={DOT_SIZE / 2}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </ScrollView>
      </Box>
    );
  }
}

export default DealCaroussel;