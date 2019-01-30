// 'Abhinandan Shah - abhioxic',
function multiselect( jsonMain, selectedList) {

// Removed Channel
// var jsonMain3 = {
// 	type: 'BFV',
// 	showFilter: true,
// 	details: {
// 	  footerText: "Click on 'Submit' to submit the Best Fit Pack as your selection.\nClick on 'Add Channels' to add more channels.",
// 	  buttons: [{
// 	  	title: "Submit",
// 	  	id: 'multiselect_btn__agree',
// 	  }, {
// 	  	title: "Add Channels",
// 	  	id: 'multiselect_btn__disagree'
// 	  }]
// 	},
// 	  "tabs": [
//     {
//     	"id": "add-loss",
//       "title": "Add Your Lost Channels",
//       "selected": "true",
//       "alertText": "You can add these channels again",
//       "showFilter": false,
//       "payload": [
//         {
//     	type: "bouquet",
//           "selectable": false,
//           "title": "Your Loss",
//           "id": "Removed",
//           "channels": [
//             {
//               "title": "BBC World News",
//               "id": "1450",
//               "category": "Eng News",
//               "selectable": true
//             },
//             {
//               "title": "Epic",
//               "id": "1405",
//               "category": "Infotainment",
//               "selectable": true
//             },
//             {
//               "title": "Mega TV",
//               "id": "1364",
//               "category": "Tamil",
//               "selectable": true
//             },
//             {
//               "title": "Travel XP",
//               "id": "1444",
//               "category": "Lifestyle/Fashion",
//               "selectable": true
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }

