function solveTickets(arr, sortType) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let arrOfTickets = [];
    for (let i = 0; i < arr.length; i++) {
        let ticketTokens = arr[i].split('|');

        let destination = ticketTokens[0];
        let price = Number(ticketTokens[1]);
        let status = ticketTokens[2];

        let currentTicket = new Ticket(destination, price, status);
        arrOfTickets.push(currentTicket);
    }

    if(sortType === 'destination'){
        arrOfTickets = arrOfTickets.sort((a, b)=>{
            return a.destination.localeCompare(b.destination);
        })
    }else if (sortType === 'price'){
        arrOfTickets = arrOfTickets.sort((a, b)=>{
            return a.price - b.price;
        })
    }else if (sortType === 'status'){

        arrOfTickets = arrOfTickets.sort((a, b)=>{
            return a.status.localeCompare(b.status);
        })
    }
    return arrOfTickets;
}
solveTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);