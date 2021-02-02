import {
    requestLoading,
    receiveLoading,
} from 'redux/Action';

export const LoadingAction = (loading) => dispatch => {
    if (loading)
        dispatch(requestLoading())
    else
        dispatch(receiveLoading(response))
}