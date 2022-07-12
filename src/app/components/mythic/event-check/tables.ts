import { ListTableRow } from "src/app/features/tables/list-table";
import { RangeTable, RangeTableRow } from "src/app/features/tables/range-table";

const remoteEvent = new ListTableRow(
    "Remote event",
    "Something important has happened that bears on the adventure, but the player characters were not present when the event occurred, they only learn about it remotely. This can result in many ways, from a non-player character telling them some piece of news, to coming across evidence of this other event. A remote event can either by implied or directly stated. If you are playing your adventure cinematically (see the adventure chapter), then your next scene may be a flashback to this remote event. This will allow the players to role-play the event, adding more tension to the adventure. If you are taking a simulation approach to the adventure, then the players will have to figure out what happened on their own."
);
const pcNpcAction = new ListTableRow(
    "NPC Action",
    "An existing player or non-player (depending on the event) character makes a surprise action that impacts the player characters. In many cases, when compared to the adventure context, obvious character actions will spring to mind."
);
const introduceNewPc = new ListTableRow(
    "Introduce a new NPC",
    "A brand new face is involved in the adventure. This may be someone the player characters had expected to meet, or a surprise. Either way, this new character is important to the overall adventure and will be added to the character list when the scene is over. The character's appearance will likely be combined with an action of some sort. The character does not need to be an individual but can be any entity capable of independent action, such as an organized group of townspeople or a government agency."
);
const moveTowardThread = new ListTableRow(
    "Move toward a thread",
    "This random event has something to do directly with resolving an open thread. Other random events from the event focus table can also involve a thread, but not necessarily. This random event is directly related to the thread, and should offer the characters an opportunity to step closer to solving the thread."
)
const moveAwayFromThread = new ListTableRow(
    "Move away from a thread",
    "This random event will make it harder for the player characters to solve an open thread. It makes resolving the thread a little more difficult, but not necessarily impossible."
);
const closeThread = new ListTableRow(
    "Close a thread",
    "The random event is so important it actually closes an open thread. To close a thread, the thread is either resolved or the issue goes away. Figure out what the most logical way to immediately close the thread would be."
);
const pcOrNpcPositiveOrNegativeNotes = 
    "Something bad, or good, happens to a player character, or non-player character, whichever is indicated on the event focus table. These can be major, or minor, events. This can be a very vague event focus. All this focus tells you is who is directly effected, and if the effect is good or bad.";
const ambiguousEvent = new ListTableRow(
    "Ambiguous event",
    "The random event of “ambiguous event” is meant to encompass everything else that can happen. This is a catchall category for anything that does not directly impact characters or NPCs. The event is not necessarily bad or good. The event can be important, but often it is more atmospheric to the scene. This random event focus offers you the opportunity to inject less important elements or even comedy elements into your adventure. Adventure context doesn't matter so much since the ambiguous event may have nothing to do with the course of the adventure. Often, the easiest way to interpret this event is to generate the event meaning and then take the first thing that springs to mind, even if it's a little odd."
);
const horrorPcNpcNotes = 
    "Horror strikes in all its gruesomeness! If this is a psychological horror adventure, then something very weird happens to a PC or NPC. If it's a physical horror adventure, then a PC's or NPC's life is threatened in a horrible way. This usually means the character is attacked. If the target is an NPC who is currently with a PC, then the NPC is attacked out of nowhere though the PC may be able to save him. If the NPC is not currently in the scene, then this likely means that the PC's come across the NPC's mangled corpse, or the NPC shows up on the scene just having escaped her peril. You may have to ask a Fate Question here, such as, “Is the NPC dead?” or something to figure out just what happened to them. If the PC is the target, then her life should be in immediate jeopardy from the main antagonist. This result simulates those moments in horror movies when the bad guy, or thing, does what it does best.";
const action = new ListTableRow(
    "Action!",
    "Something happens that pushes the adventure into high gear. What exactly happens will depend on the current context of events and what you get on the Event Meaning Charts. However, whatever it is should be pulse-pounding."
);
const dropBomb = new ListTableRow(
    "Drop a bomb!",
    "Drop a bomb means a PC learns a secret, usually about another character. If this is the result of a random event, then whoever is currently with the character is probably the source of the dropped bomb."
);
const threadEscalates = new ListTableRow(
    "Thread escalates",
    "Pick a random thread and bring it up a notch. The PCs learn that what they thought was their goal is just the tip of the iceberg.     Whenever you escalate a thread, take it up to the next logical step or even more. There is nothing preventing you from rolling this result again, so a single thread could escalate multiple times in an adventure."
);

