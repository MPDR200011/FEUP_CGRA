class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);

        this.diamondMat = new CGFappearance(scene);
        this.diamondMat.setAmbient(0.1, 0.1, 0.1, 1);
        this.diamondMat.setDiffuse(0.9, 0.9, 0.9, 1);
        this.diamondMat.setSpecular(0.1, 0.1, 0.1, 1);
        this.diamondMat.setShininess(10.0);
        this.diamondMat.loadTexture('images/tangram.png');
        this.diamondMat.setTextureWrap('REPEAT', 'REPEAT');
    }

    updateBuffers() {
        return;
    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.triangleSmall2.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleBig2.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.triangleSmall.disableNormalViz();
        this.triangleSmall2.disableNormalViz();
        this.triangleBig.disableNormalViz();
        this.triangleBig2.disableNormalViz();
    }
    
    display() {
        this.scene.pushMatrix();
        var diamond_trans = [1.0, 0.0, 0.0, 0.0,
                            0.0, 1.0, 0.0, 0.0,
                            0.0, 0.0, 1.0, 0.0,
                            -1.0, 2.0 * Math.sqrt(2), 0.0, 1.0];
        this.scene.multMatrix(diamond_trans);
        this.diamondMat.apply();
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
        this.triangleSmall.texCoords = [
            0,0,
            0,0.5,
            0.25,0.25
        ];
        this.triangleSmall.updateTexCoordsGLBuffers();
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-3*Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleSmall.texCoords = [
            0.25,0.75,
            0.75,0.75,
            0.5,0.5
        ];
        this.triangleSmall.updateTexCoordsGLBuffers();
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleBig.texCoords = [
            1,0,
            0,0,
            0.5,0.5,
        ];
        this.triangleBig.updateTexCoordsGLBuffers();
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2-2*Math.cos(Math.PI/4),-2*Math.sqrt(2),0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.triangleBig.texCoords = [
            1,1,
            1,0,
            0.5,0.5,
        ];
        this.triangleBig.updateTexCoordsGLBuffers();
        this.triangleBig.display();
        this.scene.popMatrix();
    }
}
