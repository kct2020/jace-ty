const dotenv = require('dotenv').config()
let now = new Date();
const fs = require("fs"); // Or `import fs from "fs";` with ESM
const path = require("path");
let theme = "jace-ty"
module.exports = {
    getFile: function(pathLoc){
        //This gets the path of the file asked.  If you ask for header.njk
        //it looks for ./src/_includes/layouts/header.njk //if found returns this
        //if not found, looks for ./src/_includes/theme/*themename*/header.njk// if found returns this
        //if neither found, console logs file not found
        //assume they mean locally the _includes folder
        let layoutsFolder = "./src/_includes/"
        let themeFolder = "./src/_includes/theme/" + theme + "/"
        let localFilePath = path.resolve(path.join(layoutsFolder, pathLoc))
        let themeFilePath = path.resolve(path.join(themeFolder, pathLoc))
        if(fs.existsSync(localFilePath)){
            return localFilePath.toString();
        } else if (fs.existsSync(themeFilePath)) {
            return themeFilePath.toString();
        } else {
            console.log(`file not found ${pathLoc} in ${localFilePath} or ${themeFilePath}`)
        }
    },
    theme: theme,//expose to other files
    environment: process.env.ELEVENTY_ENV,
    menu: [
        {
            link: "/post",
            text: "Posts",
        },
        {
            link: "/resources",
            text: "Resources",
        },
    ],
    twitter: "KeithTaylor",
    github: "https://github.com/kct2020",
    linkedin: "https://www.linkedin.com/in/keith-taylor-kecata-websites/",
    baseURL: "https://kct-jace-ty.netlify.app/",
    title: "Shrewdi 2021j",
    patreon: {
        footerMessage: "Become a Patron and you'll get access to my posts in progress, polls, thoughts and other things I want to share.  A monthly happy hour with me and access to my PDI.",
        link: "https://www.patreon.com/bePatron?u=23597006",
        text: "Become a Patron!",
        active: false
    },
    description: "Ask about anything in the learning forum. Questions and answers on any topic",
    subtitle: "Site currently in development.",
    author: "Keith Taylor",//used all over
    email: "support@keechatay.freshdesk.com",//used specificly for rss feed
    utterancesRepo: "kct2020/jace-ty",//used for comments//if commented, doesnt load
    lastBuildDate: now.toLocaleString('en-CA',{hour12:false, timeZone: 'America/Chicago'}).replace(',',''),
    lastBuildYear: now.getFullYear(),
}
