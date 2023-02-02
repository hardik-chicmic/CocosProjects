import { _decorator, Component, Node, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('NewComponent')
export class NewComponent extends Component {

    // onload(){
    //     // All the things that need to be loaded before the scene is ready
    // }

    @property speed: number = 30

    start() {

    }

    update(deltaTime: number) {
        // console.log(deltaTime);
        let parentW = this.node.parent.getComponent(UITransform).width
        let currentP = this.node.position.x
        let chWidth = this.node.getComponent(UITransform).contentSize.width;
    
        if(currentP > (parentW/2) - (chWidth/2)){
            this.node.setPosition(this.node.position.x, this.node.position.y)
        }else{
            this.node.setPosition(currentP + this.speed*deltaTime, this.node.position.y)
        }
    
    }
}