// var jsonMain2 = {
// 	type: 'BFV',
// 	showFilter: true,
// 	details: {
// 	  footerText: "Click on 'Submit' to submit the Best Fit Pack as your selection.\nClick on 'Add Channels' to add more channels.",
// 	  buttons: [{
// 	  	title: "Submit",
// 	  	id: 'multiselect_btn__agree',
// 	  }, {
// 	  	title: "Add Channels",
// 	  	id: 'multiselect_btn__disagree'
// 	  }]
// 	},
//     "tabs": [
//     {
//       "title": "Best Fit Pack",
//       "selected": "true",
//       "alertText": "Hey there! We have selected a Best Fit Pack just for you! Click on any bouquet to know more!",
//       "showFilter": true,
//       "id": 'best-fit',
//       "payload": [
//         {
//           "channels": [
//             {
//               "id": "5096",
//               "title": "Big  Ganga",
//               "price": 0.5,
//               "selectable": false
//             },
//             {
//               "id": "5814",
//               "title": "Zee Bihar Jharkhand",
//               "price": 0.1,
//               "selectable": false
//             },
//             {
//               "id": "5480",
//               "title": "News18 Bihar/Jharkhand",
//               "price": 0.25,
//               "selectable": false
//             },
//             {
//               "id": "5566",
//               "title": "Sangeet Bhojpuri",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Bihar",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5127",
//               "title": "BTVi",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5226",
//               "title": "ET Now",
//               "price": 3,
//               "selectable": false
//             },
//             {
//               "id": "5144",
//               "title": "CNBC TV18",
//               "price": 4,
//               "selectable": false
//             }
//           ],
//           "title": "Business News- English",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5141",
//               "title": "CNBC AWAAZ",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5816",
//               "title": "Zee Business",
//               "price": 0.1,
//               "selectable": false
//             }
//           ],
//           "title": "Business News- Hindi",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5071",
//               "title": "Arihant TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5772",
//               "title": "Vedic",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5316",
//               "title": "Ishwar TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5571",
//               "title": "Satsang",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5398",
//               "title": "Mahavira",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Devotional",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5078",
//               "title": "AXN",
//               "price": 5,
//               "selectable": false
//             },
//             {
//               "id": "5154",
//               "title": "Colors Infinity",
//               "price": 7,
//               "selectable": false
//             },
//             {
//               "id": "5165",
//               "title": "Comedy Central",
//               "price": 7,
//               "selectable": false
//             },
//             {
//               "id": "5817",
//               "title": "Zee Cafe",
//               "price": 15,
//               "selectable": false
//             },
//             {
//               "id": "5654",
//               "title": "Star World",
//               "price": 8,
//               "selectable": false
//             }
//           ],
//           "title": "Eng Gec",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5437",
//               "title": "Movies Now",
//               "price": 10,
//               "selectable": false
//             },
//             {
//               "id": "5433",
//               "title": "MNX",
//               "price": 6,
//               "selectable": false
//             },
//             {
//               "id": "5550",
//               "title": "Romedy Now",
//               "price": 6,
//               "selectable": false
//             },
//             {
//               "id": "5020",
//               "title": "&Flix",
//               "price": 15,
//               "selectable": false
//             },
//             {
//               "id": "5514",
//               "title": "PIX",
//               "price": 10,
//               "selectable": false
//             },
//             {
//               "id": "5622",
//               "title": "Star Movies",
//               "price": 12,
//               "selectable": false
//             }
//           ],
//           "title": "Eng Movies",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5775",
//               "title": "VH1",
//               "price": 1,
//               "selectable": false
//             }
//           ],
//           "title": "Eng Music",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5146",
//               "title": "CNN News 18",
//               "price": 0.5,
//               "selectable": false
//             },
//             {
//               "id": "5741",
//               "title": "Times Now",
//               "price": 3,
//               "selectable": false
//             },
//             {
//               "id": "5428",
//               "title": "Mirror Now",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5784",
//               "title": "WION",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5547",
//               "title": "Republic TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5461",
//               "title": "NDTV 24x7",
//               "price": 3,
//               "selectable": false
//             },
//             {
//               "id": "5313",
//               "title": "India Today",
//               "price": 1.5,
//               "selectable": false
//             },
//             {
//               "id": "5048",
//               "title": "Al jazeera",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5311",
//               "title": "India Ahead",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Eng News",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5263",
//               "title": "GS TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5564",
//               "title": "Sandesh News",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5044",
//               "title": "ABP Asmita",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5755",
//               "title": "TV9 Gujarati",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5786",
//               "title": "Zee 24 Kalak",
//               "price": 0.1,
//               "selectable": false
//             },
//             {
//               "id": "5481",
//               "title": "News18 Gujarati",
//               "price": 0.25,
//               "selectable": false
//             },
//             {
//               "id": "5151",
//               "title": "Colors Gujarati",
//               "price": 5,
//               "selectable": false
//             },
//             {
//               "id": "5142",
//               "title": "CNBC Bajar",
//               "price": 1,
//               "selectable": false
//             }
//           ],
//           "title": "Gujarati",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5549",
//               "title": "Rishtey TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5147",
//               "title": "Colors",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5877",
//               "title": "Zoom",
//               "price": 0.5,
//               "selectable": false
//             },
//             {
//               "id": "5625",
//               "title": "Star Plus",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5097",
//               "title": "Big Magic ",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5809",
//               "title": "Zee Anmol",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5872",
//               "title": "Zee tv",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5025",
//               "title": "&Tv",
//               "price": 12,
//               "selectable": false
//             },
//             {
//               "id": "5595",
//               "title": "Sony Pal",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5098",
//               "title": "Bindass",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5204",
//               "title": "Discovery Jeet",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5605",
//               "title": "Star Bharat",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5651",
//               "title": "Star Utsav",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5587",
//               "title": "Sony",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5556",
//               "title": "SAB",
//               "price": 19,
//               "selectable": false
//             }
//           ],
//           "title": "Hindi Gec",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5652",
//               "title": "Star Utsav Movies",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5439",
//               "title": "Movies OK",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5607",
//               "title": "Star Gold",
//               "price": 8,
//               "selectable": false
//             },
//             {
//               "id": "5418",
//               "title": "Max 2",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5593",
//               "title": "Sony Max",
//               "price": 15,
//               "selectable": false
//             },
//             {
//               "id": "5765",
//               "title": "UTV Action",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5081",
//               "title": "B4U Movies",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5600",
//               "title": "Sony Wah",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5767",
//               "title": "UTV Movies",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5819",
//               "title": "Zee Cinema",
//               "price": 15,
//               "selectable": false
//             },
//             {
//               "id": "5022",
//               "title": "&Pictures",
//               "price": 6,
//               "selectable": false
//             },
//             {
//               "id": "5815",
//               "title": "Zee Bollywood",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5810",
//               "title": "Zee Anmol Cinema",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5788",
//               "title": "Zee Action",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5609",
//               "title": "Star Gold Select",
//               "price": 7,
//               "selectable": false
//             },
//             {
//               "id": "5548",
//               "title": "RISHTEY CINEPLEX",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5584",
//               "title": "Sky Star",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5390",
//               "title": "Maha Movie",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Hindi Movies",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5046",
//               "title": "ABP news",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5482",
//               "title": "News18 India",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5852",
//               "title": "Zee News",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5844",
//               "title": "Zee Hindustan",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5463",
//               "title": "NDTV India",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5558",
//               "title": "Sadhana Plus",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Hindi News",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5589",
//               "title": "Sony BBC Earth",
//               "price": 4,
//               "selectable": false
//             },
//             {
//               "id": "5456",
//               "title": "National Geographic Channel",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5459",
//               "title": "National Geographic Wild",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5458",
//               "title": "National Geographic People",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5202",
//               "title": "Discovery",
//               "price": 4,
//               "selectable": false
//             },
//             {
//               "id": "5066",
//               "title": "Animal Planet",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5207",
//               "title": "Discovery Science",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5209",
//               "title": "Discovery Turbo",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5302",
//               "title": "History TV 18",
//               "price": 3,
//               "selectable": false
//             },
//             {
//               "id": "5249",
//               "title": "FYI TV18",
//               "price": 0.25,
//               "selectable": false
//             }
//           ],
//           "title": "Infotainment",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5248",
//               "title": "France 24",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "International",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5756",
//               "title": "TV9 Kannada",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Kannada",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5308",
//               "title": "Hungama tv",
//               "price": 6,
//               "selectable": false
//             },
//             {
//               "id": "5211",
//               "title": "Disney Channel",
//               "price": 8,
//               "selectable": false
//             },
//             {
//               "id": "5214",
//               "title": "Disney Jr.",
//               "price": 4,
//               "selectable": false
//             },
//             {
//               "id": "5217",
//               "title": "Disney XD",
//               "price": 4,
//               "selectable": false
//             },
//             {
//               "id": "5206",
//               "title": "Discovery Kids",
//               "price": 3,
//               "selectable": false
//             },
//             {
//               "id": "5601",
//               "title": "Sony YAY",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5083",
//               "title": "Baby TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5586",
//               "title": "Sonic",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5493",
//               "title": "Nickelodeon",
//               "price": 6,
//               "selectable": false
//             },
//             {
//               "id": "5492",
//               "title": "Nick Jr.",
//               "price": 1,
//               "selectable": false
//             }
//           ],
//           "title": "Kids",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5305",
//               "title": "Home shop 18",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5381",
//               "title": "Living Foodz",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5241",
//               "title": "Ezmall.com",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5246",
//               "title": "Fox Life",
//               "price": 1,
//               "selectable": false
//             },
//             {
//               "id": "5498",
//               "title": "NT 1",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5499",
//               "title": "NT 7",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5743",
//               "title": "TLC",
//               "price": 2,
//               "selectable": false
//             },
//             {
//               "id": "5581",
//               "title": "Shop CJ1",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5260",
//               "title": "Gemporia",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5219",
//               "title": "Divyarishi",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5911",
//               "title": "Abzy.com",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Lifestyle/Fashion",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5592",
//               "title": "Sony Marathi",
//               "price": 4,
//               "selectable": false
//             },
//             {
//               "id": "5484",
//               "title": "News18 Lokmat",
//               "price": 0.25,
//               "selectable": false
//             }
//           ],
//           "title": "Marathi",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5485",
//               "title": "News18 Madhya Pradesh/Chhattisgarh",
//               "price": 0.25,
//               "selectable": false
//             },
//             {
//               "id": "5851",
//               "title": "Zee MP Chattisgardh",
//               "price": 0.1,
//               "selectable": false
//             },
//             {
//               "id": "5309",
//               "title": "IBC 24",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "MP",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5594",
//               "title": "Sony Mix",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5440",
//               "title": "MTV",
//               "price": 3,
//               "selectable": false
//             },
//             {
//               "id": "5876",
//               "title": "Zing",
//               "price": 0.1,
//               "selectable": false
//             },
//             {
//               "id": "5441",
//               "title": "MTV Beats",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5823",
//               "title": "Zee ETC Bollywood",
//               "price": 0.1,
//               "selectable": false
//             }
//           ],
//           "title": "Music",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5222",
//               "title": "DY 365",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5474",
//               "title": "News Live",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5478",
//               "title": "News18 Assam North East",
//               "price": 0.25,
//               "selectable": false
//             },
//             {
//               "id": "5468",
//               "title": "Nepal One",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5330",
//               "title": "Jonack TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5520",
//               "title": "Prag TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5545",
//               "title": "Rengoni TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5077",
//               "title": "Assam Talk",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5544",
//               "title": "Rang",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5543",
//               "title": "Ramdhenu ",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5523",
//               "title": "Pratidin Time",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "North East",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5513",
//               "title": "Pitaara TV",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5487",
//               "title": "News18 Punjab Haryana Himachal",
//               "price": 0.25,
//               "selectable": false
//             },
//             {
//               "id": "5525",
//               "title": "PTC News",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5526",
//               "title": "PTC Punjabi",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5524",
//               "title": "PTC Chakde",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5862",
//               "title": "Zee Punjab Haryana Himachal",
//               "price": 0.1,
//               "selectable": false
//             }
//           ],
//           "title": "Punjabi",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5863",
//               "title": "Zee Rajasthan News",
//               "price": 0.1,
//               "selectable": false
//             },
//             {
//               "id": "5488",
//               "title": "News18 Rajasthan",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5036",
//               "title": "A1 TV",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Rajasthan",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5640",
//               "title": "Star Sports Select 2",
//               "price": 7,
//               "selectable": false
//             },
//             {
//               "id": "5635",
//               "title": "Star Sports 2",
//               "price": 6,
//               "selectable": false
//             },
//             {
//               "id": "5632",
//               "title": "Star Sports 1 Hindi",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5629",
//               "title": "Star Sports 1",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5639",
//               "title": "Star Sports Select 1",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5221",
//               "title": "Dsport",
//               "price": 4,
//               "selectable": false
//             },
//             {
//               "id": "5637",
//               "title": "STAR SPORTS FIRST",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5597",
//               "title": "Sony Ten 1",
//               "price": 19,
//               "selectable": false
//             },
//             {
//               "id": "5599",
//               "title": "Sony Ten 3",
//               "price": 17,
//               "selectable": false
//             },
//             {
//               "id": "5596",
//               "title": "Sony Six",
//               "price": 15,
//               "selectable": false
//             },
//             {
//               "id": "5591",
//               "title": "Sony ESPN",
//               "price": 5,
//               "selectable": false
//             },
//             {
//               "id": "5598",
//               "title": "Sony Ten 2",
//               "price": 15,
//               "selectable": false
//             }
//           ],
//           "title": "Sports",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5677",
//               "title": "SVBC",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5758",
//               "title": "TV9 Telugu news",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Telugu",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5490",
//               "title": "News18 Uttar Pradesh/Uttarakhand",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5874",
//               "title": "Zee UP Uttrakhand",
//               "price": 0.1,
//               "selectable": false
//             }
//           ],
//           "title": "UP",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         },
//         {
//           "channels": [
//             {
//               "id": "5134",
//               "title": "Channel WIN",
//               "price": 0,
//               "selectable": false
//             },
//             {
//               "id": "5864",
//               "title": "Zee Salaam",
//               "price": 0.1,
//               "selectable": false
//             },
//             {
//               "id": "5489",
//               "title": "News18 Urdu",
//               "price": 0.25,
//               "selectable": false
//             },
//             {
//               "id": "5270",
//               "title": "Gulistan News",
//               "price": 0,
//               "selectable": false
//             }
//           ],
//           "title": "Urdu",
//           "id": 0,
//           "selectable": false,
//           "type": "bouquet"
//         }
//       ]
//     },
//     {
//       "title": "Added/Lost Channels",
//       "selected": "false",
//       "alertText": "These Channels have been added or lost ",
//       "footerText": "Click on 'Submit' to submit the Best Fit Pack as your selection.\nClick on 'Add Channels' to add more channels.",
//       "showFilter": false,
//       "id": "add-loss",
//       "payload": [
//         {
//           "selectable": false,
//           "title": "Your Gain",
//           "id": "Added",
//           "type": "bouquet",
//           "channels": [
//             {
//               "title": "ABP Asmita",
//               "id": "1468",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "Big Magic ",
//               "id": "1041",
//               "category": "Hindi Gec",
//               "selectable": false
//             },
//             {
//               "title": "CNBC Bajar",
//               "id": "1109",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "Colors Gujarati",
//               "id": "1095",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "DY 365",
//               "id": "1502",
//               "category": "North East",
//               "selectable": false
//             },
//             {
//               "title": "Ezmall.com",
//               "id": "1034",
//               "category": "Lifestyle/Fashion",
//               "selectable": false
//             },
//             {
//               "title": "GS TV",
//               "id": "1478",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "IBC 24",
//               "id": "1300",
//               "category": "MP",
//               "selectable": false
//             },
//             {
//               "title": "Jonack TV",
//               "id": "1449",
//               "category": "North East",
//               "selectable": false
//             },
//             {
//               "title": "MTV Beats",
//               "id": "1102",
//               "category": "Music",
//               "selectable": false
//             },
//             {
//               "title": "News Live",
//               "id": "1503",
//               "category": "North East",
//               "selectable": false
//             },
//             {
//               "title": "News18 Assam North East",
//               "id": "1120",
//               "category": "North East",
//               "selectable": false
//             },
//             {
//               "title": "News18 Gujarati",
//               "id": "1115",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "News18 Lokmat",
//               "id": "1110",
//               "category": "Marathi",
//               "selectable": false
//             },
//             {
//               "title": "News18 Punjab Haryana Himachal",
//               "id": "1114",
//               "category": "Punjabi",
//               "selectable": false
//             },
//             {
//               "title": "Prag TV",
//               "id": "1461",
//               "category": "North East",
//               "selectable": false
//             },
//             {
//               "title": "Ramdhenu ",
//               "id": "1314",
//               "category": "North East",
//               "selectable": false
//             },
//             {
//               "title": "RISHTEY CINEPLEX",
//               "id": "1098",
//               "category": "Hindi Movies",
//               "selectable": false
//             },
//             {
//               "title": "Rishtey TV",
//               "id": "1106",
//               "category": "Hindi Gec",
//               "selectable": false
//             },
//             {
//               "title": "Sandesh News",
//               "id": "1479",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "Sangeet Bhojpuri",
//               "id": "1367",
//               "category": "Bihar",
//               "selectable": false
//             },
//             {
//               "title": "Sony BBC Earth",
//               "id": "1279",
//               "category": "Infotainment",
//               "selectable": false
//             },
//             {
//               "title": "Sony Marathi",
//               "id": "1278",
//               "category": "Marathi",
//               "selectable": false
//             },
//             {
//               "title": "Sony Mix",
//               "id": "1289",
//               "category": "Music",
//               "selectable": false
//             },
//             {
//               "title": "Sony Pal",
//               "id": "1288",
//               "category": "Hindi Gec",
//               "selectable": false
//             },
//             {
//               "title": "Sony Ten 1",
//               "id": "1257",
//               "category": "Sports",
//               "selectable": false
//             },
//             {
//               "title": "Sony Ten 2",
//               "id": "1261",
//               "category": "Sports",
//               "selectable": false
//             },
//             {
//               "title": "Sony Ten 3",
//               "id": "1258",
//               "category": "Sports",
//               "selectable": false
//             },
//             {
//               "title": "Sony Wah",
//               "id": "1287",
//               "category": "Hindi Movies",
//               "selectable": false
//             },
//             {
//               "title": "Star Gold Select",
//               "id": "1204",
//               "category": "Hindi Movies",
//               "selectable": false
//             },
//             {
//               "title": "STAR SPORTS FIRST",
//               "id": "1243",
//               "category": "Sports",
//               "selectable": false
//             },
//             {
//               "title": "Star Sports Select 1",
//               "id": "1183",
//               "category": "Sports",
//               "selectable": false
//             },
//             {
//               "title": "Star Sports Select 2",
//               "id": "1205",
//               "category": "Sports",
//               "selectable": false
//             },
//             {
//               "title": "Star Utsav",
//               "id": "1242",
//               "category": "Hindi Gec",
//               "selectable": false
//             },
//             {
//               "title": "Star Utsav Movies",
//               "id": "1214",
//               "category": "Hindi Movies",
//               "selectable": false
//             },
//             {
//               "title": "TV9 Gujarati",
//               "id": "1497",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "Zee 24 Kalak",
//               "id": "1046",
//               "category": "Gujarati",
//               "selectable": false
//             },
//             {
//               "title": "Zee Anmol",
//               "id": "1039",
//               "category": "Hindi Gec",
//               "selectable": false
//             },
//             {
//               "title": "Zee Anmol Cinema",
//               "id": "1037",
//               "category": "Hindi Movies",
//               "selectable": false
//             },
//             {
//               "title": "Zee ETC Bollywood",
//               "id": "1474",
//               "category": "Music",
//               "selectable": false
//             },
//             {
//               "title": "Zee Hindustan",
//               "id": "1045",
//               "category": "Hindi News",
//               "selectable": false
//             },
//             {
//               "title": "Zee MP Chattisgardh",
//               "id": "1053",
//               "category": "MP",
//               "selectable": false
//             },
//             {
//               "title": "Zee News",
//               "id": "1044",
//               "category": "Hindi News",
//               "selectable": false
//             },
//             {
//               "title": "Zee Punjab Haryana Himachal",
//               "id": "1048",
//               "category": "Punjabi",
//               "selectable": false
//             },
//             {
//               "title": "Zee Rajasthan News",
//               "id": "1054",
//               "category": "Rajasthan",
//               "selectable": false
//             },
//             {
//               "title": "Zee UP Uttrakhand",
//               "id": "1052",
//               "category": "UP",
//               "selectable": false
//             },
//             {
//               "title": "Zing",
//               "id": "1040",
//               "category": "Music",
//               "selectable": false
//             }
//           ]
//         },
//         {
//           "selectable": false,
//           "title": "Your Loss",
//           "id": "Removed",
//           "type": "bouquet",
//           "channels": [
//             {
//               "title": "BBC World News",
//               "id": "1450",
//               "category": "Eng News",
//               "selectable": false
//             },
//             {
//               "title": "Epic",
//               "id": "1405",
//               "category": "Infotainment",
//               "selectable": false
//             },
//             {
//               "title": "Mega TV",
//               "id": "1364",
//               "category": "Tamil",
//               "selectable": false
//             },
//             {
//               "title": "Travel XP",
//               "id": "1444",
//               "category": "Lifestyle/Fashion",
//               "selectable": false
//             }
//           ]
//         }
//       ]
//     }
//   ],

