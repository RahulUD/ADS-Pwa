import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetFaqAction } from 'redux/actionCreator/FaqAction';
import { FaqTitleAction } from 'redux/actionCreator/KeyvalueAction';
const Faq = ({ GetFaqActionDispatch, Faqs, FaqTitle, FaqTitleActionDispach }) => {
  useEffect(() => {
    GetFaqActionDispatch()
    FaqTitleActionDispach()
  }, [])
  useEffect(() => {

  }, [Faqs, FaqTitle])
  return (
    <div className='justify-center'>
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              {FaqTitle?.title}
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              {FaqTitle?.description}
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              {Faqs && Faqs.map(faq => (<details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  {faq?.question}
                </summary>

                <span>
                  {faq?.answer}
                </span>
              </details>))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  const Faq = state.FaqReducer
  const KeyValue = state.KeyValueReducer
  return {
    Faqs: Faq.data,
    FaqTitle: KeyValue.faqtitle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetFaqActionDispatch: (state) => dispatch(GetFaqAction(state)),
    FaqTitleActionDispach: (state) => dispatch(FaqTitleAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Faq)
