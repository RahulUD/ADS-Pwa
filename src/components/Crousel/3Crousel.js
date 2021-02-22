import React from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
import { connect } from 'react-redux';
import { BirthdayAction } from 'redux/actionCreator/UserAction'

const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  width: 80%;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  align-items: center;
  justify-content: center;
`;

class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
    noOfCards: 1,
    autoPlayDelay: 3000,
  };

  componentDidMount() {
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
          children={this.props.users && this.props.users.map(element => (
            <SlideItem key={element.id}>
              <div className="rounded rounded-t-lg overflow-hidden shadow my-3">
                <div className="flex justify-center">
                  <img src={element.avatar} alt='profile' style={{height: '300px'}} className="rounded-lg border-solid border-white border-2 mt-3" />
                </div>
                <div className="text-center px-3 pb-6 pt-2">
                  <h3 className="text-black text-sm bold font-sans"><b className="text-3xl">{element.name}</b></h3>
                  {/* {element.userable_type==='App\\Models\\Student' && <p className="mt-2 font-sans font-light text-grey-dark">{`STD : ${element.std.name}`}</p>} */}
                </div>
              </div>
            </SlideItem>
          ))}
        />
      </Wrapper>
    );
  }
}
const mapStateToProps = (state) => {
  const Birthday = state.BirthdayReducer;
  if (Birthday) {
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