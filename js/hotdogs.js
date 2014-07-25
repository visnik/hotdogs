var tempestCardList = ["http://mtgimage.com/set/tmp/abandon%20hope.jpg",
    "http://mtgimage.com/set/tmp/advance%20scout.jpg",
    "http://mtgimage.com/set/tmp/aftershock.jpg",
    "http://mtgimage.com/set/tmp/altar%20of%20dementia.jpg",
    "http://mtgimage.com/set/tmp/aluren.jpg",
    "http://mtgimage.com/set/tmp/ancient%20runes.jpg",
    "http://mtgimage.com/set/tmp/ancient%20tomb.jpg",
    "http://mtgimage.com/set/tmp/angelic%20protector.jpg",
    "http://mtgimage.com/set/tmp/anoint.jpg",
    "http://mtgimage.com/set/tmp/apes%20of%20rath.jpg",
    "http://mtgimage.com/set/tmp/apocalypse.jpg",
    "http://mtgimage.com/set/tmp/armor%20sliver.jpg",
    "http://mtgimage.com/set/tmp/armored%20pegasus.jpg",
    "http://mtgimage.com/set/tmp/auratog.jpg",
    "http://mtgimage.com/set/tmp/avenging%20angel.jpg",
    "http://mtgimage.com/set/tmp/barbed%20sliver.jpg",
    "http://mtgimage.com/set/tmp/bayou%20dragonfly.jpg",
    "http://mtgimage.com/set/tmp/bellowing%20fiend.jpg",
    "http://mtgimage.com/set/tmp/benthic%20behemoth.jpg",
    "http://mtgimage.com/set/tmp/blood%20frenzy.jpg",
    "http://mtgimage.com/set/tmp/blood%20pet.jpg",
    "http://mtgimage.com/set/tmp/boil.jpg",
    "http://mtgimage.com/set/tmp/booby%20trap.jpg",
    "http://mtgimage.com/set/tmp/bottle%20gnomes.jpg",
    "http://mtgimage.com/set/tmp/bounty%20hunter.jpg",
    "http://mtgimage.com/set/tmp/broken%20fall.jpg",
    "http://mtgimage.com/set/tmp/caldera%20lake.jpg",
    "http://mtgimage.com/set/tmp/canopy%20spider.jpg",
    "http://mtgimage.com/set/tmp/canyon%20drake.jpg",
    "http://mtgimage.com/set/tmp/canyon%20wildcat.jpg",
    "http://mtgimage.com/set/tmp/capsize.jpg",
    "http://mtgimage.com/set/tmp/carrionette.jpg",
    "http://mtgimage.com/set/tmp/chaotic%20goo.jpg",
    "http://mtgimage.com/set/tmp/charging%20rhino.jpg",
    "http://mtgimage.com/set/tmp/chill.jpg",
    "http://mtgimage.com/set/tmp/choke.jpg",
    "http://mtgimage.com/set/tmp/cinder%20marsh.jpg",
    "http://mtgimage.com/set/tmp/circle%20of%20protection%20black.jpg",
    "http://mtgimage.com/set/tmp/circle%20of%20protection%20blue.jpg",
    "http://mtgimage.com/set/tmp/circle%20of%20protection%20green.jpg",
    "http://mtgimage.com/set/tmp/circle%20of%20protection%20red.jpg",
    "http://mtgimage.com/set/tmp/circle%20of%20protection%20shadow.jpg",
    "http://mtgimage.com/set/tmp/circle%20of%20protection%20white.jpg",
    "http://mtgimage.com/set/tmp/clergy%20en-vec.jpg",
    "http://mtgimage.com/set/tmp/clot%20sliver.jpg",
    "http://mtgimage.com/set/tmp/cloudchaser%20eagle.jpg",
    "http://mtgimage.com/set/tmp/coercion.jpg",
    "http://mtgimage.com/set/tmp/coffin%20queen.jpg",
    "http://mtgimage.com/set/tmp/coiled%20tinviper.jpg",
    "http://mtgimage.com/set/tmp/cold%20storage.jpg",
    "http://mtgimage.com/set/tmp/commander%20greven%20il-vec.jpg",
    "http://mtgimage.com/set/tmp/corpse%20dance.jpg",
    "http://mtgimage.com/set/tmp/counterspell.jpg",
    "http://mtgimage.com/set/tmp/crazed%20armodon.jpg",
    "http://mtgimage.com/set/tmp/crown%20of%20flames.jpg",
    "http://mtgimage.com/set/tmp/cursed%20scroll.jpg",
    "http://mtgimage.com/set/tmp/dark%20banishing.jpg",
    "http://mtgimage.com/set/tmp/dark%20ritual.jpg",
    "http://mtgimage.com/set/tmp/darkling%20stalker.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20embrace.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20ghoul.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20horror.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20marauder.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20mercenary.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20mindripper.jpg",
    "http://mtgimage.com/set/tmp/dauthi%20slayer.jpg",
    "http://mtgimage.com/set/tmp/deadshot.jpg",
    "http://mtgimage.com/set/tmp/death%20pits%20of%20rath.jpg",
    "http://mtgimage.com/set/tmp/diabolic%20edict.jpg",
    "http://mtgimage.com/set/tmp/dirtcowl%20wurm.jpg",
    "http://mtgimage.com/set/tmp/disenchant.jpg",
    "http://mtgimage.com/set/tmp/dismiss.jpg",
    "http://mtgimage.com/set/tmp/disturbed%20burial.jpg",
    "http://mtgimage.com/set/tmp/dracoplasm.jpg",
    "http://mtgimage.com/set/tmp/dread%20of%20night.jpg",
    "http://mtgimage.com/set/tmp/dream%20cache.jpg",
    "http://mtgimage.com/set/tmp/dregs%20of%20sorrow.jpg",
    "http://mtgimage.com/set/tmp/duplicity.jpg",
    "http://mtgimage.com/set/tmp/earthcraft.jpg",
    "http://mtgimage.com/set/tmp/echo%20chamber.jpg",
    "http://mtgimage.com/set/tmp/eladamri%27s%20vineyard.jpg",
    "http://mtgimage.com/set/tmp/eladamri%2c%20lord%20of%20leaves.jpg",
    "http://mtgimage.com/set/tmp/elite%20javelineer.jpg",
    "http://mtgimage.com/set/tmp/elven%20warhounds.jpg",
    "http://mtgimage.com/set/tmp/elvish%20fury.jpg",
    "http://mtgimage.com/set/tmp/emerald%20medallion.jpg",
    "http://mtgimage.com/set/tmp/emmessi%20tome.jpg",
    "http://mtgimage.com/set/tmp/endless%20scream.jpg",
    "http://mtgimage.com/set/tmp/energizer.jpg",
    "http://mtgimage.com/set/tmp/enfeeblement.jpg",
    "http://mtgimage.com/set/tmp/enraging%20licid.jpg",
    "http://mtgimage.com/set/tmp/ertai%27s%20meddling.jpg",
    "http://mtgimage.com/set/tmp/escaped%20shapeshifter.jpg",
    "http://mtgimage.com/set/tmp/essence%20bottle.jpg",
    "http://mtgimage.com/set/tmp/evincar%27s%20justice.jpg",
    "http://mtgimage.com/set/tmp/excavator.jpg",
    "http://mtgimage.com/set/tmp/extinction.jpg",
    "http://mtgimage.com/set/tmp/fevered%20convulsions.jpg",
    "http://mtgimage.com/set/tmp/field%20of%20souls.jpg",
    "http://mtgimage.com/set/tmp/fighting%20drake.jpg",
    "http://mtgimage.com/set/tmp/firefly.jpg",
    "http://mtgimage.com/set/tmp/fireslinger.jpg",
    "http://mtgimage.com/set/tmp/flailing%20drake.jpg",
    "http://mtgimage.com/set/tmp/flickering%20ward.jpg",
    "http://mtgimage.com/set/tmp/flowstone%20giant.jpg",
    "http://mtgimage.com/set/tmp/flowstone%20salamander.jpg",
    "http://mtgimage.com/set/tmp/flowstone%20sculpture.jpg",
    "http://mtgimage.com/set/tmp/flowstone%20wyvern.jpg",
    "http://mtgimage.com/set/tmp/fool%27s%20tome.jpg",
    "http://mtgimage.com/set/tmp/forest.jpg",
    "http://mtgimage.com/set/tmp/forest1.jpg",
    "http://mtgimage.com/set/tmp/forest2.jpg",
    "http://mtgimage.com/set/tmp/forest3.jpg",
    "http://mtgimage.com/set/tmp/forest4.jpg",
    "http://mtgimage.com/set/tmp/frog%20tongue.jpg",
    "http://mtgimage.com/set/tmp/fugitive%20druid.jpg",
    "http://mtgimage.com/set/tmp/furnace%20of%20rath.jpg",
    "http://mtgimage.com/set/tmp/fylamarid.jpg",
    "http://mtgimage.com/set/tmp/gallantry.jpg",
    "http://mtgimage.com/set/tmp/gaseous%20form.jpg",
    "http://mtgimage.com/set/tmp/gerrard%27s%20battle%20cry.jpg",
    "http://mtgimage.com/set/tmp/ghost%20town.jpg",
    "http://mtgimage.com/set/tmp/giant%20crab.jpg",
    "http://mtgimage.com/set/tmp/giant%20strength.jpg",
    "http://mtgimage.com/set/tmp/goblin%20bombardment.jpg",
    "http://mtgimage.com/set/tmp/gravedigger.jpg",
    "http://mtgimage.com/set/tmp/grindstone.jpg",
    "http://mtgimage.com/set/tmp/hand%20to%20hand.jpg",
    "http://mtgimage.com/set/tmp/hanna%27s%20custody.jpg",
    "http://mtgimage.com/set/tmp/harrow.jpg",
    "http://mtgimage.com/set/tmp/havoc.jpg",
    "http://mtgimage.com/set/tmp/heart%20sliver.jpg",
    "http://mtgimage.com/set/tmp/heartwood%20dryad.jpg",
    "http://mtgimage.com/set/tmp/heartwood%20giant.jpg",
    "http://mtgimage.com/set/tmp/heartwood%20treefolk.jpg",
    "http://mtgimage.com/set/tmp/helm%20of%20possession.jpg",
    "http://mtgimage.com/set/tmp/hero%27s%20resolve.jpg",
    "http://mtgimage.com/set/tmp/horned%20sliver.jpg",
    "http://mtgimage.com/set/tmp/horned%20turtle.jpg",
    "http://mtgimage.com/set/tmp/humility.jpg",
    "http://mtgimage.com/set/tmp/imps%27%20taunt.jpg",
    "http://mtgimage.com/set/tmp/insight.jpg",
    "http://mtgimage.com/set/tmp/interdict.jpg",
    "http://mtgimage.com/set/tmp/intuition.jpg",
    "http://mtgimage.com/set/tmp/invulnerability.jpg",
    "http://mtgimage.com/set/tmp/island.jpg",
    "http://mtgimage.com/set/tmp/island1.jpg",
    "http://mtgimage.com/set/tmp/island2.jpg",
    "http://mtgimage.com/set/tmp/island3.jpg",
    "http://mtgimage.com/set/tmp/island4.jpg",
    "http://mtgimage.com/set/tmp/jackal%20pup.jpg",
    "http://mtgimage.com/set/tmp/jet%20medallion.jpg",
    "http://mtgimage.com/set/tmp/jinxed%20idol.jpg",
    "http://mtgimage.com/set/tmp/kezzerdrix.jpg",
    "http://mtgimage.com/set/tmp/kindle.jpg",
    "http://mtgimage.com/set/tmp/knight%20of%20dawn.jpg",
    "http://mtgimage.com/set/tmp/knight%20of%20dusk.jpg",
    "http://mtgimage.com/set/tmp/krakilin.jpg",
    "http://mtgimage.com/set/tmp/leeching%20licid.jpg",
    "http://mtgimage.com/set/tmp/legacy%27s%20allure.jpg",
    "http://mtgimage.com/set/tmp/legerdemain.jpg",
    "http://mtgimage.com/set/tmp/light%20of%20day.jpg",
    "http://mtgimage.com/set/tmp/lightning%20blast.jpg",
    "http://mtgimage.com/set/tmp/lightning%20elemental.jpg",
    "http://mtgimage.com/set/tmp/living%20death.jpg",
    "http://mtgimage.com/set/tmp/lobotomy.jpg",
    "http://mtgimage.com/set/tmp/lotus%20petal.jpg",
    "http://mtgimage.com/set/tmp/lowland%20giant.jpg",
    "http://mtgimage.com/set/tmp/maddening%20imp.jpg",
    "http://mtgimage.com/set/tmp/magmasaur.jpg",
    "http://mtgimage.com/set/tmp/magnetic%20web.jpg",
    "http://mtgimage.com/set/tmp/mana%20severance.jpg",
    "http://mtgimage.com/set/tmp/manakin.jpg",
    "http://mtgimage.com/set/tmp/manta%20riders.jpg",
    "http://mtgimage.com/set/tmp/marble%20titan.jpg",
    "http://mtgimage.com/set/tmp/marsh%20lurker.jpg",
    "http://mtgimage.com/set/tmp/master%20decoy.jpg",
    "http://mtgimage.com/set/tmp/mawcor.jpg",
    "http://mtgimage.com/set/tmp/maze%20of%20shadows.jpg",
    "http://mtgimage.com/set/tmp/meditate.jpg",
    "http://mtgimage.com/set/tmp/metallic%20sliver.jpg",
    "http://mtgimage.com/set/tmp/mindwhip%20sliver.jpg",
    "http://mtgimage.com/set/tmp/minion%20of%20the%20wastes.jpg",
    "http://mtgimage.com/set/tmp/mirri%27s%20guile.jpg",
    "http://mtgimage.com/set/tmp/mnemonic%20sliver.jpg",
    "http://mtgimage.com/set/tmp/mogg%20cannon.jpg",
    "http://mtgimage.com/set/tmp/mogg%20conscripts.jpg",
    "http://mtgimage.com/set/tmp/mogg%20fanatic.jpg",
    "http://mtgimage.com/set/tmp/mogg%20hollows.jpg",
    "http://mtgimage.com/set/tmp/mogg%20raider.jpg",
    "http://mtgimage.com/set/tmp/mogg%20squad.jpg",
    "http://mtgimage.com/set/tmp/mongrel%20pack.jpg",
    "http://mtgimage.com/set/tmp/mountain.jpg",
    "http://mtgimage.com/set/tmp/mountain1.jpg",
    "http://mtgimage.com/set/tmp/mountain2.jpg",
    "http://mtgimage.com/set/tmp/mountain3.jpg",
    "http://mtgimage.com/set/tmp/mountain4.jpg",
    "http://mtgimage.com/set/tmp/mounted%20archers.jpg",
    "http://mtgimage.com/set/tmp/muscle%20sliver.jpg",
    "http://mtgimage.com/set/tmp/natural%20spring.jpg",
    "http://mtgimage.com/set/tmp/nature%27s%20revolt.jpg",
    "http://mtgimage.com/set/tmp/needle%20storm.jpg",
    "http://mtgimage.com/set/tmp/no%20quarter.jpg",
    "http://mtgimage.com/set/tmp/nurturing%20licid.jpg",
    "http://mtgimage.com/set/tmp/opportunist.jpg",
    "http://mtgimage.com/set/tmp/oracle%20en-vec.jpg",
    "http://mtgimage.com/set/tmp/orim%27s%20prayer.jpg",
    "http://mtgimage.com/set/tmp/orim%2c%20samite%20healer.jpg",
    "http://mtgimage.com/set/tmp/overrun.jpg",
    "http://mtgimage.com/set/tmp/pacifism.jpg",
    "http://mtgimage.com/set/tmp/pallimud.jpg",
    "http://mtgimage.com/set/tmp/patchwork%20gnomes.jpg",
    "http://mtgimage.com/set/tmp/pearl%20medallion.jpg",
    "http://mtgimage.com/set/tmp/pegasus%20refuge.jpg",
    "http://mtgimage.com/set/tmp/perish.jpg",
    "http://mtgimage.com/set/tmp/phyrexian%20grimoire.jpg",
    "http://mtgimage.com/set/tmp/phyrexian%20hulk.jpg",
    "http://mtgimage.com/set/tmp/phyrexian%20splicer.jpg",
    "http://mtgimage.com/set/tmp/pincher%20beetles.jpg",
    "http://mtgimage.com/set/tmp/pine%20barrens.jpg",
    "http://mtgimage.com/set/tmp/pit%20imp.jpg",
    "http://mtgimage.com/set/tmp/plains.jpg",
    "http://mtgimage.com/set/tmp/plains1.jpg",
    "http://mtgimage.com/set/tmp/plains2.jpg",
    "http://mtgimage.com/set/tmp/plains3.jpg",
    "http://mtgimage.com/set/tmp/plains4.jpg",
    "http://mtgimage.com/set/tmp/power%20sink.jpg",
    "http://mtgimage.com/set/tmp/precognition.jpg",
    "http://mtgimage.com/set/tmp/propaganda.jpg",
    "http://mtgimage.com/set/tmp/puppet%20strings.jpg",
    "http://mtgimage.com/set/tmp/quickening%20licid.jpg",
    "http://mtgimage.com/set/tmp/rain%20of%20tears.jpg",
    "http://mtgimage.com/set/tmp/rampant%20growth.jpg",
    "http://mtgimage.com/set/tmp/ranger%20en-vec.jpg",
    "http://mtgimage.com/set/tmp/rathi%20dragon.jpg",
    "http://mtgimage.com/set/tmp/rats%20of%20rath.jpg",
    "http://mtgimage.com/set/tmp/reality%20anchor.jpg",
    "http://mtgimage.com/set/tmp/reanimate.jpg",
    "http://mtgimage.com/set/tmp/reap.jpg",
    "http://mtgimage.com/set/tmp/reckless%20spite.jpg",
    "http://mtgimage.com/set/tmp/recycle.jpg",
    "http://mtgimage.com/set/tmp/reflecting%20pool.jpg",
    "http://mtgimage.com/set/tmp/renegade%20warlord.jpg",
    "http://mtgimage.com/set/tmp/repentance.jpg",
    "http://mtgimage.com/set/tmp/respite.jpg",
    "http://mtgimage.com/set/tmp/rolling%20thunder.jpg",
    "http://mtgimage.com/set/tmp/root%20maze.jpg",
    "http://mtgimage.com/set/tmp/rootbreaker%20wurm.jpg",
    "http://mtgimage.com/set/tmp/rootwalla.jpg",
    "http://mtgimage.com/set/tmp/rootwater%20depths.jpg",
    "http://mtgimage.com/set/tmp/rootwater%20diver.jpg",
    "http://mtgimage.com/set/tmp/rootwater%20hunter.jpg",
    "http://mtgimage.com/set/tmp/rootwater%20matriarch.jpg",
    "http://mtgimage.com/set/tmp/rootwater%20shaman.jpg",
    "http://mtgimage.com/set/tmp/ruby%20medallion.jpg",
    "http://mtgimage.com/set/tmp/sacred%20guide.jpg",
    "http://mtgimage.com/set/tmp/sadistic%20glee.jpg",
    "http://mtgimage.com/set/tmp/safeguard.jpg",
    "http://mtgimage.com/set/tmp/salt%20flats.jpg",
    "http://mtgimage.com/set/tmp/sandstone%20warrior.jpg",
    "http://mtgimage.com/set/tmp/sapphire%20medallion.jpg",
    "http://mtgimage.com/set/tmp/sarcomancy.jpg",
    "http://mtgimage.com/set/tmp/scabland.jpg",
    "http://mtgimage.com/set/tmp/scalding%20tongs.jpg",
    "http://mtgimage.com/set/tmp/scorched%20earth.jpg",
    "http://mtgimage.com/set/tmp/scragnoth.jpg",
    "http://mtgimage.com/set/tmp/screeching%20harpy.jpg",
    "http://mtgimage.com/set/tmp/scroll%20rack.jpg",
    "http://mtgimage.com/set/tmp/sea%20monster.jpg",
    "http://mtgimage.com/set/tmp/searing%20touch.jpg",
    "http://mtgimage.com/set/tmp/seeker%20of%20skybreak.jpg",
    "http://mtgimage.com/set/tmp/segmented%20wurm.jpg",
    "http://mtgimage.com/set/tmp/selenia%2c%20dark%20angel.jpg",
    "http://mtgimage.com/set/tmp/serene%20offering.jpg",
    "http://mtgimage.com/set/tmp/servant%20of%20volrath.jpg",
    "http://mtgimage.com/set/tmp/shadow%20rift.jpg",
    "http://mtgimage.com/set/tmp/shadowstorm.jpg",
    "http://mtgimage.com/set/tmp/shatter.jpg",
    "http://mtgimage.com/set/tmp/shimmering%20wings.jpg",
    "http://mtgimage.com/set/tmp/shocker.jpg",
    "http://mtgimage.com/set/tmp/sky%20spirit.jpg",
    "http://mtgimage.com/set/tmp/skyshroud%20condor.jpg",
    "http://mtgimage.com/set/tmp/skyshroud%20elf.jpg",
    "http://mtgimage.com/set/tmp/skyshroud%20forest.jpg",
    "http://mtgimage.com/set/tmp/skyshroud%20ranger.jpg",
    "http://mtgimage.com/set/tmp/skyshroud%20troll.jpg",
    "http://mtgimage.com/set/tmp/skyshroud%20vampire.jpg",
    "http://mtgimage.com/set/tmp/soltari%20crusader.jpg",
    "http://mtgimage.com/set/tmp/soltari%20emissary.jpg",
    "http://mtgimage.com/set/tmp/soltari%20foot%20soldier.jpg",
    "http://mtgimage.com/set/tmp/soltari%20guerrillas.jpg",
    "http://mtgimage.com/set/tmp/soltari%20lancer.jpg",
    "http://mtgimage.com/set/tmp/soltari%20monk.jpg",
    "http://mtgimage.com/set/tmp/soltari%20priest.jpg",
    "http://mtgimage.com/set/tmp/soltari%20trooper.jpg",
    "http://mtgimage.com/set/tmp/souldrinker.jpg",
    "http://mtgimage.com/set/tmp/spell%20blast.jpg",
    "http://mtgimage.com/set/tmp/spike%20drone.jpg",
    "http://mtgimage.com/set/tmp/spinal%20graft.jpg",
    "http://mtgimage.com/set/tmp/spirit%20mirror.jpg",
    "http://mtgimage.com/set/tmp/spontaneous%20combustion.jpg",
    "http://mtgimage.com/set/tmp/squee%27s%20toy.jpg",
    "http://mtgimage.com/set/tmp/stalking%20stones.jpg",
    "http://mtgimage.com/set/tmp/starke%20of%20rath.jpg",
    "http://mtgimage.com/set/tmp/static%20orb.jpg",
    "http://mtgimage.com/set/tmp/staunch%20defenders.jpg",
    "http://mtgimage.com/set/tmp/steal%20enchantment.jpg",
    "http://mtgimage.com/set/tmp/stinging%20licid.jpg",
    "http://mtgimage.com/set/tmp/stone%20rain.jpg",
    "http://mtgimage.com/set/tmp/storm%20front.jpg",
    "http://mtgimage.com/set/tmp/stun.jpg",
    "http://mtgimage.com/set/tmp/sudden%20impact.jpg",
    "http://mtgimage.com/set/tmp/swamp.jpg",
    "http://mtgimage.com/set/tmp/swamp1.jpg",
    "http://mtgimage.com/set/tmp/swamp2.jpg",
    "http://mtgimage.com/set/tmp/swamp3.jpg",
    "http://mtgimage.com/set/tmp/swamp4.jpg",
    "http://mtgimage.com/set/tmp/tahngarth%27s%20rage.jpg",
    "http://mtgimage.com/set/tmp/talon%20sliver.jpg",
    "http://mtgimage.com/set/tmp/telethopter.jpg",
    "http://mtgimage.com/set/tmp/thalakos%20dreamsower.jpg",
    "http://mtgimage.com/set/tmp/thalakos%20lowlands.jpg",
    "http://mtgimage.com/set/tmp/thalakos%20mistfolk.jpg",
    "http://mtgimage.com/set/tmp/thalakos%20seer.jpg",
    "http://mtgimage.com/set/tmp/thalakos%20sentry.jpg",
    "http://mtgimage.com/set/tmp/thumbscrews.jpg",
    "http://mtgimage.com/set/tmp/time%20ebb.jpg",
    "http://mtgimage.com/set/tmp/time%20warp.jpg",
    "http://mtgimage.com/set/tmp/tooth%20and%20claw.jpg",
    "http://mtgimage.com/set/tmp/torture%20chamber.jpg",
    "http://mtgimage.com/set/tmp/tradewind%20rider.jpg",
    "http://mtgimage.com/set/tmp/trained%20armodon.jpg",
    "http://mtgimage.com/set/tmp/tranquility.jpg",
    "http://mtgimage.com/set/tmp/trumpeting%20armodon.jpg",
    "http://mtgimage.com/set/tmp/twitch.jpg",
    "http://mtgimage.com/set/tmp/unstable%20shapeshifter.jpg",
    "http://mtgimage.com/set/tmp/vec%20townships.jpg",
    "http://mtgimage.com/set/tmp/verdant%20force.jpg",
    "http://mtgimage.com/set/tmp/verdigris.jpg",
    "http://mtgimage.com/set/tmp/vhati%20il-dal.jpg",
    "http://mtgimage.com/set/tmp/volrath%27s%20curse.jpg",
    "http://mtgimage.com/set/tmp/wall%20of%20diffusion.jpg",
    "http://mtgimage.com/set/tmp/warmth.jpg",
    "http://mtgimage.com/set/tmp/wasteland.jpg",
    "http://mtgimage.com/set/tmp/watchdog.jpg",
    "http://mtgimage.com/set/tmp/whim%20of%20volrath.jpg",
    "http://mtgimage.com/set/tmp/whispers%20of%20the%20muse.jpg",
    "http://mtgimage.com/set/tmp/wild%20wurm.jpg",
    "http://mtgimage.com/set/tmp/wind%20dancer.jpg",
    "http://mtgimage.com/set/tmp/wind%20drake.jpg",
    "http://mtgimage.com/set/tmp/winds%20of%20rath.jpg",
    "http://mtgimage.com/set/tmp/winged%20sliver.jpg",
    "http://mtgimage.com/set/tmp/winter%27s%20grasp.jpg",
    "http://mtgimage.com/set/tmp/wood%20sage.jpg",
    "http://mtgimage.com/set/tmp/worthy%20cause.jpg"];

