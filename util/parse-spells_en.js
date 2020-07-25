const spellsFileLoc = '/users/dslaught/Desktop/PLAY/TAKP/spells_en.txt'
const fs = require('fs')
const file = fs.readFileSync(spellsFileLoc).toString()

const spells = []

for (const line of file.split('\r\n')) {
    const spell = {}
    const fields = line.split('^')

    // Basing guesses on fields from:
    // Healing spell: http://lucy.alkabor.com/spell_1455.html "Wave of Healing"
    // DD: 
    // AoE
    // DoT:
    // Buff: 
    // Debuff: 
    // Recourse: 

    /*
    BASICS
    */
    spell.id = fields[0] // The literal spell ID
    spell.mana = fields[19] // Mana cost
    spell.range = fields[9] // Range
    spell.aoerange = fields[10] // 
    spell.name = fields[1] // Name of spell
    spell.pushback = fields[11]
    spell.pushup = fields[12]
    spell.AEDuration = fields[18]
    spell.recourse_spell_id = fields[137] // Spell ID of recourse? I'll need that....

    spell.cast_time = fields[13] // Cast time in ms
    spell.recovery_time = fields[14] // Fizzle recovery time in ms
    spell.recast_time = fields[15] // TIme til you can recast in ms
    spell.buffdurationformula = fields[16] // ???
    spell.buffduration = fields[17]

    spell.targettype = fields[86]
    spell.basediff = fields[87]
    spell.zonetype = fields[89]
    spell.EnvironmentType = fields[90]
    spell.TimeOfDay = fields[91]
    spell.TravelType = fields[109]
    spell.SpellAffectIndex = fields[110]
    spell.disallow_sit = fields[111]
    spell.npc_no_cast = fields[129]
    spell.ai_pt_bonus = fields[130]
    spell.spellanim = fields[132]
    spell.uninterruptable = fields[133]
    spell.ResistDiff = fields[134]
    spell.dot_stacking_exempt = fields[135]
    spell.no_partial_resist = fields[138]
    spell.LightType = fields[70]
    spell.goodEffect = fields[71]
    spell.resisttype = fields[73]

    spell.CastingAnim = fields[107]
    spell.TargetAnim = fields[108]
    spell.skill = fields[88]


    /*
    MESSAGES IN LOGS
    Gonna be parsing these
    */
    spell.you_cast = fields[4] // Message when you cast the spell
    spell.other_casts = fields[5] // The message you see when someone else starts casting the spell
    spell.cast_on_you = fields[6] // Message when spell casted on you (buff or not)
    spell.cast_on_other = fields[7] // Message when spell is cast on someone else
    spell.spell_fades = fields[8] // Message when spell fades off of you "You feel dizzy"

    /*
    EFFECT VALUES
    This seems to be where the magic happens
    */
    spell.effect_base_value1 = fields[20] // WoH this is amount healed 
    spell.effect_base_value2 = fields[21]
    spell.effect_base_value3 = fields[22]
    spell.effect_base_value4 = fields[23]
    spell.effect_base_value5 = fields[24]
    spell.effect_base_value6 = fields[25]
    spell.effect_base_value7 = fields[26]
    spell.effect_base_value8 = fields[27]
    spell.effect_base_value9 = fields[28]
    spell.effect_base_value10 = fields[29]
    spell.effect_base_value11 = fields[30]
    spell.effect_base_value12 = fields[31]


    /*
    ICONS
    Would be neat to show spell icons...
    */
    spell.icon = fields[44]
    spell.memicon = fields[45]
    spell.new_icon = fields[131]

    spell.max1 = fields[32]
    spell.max2 = fields[33]
    spell.max3 = fields[34]
    spell.max4 = fields[35]
    spell.max5 = fields[36]
    spell.max6 = fields[37]
    spell.max7 = fields[38]
    spell.max8 = fields[39]
    spell.max9 = fields[40]
    spell.max10 = fields[41]
    spell.max11 = fields[42]
    spell.max12 = fields[43]



    spell.formula1 = fields[58]
    spell.formula2 = fields[59]
    spell.formula3 = fields[60]
    spell.formula4 = fields[61]
    spell.formula5 = fields[62]
    spell.formula6 = fields[63]
    spell.formula7 = fields[64]
    spell.formula8 = fields[65]
    spell.formula9 = fields[66]
    spell.formula10 = fields[67]
    spell.formula11 = fields[68]
    spell.formula12 = fields[69]

    spell.effectid1 = fields[74]
    spell.effectid2 = fields[75]
    spell.effectid3 = fields[76]
    spell.effectid4 = fields[77]
    spell.effectid5 = fields[78]
    spell.effectid6 = fields[79]
    spell.effectid7 = fields[80]
    spell.effectid8 = fields[81]
    spell.effectid9 = fields[82]
    spell.effectid10 = fields[83]
    spell.effectid11 = fields[84]
    spell.effectid12 = fields[85]

    // spell.player_1 = fields[2] // ??? -  Always one of: PLAYER_1, BLUE_TRAIL, BLUE_TR, 0
    // spell.teleport_zone = fields[3] // either 0, blank, or name of zone spell teleports to -- could this be useful?
    // spell.Activated = fields[72] // ??? - one of "", "0", "1", "-1"
    // spell.deleteable = fields[136] // Presumably whether or not you can click the buff/debuff away? Also whether it can be cured?

    /*
    Almost definitely don't care about components or reagents...

    spell.components1 = fields[46]
    spell.components2 = fields[47]
    spell.components3 = fields[48]
    spell.components4 = fields[49]
    spell.component_counts1 = fields[50]
    spell.component_counts2 = fields[51]
    spell.component_counts3 = fields[52]
    spell.component_counts4 = fields[53]
    spell.NoexpendReagent1 = fields[54]
    spell.NoexpendReagent2 = fields[55]
    spell.NoexpendReagent3 = fields[56]
    spell.NoexpendReagent4 = fields[57]
    */

    /*
        These are literally the class number associated with each class and the level they can cast it. 255 = can't cast
        Classes(1-15): 1(Warrior), 2(Cleric), 3(Paladin), 4(Ranger), 5(Sk), 6(Druid), 7(Monk), 8(Bard), 9(Rogue),10(Shaman), 11(Necro), 12(Wiz), 13(Mag), 14(Ench), 15(Beast)
    spell.classes1 = fields[92]
    spell.classes2 = fields[93]
    spell.classes3 = fields[94]
    spell.classes4 = fields[95]
    spell.classes5 = fields[96]
    spell.classes6 = fields[97]
    spell.classes7 = fields[98]
    spell.classes8 = fields[99]
    spell.classes9 = fields[100]
    spell.classes10 = fields[101]
    spell.classes11 = fields[102]
    spell.classes12 = fields[103]
    spell.classes13 = fields[104]
    spell.classes14 = fields[105]
    spell.classes15 = fields[106]
    */

    /*
    This is presumably deity restrictions on casting spells. Seems to be 0 or -1
    spell.deities0 = fields[112]
    spell.deities1 = fields[113]
    spell.deities2 = fields[114]
    spell.deities3 = fields[115]
    spell.deities4 = fields[116]
    spell.deities5 = fields[117]
    spell.deities6 = fields[118]
    spell.deities7 = fields[119]
    spell.deities8 = fields[120]
    spell.deities9 = fields[121]
    spell.deities10 = fields[122]
    spell.deities11 = fields[123]
    spell.deities12 = fields[124]
    spell.deities13 = fields[125]
    spell.deities14 = fields[126]
    spell.deities15 = fields[127]
    spell.deities16 = fields[128]
    */

    /*
        None of these showed up for me? Maybe mac only?

    if (fields.Length > 139) {
        spell.field139 = fields[139] // all "0", might be "small_targets_only"
        spell.field140 = fields[140] // all "0", might be "use_persistent_particles"
        // AK client doesn't even read the fields below from the data file
        spell.short_buff_box = fields[141]
        spell.descnum = fields[142]
        spell.typedescnum = fields[143]
        spell.effectdescnum = fields[144]
        spell.effectdescnum2 = fields[145]
        spell.npc_no_los = fields[146]
    }

    */

    spells.push(spell)
}

fs.writeFileSync('./spells.json', JSON.stringify(spells))