const remote = {
    company: "Samsung",
    color: "black",
    buttons: 34,
    turnOnTV: function (on) {
        return !on
    },
    changeChannel: function (channelNumber) {
        return channelNumber;
    },
    origin: "China",
    remoteType: "TV remote",
    1: {
        options: ['A', 'B', 'C']
    }
}