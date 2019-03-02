class MyUnitCube extends CGFobject {
    constructor(scene) {
	super(scene);
	this.initBuffers();
    }

    initBuffers() {
	this.vertices = [
	    0.5,0.5,0.5,   //0
	    0.5,0.5,-0.5,   //1
	    -0.5,0.5,0.5,   //2
	    -0.5,0.5,-0.5,   //3
	    0.5,-0.5,0.5,   //4
	    0.5,-0.5,-0.5,   //5
	    -0.5,-0.5,0.5,   //6
	    -0.5,-0.5,-0.5,   //7
	];

	this.indices = [
	    0,2,6,
	    0,6,4,
	    1,3,2,
	    1,2,0,
	    0,4,1,
	    1,4,5,
	    3,1,7,
	    7,1,5,
	    2,3,7,
	    2,7,6,
	    6,7,4,
	    5,4,7
	];

	this.primitiveType = this.scene.gl.TRIANGLES;
	this.initGLBuffers();
    }
}
