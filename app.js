/*
    Not so proud author: Jacob Angel
    Date: 11/16/2020
    Class: Web Dev 2
    Insructor: Kirsten Markley
*/
// Global Variables
const cAni = require('chalk-animation');
const c = require('chalk');
const log = console.log;

// Logs the first set of text
log(c.blue('The FitnessGram'))
// Animation that needs a setTimeout or else it will never end
var a1 = cAni.rainbow('PACER Test', 2);
setTimeout(()=>{
    // Stops the current animation and displays more text
    a1.stop();
    log(c.red('is a multistage aerobic'));
    // Starts another animation and waits for the setTimeout to be called
    var a2 = cAni.neon('capacity test');
    setTimeout(()=>{
        // Stops the current animation and displays more text
        a2.stop();
        log(c.green('that progressively gets more difficult as it continues.\nThe test is used to measure a students aerobic capacity as'));
        // Starts another animation and waits for the setTimeout to be called
        var a3 = cAni.karaoke('The test');
        setTimeout(()=>{
            // Stops the current animation and displays more text
            a3.stop();
            log(c.yellow('is used to measure a students aerobic capacity as part of the'));
            // Starts another animation and waits for the setTimeout to be called
            var a4 = cAni.rainbow('FitnessGram assessment.');
            setTimeout(()=>{
                // Stops the current animation and displays more text
                a4.stop();
                log(c.red("Students run back and forth as many times as they can, each lap signaled by a beep sound."));
                // Starts another animation and waits for the setTimeout to be called
                var a5 = cAni.pulse('The test');
                setTimeout(()=>{
                    // Stops the current animation and displays more text
                    a5.stop();
                    log(c.cyan('get progressively faster as it continues until the student reaches their max lap score.'));
                    // Starts another animation and waits for the setTimeout to be called
                    var a6 = cAni.rainbow("The PACER Test score");
                    setTimeout(()=>{
                        // Stops the current animation and displays more text
                        a6.stop();
                        log(c.blue("is combined in the"));
                        // Starts another animation and waits for the setTimeout to be called
                        var a7 = cAni.rainbow("FitnessGram software");
                        setTimeout(()=>{
                            // Stops the current animation and displays more text
                            a7.stop();
                            log(c.green("with scores for muscular strength, endurance, flexibility"));
                            // Not adding an animation this time just adding more text
                            setTimeout(()=>{
                                log(c.greenBright("and body composition to determine whether a student is in the"));
                                // Starts another animation and waits for the setTimeout to be called
                                var a8 = cAni.karaoke("Healthy Fitness Zone™");
                                setTimeout(()=>{
                                    // Stops the current animation and displays more text
                                    a8.stop();
                                    log(c.yellow("or the"));
                                    // Starts another animation and waits for the setTimeout to be called
                                    var a9 = cAni.rainbow("Needs Improvement Zone™.");
                                    setTimeout(()=>{
                                        // Stops the current animation and displays more text
                                        a9.stop();
                                        log(c.red("What is wrong with me?")); // End of Story
                                    }, 10000);
                                },3500)
                            },2000);
                        },3000)
                    }, 3000)
                },4000)
            },2500)
        },4500)
    }, 4000)
}, 2000)