class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);

        this.diamondMat = new CGFappearance(scene);
        this.diamondMat.setAmbient(0, 0, 0, 1.0);
        this.diamondMat.setDiffuse(0, 0, 0, 1.0);
        this.diamondMat.setSpecular(0, 1, 0, 1.0);
        this.diamondMat.setShininess(10.0);


        this.triangleMat = new CGFappearance(scene);
        this.triangleMat.setAmbient(0, 0, 0, 1.0);
        this.triangleMat.setDiffuse(0, 0, 0, 1.0);
        let color = this.scene.hexToRgbA([255,155,207]);
        this.triangleMat.setSpecular(...color);
        this.triangleMat.setShininess(10.0);

        this.parallelogramMat = new CGFappearance(scene);
        this.parallelogramMat.setAmbient(0, 0, 0, 1.0);
        this.parallelogramMat.setDiffuse(0, 0, 0, 1.0);
        this.parallelogramMat.setSpecular(1, 1, 0, 1.0);
        this.parallelogramMat.setShininess(10.0);

        this.triangleSmallMat = new CGFappearance(scene);
        this.triangleSmallMat.setAmbient(0, 0, 0, 1.0);
        this.triangleSmallMat.setDiffuse(0, 0, 0, 1.0);
        color = this.scene.hexToRgbA("#9650BE");
        this.triangleSmallMat.setSpecular(...color);
        this.triangleSmallMat.setShininess(10.0);

        this.triangleSmallMat2 = new CGFappearance(scene);
        this.triangleSmallMat2.setAmbient(0, 0, 0, 1.0);
        this.triangleSmallMat2.setDiffuse(0, 0, 0, 1.0);
        color = this.scene.hexToRgbA("#FF1B1B");
        this.triangleSmallMat2.setSpecular(...color);
        this.triangleSmallMat2.setShininess(10.0);


        this.triangleBigMat = new CGFappearance(scene);
        this.triangleBigMat.setAmbient(0, 0, 0, 1.0);
        this.triangleBigMat.setDiffuse(0, 0, 0, 1.0);
        color = this.scene.hexToRgbA("#FF9B00");
        this.triangleBigMat.setSpecular(...color);
        this.triangleBigMat.setShininess(10.0);

        this.triangleBigMat2 = new CGFappearance(scene);
        this.triangleBigMat2.setAmbient(0, 0, 0, 1.0);
        this.triangleBigMat2.setDiffuse(0, 0, 0, 1.0);
        color = this.scene.hexToRgbA("#009BFF");
        this.triangleBigMat2.setSpecular(...color);
        this.triangleBigMat2.setShininess(10.0);
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
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, Math.sqrt(2), 0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.triangleMat.apply();
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/4,0,0,1);
        this.scene.scale(-1,1,1);
        this.parallelogramMat.apply();
        this.parallelogram.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,2*Math.sqrt(2)+1,0);
        this.scene.rotate(Math.PI/2,0,0,1);
        this.triangleSmallMat.apply();
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2,-3*Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleSmallMat2.apply();
        this.triangleSmall2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-Math.sqrt(2),0);
        this.scene.rotate(-Math.PI/2,0,0,1);
        this.triangleBigMat.apply();
        this.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(2-2*Math.cos(Math.PI/4),-2*Math.sqrt(2),0);
        this.scene.rotate(-3*Math.PI/4,0,0,1);
        this.triangleBigMat2.apply();
        this.triangleBig2.display();
        this.scene.popMatrix();
    }
}
