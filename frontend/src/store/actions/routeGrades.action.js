const types = {
    GET_ROUTE_GRADE: 'GET_ROUTE_GRADE',
    POPULATE_ROUTE_GRADES: 'POPULATE_ROUTE_GRADES',
}

export default types;

export const getAllRouteGrades = () => {
    return {
        type: types.GET_ROUTE_GRADE,
    };
}

export const populateRouteGrades = (routeGrades) => {
    return { 
        type: types.POPULATE_ROUTE_GRADES, 
        payload: routeGrades,
    };
}