// }

// var jsonMain1 = {
// 	type: 'BFV',
// 	showFilter: true,
// 	tabs: [
// 		{
// 			title: "Best Fit Pack", // Static
// 			selected: true, // Static logic
// 			alertText: "Hey there! We have selected a Best Fit Pack just for you! Click on any bouquet to know more!",
// 			id: 'best-fit',
// 			payload: [
// 				{
// 					selectable: true, // Appn. logic
// 					type: 'bouquet', // Harded
// 					title: 'Movies', // Result.RequestedPackages.Channells[0].Genre.GenreName, Result[n].PackageType
// 					id: 'MV', // Self 
// 					channels: [
// 					{
// 						selectable: true, // Application logic, In view mode, all would be false and vv.
// 						title: 'NGC Movies HD', //Result.RequestedPackages.PackageName
// 						id: '5561',
// 						price: 5, // Result.RequestedPackages.PriceWithoutTax
// 					},{
// 						selectable: false,
// 						title: 'TLC HD World',
// 						id: '1234',
// 						price: 10, // Result.RequestedPackages.PriceWithoutTax
// 					}]
// 				},
// 				{
// 					selectable: false,
// 					type: 'bouquet',
// 					title: 'Added Channels',
// 					id: '1212',
// 					price: 55,
// 					channels: [
// 					{
// 						selectable: false,
// 						title: 'NGC Music HD',
// 						id: 'NGC',
// 						price: 5,
// 					},{
// 						selectable: false,
// 						title: 'TLC HD World',
// 						id: 'TLC',
// 						price: 10,
// 					}]
// 				},
// 				{
// 					selectable: false,
// 					type: 'channel',
// 					title: 'NGC Music HD',
// 					id: 'DUMMY',
// 					price: 5,
// 				},{
// 					selectable: false,
// 					type: 'channel',
// 					title: 'TLC HD World',
// 					id: 'DUMMY',
// 					price: 10,
// 				},{
// 					selectable: false,
// 					type: 'channel',
// 					title: 'Travel XP HD',
// 					id: 'DUMMY',
// 					price: 19,
// 				}
// 			],
// 		},{

