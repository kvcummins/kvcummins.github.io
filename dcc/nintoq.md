---
layout: dcc_patron
title: "Nintoq the Inquisitive"
date: 2013-10-01 12:43:00
group: DCC
type: Patron
categories: "Dungeon Crawl Classics"
tags: [ DCC, Patron, Spell ]
spells:
  -
    name: "Nintoq's Bells of the Sepulchure"
    shortname: "nintoqs_bells"
    description: |
      The spellcaster creates special bells that can bind the spirits of the dead, 
      and compel answers from them using the spell
      <a href="#nintoqs_jingle"><em>Nintoq's Compelling Jingle</em></a>. 
    text: |
      The spellcaster creates one to four small bells, the clappers for each being crafted from a bone from the corpse of the spirit being bound. 
      Each bell beyond the first results in a -1 modifier to the spellcheck roll for the binding. 
      These clappers must also be encrusted with gold and/or gems worth at least 100gp each. 
      The rituals of binding require a day per bell, along with a Spellburn of CL per bell. 
      Once the ritual has succeeded, no additional bells may be bound to the spirit by the spellcaster.
    manifestation: Ritual Magic. Judge's choice.
    misfire: |
      Loss of materials, including the clapper bones. Incur the ire of the spirit, causing the spirit to haunt the caster for &lt;number of bells attempted&gt;d6 + CL months. 
      Once a week, this spirit may manifest itself in the physical realm, and be seen and heard by anyone. 
      The spellcaster may never use this spell with the spirit, and will likely never get any willing cooperation from the spirit again.
    spellcheck:
      "< 6": Failure. Loss of materials and attributes, including the clapper bones.
      "7-10": Failure. Loss of materials and attributes, but not the clapper bones.
      "11-12": Failure.
      "13-24": The caster can compel the spirit to manifest itself<sup>&dagger;</sup> for CL minutes, once per month.
      "25-32": The caster can compel the spirit to manifest itself<sup>&dagger;</sup> for CL hours, once per month.
      "32+": The caster can compel the spirit to manifest itself<sup>&dagger;</sup> for CL days, once per month.
      " ": <sup>&dagger;</sup> See <a href="#nintoqs_jingle"><em>Nintoq's Compelling Jingle</em></a>
  -
    name: "Nintoq's Compelling Jingle"
    shortname: "nintoqs_jingle"
    description: Used with <a href="#nintoqs_bells"><em>Nintoq's Bells of the Sepulchre</em></a> to question the dead.
    text: |
      This spell will compel the spirit to manifest for the duration determined when creating the bells. 
      If the caster has bound the spirit with multiple bells, they may roll a bonus die. 
      For 2 bells, +1d3. For 3 bells, +1d6. For 4 bells, +1d10.
    manifestation: Ghostly presence. Judge's choice.
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
              "4": A demon.
    spellcheck:
      "< 4": Failure and worse. Spell lost, <em>Patron corruption</em>, or <em>+1 Minor Corruption.</em>
      "5-8": Failure. Spell Lost.
      "9-12": Failure.
      "13-20": The spirit is compelled to answer CL yes/no or very simple (one or two word answers) questions truthfully.
      "20-24": The spirit is compelled to answer CL/2 questions truthfully.
      "25-28": |
        The spirit is compelled to answer CL/4 questions truthfully and completely, including offering information of interest 
        (e.g., what types of traps and monsters are in the temple where the golden whatsit is kept, and how to avoid them).
      "29-34": The spirit can be compelled to answer one question fully and truthfully. This includes "researching" the question by returning to the astral plane and searching for the answer.
      "35+": The spirit is compelled to assist the caster in any way in both the astral and corporeal planes, and answer one question per the previous result. This assistance lasts the length of the manifestation.<sup>&dagger;</sup>
      " ": <sup>&dagger;</sup>See <a href="#nintoqs_bells"><em>Nintoq's Bells of the Sepulchre</em></a>	  
---
# Nintoq the Inquisitive

Nintoq is an aloof being, determined to know all there is to know. He has been researching topics for hundreds, if not thousands of years. Most of his spells deal with gathering information, as do his quests. Below, you will find a small selection of spells that Nintoq has developed and honed over his lifetime.