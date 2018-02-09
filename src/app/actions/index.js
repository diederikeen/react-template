export function fetchDataPending (){
    return { action: 'FETCH_DATA_PENDING' };
}

export function fetchDataSucces ( data ){
    return { action: 'FETCH_DATA_SUCCES', data };
}

export function fetchDataFailure ( err ){
    return { action: 'FETCH_DATA_FAILURE', err };
}


export function fetchData(){

    return ( dispatch, getState ) => {
        new Promise( ( resolve, reject ) => {
            dispatch( fetchDataPending );

            fetch( 'url', { method: 'get' } )
            .then( res => res.json() )
            .then(data => {
                dispatch(fetchDataSucces(data));
            })
            .catch( err => {
                dispatch(fetchDataFailure(err));
            })
        })
    }
}