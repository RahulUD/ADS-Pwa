import {
  requestRelation,
  receiveRelation,
  failureRelation,
  requestLoading,
  receiveLoading
} from "redux/Action";
import Relation from "utility/api/Relation";

export const GetRelationAction = () => (dispatch) => {
  dispatch(requestLoading());
  dispatch(requestRelation());
  return Relation.getRelations()
    .then(response => {
      dispatch(receiveLoading());
      dispatch(receiveRelation(response));
    })
    .catch((error) => {
      dispatch(failureRelation(error));
    });
};