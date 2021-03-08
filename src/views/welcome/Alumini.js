import React, { useEffect } from 'react'
import Pagination from 'react-laravel-paginex/dist/Pagination';
import { connect } from 'react-redux';
import { GetAluminisAction } from 'redux/actionCreator/AluminiAction';
import { BASE_URL } from 'utility/constant/EndPoints';
const Alumini = ({ GetAluminisActionDispatch, Aluminis }) => {
  useEffect(() => {
    GetAluminisActionDispatch()
  }, [])
  useEffect(() => {

  }, [Aluminis])
  return (
    <div className="bg-blue-200 pt-20 pb-20">
          <div class="lg:flex justify-center mt-2">
          <div class=" lg:w-8/12 sm:w-12/12 px-3">

            {Aluminis&&Aluminis.data.map(alumini=>(<div class="bg-white shadow-xl mb-2 rounded-lg overflow-hidden">
              <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div class="flex items-center pt-2">
                  <div class="bg-cover bg-center w-16 h-16 rounded mr-3" style={{ backgroundImage: `url(http://ads.com/${alumini.avatar})` }}>
                  </div>
                  <div>
                    <p class="font-bold text-gray-900">{`${alumini.name} ${alumini.session}`}</p>
                    <p class="font-bold text-gray-900">{alumini.title}</p>
                  </div>
                </div>
                <p class="text-sm mt-2 text-gray-700">{alumini.description}</p>
              </div>
            </div>))}
            <div id="pagination" style={{ margin: '25px' }}>
            {Aluminis && <Pagination changePage={(data) => GetAluminisActionDispatch(data)} data={Aluminis} />}
            </div>
          </div>
          <div class=" lg:w-4/12 sm:w-12/12 px-3">
          <div class="fb-page" data-href="https://www.facebook.com/adskgg/" data-tabs="timeline" data-height="1000" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/adskgg/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/adskgg/">ADS Public School</a></blockquote></div>
          </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const Aluminis = state.AluminiReducer;
  return {
    Aluminis: Aluminis.aluminis
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetAluminisActionDispatch: (state) => dispatch(GetAluminisAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alumini)
