export const UPDATE_DATE_RANGE = 'UPDATE_DATE_RANGE';

export function updateDateRange(startDate, endDate) {
    return (dispatch) => {
        return dispatch({
            type: UPDATE_DATE_RANGE,
            data: {
                startDate: startDate,
                endDate: endDate
            }
        })
    }
}

const actionsMap = {
    [UPDATE_DATE_RANGE]: (state, action) => {
        return {
            ...state,
            dateRange: action.data
        }
    }
};


const initialState = {
    dateRange: {
        startDate: new Date(),
        endDate: new Date()
    }
};

export default function dashboardReducer(state = initialState, action) {
    const handler = actionsMap[action.type];
    return handler ? handler(state, action) : state;
}
