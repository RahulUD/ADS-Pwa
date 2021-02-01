import {
    requestLoading,
    receiveLoading,
} from '../Action';

export const LoadingAction = (loading) => dispatch => {
    if (loading)
        dispatch(requestLoading())
    else
        dispatch(receiveLoading(response))
}