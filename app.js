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

//---------------
//object containing basic information about candidate
const candidate = Object.create({}, {
    firstName: {
        writable: true,
        value: "Elizabeth"
    },
    lastName: {
        writable: true,
        value: "Sanger"
    },
    fullName: {
        writable: true,
        value: "Elizabeth Sanger"
    },
    State: {
        writable: true,
        value: "Tennessee"
    },
    District: {
        writable: true,
        value: 5
    }
})

//function to edit candidate
function editCandidate(property, value) {
    candidate[property] = value
}

//---------------
//object containing platform statements on current issues
const platforms = Object.create({}, {
    taxes: {
        enumerable: true,
        writable: true,
        value: "no more taxes!!"
    },
    jobs: {
        enumerable: true,
        writable: true,
        value: "jobs are good."
    },
    infrastructure: {
        enumerable: true,
        writable: true,
        value: "there should be more of it."
    },
    healthcare: {
        enumerable: true,
        writable: true,
        value: "what is health?"
    },
    crime: {
        enumerable: true,
        writable: true,
        value: "it's bad."
    }
})

//function to edit platforms
function editPlatforms(property, value) {
    platforms[property] = value
}

//---------------
//donation form url 
const donation = Object.create({}, {
    url: {
        writable: true,
        value: "http://www.dontdonate.com"
    },
    callToAction: {
        writable: true,
        value: "Help make your community grow by supporting the one who wants to see it grow."
    }
})

//function to edit donation form url
function editDonation(property, value) {
    donation[property] = value
}

//---------------
//object holding calendar of events
const calendar = Object.create({}, {
    events: {
        writable: true,
        value: ["speech", "public appearance", "community open house", "town hall meeting"]
    },
    dates: {
        writable: true,
        value: ["02/03/2018", "02/07/2019", "02/13/2018", "02/14/2018"]
    }
})

//function to edit calendar
function editCalendar(property, value) {
    calendar[property] = value
}

//---------------
//object holding volunteer information
const volunteer = Object.create({}, {
    name: {
        writable: true,
        value: "Mary"
    },
    address: {
        writable: true,
        value: "555 psedo drive, nowhere TN, 55555"
    },
    email: {
        writable: true,
        value: "Mary@janedoe.com"
    },
    phoneNumber: {
        writable: true,
        value: 55555555555
    },
    availability: {
        writable: true,
        value: ["Monday", "Tuesday", "Friday", "Saturday"]
    },
    roles: {
        writable: true,
        value: ["answer calls", "take polls"]
    }
})

//function to edit volunteer
function editVolunteer(property, value) {
    volunteer[property] = value
}


//---------------
//object holding bio information
const bio = Object.create({}, {
    oneLiner: {
        writable: true,
        value: "Lorem ipsum dolor amet woke PBR&B air plant lo-fi meditation, gentrify mollit."
    },
    fullLength: {
        writable: true,
        value: "Fingerstache lorem next level affogato, quinoa bushwick humblebrag irure. Vexillologist enamel pin nostrud asymmetrical post-ironic literally ex cillum mustache cronut food truck mixtape trust fund. Distillery ea dreamcatcher pitchfork butcher elit pickled roof party you probably haven't heard of them portland tattooed taxidermy keytar anim. Distillery art party cred, chicharrones whatever skateboard ut next level. Ennui try-hard hell of, umami hashtag woke green juice fugiat ad duis lorem migas street art gluten-free. Try-hard lo-fi pork belly kinfolk cardigan proident. Readymade jean shorts fam, asymmetrical culpa ut before they sold out nostrud affogato officia kitsch."
    },
    hometown: {
        writable: true,
        value: "pseudoville"
    }
})

//function to edit bio
function editBio(property, value) {
    bio[property] = value
}

//---------------
//object holding image gallery
const gallery = Object.create({}, {
    headShot: {
        writable: true,
        value: "https://placeimg.com/640/480/people"
    },
    family: {
        writable: true,
        value: "https://placeimg.com/1000/1000/people"
    },
    constituents: {
        writable: true,
        value: "https://placeimg.com/640/1000/people"
    }
})

//function to edit image gallery
function editGallery(property, value) {
    gallery[property] = value
}

//---------------
//object holding mission statement
const mission = Object.create({}, {
    short: {
        writable: true,
        value: "to grow the local community"
    },
    long: {
        writable: true,
        value: "to grow the local community through effective representation and clear and present action"
    }
})

//function to edit mission statements
function editMission(property, value) {
    mission[property] = value
}

//---------------
//object holding voting information
const register = Object.create({}, {
    url: {
        writable: true,
        value: "http://www.govote.com"
    },
    callToAction: {
        writable: true,
        value: "ready to vote? register here"
    }
})

//function to edit voting information
function editRegister(property, value) {
    register[property] = value
}


//function calls to edit object states
editCandidate('fullName', 'Mrs. Eilzabeth Sanger')
editPlatforms('jobs', "who needs 'em")
editDonation('url', 'http://www.dodonate.com')
editCalendar('dates', ["02/03/2018", "02/07/2018", "02/13/2018", "02/14/2018"])
editVolunteer('address', '555 pseudo drive, nowhere TN, 55555')
editBio('hometown', 'whereville')
editGallery('headShot', 'https://placeimg.com/700/500/people')
editMission('short', 'To grow and develop the local community.')
editRegister('url', 'http://www.goandvote.com')


