//

function kilometerToMeter(km)
{
    if(km<0)
    {
        console.log("invalid input, insert non negative value");
    }
    else
    {
        return km*1000;
    }
}

function budgetCalculator(watch, phone, laptop)
{
    let total_price;
    if(watch<0 || phone<0 || laptop<0)
    {
        console.log("invalid input, insert non negative value");
    }
    else
    {
        total_price=(watch*50)+(phone*100)+(laptop*500);
        return total_price;
    }
}

function hotelCost(days)
{
    if(days<0)
    {
        console.log("invalid input, insert non negative value");
    }
    else
    {
        if(days<11)
        {
            return days*100;
        }
        else if(days<21)
        {
            return 1000+((days-10)*80);
        }
        else
        {
            return 1800+((days-20)*50);
        }
    }
}

function megaFriend(names)
{
    let i, biggest_name;
    biggest_name=names[0];
    for(i=0;i<names.length; i++)
    {
        if(biggest_name<names[i])
        {
            biggest_name=names[i];
        }
    }

    return biggest_name;

}

let array=["qwe", "qwerty", "qwertyu", "qw"];
let megaName=budgetCalculator(10,10,10);
console.log(megaName);