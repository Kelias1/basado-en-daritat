

export function getCities (item) {
    return fetch(`https://students.netoservices.ru/basado-en-daritat/routes/cities?name=${item}`)
        .then(response => response.json())
        .then(function(data){
            return data
        })
        
}

export function getRoutes (url) {
  return  fetch( `https://students.netoservices.ru/basado-en-daritat/routes?${url}` )
    .then( response => response.json()
        .then( data => { return  data })
    );
}

export function getLast () {
   return fetch( 'https://students.netoservices.ru/basado-en-daritat/routes/last' )
    .then( response => response.json()) 
    .then( data => {return data})
}

export function getSeats (id) {
    return fetch( `https://students.netoservices.ru/basado-en-daritat/routes/${id}/seats` )
    .then( response => response.json())
    .then( data => {return data});
}

export function getSubcribe (email) {
    return fetch( `https://students.netoservices.ru/basado-en-daritat/subscribe?email=${email}`, {
        method: 'POST',
        body: ''
    } )
    .then( response => response.json())
    .then( data => { return data });
}


export function sendOrder (order) {
    return fetch( 'https://students.netoservices.ru/basado-en-daritat/order', {
        method: 'POST',
        body: order
      })
        .then( response => response.json())
        .then( data => { return data} );
}