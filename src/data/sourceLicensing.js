// Shared copy for every project's "source code" offer. Project-specific
// details live in public/myworks/<id>/project.json.

export const LICENCE_URL = "/source-code-licence.html";

export const licenceTiers = [
  {
    name: "Single App",
    summary: "Publish one app or game built from the source, on any number of stores.",
  },
  {
    name: "Multi App",
    summary: "Publish unlimited apps or games of your own built from the source.",
    highlight: true,
  },
  {
    name: "Custom / Agency",
    summary: "Client work, white-label or team use. Contact me for terms.",
  },
];

export const licenceSummary = {
  allowed: [
    "Modify the code and learn from it",
    "Publish compiled games under your own name and brand",
    "Monetise your published game with ads or in-app purchases",
  ],
  notAllowed: [
    "Resell, share or re-upload the source code, in whole or part",
    "Sell it as a template, starter kit or asset pack",
    "Use my game names, logos or store listings",
    "Publish without replacing the placeholder branding",
  ],
};

export const publishGuide = {
  intro:
    "The source ships without artwork, audio or fonts, so the game you publish is genuinely yours. A typical path from source to store:",
  steps: [
    { title: "Reskin", text: "Add your own art, sounds, fonts and a new game name and icon." },
    { title: "Make it different", text: "Change levels, mechanics or theme. Stores reject near-identical template apps." },
    { title: "Rebrand the build", text: "Set your package / bundle ID, app name, version and signing keys." },
    { title: "Add monetisation", text: "Plug in your own ad network (e.g. AdMob) and/or in-app purchases." },
    { title: "Prepare compliance", text: "Privacy policy, consent flow, store data-safety forms and age rating." },
    { title: "Publish", text: "Release to the stores and portals that fit your game." },
  ],
  channels: [
    "Google Play",
    "Apple App Store",
    "Amazon Appstore",
    "Samsung Galaxy Store",
    "Huawei AppGallery",
    "itch.io",
    "Web game portals",
  ],
  disclaimer:
    "Earnings depend entirely on your game, marketing and store approval; no income is promised. You are responsible for meeting each store's policies, including rules on repetitive or template-based apps.",
};

export const supportInfo = {
  covers: "Help importing, configuring and building the original, unmodified source.",
  include:
    "Please include your licence/order reference, IDE and JDK versions, target platform, the full build error log and steps to reproduce.",
  extra: "Reskinning, publishing help, new levels and custom development are available as paid work.",
};
