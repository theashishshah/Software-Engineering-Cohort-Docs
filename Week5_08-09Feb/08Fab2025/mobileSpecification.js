const phone = {
    modelNo: "Samsung22",
    phoneName: "Samsung S22",
    RAM: "16GB",
    ROM: "256GB",
    displaySixe: "6.4Inch",
    batteryDetails: {
        capacity: "4000mah",
        origin: "China",
        DOM: "12Fab 2025",
        expiryDate: "12 months",
    },
    settings: {
        Connections: [[{
            wifi: true
        },
        {
            "Wi-Fi Calling": true
        }, {
            Blutooth: true
        }, {
            "NFC and Contactless payments": true
        }],
        {
            "Flight mode": false
        },
        ["SIM manager", "Mobile networks", "Data usage", "Mobile Hotspot and Tethering"]
        ],

        "Galacy AI": {
            "Call assist": function (on) {
                return !on
            },
            "Chat assist": function (on) {
                return !on
            },
            Interpreter: function (on) {
                return !on
            }
        }
    }
}