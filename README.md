# eq-btt

### Reference
* BTT docs (they kinda suck): https://docs.folivora.ai/docs/1106_java_script.html
* Some BTT examples (typescript, kinda annoying to read through): https://github.com/Worie/btt/tree/master/examples
* Color name package options: https://codepen.io/meodai/full/VMpNdQ/
* Spell properties from spells_en.txt: https://www.takproject.net/forums/index.php?threads/bettertouchtool-and-eq.16953/reply&quote=88267
* Some regex for matching combat logs: https://github.com/rumstil/eqlogparser/tree/master/parser/core/Events
   
### Started and/or Works
* BTT messaging [works]
    * BTT colors [doesn't work]
* Player HP tracking [works]
    * Heals [works]
    * Regen [sorta works, more precise with db update]
* Player DPS tracking [wonky]
* Pet DPS tracking [started]
* Current /loc x & y [works]
* Current heading (via Sense Heading) [works]
* Current zone [works, needs improvements]
* Database implementation [rxdb, started]
* Parsing spells for db [started]

### I'll get there...
* Cooldown timers
* Buff timers
* DoT timers
* Your boxed character is getting pummeled
* FD “enemies have forgotten you” alert - does this show on TAKP?
* rune remaining (rune amount - hits)
* file outputs for DPS parsing
    * charts?
