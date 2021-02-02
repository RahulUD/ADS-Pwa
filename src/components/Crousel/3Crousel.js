import React from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { connect } from 'react-redux';
import { BirthdayAction } from '../../redux/actionCreator/UserAction'

const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 200px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
    noOfCards: 3,
    autoPlayDelay: 3000,
  };

  componentDidMount() {
    debugger
    this.props.BirthdayActionDispatch()
    this.interval = setInterval(this.tick, this.state.autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (this.props?.users?.length - this.state.noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={12}
          numberOfCards={this.state.noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={<button>{'>'}</button>}
          leftChevron={<button>{'<'}</button>}
          chevronWidth={chevronWidth}
          outsideChevron
          children={this.props.users&&this.props.users.map(element => (
            <SlideItem key={element.id}>
              {element.name}
            </SlideItem>
          ))}
        />
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => {
  const Birthday = state.BirthdayReducer;
    if(Birthday){
      return {
      users: Birthday.user
    };
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    BirthdayActionDispatch: (state) => dispatch(BirthdayAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AutoPlayCarousel)