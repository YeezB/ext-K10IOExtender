
    //% color="#f08080" iconWidth=50 iconHeight=40
    namespace DFR1231{
    //% block="Read the [mode] of pin [ec]" blockType="reporter"
    //% ec.shadow="dropdown" ec.options="ec" 
    //% mode.shadow="dropdown" mode.options="mode" 
    export function myBlock0(parameter: any, block: any) {
        let ec= parameter.ec.code
        let mode= parameter.mode.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        if(`${mode}` === 'eDHT11_tem' || `${mode}` === 'eDHT11_hum'){
            Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, eDHT11);`)
        }else if(`${mode}` === 'eDHT22_tem' || `${mode}` === 'eDHT22_hum'){
            Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, eDHT22);`)
        }else{
            Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, ${mode});`)
        }
        
        Generator.addCode(`(eunihiker.getvalue(${ec}, ${mode}))`)
    }  

    //% block="Set pin [ec] to output [v]" blockType="command"
    //% ec.shadow="dropdown" ec.options="ec" 
    //% v.shadow="dropdown" v.options="v" 
    export function myBlock1(parameter: any, block: any) {
        let ec= parameter.ec.code
        let v= parameter.v.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, eWriteGpio);`)
        Generator.addCode(`eunihiker.setGpioState(${ec}, ${v});`)
    }
        

    //% block="Set the 90-degree servo on pin [s] to [dir] degrees" blockType="command"
    //% s.shadow="dropdown" s.options="s" 
    //% dir.shadow="angle" dir.defl=90
    export function myBlock2(parameter: any, block: any) {
        let s= parameter.s.code
        let dir= parameter.dir.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.setServoAngle(${s}, ${dir});`)
    }
    
    //% block="Set the 360-degree servo on pin [s] to rotate [oriservo] at [speedservo]% speed" blockType="command"
    //% s.shadow="dropdown" s.options="s" 
    //% speedservo.shadow="range" speedservo.params.min=0 speedservo.params.max=100 speedservo.defl=50
    //% oriservo.shadow="dropdown" oriservo.options="oriservo"
    export function myBlock3(parameter: any, block: any) {
        let s= parameter.s.code
        let speedservo= parameter.speedservo.code
        let oriservo= parameter.oriservo.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.setServo360(${s}, ${oriservo}, ${speedservo});`)
    }

}
    