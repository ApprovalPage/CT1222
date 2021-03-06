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
		{src:"images/CT1222_XOvision_300x250_atlas_P_.png", id:"CT1222_XOvision_300x250_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_XOvision_300x250_atlas_P_", frames: [[604,0,300,250],[0,252,300,250],[302,252,300,250],[0,0,300,250],[302,0,300,250],[604,252,300,250]]}
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


(lib.CT1222_XOvision_300x250_CTAlockup = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CT1222_XOvision_300x250_Deck = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CT1222_XOvision_300x250_Only = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CT1222_XOvision_300x250_Over = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CT1222_XOvision_300x250_Search = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x250_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CT1222_XOvision_300x250_TunerPhone = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x250_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape.setTransform(0,0,0.126,0.082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-13.3,77.7,26.6);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape.setTransform(0,0,0.126,0.082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-13.3,77.7,26.6);


(lib.Tween7 = function(mode,startPosition,loop) {
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


(lib.Tween5 = function(mode,startPosition,loop) {
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
	this.instance = new lib.CT1222_XOvision_300x250_TunerPhone();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Only2996 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT1222_XOvision_300x250_Only();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.HEADvgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAiIgGgCQgHgDgFgFQgFgEgCgHIgCgGIgBgHQAAgGADgGIADgGIAEgFQAFgFAHgDIAGgCIAGgBIAGABIAHACIAGADIAFAFIAFAFIADAGIACAGIABAGIgBAHIgCAGQgDAHgFAEIgFAFIgGADQgGADgHAAIgGgBgAgJgWQgEABgEAEQgDADgCAFQgCAFAAAEQAAAFACAFQACAFADADQAEAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgDACgFQACgFAAgFQAAgEgCgFQgCgFgEgDQgDgEgFgBQgEgCgFAAQgEAAgFACgAAEASIgEgOIgCAAIAAAOIgKAAIAAgjIAOAAQAGAAADAEQAEADAAAFQAAADgCACIgEADIAHAPgAgCgBIADAAIADgBIABgDIgBgDIgDgBIgDAAg");
	this.shape.setTransform(90,-20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAXIAAgtIAuAAIAAAtg");
	this.shape_1.setTransform(131.1,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoBaQgRgGgOgOIAegdQAHAHALADQAMADALAAQAaAAAAgRQAAgHgDgEQgFgEgIgBIgKgCIgLgBQgMgCgKgEQgKgFgFgGQgHgFgDgJQgEgKAAgMQAAgaATgRQAJgIANgEQAMgEAOAAQAVAAAQAFQAHACAHAFQAHAEAGAGIgdAdQgIgHgIgCQgIgCgMAAQgJAAgGAFQgGAGAAAHQAAAFAEADQAEAFAJABIAIABIANACQAYADANANQAOALgBAcQABAOgGALQgFALgKAIQgLAHgNAEQgNAEgOAAQgXAAgRgFg");
	this.shape_2.setTransform(119,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoBaQgRgGgOgOIAegdQAHAHALADQALADAMAAQAaAAAAgRQAAgHgEgEQgDgEgJgBIgKgCIgLgBQgMgCgKgEQgKgFgFgGQgHgFgDgJQgDgKgBgMQABgaASgRQAKgIAMgEQAMgEAOAAQAVAAAPAFQAIACAHAFQAHAEAGAGIgdAdQgIgHgIgCQgJgCgLAAQgJAAgGAFQgGAGAAAHQAAAFAEADQAFAFAIABIAIABIANACQAZADAMANQANALAAAcQABAOgGALQgFALgLAIQgKAHgNAEQgNAEgOAAQgWAAgSgFg");
	this.shape_3.setTransform(103.5,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BeIAAi7IB/AAIAAApIhQAAIAAAgIBEAAIAAAnIhEAAIAAAhIBQAAIAAAqg");
	this.shape_4.setTransform(88.5,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BeIAAi7IAuAAIAACRIBNAAIAAAqg");
	this.shape_5.setTransform(73.2,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVBeIgghHIgQAAIAABHIguAAIAAi7IBJAAQAPAAAMAFQAMAFAJAIQAHAJAFALQAEALAAAMQAAASgIAMQgKALgNAGIApBPgAgbgNIAaAAQAIAAAGgGQAFgGAAgHQAAgIgFgGQgGgFgIAAIgaAAg");
	this.shape_6.setTransform(51.6,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBaQgNgFgKgLQgNgMgDgRQgCgLgBgiQAAgSADgaQADgRANgMQAKgLANgFQANgFAPAAQAQAAANAFQANAFAKALQANAMADARQADAaAAASQAAAdgDAQQgDARgNAMQgKALgNAFIgOAEIgPABQgTgBgJgEgAgJgzQgFACgDAEIgDAFIgCAIIgBAMIgBAUIABAUIABANIACAHIADAFQADAEAFADQAEACAFAAQAGAAAEgCQAFgDADgEIADgFIACgHIABgNIABgUIAAgTIgCgNIgCgIIgDgFQgDgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_7.setTransform(33.9,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag/BeIAAi7IB/AAIAAApIhQAAIAAAhIBEAAIAAAoIhEAAIAABJg");
	this.shape_8.setTransform(18.2,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BeIAAi7IB/AAIAAApIhQAAIAAAgIBEAAIAAAnIhEAAIAAAhIBQAAIAAAqg");
	this.shape_9.setTransform(-3.5,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFBeIAAi7IBFAAQAPAAANAFIAMAFIAKAJQAHAGAEAIQAEAHACAJQACAIAAALIABAZIgBAaQAAALgCAIQgCAJgEAHQgEAIgHAGQgJAJgNAFQgNAFgPAAgAgWA0IAUAAQAGAAAGgCQAFgDADgFIADgFIABgGIABgMIAAgTIAAgSIgBgMIgBgGIgDgFQgDgFgFgDQgGgDgGAAIgUAAg");
	this.shape_10.setTransform(-20,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWBeIAAi7IAtAAIAAC7g");
	this.shape_11.setTransform(-33,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBeIgghHIgQAAIAABHIguAAIAAi7IBJAAQAPAAAMAFQAMAFAJAIQAHAJAFALQAEALAAAMQAAASgIAMQgKALgNAGIApBPgAgbgNIAaAAQAIAAAFgGQAGgGAAgHQAAgIgGgGQgFgFgIAAIgaAAg");
	this.shape_12.setTransform(-44.9,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAVBeIgghHIgQAAIAABHIguAAIAAi7IBJAAQAPAAAMAFQANAFAIAIQAHAJAFALQAEALAAAMQAAASgJAMQgIALgOAGIApBPgAgbgNIAaAAQAIAAAGgGQAFgGAAgHQAAgIgFgGQgGgFgIAAIgaAAg");
	this.shape_13.setTransform(-67.7,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBaQgNgFgJgJQgKgJgGgNQgFgMAAgPIAAh4IAuAAIAAB3QAAAMAHAIQADAEAEACQAFABAFAAQAFAAAEgBQAGgCACgEQAIgIgBgMIAAh3IAvAAIAAB4IgCAOIgDANQgGANgKAJQgKAJgNAFQgNAFgOAAQgNAAgOgFg");
	this.shape_14.setTransform(-85.6,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcBaQgNgFgKgLQgNgMgDgRQgCgLgBgiQAAgSADgaQADgRANgMQAKgLANgFQANgFAPAAQAQAAANAFQANAFAKALQANAMADARQADAaAAASQAAAdgDAQQgDARgNAMQgKALgNAFIgOAEIgPABQgTgBgJgEgAgJgzQgFACgDAEIgDAFIgCAIIgBAMIgBAUIABAUIABANIACAHIADAFQADAEAFADQAEACAFAAQAGAAAEgCQAFgDADgEIADgFIACgHIABgNIABgUIAAgTIgCgNIgCgIIgDgFQgDgEgEgCQgFgCgGAAQgFAAgEACg");
	this.shape_15.setTransform(-102.7,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWBeIAAhNIg5huIAzAAIAcBEIAdhEIAzAAIg5BuIAABNg");
	this.shape_16.setTransform(-118,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAiBjIg+hjIAABjIgwAAIAAjFIAqAAIA+BiIAAhiIAyAAIAADFg");
	this.shape_17.setTransform(117.7,-11.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXBjIAAjFIAvAAIAADFg");
	this.shape_18.setTransform(103.4,-11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAaBjIAAhPIgzAAIAABPIgwAAIAAjFIAwAAIAABNIAzAAIAAhNIAwAAIAADFg");
	this.shape_19.setTransform(78,-11.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXBjIAAiZIgxAAIAAgsICRAAIAAAsIgxAAIAACZg");
	this.shape_20.setTransform(60.3,-11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeBfQgNgFgLgMQgNgNgEgRQgCgMgCgkQABgTADgcQAEgRANgNQALgMANgFQAOgGAQAAQARAAAOAGQANAFAMAMQANANADARQADAcABATQgBAfgDARQgDARgNANQgMAMgNAFIgPAFIgQABQgUgCgKgEgAgKg2QgFADgDAEIgDAFIgCAIIgBANIgBAVIABAVIABAOIACAIIADAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgDADgEIAEgFIABgIIACgNIAAgWIAAgUIgCgOIgBgIIgEgFQgCgEgGgDQgFgCgGAAQgFAAgFACg");
	this.shape_21.setTransform(43.2,-11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgeBfQgNgFgLgMQgNgNgEgRQgCgMgCgkQABgTADgcQAEgRANgNQALgMANgFQAOgGAQAAQARAAAOAGQANAFAMAMQANANADARQADAcAAATQAAAfgDARQgDARgNANQgMAMgNAFIgPAFIgQABQgUgCgKgEgAgKg2QgFADgDAEIgEAFIgBAIIgBANIgBAVIABAVIABAOIABAIIAEAFQADAEAFADQAFACAFAAQAGAAAFgCQAFgDADgEIADgFIACgIIACgNIABgWIgBgUIgCgOIgCgIIgDgFQgCgEgGgDQgFgCgGAAQgFAAgFACg");
	this.shape_22.setTransform(25.3,-11.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXBjIAAiZIgxAAIAAgsICRAAIAAAsIgxAAIAACZg");
	this.shape_23.setTransform(8.2,-11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhCBjIAAjFICFAAIAAAsIhUAAIAAAhIBIAAIAAAqIhIAAIAAAjIBUAAIAAArg");
	this.shape_24.setTransform(-8.3,-11.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcBfQgOgFgKgKQgLgJgFgNQgGgNAAgRIAAh/IAxAAIAAB+QAAAOAGAIQAEADAFACQAFACAFABQAFgBAFgCQAFgCADgDQAIgIAAgOIAAh+IAxAAIAAB/IgBAQIgFAOQgGANgLAJQgKAKgNAFQgOAFgPAAQgOAAgOgFg");
	this.shape_25.setTransform(-26.2,-11);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhBBjIAAjFIAxAAIAACaIBSAAIAAArg");
	this.shape_26.setTransform(-42.9,-11.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhJBjIAAjFIBRAAQAfAAAQAQQARAPAAAbQAAAHgCAGQgCAGgEAFQgGAKgJAFIAIAEIAIAIQAEAFADAHQACAIAAAJQAAAcgRAQQgSAPgbAAgAgYA3IAgAAQAIAAAFgFQAEgFAAgHQAAgIgEgFQgFgFgIAAIggAAgAgYgWIAcAAQAKAAAEgEQAFgFgBgHQABgHgFgEQgEgFgKAAIgcAAg");
	this.shape_27.setTransform(-60.4,-11.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXBjIAAiZIgxAAIAAgsICRAAIAAAsIgxAAIAACZg");
	this.shape_28.setTransform(-84.2,-11.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhCBjIAAjFICFAAIAAAsIhUAAIAAAhIBIAAIAAAqIhIAAIAAAjIBUAAIAAArg");
	this.shape_29.setTransform(-100.6,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgfBfQgNgFgLgMQgNgNgEgRQgCgMgCgkQAAgTAEgcQAEgRANgNQALgMANgFQAJgEAWgCQAKAAAVAGQAOAFAJAKQAKAJAFAMQAFALACANIgxAAQgDgLgGgGQgIgFgKAAQgGAAgFACQgFADgDAEIgEAFIgCAIIAAANIgBAVIABAWIAAANIACAIIAEAGQAHAIAMAAQANAAAHgIQAEgDACgGQABgGAAgGIAAgDIgbAAIAAgnIBMAAIAAAaQgBAegDAKQgEAPgMALQgGAHgGAEQgHAFgHACQgOAFgQAAQgWgCgJgEg");
	this.shape_30.setTransform(-118.4,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-32,299,64.1);


(lib.HEADsearch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT1222_XOvision_300x250_Search();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT1222_XOvision_300x250_Over();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.deck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT1222_XOvision_300x250_Deck();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CT1222_XOvision_300x250_CTAlockup();
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


(lib.HEADvgetbluecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.HEADvgetblue();
	this.instance.setTransform(-0.5,-48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-80.9,299,64.1);


// stage content:
(lib.CT1222_XOvision_300x250 = function(mode,startPosition,loop) {
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
	this.clickthrough_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(181));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_167 = new cjs.Graphics().p("A41HfIAAu9MAxrAAAIAAO9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_graphics_167,x:152,y:202}).wait(14));

	// Only 29.96
	this.instance = new lib.Only2996();
	this.instance.setTransform(150,214);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({y:125},4).wait(48).to({y:49},4).to({_off:true},1).wait(9));

	// HEAD get blue
	this.instance_1 = new lib.HEADvgetbluecopy();
	this.instance_1.setTransform(431,125);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(67).to({_off:false},0).to({x:150},4).wait(44).to({y:95},4).wait(62));

	// deck
	this.instance_2 = new lib.deck();
	this.instance_2.setTransform(-149,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({x:150},4).wait(44).to({y:95},4).wait(62));

	// tuner ANIM
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#37EAEF").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape.setTransform(147.5,131,0.121,0.121);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#37EAEF").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_1.setTransform(169.6,127.2,0.121,0.121);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_2.setTransform(165.5,123.3,0.121,0.121);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_3.setTransform(164.7,131,0.121,0.121);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_4.setTransform(167.8,135.3,0.121,0.121);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#37EAEF").s().p("AhcBUIARinICoAAIgSCng");
	this.shape_5.setTransform(160.3,135.4,0.121,0.121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_6.setTransform(174.3,122.5,0.121,0.121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAnAqIg8JNQgeBVhUAVg");
	this.shape_7.setTransform(173.4,131.9,0.121,0.121);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_8.setTransform(169.4,119,0.121,0.121);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_9.setTransform(143.8,122.5,0.121,0.121);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAmAqIg7JNQgeBVhUAVg");
	this.shape_10.setTransform(142.9,131.9,0.121,0.121);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBehTIIjAAIBLBTIhcBUg");
	this.shape_11.setTransform(138.9,127.2,0.121,0.121);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#37EAEF").s().p("AjSBUIiihAQAehSBWgVIJ1AAIhQCng");
	this.shape_12.setTransform(138.9,119,0.121,0.121);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_13.setTransform(135,123.4,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37EAEF").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_14.setTransform(134.1,131,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhTICwg/IH4AAIAvCng");
	this.shape_15.setTransform(137.2,135.4,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(55,234,239,0.098)").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_16.setTransform(157.1,122.5,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37EAEF").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_17.setTransform(156.2,131.9,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_18.setTransform(152.2,127.2,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_19.setTransform(152.2,119,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_20.setTransform(148.3,123.4,0.121,0.121);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37EAEF").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_21.setTransform(150.5,135.4,0.121,0.121);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_22.setTransform(164.7,131,0.121,0.121);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_23.setTransform(157.1,122.5,0.121,0.121);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(55,234,239,0.098)").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_24.setTransform(152.2,127.2,0.121,0.121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_25.setTransform(148.3,123.4,0.121,0.121);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_26.setTransform(150.5,135.4,0.121,0.121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(55,234,239,0.098)").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_27.setTransform(169.6,127.2,0.121,0.121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_28.setTransform(167.8,135.3,0.121,0.121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(55,234,239,0.098)").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_29.setTransform(169.4,119,0.121,0.121);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(55,234,239,0.098)").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_30.setTransform(134.1,131,0.121,0.121);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_31.setTransform(148.3,123.4,0.121,0.121);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(55,234,239,0.098)").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_32.setTransform(156.2,131.9,0.121,0.121);

	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.setTransform(154.2,127.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween7("synched",0);
	this.instance_4.setTransform(154.2,282.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:157.1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:135}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:164.7}},{t:this.shape_2,p:{x:165.5,y:123.3}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_26},{t:this.shape_25,p:{x:148.3,y:123.4}},{t:this.shape_19},{t:this.shape_24},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:135}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2,p:{x:165.5,y:123.3}},{t:this.shape_1},{t:this.shape_3,p:{x:147.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:148.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_2,p:{x:135,y:123.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_3,p:{x:164.7}},{t:this.shape_25,p:{x:165.5,y:123.3}},{t:this.shape_27},{t:this.shape}]},5).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:135}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2,p:{x:165.5,y:123.3}},{t:this.shape_1},{t:this.shape_3,p:{x:147.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:148.3}},{t:this.shape_8,p:{x:152.2}},{t:this.shape_24},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:135,y:123.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_29,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_3,p:{x:164.7}},{t:this.shape_25,p:{x:165.5,y:123.3}},{t:this.shape_27},{t:this.shape}]},5).to({state:[{t:this.shape_26},{t:this.shape_31},{t:this.shape_29,p:{x:152.2}},{t:this.shape_24},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:135,y:123.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_25,p:{x:165.5,y:123.3}},{t:this.shape_1},{t:this.shape_3,p:{x:147.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_25,p:{x:148.3,y:123.4}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_32},{t:this.shape_9,p:{x:157.1}},{t:this.shape_15},{t:this.shape_30},{t:this.shape_13,p:{x:135}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_16,p:{x:174.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:164.7}},{t:this.shape_2,p:{x:165.5,y:123.3}},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_21},{t:this.shape_31},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:135,y:123.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_22},{t:this.shape_25,p:{x:165.5,y:123.3}},{t:this.shape_27},{t:this.shape_3,p:{x:147.5}}]},5).to({state:[{t:this.shape_26},{t:this.shape_20},{t:this.shape_29,p:{x:152.2}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_23},{t:this.shape_15},{t:this.shape_30},{t:this.shape_13,p:{x:135}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_8,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_22},{t:this.shape_2,p:{x:165.5,y:123.3}},{t:this.shape_1},{t:this.shape_3,p:{x:147.5}}]},5).to({state:[{t:this.shape_21},{t:this.shape_13,p:{x:148.3}},{t:this.shape_8,p:{x:152.2}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:157.1}},{t:this.shape_15},{t:this.shape_30},{t:this.shape_2,p:{x:135,y:123.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:143.8}},{t:this.shape_29,p:{x:169.4}},{t:this.shape_7},{t:this.shape_6,p:{x:174.3}},{t:this.shape_5},{t:this.shape_28},{t:this.shape_22},{t:this.shape_25,p:{x:165.5,y:123.3}},{t:this.shape_27},{t:this.shape_3,p:{x:147.5}}]},5).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({_off:true,y:282.2},4).wait(110));

	// tuner bkgd
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape_33.setTransform(154.3,127.2,0.126,0.082);

	this.instance_5 = new lib.Tween8("synched",0);
	this.instance_5.setTransform(154.3,127.2);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween11("synched",0);
	this.instance_6.setTransform(154.3,282.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.instance_5}]},67).to({state:[{t:this.instance_6}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({_off:true,y:282.2},4).wait(110));

	// HEAD over
	this.instance_7 = new lib.HEADover();
	this.instance_7.setTransform(271,125);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({x:150},4).wait(21).to({y:41},4).to({_off:true},1).wait(109));

	// HEAD search
	this.instance_8 = new lib.HEADsearch();
	this.instance_8.setTransform(150.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(67).to({x:150},0).to({y:41},4).to({_off:true},1).wait(109));

	// phone tuner
	this.instance_9 = new lib.TunerPhone();
	this.instance_9.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({y:280},4).to({_off:true},1).wait(109));

	// bkgd
	this.instance_10 = new lib.CT1222_XOvision_300x250_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181));

	// CTA
	this.instance_11 = new lib.CTAlockup();
	this.instance_11.setTransform(150,202);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(167).to({_off:false},0).to({y:125},4).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.8,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;