import HolidayItem from "components/Cards/HolidayItem";
import React, {useEffect} from "react";
import { connect } from "react-redux";
import { GetHolidayAction } from "redux/actionCreator/HolidayAction";

const Holidays = ({GetHolidayActionDispatch, Holidays}) => {
  useEffect(() => {
    GetHolidayActionDispatch()
  }, [])
  return (
    <>
      <div className="justify-between pt-10">
        <div className="bg-green-200 ">
          <div className="flex justify-center text-white container mx-auto py-20">
            <div className="lg:w-9/12">
              <p style={{ fontSize: '3em' }} className=" bold ">Holiday List</p>
              <div class="grid mx-20">
                {Holidays && Holidays.map(holiday=>(<HolidayItem {...holiday} />))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  const Holidays = state.HolidayReducer;
  console.log('holidays', Holidays)
  return {
    Holidays: Holidays.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetHolidayActionDispatch: (state) => dispatch(GetHolidayAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Holidays)