// 		  title: "Loss and Gains", // Static
// 		  selected: false, // Static logic
// 		  alertText: "Hey there! Here you can view channels you have gained or lost from your previous pack.",
// 		  id: 'loss-gain',
// 		  payload: [
// 		  {
// 			selectable: false, // Appn. logic
// 			type: 'bouquet', // Harded
// 			title: 'Add Channels', // Result.RequestedPackages.Channells[0].bouquet.bouquetName, Result[n].PackageType
// 			id: 'AC', // Self 
// 			channels: [
// 			  {
// 				selectable: false, // Application logic, In view mode, all would be false and vv.
// 				title: 'NGC Movies HD', //Result.RequestedPackages.PackageName
// 				id: '5561',
// 				price: 5, // Result.RequestedPackages.PriceWithoutTax
// 			  },{
// 				selectable: false,
// 				title: 'TLC HD World',
// 				id: '1234',
// 				price: 10, // Result.RequestedPackages.PriceWithoutTax
// 			  }
// 			]
// 			}, {
// 			  selectable: false,
// 			  type: 'bouquet',
// 			  title: 'Removed Channels',
// 			  id: 'RC',
// 			  price: 55,
// 			  channels: [
// 				{
// 				  selectable: false,
// 				  title: 'NGC Music HD',
// 				  id: 'NGC',
// 				  price: 5,
// 				},{
// 				  selectable: false,
// 				  title: 'TLC HD World',
// 				  id: 'TLC',
// 				  price: 10,
// 				}
// 			  ]
// 			}
// 		  ]
// 		}
// 	],
// 	details: {
// 	  footerText: "Click on 'Submit' to submit the Best Fit Pack as your selection.\nClick on 'Add Channels' to add more channels.",
// 	},
//   }


