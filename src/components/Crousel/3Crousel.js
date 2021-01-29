import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 12;
const noOfCards = 3;
const autoPlayDelay = 4000;
const chevronWidth = 40;

const Wrapper = styled.div`
  max-width: 1000px;
  overflow: hidden;
  margin: auto;
`;

const carouselItems = range(noOfItems).map(index => (
  <>
  <div className="px-6">
        <img
          alt="..."
          src={require("assets/img/team-1-800x800.jpg")}
          className="shadow-lg rounded-full mx-auto max-w-120-px"
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">Name</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Admin
                    </p>
          </div>
      </div>
  </>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={'>'}
          leftChevron={'<'}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
