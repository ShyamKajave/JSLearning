function monthyear(month){
switch (month) {
    case 1:
        console.log(`${month}-January`);
        break;
    case 2:
        console.log(`${month}-February`);
        break;
    case 3:
        console.log(`${month}-March`);
        break;
        case 4:
            console.log(`${month}-April`);
            break;
            case 5:
        console.log(`${month}-May`);
        break;
        case 6:
        console.log(`${month}-June`);
        break;
        case 7:
        console.log(`${month}-July`);
        break;
        case 8:
        console.log(`${month}-August`);
        break;
        case 9:
        console.log(`${month}-September`);
        break;
        case 10:
        console.log(`${month}-October`);
        break;
        case 11:
        console.log(`${month}-November`);
        break;
        case 12:
            console.log(`${month}-December`);
        break;

    default:
        console.log(`Provide Valid Input`);
        break;
}

}
monthyear(0);
monthyear(15);
monthyear(2);
monthyear(100);
monthyear(5);
monthyear(null);
monthyear(12);
monthyear();