// var cartJson = {
//   "bouquets": [
//     {
//       "ChannelID": 0,
//       "BouquetID": 0,
//       "PackageId": "1",
//       "SelectedPrice": "0",
//       "PackageName": "HSM FTA Pack",
//       "PackageType": "FTA"
//     },
//     {
//       "ChannelID": 0,
//       "BouquetID": 0,
//       "PackageId": "5861",
//       "SelectedPrice": "20",
//       "PackageName": "Zee Prime Pack Telugu SD",
//       "PackageType": "Bouqet SD"
//     }
//   ],
//   "channels": [
//     {
//       "ChannelID": 0,
//       "BouquetID": 0,
//       "PackageId": "5023",
//       "SelectedPrice": "19",
//       "PackageName": "&pictures HD",
//       "PackageType": "Alacarte"
//     }
//   ],
//   "type": "modal_cart",
//   "totalChannelCount": 108,
//   "price": 39,
//   "applicableNcf": 139,
//   "gst": 32.04,
//   "grandTotal": 210.04,
//   "title": "Your Selection"
// }

console.log("MS JSON: ", jsonMain);
if(jsonMain.type === "modal_cart"){
	var cart = {
		type: 'modal_cart',
		showFilter: true,
		tabs: [{
			title: jsonMain.title, // Static
			selected: true, // Static logic
			id: 'modal_cart',
			payload: [
				{
					selectable: false, // Appn. logic
					type: 'bouquet', // Harded
					title: 'Bouquets', // Result.RequestedPackages.Channells[0].bouquet.bouquetName, Result[n].PackageType
					id: 'BQ', // Self 
					channels: []
				}, {
					selectable: false,
					type: 'bouquet',
					title: 'Channels',
					id: 'CL',
					channels: [],
				}
			]
		}],
		details: {
		  "footerText": jsonMain.footerText,
		  "type": "modal_cart",
		  "totalChannelCount": jsonMain.totalChannelCount,
		  "price": jsonMain.price,
		  "applicableNcf": jsonMain.applicableNcf,
		  "gst": jsonMain.gst,
		  "grandTotal": jsonMain.grandTotal,
		  "buttons": jsonMain.details.buttons
		},
	}
	jsonMain.bouquets.forEach((bouquet) => {
		var bq = {
			selectable: false,
			title: bouquet.PackageName,
			id: bouquet.PackageId,
		}
		cart.tabs[0].payload[0].channels.push(bq);
	});
	jsonMain.channels.forEach((channel) => {
		var cl = {
			selectable: false,
			title: channel.PackageName,
			id: channel.PackageId,
		}
		cart.tabs[0].payload[1].channels.push(cl);
	});
	var jsonMain = cart;
	console.log(jsonMain);
}



// function clearElements(elements){
// 	elements.forEach((element) => {
// 		var myNode = document.getElementById(element);
// 		while (myNode.firstChild) {
// 		    myNode.removeChild(myNode.firstChild);
// 		}
// 	})
// }

// clearElements(['multiselect-nav-tab', 'nav-tabContent']);

var cnt = 0;

