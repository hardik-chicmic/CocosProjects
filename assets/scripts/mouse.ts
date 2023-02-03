import { _decorator, Component, Node, Input,UITransform, EventTouch } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('mouse')
export class mouse extends Component {
    // LIFE CYCLE CALLBACKS
    @property({type:Node})
    runningC = null;

    @property
    speed:number = 10;

    @property
    angle:number = 20;

    onLoad(){

        console.log("Onload start");
        
        // this.node.on(Input.EventType.TOUCH_START, this.moveObject, this);
        // this.node.on(Input.EventType.TOUCH_END, () => {
        // });
        
        // Mouse Events
        // let check: boolean
        this.node.on(Input.EventType.TOUCH_START, (event:EventTouch)=>{
            this.schedule(this.run, 0.1)
        });

        this.node.on(Input.EventType.TOUCH_END, (event:EventTouch) => {
            this.unschedule(this.run)
        })
            

        // this.node.on(Input.EventType.TOUCH_START, (event:EventTouch) => {
        //     console.log(event.getLocation().x + " " + event.getLocation().y);
        // })

        // this.node.on(Input.EventType.TOUCH_END, (event:EventTouch) => {
        //     console.log(event.getLocation().x);
            
        // })

        // this.node.on(Input.EventType.KEY_DOWN, )
    }


    run(){
        let parentW = this.runningC.parent.getComponent(UITransform).width
        let parentH = this.runningC.parent.getComponent(UITransform).height
        let currentPx = this.runningC.position.x;
        let currentPy = this.runningC.position.y;
        let chWidth = this.runningC.getComponent(UITransform).width
        let chHeight = this.runningC.getComponent(UITransform).height
        // let chWidth = this.runningC.getComponent(UITransform).contentSize.width;
        
    //    console.log(Math.floor(parentH/2 - chHeight/2));
    //    console.log(Math.floor(currentPy));
        
        if(currentPx < (parentW/2 - chWidth/2)){
            currentPx+= this.speed
            this.runningC.angle+= this.angle
        }else if(currentPx >= (parentW/2 - chWidth/2)){
            currentPy+= this.speed
            this.runningC.angle-= this.angle
        // }else if(Math.floor(currentPy) < Math.floor(parentH/2 - chHeight/2)){
        }else if((currentPy + chHeight/2) >= parentH/2){
            currentPx-= this.speed
            this.runningC.angle-= this.angle
        }
            
        this.runningC.setPosition(currentPx, currentPy)
        console.log(Math.floor(parentH/2 - chHeight/2));
        
        console.log(Math.floor(currentPy));
    }
    

    start() {
       console.log("start");
    }

    update(deltaTime: number) {
        // console.log("Update");
        
    }
}

