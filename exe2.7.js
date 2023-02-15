function PC(input){

    let peterBudget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let videocardPrice = 250;
    let videocardsTotalPrice = videocardPrice * videoCards;
    let processorPrice = videocardsTotalPrice * 0.35;
    let ramPrice = videocardsTotalPrice * 0.1;
    let sum = videocardsTotalPrice + (processor * processorPrice) + (ram * ramPrice);
    let discount = 0.0;

    if (videoCards > processor) {
     discount = sum * 0.15;
     sum = sum - discount;
    }

    let difference = peterBudget - sum;
    let differenceFormatted = Math.abs(difference).toFixed(2);

    if (difference < 0) {
        console.log (`Not enough money! You need ${differenceFormatted} leva more!`)
    } else {
        console.log(`You have ${differenceFormatted} leva left!`)
    }


}
 

PC(["900","2","1","3"])
PC(["920.45","3","1","1"])