var selectedFlag = true;
jsonMain.tabs.forEach((tab, index) => {
  // For Each Tab
  var nav_tab = document.getElementById('multiselect-nav-tab');
  var nav = document.createElement('a');
  nav.classList.add('flex-fill', 'nav-item', 'nav-link', 'multiselect-ripple');
  if(!!tab.selected && selectedFlag) {
	nav.classList.add('active');
	selectedFlag = false;
  };
  nav.id = `nav-tab-${tab.id}`
  nav.dataset.toggle = 'tab';
  nav.innerText = tab.title;
  setAttributes(nav, {
		'href': `#multiselect-nav-${tab.id}`,
		'role': 'tab', 'aria-controls':
		`multiselect-nav-${tab.id}`,
		'aria-selected': "true"
	});
  
  nav_tab.appendChild(nav);

  // Content Tab
  var content_tab = document.getElementById('nav-tabContent');
  var tab_pane = document.createElement('div');
  tab_pane.classList.add(`tab-pane`, `fade`, `show`);
  if(index === 0) tab_pane.classList.add(`active`);
  tab_pane.id = `multiselect-nav-${tab.id}`;
  setAttributes(tab_pane, {
		'role': 'tabpanel',
		'aria-labelledby': `multiselect-nav-${tab.id}`,
  });

  var form = document.createElement('form');

  // Show alert Text if any
  if(tab.alertText){
	var alertDiv = document.createElement('div');
	alertDiv.classList.add('alert','alert-warning','alert-dismissible','fade','show','multiselect__alert');
	alertDiv.setAttribute('role', 'alert');
	alertDiv.innerHTML = `
		${tab.alertText}
		 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		   <span aria-hidden="true">&times;</span>
		 </button>
	`;
	form.appendChild(alertDiv);
  }
  var ul = document.createElement('ul');
  ul.classList.add('multiselect-ul');
  ul.id = `ul-${tab.id}`;

  tab.payload.forEach((bouquetsOrChannels, index) => {
	var li = document.createElement('li');
	li.classList.add('multiselect--li');    

	if(bouquetsOrChannels.type === 'bouquet'){
	  li.classList.add('multiselect--bouquet');
	  var label = document.createElement('label');
	  setAttributes(label, {'name': bouquetsOrChannels.title, 'class': 'input-group'});


// TEMPO SOLN
cnt = cnt + 1;
bouquetsOrChannels.id = cnt;
// TEMPO SOLN NOT IN PROD
	  // collapse Channels List
	  var channelList = document.createElement('div');
	  channelList.classList.add('collapse');
	  channelList.id = `collapseChannelList-${bouquetsOrChannels.id}`;
	  var channelUl = document.createElement('ul');

	  bouquetsOrChannels.channels.forEach((channel) => {
		var channelLi = document.createElement('li');
		channelLi.classList.add('multiselect--bouquet-channel');
		var channelLable = document.createElement('label');
		setAttributes(channelLable, {'name': channel.title});
		channelLable.classList.add('multiselect--channel-label');
		if(channel.selectable){
			channelLable.classList.add('multiselect--label-selectable', 'multiselect--bouquet-channel-label-selectable');
			channelLable.innerHTML = `<input type="checkbox" class="multiselect--checkbox" name="${channel.title}" value="${channel.id}">
			<span class="multiselect--title">${channel.title}</span>`;
		} else {
			channelLable.classList.add('multiselect--bouquet-channel-label-unselectable');
			channelLable.innerHTML = `<i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">${channel.title}</span>`;
		}

		channelLi.appendChild(channelLable);
		channelUl.appendChild(channelLi);
	  });
	  channelList.appendChild(channelUl);

	  // Selectable only
	  if(bouquetsOrChannels.selectable){
		var input = document.createElement('input');
		setAttributes(input, {'type': 'checkbox', 'class': 'multiselect--checkbox', 'name': bouquetsOrChannels.title, 'value': bouquetsOrChannels.id});
		label.appendChild(input);
		label.classList.add('multiselect--label-selectable')
	  } 
	  // Unselectable
	  else {
		label.classList.add('multiselect--lable-unselectable');
		var chevronRight = document.createElement('i');
		chevronRight.classList.add('fas', 'fa-arrow-alt-circle-right');
		label.appendChild(chevronRight);
	  }
	  // title
	  var spanTitle = document.createElement('span');
	  spanTitle.classList.add('multiselect--title');
	  spanTitle.innerText = bouquetsOrChannels.title;
	  label.appendChild(spanTitle);
	  // If price is set
	  if(bouquetsOrChannels.price){
		var spanPrice = document.createElement('span');
		spanPrice.classList.add('multiselect--price');
		spanPrice.innerText = `₹ ${bouquetsOrChannels.price}`;
		label.appendChild(spanPrice);
	  }
	  // collapsable Button
	  var collapseButton = document.createElement('button');
	  setAttributes(collapseButton, { 'class': 'input-group-append multiselect__btn-collapse', 'type' : 'button', 'data-toggle': 'collapse', 'data-target': `#collapseChannelList-${bouquetsOrChannels.id}`, 'aria-expanded': 'false', 'aria-controls' : 'collapseChannelList'});
	  collapseButton.innerHTML = `<i class="fas fa-plus"></i>`;
	  label.appendChild(collapseButton);


	  li.appendChild(label);
	  li.appendChild(channelList);
	  ul.appendChild(li);
	}
  });

  form.appendChild(ul);
  tab_pane.appendChild(form);
  content_tab.appendChild(tab_pane);
})


