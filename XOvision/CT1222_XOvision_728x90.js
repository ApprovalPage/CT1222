(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_728x90_bkgd.jpg", id:"_728x90_bkgd"},
		{src:"images/CT1222_XOvision_728x90_atlas_P_.png", id:"CT1222_XOvision_728x90_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_XOvision_728x90_atlas_P_", frames: [[0,252,728,90],[0,0,300,250],[0,344,728,90]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._728x90_bkgd = function() {
	this.initialize(img._728x90_bkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.CT1222_XOvision_728x90_Deck = function() {
	this.spriteSheet = ss["CT1222_XOvision_728x90_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_XOvision_728x90_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_728x90_tuner = function() {
	this.spriteSheet = ss["CT1222_XOvision_728x90_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape.setTransform(0,0,0.126,0.082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-13.3,77.7,26.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape.setTransform(-6.7,3.8,0.121,0.121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,234,239,0.098)").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_1.setTransform(15.4,0,0.121,0.121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_2.setTransform(11.3,-3.9,0.121,0.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_3.setTransform(10.5,3.8,0.121,0.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_4.setTransform(13.6,8.1,0.121,0.121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37EAEF").s().p("AhcBUIARinICoAAIgSCng");
	this.shape_5.setTransform(6.1,8.2,0.121,0.121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_6.setTransform(20.1,-4.7,0.121,0.121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAnAqIg8JNQgeBVhUAVg");
	this.shape_7.setTransform(19.2,4.7,0.121,0.121);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(55,234,239,0.098)").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_8.setTransform(15.2,-8.2,0.121,0.121);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_9.setTransform(-10.4,-4.7,0.121,0.121);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAmAqIg7JNQgeBVhUAVg");
	this.shape_10.setTransform(-11.3,4.7,0.121,0.121);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBehTIIjAAIBLBTIhcBUg");
	this.shape_11.setTransform(-15.3,0,0.121,0.121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#37EAEF").s().p("AjSBUIiihAQAehSBWgVIJ1AAIhQCng");
	this.shape_12.setTransform(-15.3,-8.2,0.121,0.121);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_13.setTransform(-19.2,-3.8,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(55,234,239,0.098)").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_14.setTransform(-20.1,3.8,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhTICwg/IH4AAIAvCng");
	this.shape_15.setTransform(-17,8.2,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(55,234,239,0.098)").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_16.setTransform(2.9,-4.7,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37EAEF").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_17.setTransform(2,4.7,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_18.setTransform(-2,0,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_19.setTransform(-2,-8.2,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_20.setTransform(-5.9,-3.8,0.121,0.121);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37EAEF").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_21.setTransform(-3.7,8.2,0.121,0.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-9.2,42.8,18.5);


(lib.TunerPhone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.XOvision_728x90_tuner();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,728,90);


(lib.Only2996 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMCFIAAggQgcgDgMgEQgRgGgOgOIAgghQAIAIALAEQANADANAAIAAgmIgLgBQgbgEgPgNQgHgHgDgKQgEgLAAgNQAAgZAQgSQARgSAcgDIAAgbIAiAAIAAAaQAlACAWAXIggAfQgGgGgIgDQgKgCgIAAIAAAkIALABQAbAEAOAOQAPANAAAeQAAAMgEALQgFAKgIAJQgRAQgcAFIAAAhgAARA3QASgDAAgPQAAgIgFgDIgFgFIgIgBgAgUg2QgEAFAAAGQAAAGAEAEQAEAEAKACIAAgiQgKABgEAGg");
	this.shape.setTransform(-41.1,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMA0IAAgrIgfg8IAcAAIAPAmIAQgmIAdAAIghA8IAAArg");
	this.shape_1.setTransform(37.5,53.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA0IAAhnIAaAAIAABQIArAAIAAAXg");
	this.shape_2.setTransform(30.4,53.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASA0Iggg0IAAA0IgaAAIAAhnIAXAAIAgAzIAAgzIAaAAIAABng");
	this.shape_3.setTransform(20.6,53.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAyQgHgDgGgGQgHgHgCgJIgCgZIACgYQACgJAHgIQAGgFAHgDQAHgDAIAAQAJAAAHADQAHADAGAFQAHAIACAJIACAYQgBAQgBAJQgCAJgHAHQgGAGgHADIgIACIgIABQgKgBgFgCgAgEgcIgFADIgCADIgBAEIAAAIIAAAKIAAALIAAAHIABAEIACADIAFAEIAEABIAFgBIAFgEIACgDIABgEIAAgHIABgLIgBgKIAAgIIgBgEIgCgDQgCgCgDgBQgCgBgDAAQgCAAgCABg");
	this.shape_4.setTransform(10.8,53.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTCWQgRgQgJgVQgIgVAAgcQAAgXAIgVQAHgUAQggIADgFIBFiNIBYAAIhHCLQAHgCANAAQARAAARAHQARAHAOAOQAOANAIATQAIAUAAAZQAAA3giAfQgiAegyAAQgxAAgigegAgYAjQgLALAAASQAAAUALAKQAKAMAOAAQAPAAALgMQAKgKAAgUQAAgSgKgLQgLgLgPAAQgOAAgKALg");
	this.shape_5.setTransform(68.9,84.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJC0IBHiMQgHACgNAAQgQAAgRgHQgRgGgOgPQgPgOgIgSQgIgVAAgZQAAgbAIgVQAJgVARgPQAigeAxAAQAyAAAiAeQARAPAJAVQAIAVAAAbQAAAYgHAVQgIAUgQAgIgDAFIhECOgAgYheQgLAMAAASQAAAUALAKQAKALAOAAQAPAAALgLQAKgKAAgUQAAgSgKgMQgLgKgPAAQgOAAgKAKg");
	this.shape_6.setTransform(44.2,83.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrAtIAAhZIBYAAIAABZg");
	this.shape_7.setTransform(26.9,97.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhJC0IBHiMQgHACgNAAQgQAAgRgHQgRgGgOgPQgPgOgIgSQgIgVAAgZQAAgbAIgVQAJgVARgPQAigeAxAAQAyAAAiAeQARAPAJAVQAIAVAAAbQAAAYgHAVQgIAUgQAgIgDAFIhECOgAgYheQgLAMAAASQAAAUALAKQAKALAOAAQAPAAALgLQAKgKAAgUQAAgSgKgMQgLgKgPAAQgOAAgKAKg");
	this.shape_8.setTransform(10.3,83.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhxC0IAAhLIB/iKQAKgLAEgIQAEgIAAgLQAAgPgIgJQgIgJgQAAQgMAAgJAIQgKAIAAATIhSAAQAAg0AhgcQAQgPAVgHQAUgIAXABQAZgBAVAIQAVAHAPAPQAgAcAAAzQAAAZgKASQgKATgYAXIhTBaIB/AAIAABLg");
	this.shape_9.setTransform(-17.1,83.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,41.9,277.5,71.8);


(lib.HEADsearch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape.setTransform(89.5,-39.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AArCkIAAiCIhUAAIAACCIhRAAIAAlHIBRAAIAAB/IBUAAIAAh/IBQAAIAAFHg");
	this.shape_1.setTransform(67,-51.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxCdQgWgJgSgSQgXgWgFgdQgEgTgCg8QAAghAGgtQAFgdAXgWQASgSAWgJQAWgJAbAAQAwAAAiAbQARANALAUQAKAUAEAbIhSAAQgEgRgKgJQgJgKgTAAQgTAAgLAOIgFAJIgEANIgCAXIgBAjIABAkIACAWIAEAOIAFAJQALAOATAAQATAAAJgKQAKgJAEgRIBSAAQgJA1ghAbQgRAOgUAHQgVAGgYAAQgigCgPgHg");
	this.shape_2.setTransform(38,-51.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkCkIg4h7IgcAAIAAB7IhRAAIAAlHICBAAQAaAAAWAJQAUAIAPAPQAOAPAHATQAIAUAAAUQAAAfgQAWQgPAUgXALIBICJgAgwgYIAuAAQAOAAAJgKQAKgKAAgNQAAgOgKgKQgJgJgOAAIguAAg");
	this.shape_3.setTransform(9.5,-51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCCkIgQgxIhjAAIgQAxIhUAAIB3lHIA9AAIB3FHgAgaAvIA3AAIgbhVg");
	this.shape_4.setTransform(-21.9,-51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhuCkIAAlHIDdAAIAABIIiMAAIAAA3IB4AAIAABGIh4AAIAAA6ICMAAIAABIg");
	this.shape_5.setTransform(-50.5,-51.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhGCdQgfgJgXgZIAzg0QAMANAUAFQATAGAWAAQAuAAAAgeQAAgNgHgGQgGgHgPgCIgSgDIgUgDQgWgDgQgHQgRgIgLgLQgLgKgGgQQgGgQAAgWQAAgtAhgdQAQgPAWgHQAWgHAaAAQAjAAAcAJQANAEAMAIQAMAHAKALIgzAyQgMgMgPgEQgOgDgVAAQgRAAgLAJQgKAKAAALQABAJAGAHQAIAHAOACIAQADIAWADQArAGAWAVQAYAWAAAwQAAAZgJATQgKATgRANQgSAOgYAHQgXAGgYAAQgoAAgegJg");
	this.shape_6.setTransform(-79.5,-51.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.2,-85.8,276.4,62.2);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoApIAAhRIBRAAIAABRg");
	this.shape.setTransform(59.7,-3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkCkIg4h7IgbAAIAAB7IhRAAIAAlHICAAAQAaAAAWAJQAUAIAPAPQAOAPAHATQAIAUAAAUQAAAfgQAWQgPAUgXALIBICJgAgvgYIAtAAQAOAAAKgKQAJgKAAgNQAAgOgJgKQgKgJgOAAIgtAAg");
	this.shape_1.setTransform(39.1,-16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhuCkIAAlHIDdAAIAABIIiMAAIAAA3IB4AAIAABGIh4AAIAAA6ICMAAIAABIg");
	this.shape_2.setTransform(9.3,-16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgdCkIhslHIBTAAIA2C2IA2i2IBUAAIhtFHg");
	this.shape_3.setTransform(-19,-16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxCdQgXgJgSgSQgWgWgGgdQgDgTgCg8QAAghAFgtQAGgdAWgWQASgSAXgJQAVgJAcAAQAcAAAXAJQAWAJATASQAVAWAGAdQAGAtgBAhQABAzgGAcQgGAdgVAWQgTASgWAJIgYAHIgbACQgjgCgOgHgAgShaQgIAEgFAHIgFAIIgEANIgBAXIgBAjIABAkIABAWIAEANIAFAJQAFAGAIAEQAJAFAJAAQAKAAAJgFQAIgEAFgGIAFgJIAEgNIACgWIABgkIgBgjIgCgWIgEgOIgFgIQgFgHgIgEQgJgEgKAAQgJAAgJAEg");
	this.shape_4.setTransform(-47.6,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-50,152,62.2);


(lib.HEADgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCATIgEgBIgHgEIgEgHIgBgEIgBgDQAAgDACgDIACgEIACgDQADgDAEgBIAEgBIACgBIAEABIADABIAEACIADACIACADIACAEIABADIABADIgBADIgBAEQgBAEgDADIgDACIgEACQgDACgEAAIgCgBgAgEgMIgFADIgDAFIgBAEIABAFIADAFIAFADIAEABIAFgBQADgBACgCIADgFQABgCAAgDQAAgCgBgCIgDgFQgCgCgDgBIgFgBIgEABgAADAKIgDgIIAAAAIAAAIIgGAAIAAgTIAHAAQAEAAACACQABACAAADIAAACIgDABIAEAJgAAAAAIABAAIABgBIABgBIgBgCIgBAAIgBAAg");
	this.shape.setTransform(72,-51);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAbIAAg1IA0AAIAAA1g");
	this.shape_1.setTransform(71.1,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtBnQgVgGgPgQIAigiQAIAIANADQANAEANAAQAeAAAAgUQAAgIgEgEQgFgFgKgBIgLgCIgNgCQgOgCgKgEQgLgFgIgIQgIgFgDgLQgDgLAAgOQAAgeAUgTQAMgKANgEQAPgFAQAAQAYAAARAGQAKADAHAFQAIAFAHAHIgiAhQgIgIgJgDQgKgCgOAAQgKAAgHAGQgHAGABAIQgBAGAFAEQAFAFAKACIAJABIAPACQAcAEAOAOQAQAOAAAfQAAAQgHANQgFANgMAIQgMAJgPAFQgPAEgQAAQgaAAgTgGg");
	this.shape_2.setTransform(58.4,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguBnQgTgGgQgQIAigiQAIAIAMADQANAEAOAAQAeAAAAgUQAAgIgFgEQgEgFgJgBIgMgCIgNgCQgOgCgLgEQgLgFgHgIQgHgFgEgLQgDgLAAgOQgBgeAWgTQALgKAOgEQAOgFAQAAQAYAAASAGQAJADAHAFQAIAFAGAHIggAhQgJgIgJgDQgKgCgOAAQgKAAgHAGQgGAGgBAIQABAGAEAEQAFAFAJACIALABIANACQAdAEAOAOQAQAOAAAfQAAAQgHANQgGANgLAIQgLAJgQAFQgPAEgQAAQgaAAgUgGg");
	this.shape_3.setTransform(40.6,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIBrIAAjVICRAAIAAAvIhcAAIAAAkIBOAAIAAAtIhOAAIAAAmIBcAAIAAAvg");
	this.shape_4.setTransform(23.4,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHBrIAAjVIA2AAIAACmIBZAAIAAAvg");
	this.shape_5.setTransform(5.9,-3.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBrIglhQIgRAAIAABQIg2AAIAAjVIBUAAQARAAAOAFQAOAGAKAKQAJAKAFAMQAFANAAANQAAAUgLAPQgKAMgPAHIAvBagAgegPIAeAAQAIAAAGgHQAHgGAAgJQAAgJgHgGQgGgHgIAAIgeAAg");
	this.shape_6.setTransform(-19.1,-3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggBnQgPgGgMgMQgOgOgEgTQgDgNAAgnQgBgVAEgeQAEgTAOgOQAMgMAPgGQAOgGASAAQASAAAPAGQAPAGALAMQAPAOADATQAFAeAAAVQAAAhgFATQgDATgPAOQgLAMgPAGIgPAFIgSABQgXgCgJgEgAgLg6QgGACgDAFIgEAFIgBAJIgCAPIAAAWIAAAXIACAPIABAIIAEAGQADAEAGADQAFADAGAAQAGAAAGgDQAFgDADgEIAEgGIADgIIABgPIAAgXIAAgWIgBgPIgDgJIgEgFQgDgFgFgCQgGgDgGAAQgGAAgFADg");
	this.shape_7.setTransform(-39.3,-3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhIBrIAAjVICRAAIAAAvIhbAAIAAAmIBOAAIAAAtIhOAAIAABTg");
	this.shape_8.setTransform(-57.5,-3.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBNIAAiZIBnAAIAAAiIhBAAIAAAaIA4AAIAAAgIg4AAIAAAbIBBAAIAAAig");
	this.shape_9.setTransform(61.7,-26.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BNIAAiZIA4AAQAMAAALAEIAKAFQAFACADAEQAGAGADAGQADAGABAHQACAHABAJIAAAUIAAAVQgBAJgCAHQgBAHgDAGQgDAGgGAGQgHAHgLAEQgLAEgMAAgAgSArIARAAQAFAAAEgCQAFgDACgEIACgDIABgGIABgKIAAgPIAAgPIgBgJIgBgFIgCgEQgCgEgFgDQgEgCgFAAIgRAAg");
	this.shape_10.setTransform(48.2,-26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBNIAAiZIAkAAIAACZg");
	this.shape_11.setTransform(37.5,-26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARBNIgag6IgNAAIAAA6IgmAAIAAiZIA8AAQAMAAAKAEQAKAEAHAHQAGAHAEAJQADAJAAAKQAAAOgHALQgHAIgLAFIAiBBgAgWgLIAWAAQAFAAAFgEQAEgFAAgGQAAgGgEgFQgFgFgFAAIgWAAg");
	this.shape_12.setTransform(27.6,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AARBNIgag6IgNAAIAAA6IgmAAIAAiZIA8AAQAMAAAKAEQAKAEAHAHQAGAHAEAJQADAJAAAKQAAAOgHALQgHAIgLAFIAiBBgAgWgLIAWAAQAFAAAFgEQAEgFAAgGQAAgGgEgFQgFgFgFAAIgWAAg");
	this.shape_13.setTransform(8.9,-26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBJQgLgDgIgIQgIgHgFgLQgEgKAAgNIAAhiIAmAAIAABiQAAALAFAFQADADAEACQADABAEABQAEgBAEgBQAEgCACgDQAGgFAAgLIAAhiIAmAAIAABiIgBANIgEAKQgEALgIAHQgIAIgLADQgLAFgLAAQgLAAgKgFg");
	this.shape_14.setTransform(-5.9,-26.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXBKQgKgFgJgIQgKgLgCgNQgCgJgCgcQAAgPAEgVQACgOAKgKQAJgIAKgFQALgEAMAAQANAAALAEQAKAFAJAIQAKAKACAOQADAVAAAPQAAAYgDANQgCANgKALQgJAIgKAFIgMADIgMABQgPgBgIgDgAgHgpQgEABgDAEIgCAEIgCAGIgBAKIAAAQIAAAQIABALIACAGIACAEQADADAEACQAEACADAAQAFAAAEgCQADgCADgDIACgEIACgGIABgKIAAgRIAAgQIgBgKIgCgGIgCgEQgDgEgDgBQgEgCgFAAQgDAAgEACg");
	this.shape_15.setTransform(-19.9,-26.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSBNIAAg/IguhaIApAAIAXA4IAYg4IApAAIgvBaIAAA/g");
	this.shape_16.setTransform(-32.7,-26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAaBNIgvhNIAABNIgmAAIAAiZIAhAAIAwBMIAAhMIAmAAIAACZg");
	this.shape_17.setTransform(-51.6,-26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgSBNIAAiZIAkAAIAACZg");
	this.shape_18.setTransform(-62.7,-26.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAQA+IAAgxIgeAAIAAAxIggAAIAAh8IAgAAIAAAxIAeAAIAAgxIAfAAIAAB8g");
	this.shape_19.setTransform(62.9,-44.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOA+IAAhgIgfAAIAAgcIBbAAIAAAcIgfAAIAABgg");
	this.shape_20.setTransform(51.7,-44.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgSA8QgIgEgIgGQgIgJgCgLQgBgHgBgXQAAgLACgSQACgLAIgIQAIgIAIgDQAJgDAJgBQALABAIADQAJADAHAIQAIAIADALQABASAAALQAAATgBALQgDALgIAJQgHAGgJAEIgJACIgKABQgMAAgGgDgAgGgiIgEAFIgDADIgBAFIgBAJIgBAMIABAOIABAIIABAFIADADQABACADACQAEACACAAQADAAAEgCIAFgEIACgDIACgFIABgIIAAgOIAAgMIgBgJIgCgFIgCgDQgCgDgDgCQgEgBgDAAQgCAAgEABg");
	this.shape_21.setTransform(40.9,-44.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSA8QgIgEgIgGQgIgJgCgLQgBgHgCgXQABgLACgSQACgLAIgIQAIgIAIgDQAJgDAJgBQALABAJADQAIADAHAIQAIAIACALQADASAAALQAAATgDALQgCALgIAJQgHAGgIAEIgKACIgKABQgNAAgFgDgAgFgiIgFAFIgDADIgBAFIgBAJIgBAMIABAOIABAIIABAFIADADQABACAEACQADACACAAQADAAAEgCIAFgEIACgDIABgFIABgIIAAgOIAAgMIgBgJIgBgFIgCgDQgCgDgDgCQgEgBgDAAQgCAAgDABg");
	this.shape_22.setTransform(29.6,-44.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgOA+IAAhgIgfAAIAAgcIBbAAIAAAcIgfAAIAABgg");
	this.shape_23.setTransform(18.8,-44.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgqA+IAAh8IBVAAIAAAcIg1AAIAAAVIAtAAIAAAaIgtAAIAAAWIA1AAIAAAbg");
	this.shape_24.setTransform(8.4,-44.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgRA8QgJgDgHgHQgGgFgEgJQgDgIAAgKIAAhQIAeAAIAABPQABAJAEAEQACADADABQAEABACABIAHgCQACgBACgDQAFgEAAgJIAAhPIAfAAIAABQIgBAKIgCAIQgEAJgHAFQgHAHgIADQgJADgJAAQgJAAgIgDg");
	this.shape_25.setTransform(-3,-44.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoA+IAAh8IAfAAIAABhIAyAAIAAAbg");
	this.shape_26.setTransform(-13.6,-44.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AguA+IAAh8IAzAAQATABALAJQAKAKAAARQAAAEgBAEIgDAHQgFAGgFAEIAFABIAFAFQADAEABAFQACAEAAAGQAAASgLAJQgLALgSgBgAgOAiIASAAQAGAAADgCQADgEAAgEQAAgFgDgEQgDgCgGAAIgSAAgAgOgNIARAAQAGgBACgDQADgCAAgFQAAgEgDgDQgCgDgGAAIgRAAg");
	this.shape_27.setTransform(-24.7,-44.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOA+IAAhgIgfAAIAAgcIBbAAIAAAcIgfAAIAABgg");
	this.shape_28.setTransform(-39.7,-44.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgpA+IAAh8IBTAAIAAAcIg0AAIAAAVIAsAAIAAAaIgsAAIAAAWIA0AAIAAAbg");
	this.shape_29.setTransform(-50.1,-44.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgTA8QgIgEgHgGQgJgJgCgLQgBgHgBgXQAAgLACgSQACgLAJgIQAHgIAIgDQAGgCANgCQAHAAAMADQAJAEAGAGQAGAGADAHQAEAIABAIIgfAAQgCgHgEgDQgEgEgHAAQgDAAgDABIgFAFIgDADIgBAFIgBAJIAAAMIAAAOIABAIIABAFIADAEQAEAFAHAAQAIAAAFgFQACgCABgEIABgIIAAgCIgRAAIAAgXIAwAAIAAAPQgBATgCAHQgDAJgHAIQgDAEgFACQgEADgEABQgJADgKAAQgNAAgGgDg");
	this.shape_30.setTransform(-61.4,-44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.5,-57.5,170.9,72.1);


(lib.deck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT1222_XOvision_728x90_Deck();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// product
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAtIAdhRIgdAAIAAAOIgKAAIAAgWIAxAAIAAAIIgeBRg");
	this.shape.setTransform(-389.2,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIAsQgFgBgDgEQgHgHAAgLIAAgpQAAgFABgFQACgEAEgEQAHgGAJgBQAKABAHAGQAEAEACAEQABAFAAAFIAAApQAAALgHAHQgDAEgFABQgEACgFAAQgEAAgEgCgAgKgfQgCACgBADIgBAHIAAAoQAAAHAEAEIAFAFIAFABIAGgBIAFgFQACgCABgDIABgGIAAgoIgBgHIgDgFQgEgFgHgBQgGABgEAFg");
	this.shape_1.setTransform(-395.9,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAtIAAhOIgPAOIAAgKIAPgPIAJAAIAABZg");
	this.shape_2.setTransform(-403,-4.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAtIAAhZIAeAAQAOAAAIAIIAFAHQACAEAAADQACAJAAANQAAANgCAJQAAAEgCAEIgFAHQgIAIgOAAgAgUAlIAUAAQADAAAFgDQAEgBAEgDQADgEABgHIABgTIgBgSQgBgGgDgFQgEgDgEgBQgFgCgDAAIgUAAg");
	this.shape_3.setTransform(-410,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAVAtIgVgmIgVAmIgLAAIAcgtIgagsIALAAIATAkIAUgkIALAAIgaAsIAcAtg");
	this.shape_4.setTransform(-418,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYAtIgbgsIgTgbIAABHIgKAAIAAhZIAJAAIAbArIATAbIAAhGIAKAAIAABZg");
	this.shape_5.setTransform(-379.6,-15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLArQgGgCgEgEQgEgEgCgDQgBgDgBgFIgBgJIAAgNIAAgMIABgJQABgFABgDQACgDAEgDQAJgKAMAAQAHAAAFADQAGACAEAFQAEADACADQABADABAFIABAJIAAAMIAAANIgBAJQgBAEgBAEQgCADgEAEQgEAEgGACQgFACgHABQgFgBgGgCgAgHgjIgHAFIgEAFIgCAGIgBAIIAAALIAAAMIABAIIACAGIAEAFIAHAEQAEACADAAQAEAAAEgCIAHgEIAEgFIACgGIABgIIAAgMIAAgLIgBgIIgCgGIgEgFIgHgFQgEgBgEAAQgDAAgEABg");
	this.shape_6.setTransform(-388.4,-15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEAtIAAhZIAIAAIAABZg");
	this.shape_7.setTransform(-394.3,-15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIAtIgIgCQgIgDgGgGIAHgHIAFAFIAGADQAGACAGAAIAIgBQAEgBADgDQAGgEAAgHIgBgIIgDgEIgFgDIgHgCIgFAAIgEgBQgLgCgGgDQgGgGAAgLQAAgLAHgIQAIgGAMgBQAIAAAHADQAGACAGAFIgHAGQgEgDgFgDQgFgBgGAAQgIAAgFAFQgFAEAAAHIABAHQABADACABQACACAEABIAGACIAEABIAEAAIAKADIAHACQAIAHAAALQAAAGgCAFQgDAEgEAEQgEAEgGABQgGACgGAAIgIgBg");
	this.shape_8.setTransform(-399.9,-15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEAtIAAhZIAIAAIAABZg");
	this.shape_9.setTransform(-405.4,-15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAtIgehZIAKAAIAWBIIAXhIIAKAAIgdBZg");
	this.shape_10.setTransform(-410.7,-15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLArQgGgCgEgEQgEgEgCgDQgCgDAAgFIgBgJIAAgNIAAgMIABgJQAAgFACgDQACgDAEgDQAIgKANAAQAHAAAFADQAGACAFAFQADADABADQACADABAFIABAJIABAMIgBANIgBAJQgBAEgCAEQgBADgDAEQgFAEgGACQgFACgHABQgFgBgGgCgAgHgjIgHAFIgEAFIgBAGIgBAIIAAALIAAAMIABAIIABAGIAEAFIAHAEQAEACADAAQAEAAAEgCIAHgEQADgCAAgDIADgGIABgIIAAgMIAAgLIgBgIIgDgGIgDgFIgHgFQgEgBgEAAQgDAAgEABg");
	this.shape_11.setTransform(-421.4,-15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVAtIgVgmIgVAmIgLAAIAcgtIgagsIALAAIATAkIAUgkIALAAIgaAsIAcAtg");
	this.shape_12.setTransform(-429.1,-15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buy now
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaBIIgahWIgZBWIgYAAIgniPIAeAAIAWBZIAbhZIATAAIAbBZIAXhZIAdAAIgnCPg");
	this.shape_13.setTransform(93.4,100.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUBFQgKgEgIgHQgJgKgDgMQgCgNAAgXQAAgOACgVQADgMAJgKQAIgIAKgEQAKgDAKAAQAMAAAJADQAKAEAIAIQAKAKACAMQACAUAAAPQAAAbgCAJQgCAMgKAKQgIAHgKAEQgJAEgMAAQgKAAgKgEgAgJgtQgFACgDAEIgDAFIgCAHIgBALIgBAQIABARIABALIACAHIADAFQADAEAFACQAFACAEAAQAFAAAFgCQAEgCAEgEIADgFIACgHIACgLIAAgRIAAgQIgCgLIgCgHIgDgFQgHgIgLAAQgEAAgFACg");
	this.shape_14.setTransform(77.8,100.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBIIg4hXIAABXIgcAAIAAiPIAZAAIA4BXIAAhXIAcAAIAACPg");
	this.shape_15.setTransform(64,100.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgMBIIAAg7IgshUIAeAAIAaA6IAag6IAgAAIgsBUIAAA7g");
	this.shape_16.setTransform(46.2,100.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgTBFQgKgDgIgHQgHgHgEgJQgEgKAAgLIAAheIAcAAIAABdQAAAGACAFQACAFADAEQAEADAEACQAFACAEAAQAFAAAFgCQAFgCADgDQAHgIAAgMIAAhdIAcAAIAABeQAAALgEAKQgEAJgHAHQgIAHgKADQgJAEgLAAQgJAAgKgEg");
	this.shape_17.setTransform(33.6,100.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgzBIIAAiPIA4AAQAVAAAMALQAGAFADAIQADAHAAAKQAAAFgBAFIgEAJQgGAHgHAEQAIABAGAIQAGAIAAANQAAAUgMALQgMALgUAAgAgXAvIAcAAQAJAAAFgFQAFgFAAgIQAAgIgFgFQgFgFgJAAIgcAAgAgXgMIAaAAQAJAAAFgFQAFgFAAgHQAAgIgFgEQgFgFgJAAIgaAAg");
	this.shape_18.setTransform(20.3,100.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

	// CT logo
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_19.setTransform(50,64.6,0.252,0.252);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_20.setTransform(102.3,64.5,0.252,0.252);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_21.setTransform(62.4,64.5,0.252,0.252);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_22.setTransform(15,64.5,0.252,0.252);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_23.setTransform(36.2,64.5,0.252,0.252);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_24.setTransform(120.1,64.5,0.252,0.252);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_25.setTransform(82.8,64.5,0.252,0.252);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_26.setTransform(-5.6,64.5,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AqxI9QgWAAAAgWIAAj7QAAgWAWAAIVjAAQAWAAAAAWIAAD7QAAAWgWAAg");
	mask.setTransform(56.8,57.3);

	// bkgd
	this.instance = new lib.XOvision_300x250_CTAbkgd();
	this.instance.setTransform(-177,-135,1.09,1.09);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445.5,-24.7,573.6,139.4);


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


// stage content:



(lib.CT1222_XOvision_728x90 = function(mode,startPosition,loop) {
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
	this.clickthru_btn.setTransform(363.7,45,2.866,0.474,0,0,0,126.9,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(181));

	// Only 29.96
	this.instance = new lib.Only2996();
	this.instance.setTransform(802,-30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({x:606},4).wait(48).to({x:486,y:-30.3},4).wait(10));

	// CTA
	this.instance_1 = new lib.CTAlockup();
	this.instance_1.setTransform(749,-32,0.901,0.901);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).to({x:598},4).wait(10));

	// HEAD get blue
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(-81,66);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({x:81.1},4).wait(110));

	// HEAD over
	this.instance_3 = new lib.HEADover();
	this.instance_3.setTransform(796,61);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({x:633.2},4).wait(21).to({x:796},4).to({_off:true},1).wait(109));

	// HEAD search
	this.instance_4 = new lib.HEADsearch();
	this.instance_4.setTransform(121.2,96.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({x:-96},4).to({_off:true},1).wait(109));

	// tuner ANIM
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37EAEF").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape.setTransform(489.5,46.4,0.085,0.085);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#37EAEF").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_1.setTransform(504.9,43.7,0.085,0.085);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_2.setTransform(502.1,41,0.085,0.085);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_3.setTransform(501.6,46.4,0.085,0.085);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_4.setTransform(503.7,49.5,0.085,0.085);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37EAEF").s().p("AhcBUIARinICoAAIgSCng");
	this.shape_5.setTransform(498.5,49.5,0.085,0.085);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_6.setTransform(508.3,40.4,0.085,0.085);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAnAqIg8JNQgeBVhUAVg");
	this.shape_7.setTransform(507.7,47.1,0.085,0.085);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_8.setTransform(504.9,38,0.085,0.085);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_9.setTransform(486.9,40.4,0.085,0.085);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAmAqIg7JNQgeBVhUAVg");
	this.shape_10.setTransform(486.2,47.1,0.085,0.085);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBehTIIjAAIBLBTIhcBUg");
	this.shape_11.setTransform(483.5,43.8,0.085,0.085);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#37EAEF").s().p("AjSBUIiihAQAehSBWgVIJ1AAIhQCng");
	this.shape_12.setTransform(483.4,38,0.085,0.085);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_13.setTransform(480.7,41.1,0.085,0.085);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37EAEF").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_14.setTransform(480.1,46.5,0.085,0.085);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhTICwg/IH4AAIAvCng");
	this.shape_15.setTransform(482.2,49.5,0.085,0.085);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(55,234,239,0.098)").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_16.setTransform(496.2,40.4,0.085,0.085);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37EAEF").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_17.setTransform(495.6,47.1,0.085,0.085);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_18.setTransform(492.8,43.8,0.085,0.085);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_19.setTransform(492.8,38,0.085,0.085);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_20.setTransform(490,41.1,0.085,0.085);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37EAEF").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_21.setTransform(491.6,49.5,0.085,0.085);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_22.setTransform(501.6,46.4,0.085,0.085);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_23.setTransform(496.2,40.4,0.085,0.085);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(55,234,239,0.098)").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_24.setTransform(492.8,43.8,0.085,0.085);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_25.setTransform(490,41.1,0.085,0.085);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_26.setTransform(491.6,49.5,0.085,0.085);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(55,234,239,0.098)").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_27.setTransform(504.9,43.7,0.085,0.085);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_28.setTransform(503.7,49.5,0.085,0.085);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(55,234,239,0.098)").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_29.setTransform(504.9,38,0.085,0.085);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(55,234,239,0.098)").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_30.setTransform(480.1,46.5,0.085,0.085);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_31.setTransform(490,41.1,0.085,0.085);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(55,234,239,0.098)").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_32.setTransform(495.6,47.1,0.085,0.085);

	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(494.2,43.8,0.702,0.702);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:496.2}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:480.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:501.6}},{t:this.shape_2,p:{x:502.1,y:41}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25,p:{x:490,y:41.1}},{t:this.shape_19},{t:this.shape_24},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:480.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2,p:{x:502.1,y:41}},{t:this.shape_1},{t:this.shape_3,p:{x:489.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:490}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_2,p:{x:480.7,y:41.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_3,p:{x:501.6}},{t:this.shape_25,p:{x:502.1,y:41}},{t:this.shape_27},{t:this.shape}]},5).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:480.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2,p:{x:502.1,y:41}},{t:this.shape_1},{t:this.shape_3,p:{x:489.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:490}},{t:this.shape_8,p:{x:492.8}},{t:this.shape_24},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:480.7,y:41.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_29,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_3,p:{x:501.6}},{t:this.shape_25,p:{x:502.1,y:41}},{t:this.shape_27},{t:this.shape}]},5).to({state:[{t:this.shape_26},{t:this.shape_31},{t:this.shape_29,p:{x:492.8}},{t:this.shape_24},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:480.7,y:41.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_25,p:{x:502.1,y:41}},{t:this.shape_1},{t:this.shape_3,p:{x:489.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_25,p:{x:490,y:41.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_32},{t:this.shape_9,p:{x:496.2}},{t:this.shape_15},{t:this.shape_30},{t:this.shape_13,p:{x:480.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_16,p:{x:508.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:501.6}},{t:this.shape_2,p:{x:502.1,y:41}},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_21},{t:this.shape_31},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:480.7,y:41.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_22},{t:this.shape_25,p:{x:502.1,y:41}},{t:this.shape_27},{t:this.shape_3,p:{x:489.5}}]},5).to({state:[{t:this.shape_26},{t:this.shape_20},{t:this.shape_29,p:{x:492.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_13,p:{x:480.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_8,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2,p:{x:502.1,y:41}},{t:this.shape_1},{t:this.shape_3,p:{x:489.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:490}},{t:this.shape_8,p:{x:492.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:496.2}},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:480.7,y:41.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:486.9}},{t:this.shape_29,p:{x:504.9}},{t:this.shape_7},{t:this.shape_6,p:{x:508.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_22},{t:this.shape_25,p:{x:502.1,y:41}},{t:this.shape_27},{t:this.shape_3,p:{x:489.5}}]},5).to({state:[{t:this.instance_5}]},22).to({state:[{t:this.instance_5}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({y:112.9},4).to({_off:true},1).wait(109));

	// tuner bkgd
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape_33.setTransform(494.3,43.8,0.088,0.057);

	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(494.3,43.9,0.702,0.702,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.instance_6}]},67).to({state:[{t:this.instance_6}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(67).to({_off:false},0).to({y:113},4).to({_off:true},1).wait(109));

	// phone tuner
	this.instance_7 = new lib.TunerPhone();
	this.instance_7.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({y:194.2},4).to({_off:true},1).wait(109));

	// deck
	this.instance_8 = new lib.deck();
	this.instance_8.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({x:299},4).wait(10));

	// bkgd
	this.instance_9 = new lib._728x90_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(349,45,743,90);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;