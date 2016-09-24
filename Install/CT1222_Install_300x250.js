(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CT1222_XOvision_300x250_bkgd.jpg", id:"CT1222_XOvision_300x250_bkgd"},
		{src:"images/CT1222_Install_300x250_atlas_P_.png", id:"CT1222_Install_300x250_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Install_300x250_atlas_P_", frames: [[0,252,300,250],[604,0,300,250],[302,0,300,250],[0,0,300,250],[302,252,300,250]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.CT1222_XOvision_300x250_bkgd = function() {
	this.initialize(img.CT1222_XOvision_300x250_bkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Install_300x250_Coaxial = function() {
	this.spriteSheet = ss["CT1222_Install_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_RedTeam = function() {
	this.spriteSheet = ss["CT1222_Install_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Tweeter = function() {
	this.spriteSheet = ss["CT1222_Install_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Woofer = function() {
	this.spriteSheet = ss["CT1222_Install_300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Install_300x250_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.woofer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x250_Woofer();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.tweet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x250_Tweeter();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.redteam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x250_RedTeam();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.HEADquality = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfIAAg9IA9AAIAAA9g");
	this.shape.setTransform(115.5,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdB8IAAjBIg+AAIAAg2IC3AAIAAA2Ig+AAIAADBg");
	this.shape_1.setTransform(100.4,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB8IAAj3IA7AAIAAD3g");
	this.shape_2.setTransform(84.5,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3B8IAAh3IgkA9IglAAIgkg9IAAB3Ig9AAIAAj3IA8AAIA3BuIA4huIA8AAIAAD3g");
	this.shape_3.setTransform(57,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyB8IgMglIhKAAIgNAlIhAAAIBbj3IAuAAIBaD3gAgTAkIApAAIgVhBg");
	this.shape_4.setTransform(31.4,-0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUB8IAAj3ICpAAIAAA2IhrAAIAAAqIBbAAIAAA1IhbAAIAAAsIBrAAIAAA2g");
	this.shape_5.setTransform(9.7,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbB8IgqhdIgVAAIAABdIg+AAIAAj3IBiAAQAUgBAQAHQAQAGALAMQALAMAFAOQAGAPAAAPQAAAXgLARQgMAPgSAJIA2BngAgkgSIAjAAQAKAAAHgHQAIgIgBgKQABgKgIgIQgHgHgKAAIgjAAg");
	this.shape_6.setTransform(-11.8,-0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcB8IAAj3IBcAAQAUAAARAFIAQAIQAHAEAHAHQAIAJAGAJQAFAKADAMQACALABAOIABAiIgBAiQgBAOgCAMQgDAMgFAKQgGAJgIAJQgNAMgRAHQgRAFgUAAgAgeBGIAbAAQAJAAAHgEQAHgDAFgHIADgGIACgJIABgQIAAgZIAAgYIgBgQIgCgJIgDgGQgFgGgHgEQgHgEgJAAIgbAAg");
	this.shape_7.setTransform(-35.2,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjB3QgSgGgNgMQgNgMgHgQQgHgRAAgUIAAigIA9AAIAACfQAAAQAJAKQAEAFAGACQAHADAGAAQAHAAAGgDQAGgCAFgFQAJgKAAgQIAAifIA9AAIAACgIgBATIgGASQgHAQgOAMQgNAMgRAGQgSAHgSAAQgSAAgRgHg");
	this.shape_8.setTransform(-66.4,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglB4QgRgIgOgNQgRgRgEgWQgDgOgCguQAAgYAFgjQAEgWARgQQAOgOARgIQAQgGAVgBQAWABARAGQAQAIAOAOQARAQAEAWQAFAjAAAYQAAAmgFAWQgEAWgRARQgOANgQAIIgTAFIgUACQgagCgLgFgAgNhEQgGADgEAFIgEAGIgDALIgBARIgBAaIABAbIABARIADAKIAEAGQAEAGAGACQAGAEAHAAQAIAAAGgEQAGgCAEgGIAEgGIADgKIACgRIAAgbIAAgaIgCgRIgDgLIgEgGQgDgFgHgDQgGgDgIAAQgHAAgGADg");
	this.shape_9.setTransform(-89.2,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdB8IAAhmIhMiRIBDAAIAmBaIAnhaIBDAAIhMCRIAABmg");
	this.shape_10.setTransform(-109.7,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.4,-27.1,289.3,48.5);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAkIAAhHIBHAAIAABHg");
	this.shape.setTransform(117.4,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiCQIAAjgIhHAAIAAg/IDTAAIAAA/IhHAAIAADgg");
	this.shape_1.setTransform(99.5,34.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiCQIAAkfIBFAAIAAEfg");
	this.shape_2.setTransform(81.2,34.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhqCQIAAkfIBqAAQAXAAAUAHIATAJQAIAFAHAHQALAKAFALQAHAMADANQADAOABAPIAAAoIAAAoQgBAQgDAOQgDANgHALQgFALgLALQgOANgUAIQgUAHgXAAgAgjBRIAfAAQALgBAIgDQAIgFAGgIIADgHIADgKIABgSIAAgdIAAgcIgBgSIgDgKIgDgHQgGgIgIgFQgIgEgLAAIgfAAg");
	this.shape_3.setTransform(53,34.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfCQIAAkfIBHAAIAADgIB4AAIAAA/g");
	this.shape_4.setTransform(28.6,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiCQIAAkfIBFAAIAAEfg");
	this.shape_5.setTransform(9.5,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpCKQgUgHgPgOQgQgOgIgTQgIgUAAgXIAAi5IBHAAIAAC4QAAATAKAMQAFAFAHADQAHADAIAAQAIAAAHgDQAHgDAFgFQALgMAAgTIAAi4IBHAAIAAC5IgCAWIgGAVQgJATgPAOQgQAOgUAHQgUAHgVAAQgVAAgUgHg");
	this.shape_6.setTransform(-10.3,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhrCQIAAkfIB2AAQAtAAAYAWQAXAXABAmQAAALgDAJQgCAJgGAHQgKAOgLAIIAMAGIALAMQAFAHAEALQAEALAAAOQAAAogaAXQgZAWgoAAgAgjBQIAuAAQANAAAGgHQAHgIAAgLQAAgKgHgIQgGgGgNgBIguAAgAgjghIAqAAQANABAGgIQAGgGAAgKQAAgKgGgGQgGgIgNAAIgqAAg");
	this.shape_7.setTransform(-36.5,34.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhhCQIAAkfIDDAAIAAA/Ih8AAIAAAwIBpAAIAAA+IhpAAIAAAzIB8AAIAAA/g");
	this.shape_8.setTransform(-71.1,34.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuCQIguiPIgtCPIg6AAIhPkfIBKAAIAlCXIAwiXIAwAAIAuCXIAniXIBKAAIhQEfg");
	this.shape_9.setTransform(-102.3,34.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,5,265.6,54.5);


(lib.guarantee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape.setTransform(126.8,-67.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIBzAAIAAAlIhIAAIAAAdIA9AAIAAAjIg9AAIAAAfIBIAAIAAAlg");
	this.shape_1.setTransform(116.3,-73.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIBzAAIAAAlIhIAAIAAAdIA9AAIAAAjIg9AAIAAAfIBIAAIAAAlg");
	this.shape_2.setTransform(101.7,-73.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTBVIAAiEIgqAAIAAglIB8AAIAAAlIgrAAIAACEg");
	this.shape_3.setTransform(87.2,-73.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAeBVIg1hVIAABVIgqAAIAAipIAlAAIA1BUIAAhUIApAAIAACpg");
	this.shape_4.setTransform(71.8,-73.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAiBVIgIgaIgyAAIgJAaIgsAAIA+ipIAfAAIA+CpgAgNAYIAcAAIgOgrg");
	this.shape_5.setTransform(55.6,-73.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBVIgcg/IgOAAIAAA/IgqAAIAAipIBCAAQANAAALAEQALAFAIAIQAHAIAEAKQAEAJAAALQAAAQgIALQgIAKgMAGIAlBHgAgYgLIAYAAQAGgBAFgFQAFgFAAgHQAAgHgFgFQgFgFgGAAIgYAAg");
	this.shape_6.setTransform(40.6,-73.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBVIgIgaIgyAAIgJAaIgsAAIA+ipIAfAAIA+CpgAgNAYIAcAAIgOgrg");
	this.shape_7.setTransform(24.3,-73.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYBRQgMgEgIgIQgJgIgFgMQgFgLAAgOIAAhtIAqAAIAABsQAAAMAGAHIAHAFQAEABAEAAQAFAAAEgBIAHgFQAGgHAAgMIAAhsIAqAAIAABtIgBANIgEAMQgFAMgJAIQgJAIgMAEQgMAFgMAAQgMAAgMgFg");
	this.shape_8.setTransform(8.6,-73.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZBRQgNgEgJgKQgLgLgDgPQgCgKgCgfQAAgQAEgYQADgPALgLQAJgKAMgFQAIgCASgCQAJAAASAEQALAFAJAIQAHAIAFAKQAEAKACALIgqAAQgDgKgFgEQgGgFgJAAQgFAAgEACQgFACgCAEIgDAEIgCAHIgBALIAAASIAAASIABAMIACAHIADAFQAGAHAKAAQALAAAHgHQADgDABgFQABgFAAgFIAAgCIgXAAIAAghIBBAAIAAAWQAAAYgDAJQgEAOgKAJIgKAKQgGADgGACQgMAEgOAAQgSgBgHgEg");
	this.shape_9.setTransform(-7,-73.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIBzAAIAAAlIhIAAIAAAdIA9AAIAAAjIg9AAIAAAfIBIAAIAAAlg");
	this.shape_10.setTransform(-27.1,-73.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAlBVIAAhSIgYAqIgZAAIgYgqIAABSIgqAAIAAipIApAAIAlBLIAmhLIApAAIAACpg");
	this.shape_11.setTransform(-44.3,-73.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUBVIAAipIApAAIAACpg");
	this.shape_12.setTransform(-57.8,-73.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgTBVIAAiEIgrAAIAAglIB8AAIAAAlIgpAAIAACEg");
	this.shape_13.setTransform(-68.6,-73.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIBzAAIAAAlIhIAAIAAAdIA9AAIAAAjIg9AAIAAAfIBIAAIAAAlg");
	this.shape_14.setTransform(-82.7,-73.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIBzAAIAAAlIhIAAIAAAeIA9AAIAAAkIg9AAIAABCg");
	this.shape_15.setTransform(-97,-73.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUBVIAAipIApAAIAACpg");
	this.shape_16.setTransform(-108.3,-73.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIArAAIAACEIBFAAIAAAlg");
	this.shape_17.setTransform(-118.5,-73.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAVIAAgpIApAAIAAApg");
	this.shape_18.setTransform(106.5,-90.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkBSQgPgFgNgNIAbgbQAGAHAKACQALADAKAAQAYAAgBgPQAAgHgCgEQgEgDgIgBIgJgBIgKgCQgLgCgJgEQgIgDgGgGQgGgEgCgJQgEgIAAgMQABgXAQgPQAJgIALgDQAMgFALAAQAUAAAOAGQAGACAHAEQAGADAGAGIgbAaQgGgGgIgCQgIgBgLgBQgIABgFAEQgFAFAAAGQAAAFADADQAEAEAIABIAHACIAMABQAXADAKALQANALAAAYQAAANgFAKQgFAKgJAIQgJAGgNAEQgMADgMAAQgUAAgQgEg");
	this.shape_19.setTransform(95.5,-96.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIArAAIAACDIBGAAIAAAmg");
	this.shape_20.setTransform(82.4,-96.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag3BVIAAipIAqAAIAACDIBGAAIAAAmg");
	this.shape_21.setTransform(68.6,-96.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAiBVIgIgaIgyAAIgJAaIgsAAIA+ipIAfAAIA+CpgAgNAZIAcAAIgOgsg");
	this.shape_22.setTransform(53.4,-96.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBVIAAiEIgrAAIAAglIB8AAIAAAlIgpAAIAACEg");
	this.shape_23.setTransform(38.6,-96.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkBSQgPgFgNgNIAbgbQAGAHAKACQAKADALAAQAXAAAAgPQAAgHgCgEQgEgDgIgBIgJgBIgKgCQgLgCgJgEQgIgDgGgGQgGgEgCgJQgEgIAAgMQAAgXARgPQAJgIALgDQAMgFALAAQAUAAAOAGQAGACAHAEQAGADAGAGIgbAaQgGgGgIgCQgIgBgLgBQgIABgFAEQgFAFAAAGQAAAFADADQAFAEAHABIAIACIALABQAWADAMALQAMALAAAYQAAANgFAKQgFAKgJAIQgJAGgNAEQgLADgNAAQgUAAgQgEg");
	this.shape_24.setTransform(24,-96.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAeBVIg1hVIAABVIgqAAIAAipIAlAAIA1BUIAAhUIApAAIAACpg");
	this.shape_25.setTransform(8.9,-96.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUBVIAAipIApAAIAACpg");
	this.shape_26.setTransform(-3.3,-96.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAlBVIAAhSIgYArIgZAAIgYgrIAABSIgqAAIAAipIApAAIAlBMIAmhMIApAAIAACpg");
	this.shape_27.setTransform(-22.1,-96.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgZBSQgMgFgJgKQgLgLgDgPQgCgKgCgfQAAgQAEgYQADgPALgLQAJgKAMgEQALgGAOAAQAPAAALAGQAMAEAJAKQAMALADAPQADAYAAAQQAAAagDAPQgDAPgMALQgJAKgMAFIgMADIgOABQgRgBgIgDgAgIguQgFACgCADIgDAFIgCAHIgBAMIAAARIAAATIABALIACAHIADAEQACADAFADQAEACAEAAQAFAAAEgCQAFgDACgDIADgEIACgHIABgLIABgTIgBgRIgBgMIgCgHIgDgFQgCgDgFgCQgEgCgFAAQgEAAgEACg");
	this.shape_28.setTransform(-39.4,-96.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTBVIAAiEIgqAAIAAglIB8AAIAAAlIgrAAIAACEg");
	this.shape_29.setTransform(-54.1,-96.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgkBSQgQgFgMgNIAbgbQAHAHAKACQAKADAKAAQAXAAABgPQAAgHgDgEQgEgDgIgBIgJgBIgKgCQgLgCgIgEQgJgDgGgGQgGgEgDgJQgCgIAAgMQAAgXARgPQAIgIALgDQAMgFAMAAQASAAAOAGQAIACAGAEQAGADAFAGIgaAaQgHgGgHgCQgIgBgKgBQgIABgGAEQgFAFAAAGQAAAFAEADQADAEAIABIAHACIALABQAXADALALQANALAAAYQAAANgFAKQgFAKgJAIQgKAGgMAEQgLADgNAAQgUAAgQgEg");
	this.shape_30.setTransform(-68.6,-96.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYBRQgMgEgIgIQgJgIgFgMQgFgLAAgOIAAhtIAqAAIAABsQAAAMAGAHIAHAFQAEABAEAAQAFAAAEgBIAHgFQAGgHAAgMIAAhsIAqAAIAABtIgBANIgEAMQgFAMgJAIQgJAIgMAEQgMAFgMAAQgMAAgMgFg");
	this.shape_31.setTransform(-83.2,-96.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgYBSQgNgFgJgKQgLgLgDgPQgCgKgCgfQAAgQAEgYQADgPALgLQAJgKANgEQALgGANAAQAYAAASAPQAJAHAGALQAFAJADAOIgsAAQgCgIgFgFQgEgFgKAAQgJAAgGAHIgDAFIgCAHIgBAMIAAARIAAATIABALIACAHIADAFQAGAHAJAAQAKAAAEgFQAFgFACgJIAsAAQgFAcgSAOQgJAHgKAEQgLADgMAAQgRgBgHgDg");
	this.shape_32.setTransform(-98,-96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.3,-114.7,299,56.1);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buy now
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAZIAnAAIAAAQIgnAAIAAAaIAuAAIAAASg");
	this.shape.setTransform(112.9,92.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA0IgTgqIgOAAIAAAqIgVAAIAAhnIAnAAQAIABAGACQAGACAFAFQAEAEADAGQACAGAAAHQgBAEgBAFQgBAFgDADQgGAFgHADIAXAtgAgRgFIARAAQAGAAAEgDIADgFQACgCAAgDQAAgDgCgDIgDgEQgEgFgGAAIgRAAg");
	this.shape_1.setTransform(103.9,92.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAxQgHgDgFgFQgHgHgCgJQgCgJAAgQQAAgKACgPQACgIAHgHQAFgGAHgDQAHgCAHAAQAIAAAHACQAHADAFAGQAHAHACAIQACAPAAAKQAAATgCAGQgCAJgHAHQgFAFgHADQgHADgIAAQgHAAgHgDgAgGggQgEABgBADIgDAEIgCAFIgBAIIAAALIAAAMIABAIIACAFIADAEQABACAEACQAEABACAAQADAAAEgBIAFgEIADgEIACgFIAAgIIAAgMIAAgLIAAgIIgCgFIgDgEQgEgFgIAAQgCAAgEABg");
	this.shape_2.setTransform(94.1,92.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA0IAAhVIgbAAIAAgSIBJAAIAAASIgbAAIAABVg");
	this.shape_3.setTransform(85.2,92.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAzQgEAAgFgCQgJgDgIgIIAOgNQAEAFAHACQAGACAGAAQASAAAAgNQAAgFgDgDQgCgDgIgBIgFgBIgFgBQgNgCgHgFQgEgDgCgFQgCgGABgGQAAgOAJgJQAFgEAGgCQAHgCAHAAQAKAAAJACIAHAEQAEACADAEIgNAMQgEgEgGgBQgFgCgGAAIgFABQgDABgCACQgEAEAAAFQAAAEADAEQAEADAFABIAFABIAGABIAMACQAEACAEADQADACADAGQACAFAAAIQAAAOgLAJQgFAEgIACQgGACgIAAg");
	this.shape_4.setTransform(76.6,92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJA0IAAgrIgfg8IAWAAIASArIATgrIAWAAIgfA8IAAArg");
	this.shape_5.setTransform(64.9,92.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaA0IAAg7IgUAlIgLAAIgUglIAAA7IgVAAIAAhnIAUAAIAaA3IAag3IAVAAIAABng");
	this.shape_6.setTransform(54.9,92.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA0IAAhnIAkAAQAIABAHACQAHACAFAFIAGAIIADAJIABAKIAAAOQAAARgCAJQgBAJgHAHQgFAFgHACQgHACgIABgAgQAiIAPAAQADgBAEgBQAEgCADgDQACgEABgGIABgRIgBgRQgBgFgCgEQgGgGgIgBIgPAAg");
	this.shape_7.setTransform(41,92.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA0Igng+IAAA+IgUAAIAAhnIASAAIAnA+IAAg+IAUAAIAABng");
	this.shape_8.setTransform(30.8,92.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_9.setTransform(23.4,92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAaIAnAAIAAAQIgnAAIAAArg");
	this.shape_10.setTransform(17.2,92.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CT logo
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_11.setTransform(-80.6,92.5,0.197,0.197);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_12.setTransform(-39.6,92.5,0.197,0.197);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_13.setTransform(-70.9,92.5,0.197,0.197);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_14.setTransform(-108.1,92.5,0.197,0.197);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_15.setTransform(-91.5,92.5,0.197,0.197);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_16.setTransform(-25.6,92.5,0.197,0.197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_17.setTransform(-54.9,92.4,0.197,0.197);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_18.setTransform(-124.3,92.5,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// bkgd
	this.instance = new lib.XOvision_300x250_CTAbkgd();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.CT1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("Az1O1IAA9qMAnqAAAIAAdqg");
	this.shape.setTransform(127,95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.coax = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x250_Coaxial();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


// stage content:
(lib.CT1222_Install_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickthru_btn.on("click", function(evt){
		  window.open(clickTag, "_blank");
		});
	}
	this.frame_180 = function() {
		if(!this.alreadyExecuted){
		this.alreadyExecuted=true;
		this.loopNum=1;
		} else {
		this.loopNum++;
		if(this.loopNum==2){
		this.stop();
		}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(180).call(this.frame_180).wait(1));

	// clickthru
	this.clickthru_btn = new lib.CT1();
	this.clickthru_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(150,202);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).to({y:125},4).wait(32));

	// guarantee
	this.instance_1 = new lib.guarantee();
	this.instance_1.setTransform(148.3,58.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({x:150,y:131},4).wait(56));

	// red team
	this.instance_2 = new lib.redteam();
	this.instance_2.setTransform(150,311);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({y:125},4).wait(80));

	// HEAD build
	this.instance_3 = new lib.HEADover();
	this.instance_3.setTransform(150,236);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({y:106.2},4).wait(37).to({y:-52.8},4).to({_off:true},1).wait(79));

	// HEAD dream
	this.instance_4 = new lib.HEADquality();
	this.instance_4.setTransform(150.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({y:106.2},4).wait(37).to({y:-52.8},4).to({_off:true},1).wait(79));

	// tweet R
	this.instance_5 = new lib.tweet();
	this.instance_5.setTransform(150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(137));

	// tweet L
	this.instance_6 = new lib.tweet();
	this.instance_6.setTransform(-19,125);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(137));

	// coax R
	this.instance_7 = new lib.coax();
	this.instance_7.setTransform(150,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).wait(150));

	// coax L
	this.instance_8 = new lib.coax();
	this.instance_8.setTransform(-51,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).wait(150));

	// woofer
	this.instance_9 = new lib.woofer();
	this.instance_9.setTransform(150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(163));

	// bkgd
	this.instance_10 = new lib.CT1222_XOvision_300x250_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;