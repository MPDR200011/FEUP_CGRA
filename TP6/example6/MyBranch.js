class MyBranch extends CGFobject {
	constructor(scene) {
		super(scene);
		this.cyl = new MyCylinder(scene, 3);
		this.mat = new CGFappearance(scene);
		this.mat.setDiffuse(0.41,0.24,0,1);
		this.mat.setAmbient(0.3,0.3,0.3,1);
	}

	display() {
		this.mat.apply();
		this.cyl.display();
		this.scene.setDefaultAppearance();
	}

}