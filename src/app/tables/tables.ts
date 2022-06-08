import { ListTable } from "./models/list-table";
import { RangeTable, RangeTableRow } from "./models/range-table";

export class Tables {
    static DetailCheck = new ListTable([
        'Sadness', 'Fear', 'Disfavors Thread', 'Disfavors PC', 'Focus NPC', 'Favors NPC', 'Focus PC', 'Disfavors NPC', 'Focus Thread', 'Favors PC', 'Favor Thread', 'Courage', 'Happiness'
    ]);
    static Descriptor1 = new ListTable([
        'Abnormally', 'Adventurously', 'Aggressively', 'Angrily', 'Anxiously', 'Awkwardly', 'Beautifully', 'Bleakly', 'Boldly', 'Bravely', 'Busily', 'Calmly', 'Carefully', 'Carelessly', 'Cautiously', 'Ceaselessly', 'Cheerfully', 'Combatively', 'Coolly', 'Crazily', 'Curiously', 'Daintily', 'Dangerously', 'Defiantly', 'Deliberately', 'Delightfully', 'Dimly', 'Efficiently', 'Energetically', 'Enormously', 'Enthusiastically', 'Excitedly', 'Fearfully', 'Ferociously', 'Fiercely', 'Foolishly', 'Fortunately', 'Frantically', 'Freely', 'Frighteningly', 'Fully', 'Generously', 'Gently', 'Gladly', 'Gracefully', 'Gratefully', 'Happily', 'Hastily', 'Healthily', 'Helpfully', 'Helplessly', 'Hopelessly', 'Innocently', 'Intensely', 'Interestingly', 'Irritatingly', 'Jovially', 'Joyfully', 'Judgementally', 'Kindly', 'Kookily', 'Lazily', 'Lightly', 'Loosely', 'Loudly', 'Lovingly', 'Loyally', 'Majestically', 'Meaningfully', 'Mechanically', 'Miserably', 'Mockingly', 'Mysteriously', 'Naturally', 'Neatly', 'Nicely', 'Oddly', 'Offensively', 'Officially', 'Partially', 'Peacefully', 'Perfectly', 'Playfully', 'Politely', 'Positively', 'Powerfully', 'Quaintly', 'Quarrelsomely', 'Quietly', 'Roughly', 'Rudely', 'Ruthlessly', 'Slowly', 'Softly', 'Swiftly', 'Threateningly', 'Very', 'Violently', 'Wildly', 'Yieldingly'
    ]);
    static Descriptor2 = new ListTable([
        'Abandoned', 'Abnormal', 'Amusing', 'Ancient', 'Aromatic', 'Average', 'Beautiful', 'Bizarre', 'Classy', 'Clean', 'Cold', 'Colorful', 'Creepy', 'Cute', 'Damaged', 'Dark', 'Defeated', 'Delicate', 'Delightful', 'Dirty', 'Disagreeable', 'Disgusting', 'Drab', 'Dry', 'Dull', 'Empty', 'Enormous', 'Exotic', 'Faded', 'Familiar', 'Fancy', 'Fat', 'Feeble', 'Feminine', 'Festive', 'Flawless', 'Fresh', 'Full', 'Glorious', 'Good', 'Graceful', 'Hard', 'Harsh', 'Healthy', 'Heavy', 'Historical', 'Horrible', 'Important', 'Interesting', 'Juvenile', 'Lacking', 'Lame', 'Large', 'Lavish', 'Lean', 'Less', 'Lethal', 'Lonely', 'Lovely', 'Macabre', 'Magnificent', 'Masculine', 'Mature', 'Messy', 'Mighty', 'Military', 'Modern', 'Extravagant', 'Mundane', 'Mysterious', 'Natural', 'Nondescript', 'Odd', 'Pale', 'Petite', 'Poor', 'Powerful', 'Quaint', 'Rare', 'Reassuring', 'Remarkable', 'Rotten', 'Rough', 'Ruined', 'Rustic', 'Scary', 'Simple', 'Small', 'Smelly', 'Smooth', 'Soft', 'Strong', 'Tranquil', 'Ugly', 'Valuable', 'Warlike', 'Warm', 'Watery', 'Weak', 'Young'
    ]);
    static Action1 = new ListTable([
        'Attainment', 'Starting', 'Neglect', 'Fight', 'Recruit', 'Triumph', 'Violate', 'Oppose', 'Malice', 'Communicate', 'Persecute', 'Increase', 'Decrease', 'Abandon', 'Gratify', 'Inquire', 'Antagonize', 'Move', 'Waste', 'Truce', 'Release', 'Befriend', 'Judge', 'Desert', 'Dominate', 'Procrastinate', 'Praise', 'Separate', 'Take', 'Break', 'Heal', 'Delay', 'Stop', 'Lie', 'Return', 'Imitate', 'Struggle', 'Inform', 'Bestow', 'Postpone', 'Expose', 'Haggle', 'Imprison', 'Release', 'Celebrate', 'Develop', 'Travel', 'Block', 'Harm', 'Debase', 'Overindulge', 'Adjourn', 'Adversity', 'Kill', 'Disrupt', 'Usurp', 'Create', 'Betray', 'Agree', 'Abuse', 'Oppress', 'Inspect', 'Ambush', 'Spy', 'Attach', 'Carry', 'Open', 'Carelessness', 'Ruin', 'Extravagance', 'Trick', 'Arrive', 'Propose', 'Divide', 'Refuse', 'Mistrust', 'Deceive', 'Cruelty', 'Intolerance', 'Trust', 'Excitement', 'Activity', 'Assist', 'Care', 'Negligence', 'Passion', 'Work', 'Control', 'Attract', 'Failure', 'Pursue', 'Vengeance', 'Proceedings', 'Dispute', 'Punish', 'Guide', 'Transform', 'Overthrow', 'Oppress', 'Change'
    ]);
    static Action2 = new ListTable([
        'Goals', 'Dreams', 'Environment', 'Outside', 'Inside', 'Reality', 'Allies', 'Enemies', 'Evil', 'Good', 'Emotions', 'Opposition', 'War', 'Peace', 'Innocent', 'Love', 'Spirit', 'Intellect', 'Ideas', 'Joy', 'Messages', 'Energy', 'Balance', 'Tension', 'Friendship', 'Physical', 'Project', 'Pleasures', 'Pain', 'Possessions', 'Benefits', 'Plans', 'Lies', 'Expectations', 'Legal', 'Bureaucracy', 'Business', 'Path', 'News', 'Exterior', 'Advice', 'Plot', 'Competition', 'Prison', 'Illness', 'Food', 'Attention', 'Success', 'Failure', 'Travel', 'Jealousy', 'Dispute', 'Home', 'Investment', 'Suffering', 'Wishes', 'Tactics', 'Stalemate', 'Randomness', 'Misfortune', 'Death', 'Disruption', 'Power', 'Burden', 'Intrigues', 'Fears', 'Ambush', 'Rumor', 'Wounds', 'Extravagance', 'Representative', 'Adversities', 'Opulence', 'Liberty', 'Military', 'Mundane', 'Trials', 'Masses', 'Vehicle', 'Art', 'Victory', 'Dispute', 'Riches', 'Normal', 'Technology', 'Hope', 'Magic', 'Illusions', 'Portals', 'Danger', 'Weapons', 'Animals', 'Weather', 'Elements', 'Nature', 'Masses', 'Leadership', 'Fame', 'Anger', 'Information'
    ]);
    static EventFocusStandard = new RangeTable([
        new RangeTableRow(1, 7, 'Remote event'),
        new RangeTableRow(8, 28, 'NPC Action'),
        new RangeTableRow(29, 35, 'Introduce a new NPC'),
        new RangeTableRow(36, 45, 'Move toward a thread'),
        new RangeTableRow(46, 52, 'Move away from a thread'),
        new RangeTableRow(53, 55, 'Close a thread'),
        new RangeTableRow(56, 67, 'PC negative'),
        new RangeTableRow(68, 75, 'PC positive'),
        new RangeTableRow(76, 83, 'Ambiguous event'),
        new RangeTableRow(84, 92, 'NPC negative'),
        new RangeTableRow(93, 100, 'NPC positive'),
    ]);
    static EventFocusHorror = new RangeTable([
        new RangeTableRow(1, 10, 'Horror - PC'),
        new RangeTableRow(11, 23, 'Horror - NPC'),
        new RangeTableRow(24, 30, 'Remote event'),
        new RangeTableRow(31, 49, 'NPC action'),
        new RangeTableRow(50, 52, 'New NPC'),
        new RangeTableRow(53, 55, 'Move toward a thread'),
        new RangeTableRow(56, 62, 'Move away from a thread'),
        new RangeTableRow(63, 72, 'PC negative'),
        new RangeTableRow(73, 75, 'PC positive'),
        new RangeTableRow(76, 82, 'Ambiguous event'),
        new RangeTableRow(83, 97, 'NPC negative'),
        new RangeTableRow(98, 100, 'NPC positive'),
    ]);
    static EventFocusActionAdventure = new RangeTable([
        new RangeTableRow(1, 16, 'Action!'),
        new RangeTableRow(17, 24, 'Remote event'),
        new RangeTableRow(25, 44, 'NPC action'),
        new RangeTableRow(45, 52, 'New NPC'),
        new RangeTableRow(53, 56, 'Move toward a thread'),
        new RangeTableRow(57, 64, 'Move away from a thread'),
        new RangeTableRow(65, 76, 'PC negative'),
        new RangeTableRow(77, 80, 'PC positive'),
        new RangeTableRow(81, 84, 'Ambiguous event'),
        new RangeTableRow(85, 96, 'NPC negative'),
        new RangeTableRow(97, 100, 'NPC positive'),
    ]);
    static EventFocusMystery = new RangeTable([
        new RangeTableRow(1, 8, 'Remote event'),
        new RangeTableRow(9, 20, 'NPC action'),
        new RangeTableRow(21, 32, 'New NPC'),
        new RangeTableRow(33, 52, 'Move toward a thread'),
        new RangeTableRow(53, 64, 'Move away from a thread'),
        new RangeTableRow(65, 72, 'PC negative'),
        new RangeTableRow(73, 80, 'PC positive'),
        new RangeTableRow(81, 88, 'Ambiguous event'),
        new RangeTableRow(89, 96, 'NPC negative'),
        new RangeTableRow(97, 100, 'NPC positive'),
    ]);
    static EventFocusSocial = new RangeTable([
        new RangeTableRow(1, 12, 'Drop a bomb!'),
        new RangeTableRow(13, 24, 'Remote event'),
        new RangeTableRow(25, 36, 'NPC action'),
        new RangeTableRow(37, 44, 'New NPC'),
        new RangeTableRow(45, 56, 'Move toward a thread'),
        new RangeTableRow(57, 60, 'Move away from a thread'),
        new RangeTableRow(61, 64, 'Close a thread'),
        new RangeTableRow(65, 72, 'PC negative'),
        new RangeTableRow(73, 80, 'PC positive'),
        new RangeTableRow(81, 92, 'Ambiguous event'),
        new RangeTableRow(93, 96, 'NPC negative'),
        new RangeTableRow(97, 100, 'NPC positive'),
    ]);
    static EventFocusPersonal = new RangeTable([
        new RangeTableRow(1, 7, 'Remote event'),
        new RangeTableRow(8, 24, 'NPC action'),
        new RangeTableRow(25, 28, 'PC NPC action'),
        new RangeTableRow(29, 35, 'New NPC'),
        new RangeTableRow(36, 42, 'Move toward a thread'),
        new RangeTableRow(43, 45, 'Move toward a PC thread'),
        new RangeTableRow(46, 50, 'Move away from a thread'),
        new RangeTableRow(51, 52, 'Move away from a PC thread'),
        new RangeTableRow(53, 54, 'Close thread'),
        new RangeTableRow(55, 55, 'Close PC thread'),
        new RangeTableRow(56, 67, 'PC negative'),
        new RangeTableRow(68, 75, 'PC positive'),
        new RangeTableRow(76, 83, 'Ambiguous event'),
        new RangeTableRow(84, 90, 'NPC negative'),
        new RangeTableRow(91, 92, 'PC NPC negative'),
        new RangeTableRow(93, 99, 'NPC positive'),
        new RangeTableRow(100, 100, 'PC NPC positive'),
    ]);
    static EventFocusEpic = new RangeTable([
        new RangeTableRow(1, 12, 'Thread escalates'),
        new RangeTableRow(13, 16, 'Remote event'),
        new RangeTableRow(17, 30, 'NPC action'),
        new RangeTableRow(31, 42, 'New NPC'),
        new RangeTableRow(43, 46, 'Move toward a thread'),
        new RangeTableRow(47, 58, 'Move away from a thread'),
        new RangeTableRow(59, 72, 'PC negative'),
        new RangeTableRow(73, 80, 'PC positive'),
        new RangeTableRow(81, 84, 'Ambiguous event'),
        new RangeTableRow(85, 92, 'NPC negative'),
        new RangeTableRow(93, 100, 'NPC positive'),
    ]);
}