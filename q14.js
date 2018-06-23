let location = "Bangladesh";
let flagColor;

switch (location) {
    case "france":
        flagColor = "red and purple";
        break;
    case "Bangladesh":
        flagColor ="green and red";
        break;
    case "saudi arabia":
        flagColor = "green and white";
        break;
    default:
        flagColor = "unknown";
}

console.log("The color of the flag is " + flagColor);