// app representing information about a fake political candidate in js objects

// object.create syntax...
/*
const expense = Object.create({}, {
    dateCreated: {
        enumerable: true,
        writable: false,
        value: "01/01/2017"
    }
})
*/

//object containing basic information about candidate
const candidate = Object.create({}, {
    firstName: {
        value: "Elizabeth"
    },
    lastName: {
        value: "Sanger"
    },
    fullName: {
        value: "Elizabeth Sanger"
    },
    State: {
        value: "Tennessee"
    },
    District: {
        value: 5
    }
})

//object containing platform statements on current issues
const platforms = Object.create({}, {
    taxes: {
        value: "No more taxes!!"
    },
    jobs: {
        value: "Jobs are good"
    },
    infrastructure: {
        value: "There should be more of it"
    },
    healthCare: {
        value: "What is health?"
    },
    crime: {
        value: "It's bad"
    }
})

//donation form url 
const donation = Object.create({}, {
    url: {
        value: "http://www.dontdonate.com"
    },
    callToAction: {
        value: "Help make your community grow by supporting the one who wants to see it grow."
    }
})

//object holding calendar of events
const calendar = Object.create({}, {
    events: {
        value: ["speech", "public appearance", "community open house", "town hall meeting"]
    },
    dates: {
        value: ["02/03/2018", "02/07/2018", "02/13/2018", "02/14/2018"]
    }
})

//object holding volunteer information
const volunteer = Object.create({}, {
    name: {
        writable: true,
        value: "Mary"
    },
    address: {
        value: "555 psedo drive, nowhere TN, 55555"
    },
    email: {
        value: "Mary@janedoe.com"
    },
    phoneNumber: {
        value: 55555555555
    },
    availability: {
        value: ["Monday", "Tuesday", "Friday", "Saturday"]
    },
    roles: {
        value: ["answer calls", "take polls"]
    }
})


//object holding bio information
const bio = Object.create({}, {
    oneLiner: {
        value: "Lorem ipsum dolor amet woke PBR&B air plant lo-fi meditation, gentrify mollit."
    },
    fullLength: {
        value: "Fingerstache lorem next level affogato, quinoa bushwick humblebrag irure. Vexillologist enamel pin nostrud asymmetrical post-ironic literally ex cillum mustache cronut food truck mixtape trust fund. Distillery ea dreamcatcher pitchfork butcher elit pickled roof party you probably haven't heard of them portland tattooed taxidermy keytar anim. Distillery art party cred, chicharrones whatever skateboard ut next level. Ennui try-hard hell of, umami hashtag woke green juice fugiat ad duis lorem migas street art gluten-free. Try-hard lo-fi pork belly kinfolk cardigan proident. Readymade jean shorts fam, asymmetrical culpa ut before they sold out nostrud affogato officia kitsch."
    },
    hometown: {
        value: "pseudoville"
    }
})

//object holding image gallery
const gallery = Object.create({}, {
    headShot: {
        value: "https://placeimg.com/640/480/people"
    },
    family: {
        value: "https://placeimg.com/1000/1000/people"
    },
    constituents: {
        value: "https://placeimg.com/640/1000/people"
    }
})

//object holding mission statement
const mission = Object.create({}, {
    short: {
        value: "to grow the local community"
    },
    long: {
        value: "to grow the local community through effective representation and clear and present action"
    }
})

//object holding voting information
const register = Object.create({}, {
    url: {
        value: "http://www.govote.com"
    },
    callToAction: {
        value: "ready to vote? register here"
    }
})