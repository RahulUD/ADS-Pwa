import React, {useEffect} from "react";

// components

import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import UserFormCard from "components/Form/UserFormCard";
import AcademicForm from "components/Form/AcademicForm";
import ParentForm from "components/Form/ParentForm";
import AddressForm from "components/Form/AddressForm";
import { connect } from "react-redux";

function Admission(props) {
  useEffect(() => {
    
  }, [props.progress])
  return (
    <>
      <HeaderStatsEmpty />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
              <div className="rounded-t bg-white mb-0 px-6 py-6">
                <div className="text-center flex">
                  <h6 className="text-gray-800 text-xl font-bold">Admission</h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                {props?.progress===0 && <UserFormCard />}
                {props?.progress===1 && <AcademicForm />}
                {props?.progress===2 && <ParentForm />}
                {props?.progress===3 && <AddressForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const Member = state.MemberReducer;
  return {
    progress : Member.progress
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
   
//   };
// };

export default connect(
  mapStateToProps,
  null
)(Admission);