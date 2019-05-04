class MyCylinder extends CGFobject {

	constructor(scene, slices) {
		super(scene);
		this.slices = slices;
		this.initBuffers();
	}

	initBuffers() {
		this.vertices = [];
		this.indices = [];
		this.normals = [];
		this.texCoords = [];

		let ang = 0;
		let ang_inc = 2*Math.PI/this.slices;

		for (var i = 0; i < this.slices; i++) {

			var sa=Math.sin(ang);
            var ca=Math.cos(ang);

			/* VERTICES */            
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(ca, 1, -sa);

            /* TEXTURE COORDS */
            this.texCoords.push(i*1.0/this.slices, 1);
            this.texCoords.push(i*1.0/this.slices, 0);

            /* INDICES */
            this.indices.push(i*2, (i*2+2) % (this.slices*2), (i*2+1) % (this.slices*2));
            this.indices.push((i*2+2) % (this.slices*2), (i*2+3) % (this.slices*2), (i*2+1) % (this.slices*2));

            /* NORMALS */
            this.normals.push(ca, 0,-sa);
            this.normals.push(ca, 0,-sa);

            ang += ang_inc;
		}

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
	}



}