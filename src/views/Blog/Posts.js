import BlogCard from 'components/Cards/BlogCard';
import React, {useEffect} from 'react'
import Pagination from 'react-laravel-paginex/dist/Pagination';
import { connect } from 'react-redux';
import { BlogsAction } from 'redux/actionCreator/BlogAction';
const Posts= ({BlogsActionDispatch, blogs}) => {
    useEffect(() => {
        BlogsActionDispatch()
    }, [])
    return (
        <>
        <div className="mt-6">
            {blogs?.data.map(blog=>(<BlogCard key={blog.id} {...blog}/>))}     
            <div id="pagination" style={{ margin: '25px' }}>
          {blogs && <Pagination changePage={(data) => BlogsActionDispatch(data)} data={blogs} />}
        </div>
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
    const Blog = state.BlogReducer;
    console.log('blogs', Blog)
    return {
      blogs : Blog.blogs,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        BlogsActionDispatch:(state) => dispatch(BlogsAction(state)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Posts)