function hotdogs () {
  cardContextMenu = document.getElementById("card-context-menu");
  bindEventByValue("mouseup", "button", 0, logMouseCoordinate);
  bindEventByValue("mouseup", "button", 2, spawnThing);
  bindEvent("contextmenu", noop);
//  cardContextMenu.addEventListener("mouseout", function (e) {
//    cardContextMenu.style.display = "none";
//    e.stopPropagation();
//  });
};

var cardContextMenu = undefined,
  currentCardContext = undefined;

function bindEvent (eventName, handler) {
  document.addEventListener(eventName, handler);
};

function unbindEvent (eventName, handler) {
  document.removeEventListener(eventName, handler);
};

function bindEventByValue (eventName, eventPropertyName, eventPropertyValue, handler) {
  document.addEventListener(eventName, function (e) {
    if(e[eventPropertyName] === eventPropertyValue) {
      handler(e);
    }
  });
};

function noop (e) {
  e.stopPropagation();
  e.preventDefault();
}

var nextTopZ = 1000;
function bringElementToFront (element) {
  element.style.zIndex = nextTopZ;
  nextTopZ += 1;
}

function logMouseCoordinate (e) {
  console.log(e.button + " (" + e.x + "," + e.y + ")");
  e.preventDefault();
};

function makeDraggable (element) {
  var lastMouseX = 0,
    lastMouseY = 0,
    mouseMoveHandler = undefined;
  element.addEventListener("mousedown", function (e) {
    if (e.button === 0) {
      bringElementToFront(element);
      lastMouseX = e.x;
      lastMouseY = e.y;
      mouseMoveHandler = function (e) {
        element.style.left = (element.offsetLeft + (e.x - lastMouseX)) + "px";
        lastMouseX = e.x;
        element.style.top = (element.offsetTop + (e.y - lastMouseY)) + "px";
        lastMouseY = e.y;
      };
      bindEvent("mousemove", mouseMoveHandler);
    }
    e.stopPropagation();
  });
  element.addEventListener("mouseup", function (e) {
    unbindEvent("mousemove", mouseMoveHandler);
    e.stopPropagation();
  });
  element.addEventListener("mouseout", function (e) {
    unbindEvent("mousemove", mouseMoveHandler);
    e.stopPropagation();
  });
}

