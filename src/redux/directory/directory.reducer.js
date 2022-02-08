import SECTION_DATA from "./directory.data";

const INITIAL_STATE = SECTION_DATA;

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;