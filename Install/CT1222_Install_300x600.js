(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CT1222_Install_300x600_atlas_P_.png", id:"CT1222_Install_300x600_atlas_P_"},
		{src:"images/CT1222_Install_300x600_atlas_NP_.jpg", id:"CT1222_Install_300x600_atlas_NP_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Install_300x600_atlas_P_", frames: [[0,1204,300,600],[302,0,300,600],[0,0,300,600],[0,602,300,600],[302,602,300,250]]},
		{name:"CT1222_Install_300x600_atlas_NP_", frames: [[502,0,300,600],[0,0,500,500]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._300x600_bkgd = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x600_coax = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x600_redteam = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x600_tweeter = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x600_woofer = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.smoke_AS_92135327500px = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Install_300x600_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.woofer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x600_woofer();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.tweet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x600_tweeter();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.smoke_AS_92135327500px();
	this.instance.setTransform(-37.5,-37.5,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


(lib.redteam = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Install_300x600_redteam();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgiAjIAAhFIBFAAIAABFg");
	this.shape.setTransform(118.9,78.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AheCMIAAkXIC9AAIAAA+Ih4AAIAAAvIBmAAIAAA7IhmAAIAAAxIB4AAIAAA+g");
	this.shape_1.setTransform(102.4,68.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AheCMIAAkXIC9AAIAAA+Ih4AAIAAAvIBmAAIAAA7IhmAAIAAAxIB4AAIAAA+g");
	this.shape_2.setTransform(78.4,68.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghCMIAAjZIhFAAIAAg+IDNAAIAAA+IhFAAIAADZg");
	this.shape_3.setTransform(54.5,68.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwCMIhXiMIAACMIhFAAIAAkXIA8AAIBYCLIAAiLIBFAAIAAEXg");
	this.shape_4.setTransform(29.3,68.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA4CMIgNgqIhUAAIgOAqIhIAAIBmkXIA0AAIBlEXgAgWAoIAvAAIgYhIg");
	this.shape_5.setTransform(2.6,68.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfCMIgwhpIgXAAIAABpIhFAAIAAkXIBtAAQAWAAASAIQASAHANANQAMAMAGARQAHAQAAARQAAAbgOASQgNARgTAKIA8B1gAgogUIAnAAQALAAAIgJQAIgIAAgMQAAgLgIgJQgIgIgLAAIgnAAg");
	this.shape_6.setTransform(-22,68.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA4CMIgNgqIhUAAIgOAqIhIAAIBmkXIA0AAIBlEXgAgWAoIAvAAIgYhIg");
	this.shape_7.setTransform(-48.8,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoCGQgTgHgPgOQgOgNgJgTQgIgTAAgWIAAi0IBFAAIAACyQAAAUAKAKQAFAGAHACQAGAEAIAAQAIAAAHgEQAGgCAGgGQAKgKAAgUIAAiyIBFAAIAAC0IgCAWIgHATQgHATgPANQgPAOgUAHQgTAHgVAAQgVAAgTgHg");
	this.shape_8.setTransform(-74.6,68.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrCGQgTgIgQgPQgTgTgFgYQgDgRgCgzQAAgcAFgnQAFgYATgTQAQgQASgHQANgGAfgCQAPAAAdAHQATAIAOANQANAOAHAQQAIARADASIhGAAQgEgQgJgIQgKgIgPAAQgJAAgHAEQgHADgEAGIgFAHIgDALIgCATIAAAeIAAAeIACAUIADALIAFAIQAJAMASAAQASAAALgLQAFgGADgIQACgIAAgIIAAgEIgnAAIAAg4IBsAAIAAAlQgCAqgEAOQgHAWgQAQQgIAJgJAGQgJAGgKADQgUAHgXAAQgfgCgMgGg");
	this.shape_9.setTransform(-100.4,68.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah+C6IAAlzID9AAIAABRIigAAIAAA/ICIAAIAABQIiIAAIAABBICgAAIAABSg");
	this.shape_10.setTransform(102.8,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABSC6IAAiyIg1BcIg4AAIg1hcIAACyIhdAAIAAlzIBbAAIBSCkIBUikIBaAAIAAFzg");
	this.shape_11.setTransform(65.2,29);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgtC6IAAlzIBbAAIAAFzg");
	this.shape_12.setTransform(35.6,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgtC6IAAkiIhbAAIAAhRIERAAIAABRIhcAAIAAEig");
	this.shape_13.setTransform(11.8,29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah+C6IAAlzID9AAIAABRIigAAIAAA/ICIAAIAABQIiIAAIAABBICgAAIAABSg");
	this.shape_14.setTransform(-19,29);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah+C6IAAlzID9AAIAABRIigAAIAABCICIAAIAABQIiIAAIAACQg");
	this.shape_15.setTransform(-50.3,29);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtC6IAAlzIBbAAIAAFzg");
	this.shape_16.setTransform(-75.1,29);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ah7C6IAAlzIBcAAIAAEhICbAAIAABSg");
	this.shape_17.setTransform(-97.5,29);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgrAsIAAhYIBXAAIAABYg");
	this.shape_18.setTransform(119.8,-0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhMCqQghgKgagbIA4g4QAOANAUAGQAWAGAXAAQAyAAAAgfQAAgOgIgHQgGgIgRgCIgTgDIgVgDQgZgDgRgIQgSgIgMgMQgNgLgFgSQgHgSAAgXQAAgxAjggQASgPAYgIQAYgIAbAAQAnAAAdAKQAPAFANAIQANAIALALIg3A3QgNgNgRgEQgPgEgXAAQgSAAgLAKQgLAKAAANQAAAKAHAHQAIAIAQACIASADIAXADQAvAHAXAXQAaAYAAA0QABAagLAVQgLAVgTAOQgSAOgaAIQgZAHgaAAQgsAAgggKg");
	this.shape_19.setTransform(99.8,-14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ah1CxIAAlhIBYAAIAAEUICTAAIAABNg");
	this.shape_20.setTransform(72.6,-14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ah1CxIAAlhIBYAAIAAEUICTAAIAABNg");
	this.shape_21.setTransform(43.9,-14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ABHCxIgQg1IhsAAIgRA1IhcAAICClhIBBAAICCFhgAgcAzIA7AAIgdhcg");
	this.shape_22.setTransform(12.2,-14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgqCxIAAkTIhYAAIAAhOIEEAAIAABOIhXAAIAAETg");
	this.shape_23.setTransform(-18.6,-14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhMCqQghgKgagbIA5g4QANANAUAGQAWAGAXAAQAxAAAAgfQABgOgIgHQgHgIgQgCIgTgDIgWgDQgYgDgRgIQgSgIgMgMQgNgLgGgSQgFgSgBgXQABgxAiggQASgPAYgIQAYgIAbAAQAnAAAdAKQAPAFANAIQANAIALALIg3A3QgOgNgPgEQgRgEgWAAQgSAAgLAKQgLAKAAANQAAAKAHAHQAIAIAQACIASADIAXADQAvAHAXAXQAbAYAAA0QAAAagLAVQgKAVgUAOQgSAOgaAIQgZAHgaAAQgsAAgggKg");
	this.shape_24.setTransform(-49,-14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AA+CxIhwixIAACxIhXAAIAAlhIBMAAIBwCxIAAixIBXAAIAAFhg");
	this.shape_25.setTransform(-80.3,-14.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgqCxIAAlhIBVAAIAAFhg");
	this.shape_26.setTransform(-105.7,-14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABdDTIAAjLIg8BpIhAAAIg9hpIAADLIhoAAIAAmlIBnAAIBdC7IBfi7IBmAAIAAGlg");
	this.shape_27.setTransform(94.1,-59);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhADLQgdgMgYgYQgcgbgIglQgEgZgDhOQAAgrAHg7QAIglAcgbQAYgYAdgMQAcgMAkAAQAlAAAdAMQAcAMAYAYQAcAbAHAlQAIA7AAArQAABBgIAmQgHAlgcAbQgYAYgcAMIgfAJIgjADQgtgEgTgIgAgXh0QgKAFgHAJIgHAKIgFARIgCAdIgBAuIABAuIACAdIAFARIAHALQAHAJAKAEQALAGAMAAQANAAALgGQAKgEAIgJIAGgLIAEgRIADgcIACgvIgBguIgDgdIgFgRIgGgKQgHgJgLgFQgLgFgNAAQgMAAgLAFg");
	this.shape_28.setTransform(51.1,-59);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgzDTIAAlJIhoAAIAAhcIE3AAIAABcIhpAAIAAFJg");
	this.shape_29.setTransform(14.6,-59);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhbDLQgngMgfggIBDhCQAPAPAaAHQAZAHAcAAQA7AAAAgmQAAgQgIgJQgJgJgTgCIgXgEIgagEQgcgDgWgKQgVgKgOgOQgPgNgHgVQgHgWAAgbQAAg7ApglQAVgUAdgIQAcgKAhAAQAvAAAjAMQARAGAPAKQAQAJANANIhBBCQgQgQgTgFQgUgEgaAAQgXAAgNAMQgNAMAAAPQAAAMAJAIQAJAKAUADIAVADIAcADQA4AJAbAbQAgAdAAA+QAAAfgNAZQgMAZgXARQgWASgeAIQgeAJggAAQg0AAgngMg");
	this.shape_30.setTransform(-21.6,-59);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ag9DKQgegKgWgUQgWgVgMgcQgMgcAAgiIAAkRIBoAAIAAEPQAAAdAOAQQAIAIAKAEQALAEAMAAQAMAAAKgEQALgEAHgIQAQgQAAgdIAAkPIBoAAIAAERIgDAgIgJAeQgNAcgWAVQgXAUgdAKQgeALgfAAQggAAgdgLg");
	this.shape_31.setTransform(-57.7,-58.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhADLQgcgMgYgYQgcgbgIglQgFgZgChOQAAgrAHg7QAIglAcgbQAYgYAcgMQAdgMAjAAQA+AAAsAjQAWARANAaQAOAaAFAiIhpAAQgHgUgMgNQgMgMgYAAQgZAAgOASIgHALIgEARIgEAdIgBAuIABAuIAEAeIAEARIAHALQAOASAZAAQAYAAAMgMQAMgMAHgVIBpAAQgLBEgrAjQgWASgbAIQgaAJgfAAQgsgEgUgIg");
	this.shape_32.setTransform(-94.6,-59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.6,-100.9,261.8,192.8);


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
	this.instance = new lib.Install_300x600_coax();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.smokeassetmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.5,75,75);


// stage content:
(lib.CT1222_Install_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickthrough_btn.addEventListener("click", clickThroughFunc.bind(this));
		function clickThroughFunc(){
		    EB.clickthrough();
		}
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
	this.clickthrough_btn = new lib.CT1();
	this.clickthrough_btn.setTransform(150,300,1.181,3.158,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(150,604);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).to({y:475},4).wait(32));

	// guarantee
	this.instance_1 = new lib.guarantee();
	this.instance_1.setTransform(149.6,-91.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({x:147,y:121},4).wait(56));

	// red team
	this.instance_2 = new lib.redteam();
	this.instance_2.setTransform(150,388);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({y:125},4).wait(80));

	// HEAD build
	this.instance_3 = new lib.HEADover();
	this.instance_3.setTransform(432,207.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({x:150},4).wait(37).to({y:-52.8},4).to({_off:true},1).wait(79));

	// HEAD dream
	this.instance_4 = new lib.HEADquality();
	this.instance_4.setTransform(150.8,207.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({y:-52.8},4).to({_off:true},1).wait(79));

	// smoke 2
	this.instance_5 = new lib.smokeassetmc();
	this.instance_5.setTransform(250,196.5,1.615,1.615,-120,0,0,-0.1,0.1);
	this.instance_5.alpha = 0.602;
	this.instance_5.compositeOperation = "lighter";
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({_off:false},0).to({regX:0,scaleX:1.57,scaleY:1.57,rotation:14.8,x:253.7,y:193.6,alpha:1},1).to({regY:0,scaleX:0.43,scaleY:0.43,rotation:15,y:193.4,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(4).to({_off:false,regX:-0.1,regY:0.1,scaleX:1.38,scaleY:1.38,rotation:-120,x:235.2,y:282.7,alpha:0.602},0).to({regX:0.1,scaleX:1.34,scaleY:1.34,rotation:14.8,x:238.6,y:280.3,alpha:1},1).to({regY:-0.1,scaleX:0.37,scaleY:0.37,rotation:15,x:238.5,y:280.1,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(129));

	// smoke
	this.instance_6 = new lib.smokeassetmc();
	this.instance_6.setTransform(151,228.5,1.615,1.615,-120,0,0,-0.1,0.1);
	this.instance_6.alpha = 0.602;
	this.instance_6.compositeOperation = "lighter";
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).to({regX:0,scaleX:2.27,scaleY:2.27,rotation:14.8,x:150.7,y:228.6,alpha:1},1).to({regY:0,scaleX:0.63,scaleY:0.63,rotation:15,y:228.4,alpha:0},7,cjs.Ease.get(-1)).wait(5).to({regX:-0.1,regY:0.1,scaleX:1.62,scaleY:1.62,rotation:-120,x:47,y:186.2,alpha:0.602},0).to({regX:8.1,regY:-2,scaleX:1.57,scaleY:1.57,rotation:-45.2,x:62.8,y:193.6,alpha:1},1).to({regX:0.1,regY:0.1,scaleX:0.43,scaleY:0.43,rotation:-60,x:43.7,y:193.4,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(4).to({_off:false,regX:-0.1,scaleX:1.38,scaleY:1.38,rotation:-120,x:61.6,y:273.9,alpha:0.602},0).to({regX:8.1,regY:-1.9,scaleX:1.34,scaleY:1.34,rotation:-81,x:75.2,y:280.3,alpha:1},1).to({regX:0,regY:0,scaleX:0.37,scaleY:0.37,rotation:-105,x:58.9,y:280.1,alpha:0},7,cjs.Ease.get(-1)).to({_off:true},1).wait(129));

	// tweet R
	this.instance_7 = new lib.tweet();
	this.instance_7.setTransform(254,134);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(44).to({_off:false},0).wait(137));

	// tweet L
	this.instance_8 = new lib.tweet();
	this.instance_8.setTransform(45,134);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(44).to({_off:false},0).wait(137));

	// coax R
	this.instance_9 = new lib.coax();
	this.instance_9.setTransform(279,115);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(31).to({_off:false},0).wait(150));

	// coax L
	this.instance_10 = new lib.coax();
	this.instance_10.setTransform(21,115);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(31).to({_off:false},0).wait(150));

	// woofer
	this.instance_11 = new lib.woofer();
	this.instance_11.setTransform(150,123);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(18).to({_off:false},0).wait(163));

	// bkgd
	this.instance_12 = new lib._300x600_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;