if(jsonMain.type === 'modal_view' || jsonMain.type === 'modal_input' ){
  var footerDiv = document.createElement('div');
  footerDiv.classList.add('multiselect_footer');
  footerDiv.innerHTML = `
  <p>${jsonMain.details.footerText}</p>
  <div class="multiselect_buttons" id="multiselect_buttons">
  </div>`;
  document.getElementById('multiselect_container').appendChild(footerDiv);
  
  jsonMain.details.buttons.forEach(button => {
  	var btn = document.createElement('button');
  	btn.id = button.id;
  	btn.classList.add('multiselect_btn', button.id);
  	btn.innerHTML = `<span>${button.title}</span>`;
  	document.getElementById('multiselect_buttons').appendChild(btn);
  })
} else if (jsonMain.type === 'modal_cart') {
	var footerDiv = document.createElement('div');
	footerDiv.classList.add('multiselect_footer');
	console.log("JSONMAIN", jsonMain);
	footerDiv.innerHTML = `
	<div class="multiselect--footer-cart" id="multiselect--footer-cart">
		<ul>
			<li class="multiselect--footer-cart-li multiselect--footer-cart-li-channels-count"><span class="">Total Channels Count: </span><span>${Math.round(jsonMain.details.totalChannelCount)}</span></li>
			<li class="multiselect--footer-cart-li multiselect--footer-cart-li-price"><span class="">Price: </span><span>₹ ${Math.round(jsonMain.details.price)}</span></li>
			<li class="multiselect--footer-cart-li multiselect--footer-cart-li-ncf"><span class="">Applicable NCF: </span><span>₹ ${Math.round(jsonMain.details.applicableNcf)}</span></li>
			<li class="multiselect--footer-cart-li multiselect--footer-cart-li-gst"><span class="">GST 18%: </span><span>₹ ${Math.round(jsonMain.details.gst)}</span></li>
			<li class="multiselect--footer-cart-li multiselect--footer-cart-li-total"><span class="">GRAND TOTAL: </span><span>₹ ${Math.round(jsonMain.details.grandTotal)}</span></li>
		</ul>
	</div>
	<p>${jsonMain.details.footerText || "" }</p>
	<div class="multiselect_buttons">
		<button id="${jsonMain.details.buttons[0].id}" class="multiselect_btn ${jsonMain.details.buttons[0].id}" ><span>${jsonMain.details.buttons[0].title}</span></button>
		<button id="${jsonMain.details.buttons[1].id}" class="multiselect_btn ${jsonMain.details.buttons[1].id}" ><span>${jsonMain.details.buttons[1].title}</span></button>
	</div>`;
	document.getElementById('multiselect_container').appendChild(footerDiv);
}

   var channel = document.getElementsByClassName("multiselect--channel-label");
   $('#multiselect--filter').on('input', function() { 
	   var filter = $(this).val();
	   // console.log(filter);
	   for(var i = 0; i < channel.length; i++) { 
		  if(channel[i].getAttribute('name').toUpperCase().indexOf(filter.toUpperCase()) > -1){
			channel[i].parentNode.style.display = "";
		  } else {
			channel[i].parentNode.style.display = "none";
		  }
		  // Fucking nasty ahead.
		  var hideThisBouquet = 1;
		  channel[i].parentNode.parentNode.childNodes.forEach((li) => {
		  	if(li.style.display !== "none"){
		  		hideThisBouquet = 0;
		  	}
		  	if(hideThisBouquet){
		  		channel[i].parentNode.parentNode.parentNode.parentNode.style.display = 'none';
		  	} else {
		  		channel[i].parentNode.parentNode.parentNode.parentNode.style.display = '';
		  	}
		  });
		}
   });

  $(".multiselect--checkbox").change(function() {
	  if(this.checked) {
		this.parentElement.classList.add("selected");
		selectedList.push(this.value);
	  }
	  else {
		this.parentElement.classList.remove("selected")
		selectedList.pop(this.value)
	  }
	  if(selectedList < 1){
		// $("#multiselect_btn__agree").prop('disabled', true);
		// $("#multiselect_btn__agree").prop('textContent', "Select channels");
	  }
	  else {
		// $("#multiselect_btn__agree").prop('disabled', false);
		// $("#multiselect_btn__agree").prop('textContent', "Confirm " + selectedList.length + " channel(s).");
	  }
  });

  $(".multiselect__btn-collapse").click(function() {
	 $(this).toggleClass("collapse-open")
  })

  function setAttributes(el, attrs) {
	for(var key in attrs) {
	  el.setAttribute(key, attrs[key]);
	}
  }

};



// var json = [
//  {
//    title: 'Business News - English',
//    id: 'DUMMY',
//    price: 15,
//  },{
//    title: 'Bihar',
//    id: 'DUMMY',
//    price: 15,
//  },{
//    title: 'Business News - Hindi',
//    id: 'DUMMY',
//    price: 10,
//  }
// ]

// var json2 = [
// {
//   title: 'Added Channels',
//   id: 'DUMMY',
//   price: 5,
// },{
//   title: 'Removed Channels',
//   id: 'DUMMY',
//   price: 10,
// }
// ]

/*
 var node = document.getElementById("ul-best-fit");
 json.forEach((currentValue, index) => {
  var li = document.createElement("li");
  li.classList.add("multiselect--li")
   if(index < 3){
	 li.classList.add("multiselect--bouquet")
	  li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--lable-unselectable input-group"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">` + currentValue.title +  `</span></input>
		 <button class="input-group-append multiselect__btn-collapse" type="button" data-toggle="collapse" data-target="#collapseChannelList-${index}" aria-expanded="false" aria-controls="collapseChannelList"><i class="fas fa-plus"></i></button></label>
		 <div class="collapse" id="collapseChannelList-${index}">
		 <ul">
			<li class="multiselect--bouquet-channel"><label name="Fox news HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">BTVi</span></label></li>
			<li class="multiselect--bouquet-channel"><label name="Zee life HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">ET Now</span></label></li>
			<li class="multiselect--bouquet-channel"><label name="Fox news HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">CNBC TV18</span></label></li>
		 </ul></div>
		 `
	  node.appendChild(li);
	  return;
   }
  li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--label"><input  type="checkbox" class="multiselect--checkbox" name="` + currentValue.title + `" value="` + currentValue.id + `"><span class="multiselect--title">` + currentValue.title +  `</span></input></label>`
  node.appendChild(li);
 })
 /*{<li class="multiselect--bouquet-channel"><label name="Zee life HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">ET Now</span></label></li>}*/
 /*<li class="multiselect--bouquet-channel"><label name="Fox news HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">CNBC</span></label></li>


/*
 var node = document.getElementById("ul-loss-gain");
 json2.forEach((currentValue, index) => {
  var li = document.createElement("li");
  li.classList.add("multiselect--li")
   if(index < 2){
	 li.classList.add("multiselect--bouquet")
	  li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--lable-hide input-group"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">` + currentValue.title +  `</span></input>
		 <button class="input-group-append multiselect__btn-collapse" type="button" data-toggle="collapse" data-target="#collapseChannelList-${index}" aria-expanded="false" aria-controls="collapseChannelList"><i class="fas fa-plus"></i></button></label>
		 <div class="collapse" id="collapseChannelList-${index}">
		 <ul">
			<li class="multiselect--bouquet-channel"><label name="Fox news HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">BTVi</span></label></li>
			<li class="multiselect--bouquet-channel"><label name="Zee life HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">ET Now</span></label></li>
			<li class="multiselect--bouquet-channel"><label name="Fox news HD" class="multiselect--bouquet-channel-label-unselectable"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">CNBC TV18</span></label></li>
		 </ul></div>
		 `
	  node.appendChild(li);
	  return;
   }
  // li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--label"><input  type="checkbox" class="multiselect--checkbox" name="` + currentValue.title + `" value="` + currentValue.id + `"><span class="multiselect--title">` + currentValue.title +  `</span><span class="multiselect--price">₹ ` + currentValue.price + `</span></input></label>`
  li.innerHTML = `<label name="` + currentValue.title + `" class="multiselect--lable-hide"><i class="fas fa-arrow-alt-circle-right"></i><span class="multiselect--title">` + currentValue.title +  `</span></input></label>`
  node.appendChild(li);
 })



   <div class="tab-pane fade show active" id="multiselect-nav-first" role="tabpanel" aria-labelledby="multiselect-nav-first-tab">
     <form>
       <div class="alert alert-warning alert-dismissible fade show multiselect__alert" role="alert">
         Hey there! We have selected a Best Fit Pack just for you! Click on any bouquet to know more!
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <ul class="multi-selected" id="ul">
       </ul>
     </form>
   </div>
   <div class="tab-pane fade" id="multiselect-nav-second" role="tabpanel" aria-labelledby="multiselect-nav-second-tab">
     <form>
       <div class="alert alert-warning alert-dismissible fade show multiselect__alert" role="alert">
         Hey there! Here you can view channels you have gained or lost from your previous pack.
         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>
       <ul class="multi-selected" id="ul2">
       </ul>
     </form>
   </div>

   <!--
   <div class="multiselect__radiolist">
     <label class="multiselect__radio-label">
       <input type="radio" class="option-input radio" name="radio" checked=""><span>SD</span>
     </label>
     <label><input type="radio" class="option-input radio" name="radio"><span>HD</span></label>
     <label><input type="radio" class="option-input radio" name="radio"><span>Both</span></label>
   </div>

   <div class="multiselect_footer">
     <p>Please choose your choice of channels.</p>
     <div class="multiselect_buttons">
       <button id="multiselect_btn__agree" class="multiselect_btn multiselect_btn__agree" ><span>Submit</span></button>
       <button id="multiselect_btn__agree" class="multiselect_btn multiselect_btn__disagree" ><span>Add Channels</span></button>
     </div>
   </div>
   -->

 */
