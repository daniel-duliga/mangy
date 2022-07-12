import { RangeTable, RangeTableRow } from "src/app/features/tables/range-table";

export const DetailCheck = new RangeTable([
    new RangeTableRow(
        1, 4,
        "Anger",
        "The answer is something that causes anger in the PC most directly involved with the Question. The degree of anger is up to you, whatever seems most appropriate."
    ),
    new RangeTableRow(
        5, 5,
        "Sadness",
        "The answer is something that causes sadness in the Player Character most directly involved with the Question. As with anger and the other emotions, “sadness” can be interpreted widely, from the grief of discovering a dear friend has died to losing an object they wanted."
    ),
    new RangeTableRow(
        6, 6,
        "Fear",
        "The answer is something that causes fear in the PC most directly involved. This may be the most easily interpreted emotion in the table as many things can cause fear."
    ),
    new RangeTableRow(
        7, 7,
        "Disfavors Thread",
        "If there is more than one Thread, randomly determine which Thread this result Disfavors. The answer to your Question will be the most obvious result that works against that Thread goal."
    ),
    new RangeTableRow(
        8, 8,
        "Disfavors PC",
        "The answer to this Question works against a random Player Character. The unfavorable outcome should be the most obvious that springs to mind, interpreted within the context of the story and the PC involved."
    ),
    new RangeTableRow(
        9, 9,
        "Focus NPC",
        "The answer to this Question centers around an NPC on the NPC List. If there is more than one then randomly determine which one. It doesn't necessarily mean that anything directly happens to that NPC, or that the NPC is even directly involved in the answer to the Question, it just means that the answer has something to do with that NPC. A Focus result can be negative or positive, it can be anything as long as it pertains to the Focus, but you don't initially bend it in that direction like you do the Favors and Disfavors results."
    ),
    new RangeTableRow(
        10, 10,
        "Favors NPC",
        "The answer to this Question pertains to a randomly determined NPC on the Character List in a favorable way. “Favors” can be something that directly aids that NPC to the result being alike to the NPC. In some way, the answer has a favorable link to the NPC."
    ),
    new RangeTableRow(
        11, 11,
        "Focus PC",
        "This works the same as the Focus NPC result, except it pertains to a random Player Character."
    ),
    new RangeTableRow(
        12, 12,
        "Disfavors NPC",
        "If there is more than one NPC on your List, then randomly determine which NPC this refers to. As with the above results, this Disfavors the NPC in the most obvious way."
    ),
    new RangeTableRow(
        13, 13,
        "Focus Thread",
        "This works in the same way as the Focus NPC result, except pertaining to a randomly determined Thread. Since Threads are the goals that the PCs are pursuing, the Focus Thread result will often be a piece of information about the Thread or a reminder of the Thread. This isn't a Favors or Disfavors result, however, so you should lean toward results that pertain to the Thread without directly aiding or hindering its achievement."
    ),
    new RangeTableRow(
        14, 14,
        "Favors PC",
        "This works the same way as the Favors NPC result, except it pertains to a random Player Character."
    ),
    new RangeTableRow(
        15, 15,
        "Favor Thread",
        "This works the same way as Favors NPC, but in relation to a randomly determined Thread. The answer to this Question will likely result in the PCs taking a step closer to completing the Thread in question, if not give them the opportunity to achieve it right then. Or, it may simply have something in common with the Thread."
    ),
    new RangeTableRow(
        16, 16,
        "Courage",
        "This is another emotion result, the flip side to Fear. As with the other emotions, this one pertains to the PC most directly related to the Question being asked. The result should be something that bolsters the PC's courage."
    ),
    new RangeTableRow(
        17, 17,
        "Happiness",
        "The answer to this Detail Check makes the PC most directly related to the Question happy in some way. This is the opposite of the Sad result."
    ),
    new RangeTableRow(
        18, 20,
        "Calm",
        "The answer to this Question makes the PC most directly involved with the Question calm in some way. This is the opposite of the Anger result. “Calm” can be anything that produces peace or lessens a currently tense situation. As with the other emotions, the affects can range widely."
    ),
]);