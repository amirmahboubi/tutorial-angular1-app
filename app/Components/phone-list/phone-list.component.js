"use strict";

// Register `phoneList` component, along with its associated controller and template
angular.module("phoneList").component("phoneList", {
  // This name is what AngularJS uses to match to the `<phone-list>` element.
  templateUrl: "Components/phone-list/phone-list.template.html",
  controller: function PhoneListController() {
    this.phones = [
      {
        name: "Nexus S",
        snippet: "Fast just got faster with Nexus S.",
        age: 1,
      },
      {
        name: "Motorola XOOM™ with Wi-Fi",
        snippet: "The Next, Next Generation tablet.",
        age: 2,
      },
      {
        name: "MOTOROLA XOOM™",
        snippet: "The Next, Next Generation tablet.",
        age: 3,
      },
      {
        name: "Apple iphone 16™",
        snippet: "Built for Apple Intelligence. Camera Control. 48MP Fusion camera. Five vibrant colors. A18 chip.",
        age: 2,
      },
    ];
    this.orderProp = "age";
  },
});
