import React from "react"
import AboutDescr from "./about_descr"
import Hobbies from "./hobbies"
import { achievements } from "./achievements"
import Other from "./experiences/other"
import Skills from "./skills"
import WorkExperience from "./experiences"
import Education from "./education"
import { jsx2Html } from "@this/src/modules/roncaspot/libs/helpers"

var achiList = achievements.map((value, key) => {
    if (value.__hwc_url) {
        return {
            ...value,
            Description: (value.__hwc_name ? value.__hwc_name + ": " : "") + value.Description + " <a href='" + value.__hwc_url + "'>" + value.__hwc_url + "</a>"
        }
    } else
        return value
})

achiList.push({
    Title: {
        Label: "Other Experiences"
    },
    Description: "<ul><li>" + Other.join("</li><li>") + "</li></ul>"
});

export default {
    "SkillsPassport": {
        "Locale": "en",
        "DocumentInfo": {
            "DocumentType": "ECV",
            "CreationDate": "2018-06-26T08:49:20.889Z",
            "LastUpdateDate": "2019-10-07T19:03:50.843Z",
            "XSDVersion": "V3.3",
            "Generator": "EWA",
            "Comment": "Europass CV",
            "EuropassLogo": true
        },
        "PrintingPreferences": {
            "ECV": [
                {
                    "name": "LearnerInfo",
                    "order": "Identification Headline Skills Achievement WorkExperience Education ReferenceTo"
                },
                {
                    "name": "LearnerInfo.Identification"
                },
                {
                    "name": "LearnerInfo.Identification.PersonName",
                    "show": true,
                    "order": "FirstName Surname"
                },
                {
                    "name": "LearnerInfo.Identification.Demographics"
                },
                {
                    "name": "LearnerInfo.Identification.Demographics.Birthdate",
                    "format": "text/short"
                },
                {
                    "name": "LearnerInfo.WorkExperience"
                },
                {
                    "name": "LearnerInfo.WorkExperience"
                },
                {
                    "name": "LearnerInfo.WorkExperience[0]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[0].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.WorkExperience[1]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[1].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.WorkExperience[2]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[2].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.WorkExperience[3]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[3].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.WorkExperience[4]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[4].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.WorkExperience[5]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[5].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.WorkExperience[6]"
                },
                {
                    "name": "LearnerInfo.WorkExperience[6].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.Education"
                },
                {
                    "name": "LearnerInfo.Education"
                },
                {
                    "name": "LearnerInfo.Education[0]"
                },
                {
                    "name": "LearnerInfo.Education[0].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.Education[1]"
                },
                {
                    "name": "LearnerInfo.Education[1].Period",
                    "format": "numeric/long"
                },
                {
                    "name": "LearnerInfo.Education[2]"
                },
                {
                    "name": "LearnerInfo.Education[2].Period",
                    "format": "numeric/long"
                }
            ]
        },
        "LearnerInfo": {
            Headline: {
                Type: {
                    Code: "personal_statement",
                    Label: "PERSONAL STATEMENT"
                },
                Description: {
                    Label: jsx2Html(<AboutDescr />)
                }
            },
            "Identification": {
                "PersonName": {
                    "FirstName": "Giuseppe",
                    "Surname": "Ronca"
                },
                "ContactInfo": {
                    "Address": {
                        "Contact": {
                            "AddressLine": "Zijhuizen 5",
                            "PostalCode": "2011",
                            "Municipality": "Haarlem",
                            "Country": {
                                "Label": "The Netherlands"
                            }
                        }
                    },
                    "Email": {
                        "Contact": "roncalabs@gmail.com"
                    },
                    "Telephone": [
                        {
                            "Contact": "(+39) 3478147424",
                            "Use": {
                                "Code": "mobile",
                                "Label": "Mobile"
                            }
                        }
                    ],
                    "Website": [
                        {
                            "__hwc_type": "link",
                            "__hwc_icon": "fa fa-link",
                            "__hwc_name": "Website",
                            "Contact": "https://roncaspot.github.io"
                        },
                        {
                            "__hwc_type": "github",
                            "__hwc_icon": "fab fa-github",
                            "__hwc_name": "Github",
                            "Contact": "https://github.com/yehonal"
                        },
                        {
                            "__hwc_type": "linkedin",
                            "__hwc_icon": "fab fa-linkedin",
                            "__hwc_name": "Linkedin",
                            "Contact": "https://www.linkedin.com/in/giuseppe-ronca-b5216438/"
                        },
                        {
                            "__hwc_type": "facebook",
                            "__hwc_icon": "fab fa-facebook",
                            "__hwc_name": "Facebook",
                            "Contact": "https://www.facebook.com/giusepperonca/"
                        }
                    ],
                    "InstantMessaging": [
                        {
                            "Contact": "roncalabs@gmail.com",
                            "Use": {
                                "Label": "Google Hangouts"
                            }
                        }
                    ]
                },
                "Demographics": {
                    "Birthdate": {
                        "Year": 1990,
                        "Month": 4,
                        "Day": 17
                    },
                    "Gender": {
                        "Code": "M",
                        "Label": "Male"
                    },
                    "Nationality": [
                        {
                            "Code": "IT",
                            "Label": "Italian"
                        }
                    ]
                }
            },
            WorkExperience,
            Education,
            "Skills": {
                "Linguistic": {
                    "MotherTongue": [
                        {
                            "Description": {
                                "__hwc_value": 100,
                                "Code": "it",
                                "Label": "Italian"
                            }
                        }
                    ],
                    "ForeignLanguage": [
                        {
                            "Description": {
                                "__hwc_value": 70,
                                "Code": "en",
                                "Label": "English"
                            },
                            "ProficiencyLevel": {
                                "Listening": "B2",
                                "Reading": "C1",
                                "SpokenInteraction": "B1",
                                "SpokenProduction": "B1",
                                "Writing": "B2"
                            }
                        },
                        {
                            "Description": {
                                "__hwc_value": 30,
                                "Code": "es",
                                "Label": "Spanish"
                            },
                            "ProficiencyLevel": {
                                "Listening": "A2",
                                "Reading": "A2",
                                "SpokenInteraction": "A2",
                                "SpokenProduction": "A2",
                                "Writing": "A2"
                            }
                        },
                        {
                            "Description": {
                                "__hwc_value": 20,
                                "Code": "fr",
                                "Label": "French"
                            },
                            "ProficiencyLevel": {
                                "Listening": "A1",
                                "Reading": "A1",
                                "SpokenInteraction": "A1",
                                "SpokenProduction": "A1",
                                "Writing": "A1"
                            }
                        },
                    ],
                },
                ...Skills,
                "Driving": {
                    "Description": [
                        "AM",
                        "A1",
                        "A2",
                        "A",
                        "B"
                    ]
                },
                Other: {
                    "Description": jsx2Html(<Hobbies />)
                }
            },
            "Achievement": achiList
        },
        "CoverLetter": {}
    }
}
