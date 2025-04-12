import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import definePlugin, { OptionType } from "@utils/types";
import { PirateIcon } from "./pirateicon";
import { definePluginSettings } from "@api/Settings";
import { addChatBarButton, removeChatBarButton } from "@api/ChatButtons";


export const settings = definePluginSettings({
    // spaceChance: {
    //     type: OptionType.SLIDER,
    //     markers: makeRange(0, 1, 0.1),
    //     default: 0.1,
    //     description: "Chance to insert spaces into words",
    // },
    // replaceChance: {
    //     type: OptionType.SLIDER,
    //     markers: makeRange(0, 1, 0.1),
    //     default: 0.4,
    //     description: "chance for nearby key replacements",
    // },
    pirate: {
        type: OptionType.BOOLEAN,
        default: true,
        description: "yarrr!!!"
    }
});


function toPirateSpeak(text: string): string {
    const pirateDictionary: Record<string, string> = {
        "hello": "ahoy",
        "hi": "yo-ho-ho",
        "hey": "avast",
        "my": "me",
        "mine": "me own",
        "friend": "matey",
        "is": "be",
        "are": "be",
        "am": "be",
        "you": "ye",
        "your": "yer",
        "yours": "yers",
        "the": "th'",
        "of": "o'",
        "for": "fer",
        "and": "'n'",
        "yes": "aye",
        "no": "nay",
        "stop": "belay that",
        "go": "sail forth",
        "come": "come aboard",
        "left": "port",
        "right": "starboard",
        "up": "aloft",
        "down": "below deck",
        "fast": "swift as th' wind",
        "soon": "afore long",
        "later": "after many a moon",
        "never": "ne'er",
        "always": "forevermore",
        "goodbye": "farewell, ye salty dog",
        "good night": "sleep tight in yer hammock",
        "good morning": "top o' the mornin' to ye",
        "good": "fine 'n' dandy",
        "bad": "cursed",
        "old": "barnacle-covered",
        "new": "freshly plundered",
        "money": "doubloons",
        "gold": "pieces o' eight",
        "silver": "shiny loot",
        "enemy": "scallywag",
        "stupid": "addled",
        "fool": "blasted lubber",
        "idiot": "bilge rat",
        "very": "mighty",
        "more": "more 'n' more",
        "less": "scarce as mermaids",
        "boy": "lad",
        "girl": "lass",
        "man": "buccaneer",
        "woman": "lady",
        "captain": "Cap'n",
        "crew": "me hearties",
        "boss": "quartermaster",
        "run": "scuttle",
        "walk": "stagger",
        "drink": "grog",
        "eat": "feast",
        "food": "grub",
        "water": "rum's lesser cousin",
        "boat": "ship",
        "ship": "mighty vessel",
        "steal": "plunder",
        "loot": "booty",
        "hide": "stow away",
        "sword": "cutlass",
        "gun": "blunderbuss",
        "fight": "duel",
        "battle": "skirmish",
        "storm": "tempest",
        "danger": "Davy Jones' reach",
        "prison": "the brig",
        "jail": "the brig",
        "see": "spy",
        "look": "gander",
        "watch": "keep an eye out",
        "find": "uncover",
        "what": "what be",
        "where": "whar",
        "why": "fer what reason",
        "who": "which scallywag",
        "how": "by what sorcery",
        "I": "me",
        "me": "meself",
        "love": "fancy",
        "like": "be fond o'",
        "hate": "curse",
        "think": "reckon",
        "know": "be knowin'",
        "sure": "aye, certain as th' tides",
        "maybe": "mayhap",
        "afraid": "shakin' in me boots",
        "angry": "boilin' like a stormy sea",
        "tired": "drunker than a sailor at dawn",
        "sleep": "catch some shut-eye",
        "wake up": "rise 'n' shine",
        "work": "toil like a deckhand",
        "lazy": "as sluggish as a landlubber",
        "rich": "swimmin' in doubloons",
        "poor": "as broke as a washed-up pirate",
        "fun": "a grand ol' time",
        "party": "a proper revelry",
        "story": "tale o' the seas",
        "win": "claim victory",
        "lose": "fall to ruin",
        "slow": "slower than a sea turtle",
        "help": "lend a hand",
        "dangerous": "deadlier than a siren's song",
        "crazy": "madder than Blackbeard",
        "sea": "th' briny deep",
        "ocean": "th' seven seas",
        "land": "dry dock",
        "home": "me quarters",
        "house": "me humble shack",
        "roof": "me crow's nest",
        "road": "path 'o destiny",
        "car": "land schooner",
        "computer": "magic box",
        "internet": "web o' the sea",
        "phone": "talkin' parrot",
        "message": "bottle 'o words",
        "text": "scroll",
        "letter": "parchment",
        "email": "message in a bottle",
        "read": "peruse",
        "write": "scribble like a deckhand",
        "book": "tome o' knowledge",
        "movie": "moving pictures o' legend",
        "music": "sea shanty",
        "song": "shanty",
        "sing": "belt out a tune",
        "dance": "jig",
        "funny": "as jolly as a drunken sailor",
        "boring": "duller than a broken compass",

        // Entries from second implementation
        "address": "port o' call",
        "admin": "helm",
        "an": "a",
        "award": "prize",
        "bathroom": "head",
        "beer": "grog",
        "before": "afore",
        "belief": "creed",
        "between": "betwixt",
        "bill": "coin",
        "bills": "coins",
        "bourbon": "rum",
        "box": "barrel",
        "buddy": "mate",
        "business": "company",
        "businesses": "companies",
        "calling": "callin'",
        "canada": "Great North",
        "cash": "coin",
        "cat": "parrot",
        "cheat": "hornswaggle",
        "comes": "hails",
        "comments": "yer words",
        "country": "land",
        "dashboard": "shanty",
        "dead": "in Davy Jones's Locker",
        "disconnect": "keelhaul",
        "do": "d'",
        "dog": "parrot",
        "dollar": "doubloon",
        "dollars": "doubloons",
        "dude": "pirate",
        "employee": "crew",
        "everyone": "all hands",
        "eye": "eye-patch",
        "family": "kin",
        "fee": "debt",
        "female": "wench",
        "females": "wenches",
        "fuck": "shiver me timbers",
        "gin": "rum",
        "girls": "lassies",
        "grave": "Davy Jones's Locker",
        "group": "maties",
        "haha": "yo ho",
        "hahaha": "yo ho ho",
        "hahahaha": "yo ho ho ho",
        "hand": "hook",
        "happy": "grog-filled",
        "hotel": "fleebag inn",
        "i'm": "i be",
        "invalid": "sunk",
        "island": "isle",
        "isn't": "be not",
        "it's": "'tis",
        "king": "king",
        "ladies": "lasses",
        "lawyer": "scurvy land lubber",
        "leg": "peg",
        "logout": "walk the plank",
        "lol": "blimey",
        "male": "pirate",
        "manager": "admiral",
        "month": "moon",
        "not": "nay",
        "omg": "shiver me timbers",
        "over": "o'er",
        "page": "parchment",
        "people": "scallywags",
        "person": "scurvy dog",
        "posted": "tacked to the yardarm",
        "president": "king",
        "quickly": "smartly",
        "really": "verily",
        "relative": "kin",
        "relatives": "kin",
        "religion": "creed",
        "restaurant": "galley",
        "rotf": "rollin' on the decks",
        "say": "cry",
        "seconds": "ticks o' tha clock",
        "shipping": "cargo",
        "shit": "shiver me timbers",
        "snack": "grub",
        "soldier": "sailor",
        "sorry": "yarr",
        "spouse": "ball 'n' chain",
        "state": "land",
        "supervisor": "Cap'n",
        "that's": "that be",
        "theif": "swoggler",
        "them": "'em",
        "this": "dis",
        "to": "t'",
        "together": "t'gether",
        "treasure": "booty",
        "vodka": "rum",
        "was": "be",
        "we": "our jolly crew",
        "we're": "we's",
        "whiskey": "rum",
        "whisky": "rum",
        "wine": "grog",
        "with": "wit'",
        "women": "beauties",
        "yah": "aye",
        "yeah": "aye",
        "you've": "ye",
        "yup": "aye",

        // New additions
        "please": "if ye be so kind",
        "thank you": "me gratitude to ye",
        "thanks": "me thanks",
        "excuse me": "step aside, matey",
        "excuse": "pardon me barnacles",
        "impressive": "shiver me timbers",
        "wow": "blow me down",
        "amazing": "blimey",
        "incredible": "shiver me timbers",
        "awesome": "mighty fine",
        "great": "grand",
        "wonderful": "splendid as a day with fair winds",
        "excellent": "fit for a cap'n",
        "perfect": "right as rain on the open sea",
        "problem": "trouble on the horizon",
        "issue": "cursed quandary",
        "worry": "fret like a landlubber",
        "scared": "spooked like a ghost ship",
        "sad": "down in the doldrums",
        "today": "this fine day",
        "tomorrow": "the morrow",
        "yesterday": "the day past",
        "morning": "first light",
        "afternoon": "midday",
        "evening": "dusk",
        "night": "the dark hours",
        "week": "seven days at sea",
        "year": "a full voyage 'round the sun",
        "time": "hour on the sundial",
        "day": "sunrise to sunset",
        "large": "vast as the ocean",
        "tiny": "small as a barnacle",
        "talk": "jaw",
        "speak": "yarn",
        "tell": "spin a tale",
        "said": "bellowed",
        "ask": "inquire",
        "question": "query",
        "answer": "reply",
        "reply": "retort",
        "listen": "lend an ear",
        "hear": "catch wind o'",
        "understand": "comprehend",
        "confused": "lost at sea",
        "wait": "hold fast",
        "hurry": "make haste",
        "quick": "swift",
        "better": "improved like a rum-aged plan",
        "best": "finest in all the seven seas",
        "worst": "fouler than bilge water",
        "far": "leagues away",
        "near": "within cannon shot",
        "close": "within boardin' distance",
        "far away": "beyond the horizon",
        "nearby": "just off the starboard bow",
        "here": "in this very spot",
        "there": "over yonder",
        "everywhere": "all across the seven seas",
        "nowhere": "not on any chart",
        "something": "a thing o' interest",
        "nothing": "naught but empty sea",
        "everything": "all the treasures o' the world",
        "nobody": "not a soul",
        "someone": "some scurvy dog",
        "anywhere": "any port in a storm",
        "someplace": "some port o' call",
        "welcome": "hoist the colors",
        "parent": "ol' sea dog",
        "father": "cap'n o' the family",
        "mother": "matriarch o' the clan",
        "brother": "fellow sailor",
        "sister": "ship-sister",
        "son": "cabin boy",
        "daughter": "young lass",
        "child": "young buccaneer",
        "children": "little swashbucklers"
    };

    return text.split(/\b/).map(word => {
        const lower = word.toLowerCase();
        return pirateDictionary[lower] ? pirateDictionary[lower] : word;
    }).join('');
}
function processString(input: string): string {
    return input.replace(/(?:https?:\/\/\S+|\[.*?\]\(https?:\/\/.*?\)|<a?:\w+:\d+>)|(\b\w+\b)/g, (match, word) => {
        if (word) {
            const isUpperCase = word === word.toUpperCase();
            const pirate = toPirateSpeak(word);
            if (isUpperCase) {
                return pirate.toUpperCase();
            }
            return pirate;
        }
        return match;
    });
}


export default definePlugin({
    name: "Pirate",
    description: "sail the seven seas",
    authors: [{ name: "Tally", id: 1014588310036951120n }],
    dependencies: ["MessageAccessoriesAPI", "MessagePopoverAPI", "MessageEventsAPI", "ChatInputButtonAPI"],
    settings,

    start() {

        addChatBarButton("vc-pirate", PirateIcon);


        this.preSend = addMessagePreSendListener(async (_, message) => {
            if (!message.content || !settings.store.pirate) return;

            message.content = processString(message.content);
        });
    },

    stop() {
        removeMessagePreSendListener(this.preSend);
        removeChatBarButton("vc-pirate");
    },
});

