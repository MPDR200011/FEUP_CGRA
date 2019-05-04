class MyLeaf extends CGFobject {
    constructor(scene){
        super(scene);
        this.initBuffers();
		this.mat = new CGFappearance(scene);
		this.mat.setDiffuse(0,1,0,1);
		this.mat.setAmbient(0.3,0.3,0.3,1);
    }

    initBuffers() {
        this.vertices = [
            -1.5,-1.5,0,
            1.5,-1.5,0,
            0,1.5,0,
            0,1.5,0,
            1.5,-1.5,0,
            -1.5,-1.5,0,
        ];

        this.indices = [0,1,2,3,4,5];

        this.normals = [
            0,0,1,
            0,0,1,
            0,0,1,
            0,0,-1,
            0,0,-1,
            0,0,-1,
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }

    display() {
        this.mat.apply();
        super.display();
        this.scene.setDefaultAppearance();
    }

}