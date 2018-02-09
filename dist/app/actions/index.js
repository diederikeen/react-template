'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchDataPending = fetchDataPending;
exports.fetchDataSucces = fetchDataSucces;
exports.fetchDataFailure = fetchDataFailure;
exports.fetchData = fetchData;
function fetchDataPending() {
    return { action: 'FETCH_DATA_PENDING' };
}

function fetchDataSucces(data) {
    return { action: 'FETCH_DATA_SUCCES', data: data };
}

function fetchDataFailure(err) {
    return { action: 'FETCH_DATA_FAILURE', err: err };
}

function fetchData() {

    return function (dispatch, getState) {
        new Promise(function (resolve, reject) {
            dispatch(fetchDataPending);

            fetch('url', { method: 'get' }).then(function (res) {
                return res.json();
            }).then(function (data) {
                dispatch(fetchDataSucces(data));
            }).catch(function (err) {
                dispatch(fetchDataFailure(err));
            });
        });
    };
}