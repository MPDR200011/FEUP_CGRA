class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.top = new MyQuad(scene);
        this.topMaterial = new CGFappearance(scene);
        this.topMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.topMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.topMaterial.setShininess(10.0);
        this.topMaterial.loadTexture('images/mineTop.png');
        this.topMaterial.setTextureWrap('REPEAT', 'REPEAT');
        
        this.side = new MyQuad(scene);
        this.sideMaterial = new CGFappearance(scene);
        this.sideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideMaterial.setShininess(10.0);
        this.sideMaterial.loadTexture('images/mineSide.png');
        this.sideMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.bottom = new MyQuad(scene);
        this.bottomMaterial = new CGFappearance(scene);
        this.bottomMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.bottomMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomMaterial.setShininess(10.0);
        this.bottomMaterial.loadTexture('images/mineBottom.png');
        this.bottomMaterial.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        this.topMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2, 1,0,0);
        this.top.display();
        this.scene.popMatrix();

        this.sideMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.side.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI,0,1,0);
        this.side.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI/2,0,1,0);
        this.side.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(-Math.PI/2,0,1,0);
        this.side.display();
        this.scene.popMatrix();

        this.bottomMaterial.apply();
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.bottom.display();
        this.scene.popMatrix();

    }
}
