---
layout: dcc_patron
title: "Nintoq the Inquisitive"
date: 2013-10-01 12:43:00
group: DCC
type: Patron
categories: "Dungeon Crawl Classics"
tags: [ DCC, Patron, Spell ]
taint:
  d6:
    1: Librarian. Spellcaster is easily distracted by loud noises, and must pass a will check to comprehend anything louder than normal speaking voice.
    2: Scribe. The spellcaster's fingertips drip ink, and their lip and toungue get permanent ink stains on them.
    3: Librarian 2. All spellchecks are at -1 in a cacophonous environment. +1 in a silent environment.
    4: Scribe 2. Compounding 2% chance that any given conversation will be transcribed onto the spellcaster's skin. Only the spellcaster, or another minion of Nintoq, can read the text. The text fades after 24 hours.
    5: Researcher. The spellcaster must make a will save to avoid reading any book sees that is not his own.
    6: 
spellburn:
  d4:
    1: Dozens of writing quills stab into the spellcaster's arms and shoulders, sucking up blood like ink, (str, dex, con loss) until the spellburn is recovered.
    2: No immediate attribute loss. The spellcaster has 24 hours to bring Nintoq a piece of information not already known, or they will be hit with a double spellburn at the end of the 24 hours.
    3: Nintoq borrows the spellcaster's eyesight to better help his research. In addition to attribute loss, the spellcaster is blind until the spellburn is recovered.
    4: In addition to attribute loss, all of the spellcaster's written materials are unwritten. Scrolls, spellbooks, maps, notes, tattoos etc. They are restored in 24 hours, after Nintoq has gleaned all he can from them. Anything written on the blank pages is lost when the original contents are restored.
invoke:
  12-16:
  17-23:
  24-28:
  29-32:
  33+:
spells:
  -
    name: "Nintoq's Compelling Jingle"
    shortname: "jingle"
    level: "Wizard 2"
    range: "N/A"
    duration: "varies<sup>&dagger;</sup>"
    cast: "1 turn per bell"
    save: "N/A"
    description: Used with <a href="#bells"><em>Nintoq's Bells of the Sepulchre</em></a> to question the dead.
    text: |
      This spell will compel the spirit to manifest for the duration determined when creating the bells. 
      If the caster has bound the spirit with multiple bells, they may roll a bonus die in addition to their action die. 
      For 2 bells, +1d3. For 3 bells, +1d6. For 4 bells, +1d10.
      If the spirit was originally bound by a different spellcaster, modify the action die -1d.
    manifestation: Ghostly presence. Judge's choice.
    corruption:
    misfire: 
      "d8":
        "1": The bells shatter. The caster permanently loses one ability point per bell. <em>+1 Major corruption</em>.
        "2-5": The caster is overwhelmed by the spirit world, and has a -2 on all rolls for the duration of the manifestation (determined when the bells were bound). <em>+1 Minor corruption</em>.
        "6-8": 
          "The wrong spirit manifests.":
            "d4":
              "1": Most recently deceased family member of the caster.
              "2": Last living, sentient creature killed by the caster, or <em>+1 Minor corruption</em>, if it would be the spirit bound by the bell(s).
              "3": A powerful wizard projecting himself into the astral plane.
              "4": A demon. Type &lt;number of bells used&gt; of the <em>spirit's</em> patron/god.
    spellcheck:
      "< 4": Failure and worse! Spell lost, <em>Patron taint</em> + misfire.
      "5-8": Failure. Spell Lost.
      "9-12": Failure.
      "13-20": The spirit is compelled to answer CL yes/no or very simple (one or two word answers) questions truthfully.
      "20-24": The spirit is compelled to answer CL/2 questions truthfully.
      "25-28": |
        The spirit is compelled to answer CL/4 questions truthfully and completely, including offering information of interest 
        (e.g., what types of traps and monsters are in the temple where the golden whatsit is kept, and how to avoid them).
      "29-34": |
        The spirit can be compelled to answer one question fully and truthfully. 
        This includes "researching" the question by returning to the astral plane and searching for the answer.
      "35+": |
        The spirit is compelled to assist the caster in any way in both the astral and corporeal planes, and answer one question per the previous result. 
        This assistance lasts the length of the manifestation.<sup>&dagger;</sup>
      " ": <sup>&dagger;</sup>See <a href="#bells"><em>Nintoq's Bells of the Sepulchre</em></a>	  
  -
    name: "Nintoq's Bells of the Sepulchure"
    shortname: "bells"
    level: "Wizard 3"
    range: "N/A"
    duration: "N/A"
    cast: "1 day per bell"
    save: "N/A"
    description: |
      The spellcaster creates special bells that bind the spirits of the dead, 
      and compel answers from them using the separate spell
      <a href="#jingle"><em>Nintoq's Compelling Jingle</em></a>. 
    text: |
      The spellcaster creates one to four small bells, the clappers for each being crafted from a bone from the corpse of the spirit being bound. 
      Each bell beyond the first results in a -1 modifier to the spellcheck roll for the binding. 
      These clappers must also be encrusted with gold and/or gems worth at least 100gp each. 
      The rituals of binding require a day per bell, along with a Spellburn of CL + 1 per bell. 
      Once the ritual has succeeded, no additional bells may be bound to the spirit.
    manifestation: Ritual Magic. Judge's choice.
    corruption:
    misfire:
      "d5":
        "1-4": |
          Loss of materials, including the clapper bones. 
          Incur the ire of the spirit, causing the spirit to haunt the caster for &lt;number of bells attempted&gt;d6 + CL months. 
          Once a week, this spirit may manifest itself in the physical realm, and be seen and heard by anyone. Usually at the most inconvenient time. 
          The spellcaster may never use this spell with the spirit, and will never get any willing cooperation from the spirit again.
        "5": |
          Loss of materials, including the clapper bones. Incur the wrath of the spirit's god, patron, ancestor, etc.
          Permanent loss of 1 Luck + -2 to all skill checks vs. undead for &lt;number of bells attempted&gt;d4 + CL months.
          The spellcaster may never use this spell with the spirit, and will never get any willing cooperation from the spirit again.
    spellcheck:
      "< 2": Failure and worse! Loss of spell, materials, attributes + <em>Patron taint</em> + misfire.
      "2-6": Failure. Spell lost. Loss of materials and attributes, including the clapper bones.
      "7-10": Failure. Spell lost. Loss of materials and attributes, but not the clapper bones.
      "11-12": Failure.
      "13-22": The caster can compel the spirit to manifest itself<sup>&dagger;</sup> for CL minutes, once per month.
      "23-32": The caster can compel the spirit to manifest itself<sup>&dagger;</sup> for CL hours, once per month.
      "32+": The caster can compel the spirit to manifest itself<sup>&dagger;</sup> for CL days, once per month.
      " ": <sup>&dagger;</sup> See <a href="#jingle"><em>Nintoq's Compelling Jingle</em></a>
---
# Nintoq the Inquisitive

Nintoq is an aloof being, determined to know all there is to know about magic.
He has been researching various arcane topics for hundreds, if not thousands of years. 
Most of his spells deal with gathering information, as do his quests. 
Nintoq is a very greedy patron, and will jealously guard his secrets, although the nature of those secrets can be quite inscrutable.
He is also somewhat absent-minded, and has been known to bestow powerful knowledge for seemingly trivial tasks.