function makeTappable (element) {
  element.addEventListener("dblclick", function (e) {
    if(element.className.indexOf("tapped") !== -1) {
      element.className = element.className.replace(" tapped", "");
    } else {
      element.className = element.className + " tapped";
    }
  });
}

function addBackgroundImageLightbox (element) {
  element.addEventListener("mouseup", function (e) {
    if (e.button === 1) {
      var lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      bringElementToFront(lightbox);
      lightbox.addEventListener("click", function (e) {
        lightbox.parentNode.removeChild(lightbox);
      });
      lightbox.addEventListener("mousedown", noop);
      lightbox.addEventListener("mouseup", noop);
      lightbox.style.background = "rgba(0,0,0,0.5)" + element.style.backgroundImage + " center center no-repeat";
      document.getElementsByTagName("body")[0].appendChild(lightbox);
    }
    e.stopPropagation();
  });
}

function addCardContextMenu (element) {
  element.addEventListener("mouseup", function (e) {
    if (e.button === 2) {
      cardContextMenu.style.top = (e.y - 7) + "px";
      cardContextMenu.style.left = (e.x - 7) + "px";
      bringElementToFront(cardContextMenu);
      cardContextMenu.style.display = "block";
    }
    e.stopPropagation();
  });
}

function spawnThing (e) {
  var thing = document.createElement("div");
  thing.className = "thing";
  thing.style.top = (e.y-50)+"px";
  thing.style.left = (e.x-50)+"px";
//  thing.style.backgroundImage = "url(\"" +
//      tempestCardList[Math.floor(Math.random()*tempestCardList.length)] + "\")";
  thing.style.backgroundImage = "url(\"img/back.jpg\")";
  bringElementToFront(thing);
  makeDraggable(thing);
  makeTappable(thing);
  addBackgroundImageLightbox(thing);
  //addCardContextMenu(thing);
  document.body.appendChild(thing);
  e.preventDefault();
};