// ,{
//   title: 'Eng Gec',
//   id: 'DUMMY',
//   price: 5,
// },{
//   title: 'TLC HD World',
//   id: 'DUMMY',
//   price: 10,
// },{
//   title: 'Travel XP HD',
//   id: 'DUMMY',
//   price: 19,
// },{
//   title: 'Baby tv HD',
//   id: 'DUMMY',
//   price: 9,
// },{
//   title: 'CNBC PRIME HD',
//   id: 'DUMMY',
//   price: 15,
// },{
//   title: 'Nick HD +',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Axn HD',
//   id: 'DUMMY',
//   price: 15,
// },{
//   title: 'Colors Infinity HD',
//   id: 'DUMMY',
//   price: 5,
// },{
//   title: 'Comedy Central HD',
//   id: 'DUMMY',
//   price: 20,
// },{
//   title: 'MN+ HD',
//   id: 'DUMMY',
//   price: 10,
// },{
//   title: 'ROMEDY NOW HD',
//   id: 'DUMMY',
//   price: 10,
// },{
//   title: 'Sony PIX HD',
//   id: 'DUMMY',
//   price: 5,
// },{
//   title: 'Star Movies HD',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Star Movies Select HD',
//   id: 'DUMMY',
//   price: 15,
// },{
//   title: 'Sony MAX',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Zee Cinema',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Star Gold',
//   id: 'DUMMY',
//   price: 25,
// },
// {
//   title: 'UTV Movies',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'UTV Action',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'ZEE BOLLYWOOD',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Zee Action ',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Movies OK',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: '& Pictures',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Sony MAX 2',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Star Movies',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Romedy Now ',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: '&FLIX',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Sony PIX',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Warner Brothers',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Movies Now',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'MNX',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Colors',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Star Plus',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Zee TV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'STAR BHARAT',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Sony SAB TV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'UTV Bindass',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: '& TV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'DISCOVERY JEET ',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'AXN',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Star World',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'ZEE Café',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Comedy Central',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Colors Infinity',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Cartoon Network',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'MIRROR NOW',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Hungama',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Times Now',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'NICK',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'REPUBLIC TV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Nick Junior',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'DISNEY',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'CNBC TV 18',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Disney XD',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Disney Junior',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'SONY YAY',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'CNBC BAZAAR',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'ET Now',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'BABY TV SD',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Discovery Kids',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Zee Business',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'MTV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'VH1',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'CNBCAwaaz',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Aljazeera',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'JINVANI',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'France 24',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'SANSKRITI TV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'PTC News',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'PTC Punjabi',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'NEWS18 PUN/HAR HIMACHAL',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Stv Haryana News',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: '9X Tashan',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Discovery ',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'MH-1 (SD)',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Ptc Chakde',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'NEWS 18 URDU',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Zee Salaam',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'CHANNEL WIN',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Colors Gujarati',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Discovery  Turbo',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Discovery  Science',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'EPIC TV',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'History tv 18',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'GEMPORIA',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'FYI TV 18',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Fox life',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Travel XP',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'TLC',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Living Foodz',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'Nat Geo',
//   id: 'DUMMY',
//   price: 25,
// },{
//   title: 'ABP News',
//   id: 'DUMMY',
//   price: 25,
// }




// <div class="tab-pane fade show active" id="multiselect-nav-first" role="tabpanel" aria-labelledby="multiselect-nav-first-tab">
//   <form>
//     <div class="alert alert-warning alert-dismissible fade show multiselect__alert" role="alert">
//       Hey there! We have selected a Best Fit Pack just for you! Click on any bouquet to know more!
//       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <ul class="multi-selected" id="ul">
//     </ul>
//   </form>
// </div>
// <div class="tab-pane fade" id="multiselect-nav-second" role="tabpanel" aria-labelledby="multiselect-nav-second-tab">
//   <form>
//     <div class="alert alert-warning alert-dismissible fade show multiselect__alert" role="alert">
//       Hey there! Here you can view channels you have gained or lost from your previous pack.
//       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
//         <span aria-hidden="true">&times;</span>
//       </button>
//     </div>
//     <ul class="multi-selected" id="ul2">
//     </ul>
//   </form>
// </div>






// <nav class="multiselect--nav-main">
//   <div class="multiselect--filter">
//     <input type="text" id="multiselect--filter" class="multiselect--filter-input" placeholder="Filter"/>
//   </div>
// </nav>