export const EventFocusStandard = new RangeTable([
    new RangeTableRow(1, 7,     remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(8, 28,    pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(29, 35,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(36, 45,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(46, 52,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(53, 55,   closeThread.value,          closeThread.notes),
    new RangeTableRow(56, 67,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(68, 75,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(76, 83,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(84, 92,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(93, 100,  "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
]);
export const EventFocusHorror = new RangeTable([
    new RangeTableRow(1, 10,    "Horror - PC",              horrorPcNpcNotes),
    new RangeTableRow(11, 23,   "Horror - NPC",             horrorPcNpcNotes),
    new RangeTableRow(24, 30,   remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(31, 49,   pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(50, 52,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(53, 55,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(56, 62,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(63, 72,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(73, 75,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(76, 82,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(83, 97,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(98, 100,  "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
]);
export const EventFocusActionAdventure = new RangeTable([
    new RangeTableRow(1, 16,    action.value,               action.notes),
    new RangeTableRow(17, 24,   remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(25, 44,   pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(45, 52,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(53, 56,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(57, 64,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(65, 76,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(77, 80,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(81, 84,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(85, 96,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(97, 100,  "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
]);
export const EventFocusMystery = new RangeTable([
    new RangeTableRow(1, 8,     remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(9, 20,    pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(21, 32,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(33, 52,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(53, 64,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(65, 72,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(73, 80,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(81, 88,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(89, 96,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(97, 100,  "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
]);
export const EventFocusSocial = new RangeTable([
    new RangeTableRow(1, 12,    dropBomb.value,             dropBomb.notes),
    new RangeTableRow(13, 24,   remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(25, 36,   pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(37, 44,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(45, 56,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(57, 60,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(61, 64,   closeThread.value,          closeThread.notes),
    new RangeTableRow(65, 72,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(73, 80,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(81, 92,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(93, 96,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(97, 100,  "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
]);
export const EventFocusPersonal = new RangeTable([
    new RangeTableRow(1, 7,     remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(8, 24,    pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(25, 28,   "PC NPC action",            pcNpcAction.notes),
    new RangeTableRow(29, 35,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(36, 42,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(43, 45,   "Move toward PC thread",    moveTowardThread.notes),
    new RangeTableRow(46, 50,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(51, 52,   "Move away from PC thread", moveAwayFromThread.notes),
    new RangeTableRow(53, 54,   closeThread.value,          closeThread.notes),
    new RangeTableRow(55, 55,   "Close PC thread",          closeThread.notes),
    new RangeTableRow(56, 67,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(68, 75,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(76, 83,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(84, 90,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(91, 92,   "PC NPC negative",          pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(93, 99,   "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(100, 100, "PC NPC positive",          pcOrNpcPositiveOrNegativeNotes),
]);
export const EventFocusEpic = new RangeTable([
    new RangeTableRow(1, 12,    threadEscalates.value,      threadEscalates.notes),
    new RangeTableRow(13, 16,   remoteEvent.value,          remoteEvent.notes),
    new RangeTableRow(17, 30,   pcNpcAction.value,          pcNpcAction.notes),
    new RangeTableRow(31, 42,   introduceNewPc.value,       introduceNewPc.notes),
    new RangeTableRow(43, 46,   moveTowardThread.value,     moveTowardThread.notes),
    new RangeTableRow(47, 58,   moveAwayFromThread.value,   moveAwayFromThread.notes),
    new RangeTableRow(59, 72,   "PC negative",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(73, 80,   "PC positive",              pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(81, 84,   ambiguousEvent.value,       ambiguousEvent.notes),
    new RangeTableRow(85, 92,   "NPC negative",             pcOrNpcPositiveOrNegativeNotes),
    new RangeTableRow(93, 100,  "NPC positive",             pcOrNpcPositiveOrNegativeNotes),
]);