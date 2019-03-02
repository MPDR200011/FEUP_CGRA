class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
    }
    
    display() {
        this.scene.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(diamond_trans);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.scale(-1,1,1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,2*Math.sqrt(2)+1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-3*Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2-2*Math.cos(Math.PI/4),-2*Math.sqrt(2),0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.triangleBig.display();
        this.scene.popMatrix();
    }
}