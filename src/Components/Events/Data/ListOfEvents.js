const ListOfEvents = [
  {
    actionType: "View",
    eventid: "EVNT0004785",
    month: "December",
    baseLocation: "United Kingdom",
    councilName: "Outreach UK",
    beneficiaryName: "St. Edwards School",
    description:
      "Thank you for all your donations of food items to make this a good Xmas for everyone! Come be a Santa and distribute these Bags of Joy to elderly low income residents in Central Singapore and feel the joy of giving!",
    eventDetails: {
      eventName: "Bags of Joy Distribution",
      eventDate: "12/5/2019",
      businessUnit: "Insurance",
      status: "Pending",
      venueAddress: "Edinburgh RM1 4BT",
      totalVolunteers: 43,
      totalVolunteerHours: 4,
      totalTravelHours: 2
    },
    participated: [
      { rating: 5, likes: "nice", dislikes: "travel" },

      { rating: 4, likes: "nice", dislikes: "snacks can be provided" },

      { rating: 3, likes: "good", dislikes: "swimming" }
    ],
    notParticipated: ["Unexpected Official work", "Not well"],
    unRegistered: ["Did not receive further information about the event"],
    feedBacks: 4,
    averageRating: 5,
    category: "Other Community Programs",
    livesImpacted: 0,
    pocDetails: [
      {
        employeeId: 123456,
        name: "John",
        contactNumber: 9876543210
      },
      {
        employeeId: 654321,
        name: "Mark",
        contactNumber: 8173543210
      }
    ]
  }
];

export default ListOfEvents;
