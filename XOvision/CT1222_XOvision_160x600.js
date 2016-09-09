(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_300x600_bkgd.jpg", id:"_300x600_bkgd"},
		{src:"images/CT1222_XOvision_160x600_atlas_P_.png", id:"CT1222_XOvision_160x600_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_XOvision_160x600_atlas_P_", frames: [[0,602,300,250],[302,0,300,600],[0,0,300,600]]}
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
	this.initialize(img._300x600_bkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_XOvision_160x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x600_deck = function() {
	this.spriteSheet = ss["CT1222_XOvision_160x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x600_tuner = function() {
	this.spriteSheet = ss["CT1222_XOvision_160x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape.setTransform(0,0,0.126,0.082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-13.3,77.7,26.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape.setTransform(0,0,0.126,0.082);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-13.3,77.7,26.6);


(lib.Tween2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.XOvision_300x600_tuner();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.Only2996 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNCEIAAgfQgcgDgLgDQgRgHgOgOIAgggQAIAHALADQAMAEAOAAIAAgmIgMgCQgagDgPgNQgHgHgDgKQgEgLAAgNQAAgZAQgSQAQgSAcgDIAAgaIAjAAIAAAZQAkADAXAWIggAgQgGgHgJgCQgJgDgIgBIAAAkIALADQAbADANANQAQAOAAAdQAAANgEALQgFAKgJAJQgQARgcAEIAAAggAARA4QARgEAAgOQAAgIgEgFQgCgCgDgBIgIgCgAgUg2QgEAFAAAGQAAAGADAEQAGAFAJABIAAgiQgKABgEAGg");
	this.shape.setTransform(-60.9,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLA0IAAgrIggg8IAcAAIAPAmIAQgmIAcAAIgfA8IAAArg");
	this.shape_1.setTransform(17.5,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiA0IAAhnIAaAAIAABQIArAAIAAAXg");
	this.shape_2.setTransform(10.5,51.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASA0Iggg0IAAA0IgaAAIAAhnIAXAAIAgAzIAAgzIAaAAIAABng");
	this.shape_3.setTransform(0.7,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAyQgHgDgGgGQgHgHgCgJIgCgZQAAgKACgOQACgJAHgHQAGgGAHgDQAHgDAIAAQAJAAAHADQAHADAGAGQAHAHACAJIACAYQAAAQgCAJQgCAJgHAHQgGAGgHADIgIACIgIABQgKgBgFgCgAgEgcQgDABgCADIgBACIgCAFIAAAHIgBAKIABALIAAAHIACAEIABADIAFAEQACABACAAQADAAADgBIAEgEIACgDIABgEIABgHIAAgLIAAgKIgBgHIgBgFIgCgCQgBgDgDgBQgDgBgDAAQgCAAgCABg");
	this.shape_4.setTransform(-9.2,51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhTCVQgRgPgIgWQgJgVAAgaQAAgYAIgVQAIgUAPggIADgFIBEiNIBYAAIhGCMQAHgDANAAQAQAAARAHQARAHAPAOQAOANAIATQAIAUAAAaQAAA2giAeQgiAegyAAQgxAAgigegAgZAiQgKALAAAUQAAATAKAKQALALAOAAQAPAAALgLQAKgKAAgTQAAgUgKgLQgLgKgPAAQgOAAgLAKg");
	this.shape_5.setTransform(49,81.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJCzIBHiLQgHACgNAAQgRAAgQgHQgRgHgOgOQgOgNgJgTQgIgUAAgZQAAgcAIgVQAJgVARgQQAigdAxAAQAyAAAiAdQARAQAJAVQAIAVAAAcQAAAXgHAVQgJAUgQAgIgCAFIhFCNgAgYhdQgLAKAAAUQAAASALALQAKALAOAAQAPAAAKgLQALgLAAgSQAAgUgLgKQgKgLgPAAQgOAAgKALg");
	this.shape_6.setTransform(24.3,81.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrAtIAAhYIBYAAIAABYg");
	this.shape_7.setTransform(7,94.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhICzIBGiLQgHACgNAAQgRAAgQgHQgRgHgOgOQgPgNgHgTQgJgUAAgZQAAgcAJgVQAIgVARgQQAigdAxAAQAyAAAiAdQARAQAJAVQAIAVAAAcQAAAXgIAVQgHAUgRAgIgCAFIhECNgAgYhdQgLAKAAAUQAAASALALQAKALAOAAQAPAAALgLQAKgLAAgSQAAgUgKgKQgLgLgPAAQgOAAgKALg");
	this.shape_8.setTransform(-9.6,81.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhxCzIAAhKIB/iKQAKgLAEgIQAEgIAAgLQAAgPgIgJQgJgJgPAAQgMAAgKAIQgJAIAAASIhSAAQAAgyAhgeQAQgOAVgHQAUgHAXAAQAZAAAVAHQAUAHAQAOQAgAeAAAxQAAAbgKARQgKASgYAYIhTBaIB/AAIAABKg");
	this.shape_9.setTransform(-36.9,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.2,39.3,277,71.7);


(lib.HEADsearch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(66.3,-51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfB4IAAhgIg9AAIAABgIg8AAIAAjvIA8AAIAABdIA9AAIAAhdIA7AAIAADvg");
	this.shape_1.setTransform(49.8,-60.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBzQgQgGgOgOQgQgQgEgVQgDgOgBgsQAAgYAEghQAEgVAQgQQAOgOAQgHQARgGATAAQAjAAAZAUQAMAKAIAOQAIAPADATIg8AAQgEgMgHgGQgHgHgNAAQgOAAgIAKIgEAGIgCAKIgCARIgBAZIABAaIACARIACAJIAEAHQAIAKAOAAQANAAAHgHQAHgHAEgLIA8AAQgGAmgZAUQgNAKgPAFQgPAFgRAAQgZgCgLgFg");
	this.shape_2.setTransform(28.4,-60.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaB4IgohaIgVAAIAABaIg7AAIAAjvIBeAAQATAAAPAGQAQAGAKALQALALAGAOQAFAOAAAPQAAAXgMAQQgLAOgRAJIA1BkgAgjgRIAiAAQAJAAAHgIQAIgHAAgKQAAgKgIgHQgHgHgJAAIgiAAg");
	this.shape_3.setTransform(7.5,-60.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAwB4IgLgkIhIAAIgMAkIg+AAIBYjvIArAAIBYDvgAgTAjIAoAAIgUg/g");
	this.shape_4.setTransform(-15.5,-60.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRB4IAAjvICiAAIAAA1IhmAAIAAAoIBYAAIAAAzIhYAAIAAAqIBmAAIAAA1g");
	this.shape_5.setTransform(-36.6,-60.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgzBzQgWgHgSgSIAmgmQAJAJAPAEQAOAEAPAAQAhAAABgVQgBgKgEgFQgFgFgLgBIgNgCIgOgCQgQgCgNgGQgLgFgJgJQgIgGgEgMQgEgMAAgQQAAgiAYgVQAMgLAQgFQAQgFASAAQAbAAATAGQAKAEAJAFQAJAGAHAIIglAlQgJgJgLgDQgLgCgPAAQgMAAgIAGQgHAHAAAJQAAAGAFAFQAFAGAMABIAKACIAQACQAgAFAQAPQASAQAAAjQAAASgHAPQgHAOgNAJQgNAKgRAFQgRAFgSAAQgdAAgWgHg");
	this.shape_6.setTransform(-57.9,-60.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.2,-85.8,276.4,47.2);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(44.4,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaB4IgphaIgUAAIAABaIg7AAIAAjvIBeAAQATAAAQAGQAPAGALALQAKALAGAOQAFAOAAAPQAAAXgLAQQgMAOgQAJIA0BkgAgjgRIAiAAQAJAAAIgIQAGgHABgKQgBgKgGgHQgIgHgJAAIgiAAg");
	this.shape_1.setTransform(29.3,-24.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRB4IAAjvICiAAIAAA1IhmAAIAAAoIBYAAIAAAzIhYAAIAAAqIBmAAIAAA1g");
	this.shape_2.setTransform(7.3,-24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVB4IhQjvIA+AAIAnCFIAoiFIA+AAIhQDvg");
	this.shape_3.setTransform(-13.5,-24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkBzQgQgGgOgOQgQgQgEgVQgDgOgCgsQAAgYAFghQAEgVAQgQQAOgOAQgHQAQgGAUAAQAVAAARAGQAQAHANAOQAQAQAEAVQAFAhAAAYQAAAlgFAVQgEAVgQAQQgNAOgQAGIgSAGIgUABQgZgCgLgFgAgNhCQgFADgEAFIgEAGIgDAKIgCARIAAAZIAAAaIACAQIADAKIAEAGQAEAFAFADQAGADAHAAQAIAAAFgDQAHgDADgFIAEgGIADgJIABgRIABgaIgBgZIgBgRIgDgKIgEgGQgDgFgHgDQgFgCgIAAQgHAAgGACg");
	this.shape_4.setTransform(-34.6,-24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-50,152,47.2);


(lib.HEADgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCATIgEgBIgHgEIgEgHIgBgEIgBgDQAAgDACgDIACgEIACgDQADgDAEgBIAEgBIACgBIAEABIADABIAEACIADACIACADIACAEIABADIABADIgBADIgBAEQgBAEgDADIgDACIgEACQgDACgEAAIgCgBgAgEgMIgFADIgDAFIgBAEIABAFIADAFIAFADIAEABIAFgBQADgBACgCIADgFQABgCAAgDQAAgCgBgCIgDgFQgCgCgDgBIgFgBIgEABgAADAKIgDgIIAAAAIAAAIIgGAAIAAgTIAHAAQAEAAACACQABACAAADIAAACIgDABIAEAJgAAAAAIABAAIABgBIABgBIgBgCIgBAAIgBAAg");
	this.shape.setTransform(71.5,-51);

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
	this.instance = new lib.XOvision_300x600_deck();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,600);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buy now
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYBDIgYhQIgXBQIgWAAIgkiEIAcAAIAUBSIAZhSIASAAIAYBSIAVhSIAbAAIgkCEg");
	this.shape.setTransform(31.7,92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBAQgJgEgHgHQgJgJgCgLQgCgLAAgWQAAgNACgTQACgLAJgJQAHgHAJgEQAJgEAKAAQALAAAIAEQAJAEAIAHQAJAJACALQACATAAANQgBAZgBAIQgCALgJAJQgIAHgJAEQgIAEgLAAQgKAAgJgEgAgIgpQgFACgDADIgDAFIgCAGIgBAKIAAAPIAAAQIABAKIACAHIADAEQADAEAFACQAEABAEAAQAFAAAEgBQAEgCADgEIAEgFIABgGIACgKIAAgQIAAgPIgCgKIgBgGIgEgFQgGgHgKAAQgEAAgEACg");
	this.shape_1.setTransform(17.3,92.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBDIgzhRIAABRIgaAAIAAiEIAYAAIAzBQIAAhQIAaAAIAACEg");
	this.shape_2.setTransform(4.5,92.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBDIAAg3IgphNIAdAAIAXA2IAZg2IAcAAIgoBNIAAA3g");
	this.shape_3.setTransform(-11.9,92.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBAQgJgDgHgHQgGgGgEgJQgEgJAAgKIAAhWIAbAAIAABVQgBAGACAEQACAFACADQADAEAFABQAEACAEAAQAFAAAEgCQAEgBADgEQAHgGAAgMIAAhVIAaAAIAABWQAAAKgEAJQgDAJgIAGQgGAHgKADQgIADgKAAQgIAAgKgDg");
	this.shape_4.setTransform(-23.5,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBDIAAiEIA0AAQATgBALALQAGAFADAGQACAIAAAIQAAAFgBAEQgBAFgDAEQgFAGgGADQAHACAGAHQAFAIAAAMQAAASgLALQgLAJgTABgAgVArIAZAAQAJAAAEgEQAFgGAAgHQAAgGgFgFQgEgFgJAAIgZAAgAgVgLIAYAAQAIAAAFgFQAEgEAAgHQAAgHgEgEQgFgFgIAAIgYAAg");
	this.shape_5.setTransform(-35.8,92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CT logo
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_6.setTransform(-5.2,61.6,0.197,0.197);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_7.setTransform(35.8,61.6,0.197,0.197);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_8.setTransform(4.5,61.6,0.197,0.197);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_9.setTransform(-32.7,61.6,0.197,0.197);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_10.setTransform(-16.1,61.6,0.197,0.197);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_11.setTransform(49.8,61.6,0.197,0.197);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_12.setTransform(20.5,61.5,0.197,0.197);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_13.setTransform(-48.9,61.6,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

	// bkgd
	this.instance = new lib.XOvision_300x250_CTAbkgd();
	this.instance.setTransform(-216,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216,-125,300,250);


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



(lib.CT1222_XOvision_160x600 = function(mode,startPosition,loop) {
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
	this.clickthrough_btn.setTransform(80,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(181));

	// Only 29.96
	this.instance = new lib.Only2996();
	this.instance.setTransform(311,327);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({x:80},4).wait(48).to({y:377},4).wait(10));

	// product
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBHIAwiAIgwAAIAAAWIgOAAIAAgjIBNAAIAAANIgwCAg");
	this.shape.setTransform(103.1,396.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBGQgHgDgGgFQgLgMAAgRIAAhBQAAgJADgHQADgHAFgFQALgLAQAAQAQAAALALQAGAFADAHQADAHAAAJIAABBQAAARgMAMQgFAFgHADQgHACgIAAQgHAAgHgCgAgRgzQgDAEgCAFQgBAFAAAGIAAA/QAAAMAGAIQADAEAFACQAEACAFAAQAFAAAFgCQAEgCAEgEQADgEACgFQABgFAAgGIAAg/QAAgGgBgFQgCgFgDgEQgHgHgLAAQgKAAgHAHg");
	this.shape_1.setTransform(92.3,396.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGBHIAAh9IgZAXIAAgQIAZgXIAOAAIAACNg");
	this.shape_2.setTransform(81.1,396.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBHIAAiNIAwAAQAWAAANANQAFAFACAFQADAGACAGQACANAAAWQAAAVgCAOQgCAHgDAGQgDAFgEAFQgNANgWAAgAghA6IAfAAQAHAAAHgDQAHgCAFgGQAGgGACgMQACgMAAgRQAAgTgCgKQgCgLgGgGQgFgGgHgCQgHgDgHAAIgfAAg");
	this.shape_3.setTransform(70.1,396.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBHIgig8IgiA8IgRAAIAshHIgphGIASAAIAeA4IAgg4IARAAIgqBGIAtBHg");
	this.shape_4.setTransform(57.5,396.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmBHIgshGIgegrIAABxIgPAAIAAiNIAOAAIAsBEIAeAsIAAhwIAPAAIAACNg");
	this.shape_5.setTransform(118.2,372.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBFQgJgEgIgHQgFgFgDgGIgEgMIgCgOIAAgVIAAgUIACgOIAEgMQADgGAFgFQAOgOAVAAQAKAAAJADQAKAEAHAHQAFAFADAGIAEAMIABAOIAAAUIAAAVIgBAOIgEAMQgDAGgFAFQgHAHgKAEQgJADgKAAQgKAAgIgDgAgMg3QgHADgFAFIgFAHIgDAJIgBANIgBASIABATIABANIADAJIAFAIQAFAEAHADQAGADAGAAQAGAAAHgDQAGgDAGgEIAEgIIAEgJIABgNIABgTIgBgSIgBgNIgEgJIgEgHQgGgFgGgDQgHgDgGAAQgGAAgGADg");
	this.shape_6.setTransform(104.3,372.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_7.setTransform(95,372.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBHIgMgDQgMgEgKgKIALgLIAIAHIAJAFQAKAEAKAAQAIAAAGgCQAGgCAFgDQAJgHAAgNQAAgGgCgEQgCgFgDgDIgHgEIgMgDIgIgBIgHgBQgRgDgJgGQgLgKAAgRQAAgSAMgLQANgLATAAQAOAAAKADQAJAEAKAIIgKAKQgHgGgIgDQgIgDgKAAQgNAAgIAHQgIAHAAAMQAAAGACAEQABAEAEADQADADAFACIALADIAGABIAIABIAPAEQAGABAFADQAMALAAASQAAAJgDAIQgEAHgHAGQgGAFgJADQgJACgLAAIgOgBg");
	this.shape_8.setTransform(86.1,372.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_9.setTransform(77.5,372.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgEBHIgwiNIAQAAIAkByIAlhyIAQAAIgvCNg");
	this.shape_10.setTransform(69.2,372.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBFQgIgEgIgHQgFgFgDgGIgEgMIgBgOIAAgVIAAgUIABgOIAEgMQADgGAFgFQAPgOAUAAQAKAAAKADQAIAEAIAHQAFAFADAGIAEAMIABAOIAAAUIAAAVIgBAOIgEAMQgDAGgFAFQgIAHgIAEQgKADgKAAQgJAAgKgDgAgMg3QgGADgFAFIgGAHIgCAJIgCANIAAASIAAATIACANIACAJIAGAIQAFAEAGADQAHADAFAAQAHAAAGgDQAHgDAEgEIAGgIIADgJIABgNIAAgTIAAgSIgBgNIgDgJIgGgHQgEgFgHgDQgGgDgHAAQgFAAgHADg");
	this.shape_11.setTransform(52.2,372.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBHIgjg8IgiA8IgRAAIAshHIgphGIARAAIAfA4IAgg4IARAAIgpBGIAsBHg");
	this.shape_12.setTransform(40.1,372.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},171).wait(10));

	// CTA
	this.instance_1 = new lib.CTAlockup();
	this.instance_1.setTransform(80,553);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).to({y:475},4).wait(10));

	// HEAD get blue
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(361,108);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({x:80},4).wait(110));

	// tuner ANIM
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37EAEF").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_13.setTransform(77.5,327,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37EAEF").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_14.setTransform(99.6,323.2,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_15.setTransform(95.5,319.3,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_16.setTransform(94.7,327,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_17.setTransform(97.8,331.3,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37EAEF").s().p("AhcBUIARinICoAAIgSCng");
	this.shape_18.setTransform(90.3,331.4,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_19.setTransform(104.3,318.5,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAnAqIg8JNQgeBVhUAVg");
	this.shape_20.setTransform(103.4,327.9,0.121,0.121);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_21.setTransform(99.4,315,0.121,0.121);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_22.setTransform(73.8,318.5,0.121,0.121);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAmAqIg7JNQgeBVhUAVg");
	this.shape_23.setTransform(72.9,327.9,0.121,0.121);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBehTIIjAAIBLBTIhcBUg");
	this.shape_24.setTransform(68.9,323.2,0.121,0.121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#37EAEF").s().p("AjSBUIiihAQAehSBWgVIJ1AAIhQCng");
	this.shape_25.setTransform(68.9,315,0.121,0.121);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_26.setTransform(65,319.4,0.121,0.121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#37EAEF").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_27.setTransform(64.1,327,0.121,0.121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhTICwg/IH4AAIAvCng");
	this.shape_28.setTransform(67.2,331.4,0.121,0.121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(55,234,239,0.098)").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_29.setTransform(87.1,318.5,0.121,0.121);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#37EAEF").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_30.setTransform(86.2,327.9,0.121,0.121);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_31.setTransform(82.2,323.2,0.121,0.121);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_32.setTransform(82.2,315,0.121,0.121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_33.setTransform(78.3,319.4,0.121,0.121);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#37EAEF").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_34.setTransform(80.5,331.4,0.121,0.121);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_35.setTransform(94.7,327,0.121,0.121);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_36.setTransform(87.1,318.5,0.121,0.121);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(55,234,239,0.098)").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_37.setTransform(82.2,323.2,0.121,0.121);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_38.setTransform(78.3,319.4,0.121,0.121);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_39.setTransform(80.5,331.4,0.121,0.121);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(55,234,239,0.098)").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_40.setTransform(99.6,323.2,0.121,0.121);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_41.setTransform(97.8,331.3,0.121,0.121);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(55,234,239,0.098)").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_42.setTransform(99.4,315,0.121,0.121);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(55,234,239,0.098)").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_43.setTransform(64.1,327,0.121,0.121);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_44.setTransform(78.3,319.4,0.121,0.121);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(55,234,239,0.098)").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_45.setTransform(86.2,327.9,0.121,0.121);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(84.2,323.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(83.7,630.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:87.1}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:65}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:94.7}},{t:this.shape_15,p:{x:95.5,y:319.3}},{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_39},{t:this.shape_38,p:{x:78.3,y:319.4}},{t:this.shape_32},{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:65}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_15,p:{x:95.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:77.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_26,p:{x:78.3}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.shape_15,p:{x:65,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_16,p:{x:94.7}},{t:this.shape_38,p:{x:95.5,y:319.3}},{t:this.shape_40},{t:this.shape_13}]},5).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:65}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_15,p:{x:95.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:77.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_26,p:{x:78.3}},{t:this.shape_21,p:{x:82.2}},{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:65,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_42,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_16,p:{x:94.7}},{t:this.shape_38,p:{x:95.5,y:319.3}},{t:this.shape_40},{t:this.shape_13}]},5).to({state:[{t:this.shape_39},{t:this.shape_44},{t:this.shape_42,p:{x:82.2}},{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:65,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_38,p:{x:95.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:77.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_38,p:{x:78.3,y:319.4}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_45},{t:this.shape_22,p:{x:87.1}},{t:this.shape_28},{t:this.shape_43},{t:this.shape_26,p:{x:65}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_19,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_29,p:{x:104.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:94.7}},{t:this.shape_15,p:{x:95.5,y:319.3}},{t:this.shape_14},{t:this.shape_13}]},5).to({state:[{t:this.shape_34},{t:this.shape_44},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:65,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_35},{t:this.shape_38,p:{x:95.5,y:319.3}},{t:this.shape_40},{t:this.shape_16,p:{x:77.5}}]},5).to({state:[{t:this.shape_39},{t:this.shape_33},{t:this.shape_42,p:{x:82.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_26,p:{x:65}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_21,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_15,p:{x:95.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:77.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_26,p:{x:78.3}},{t:this.shape_21,p:{x:82.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:87.1}},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:65,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:73.8}},{t:this.shape_42,p:{x:99.4}},{t:this.shape_20},{t:this.shape_19,p:{x:104.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_35},{t:this.shape_38,p:{x:95.5,y:319.3}},{t:this.shape_40},{t:this.shape_16,p:{x:77.5}}]},5).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({_off:true,x:83.7,y:630.2},4).wait(110));

	// tuner bkgd
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape_46.setTransform(84.3,323.3,0.126,0.082);

	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.setTransform(84.3,323.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(83.8,630.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46}]}).to({state:[{t:this.instance_5}]},67).to({state:[{t:this.instance_6}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({_off:true,x:83.8,y:630.3},4).wait(110));

	// phone tuner
	this.instance_7 = new lib.TunerPhone();
	this.instance_7.setTransform(80,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({y:433},4).to({_off:true},1).wait(109));

	// deck
	this.instance_8 = new lib.deck();
	this.instance_8.setTransform(57,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181));

	// HEAD over
	this.instance_9 = new lib.HEADover();
	this.instance_9.setTransform(302,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({_off:false},0).to({x:80},4).wait(21).to({y:-25.2},4).to({_off:true},1).wait(109));

	// HEAD search
	this.instance_10 = new lib.HEADsearch();
	this.instance_10.setTransform(81,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({x:80,y:-25.2},4).to({_off:true},1).wait(109));

	// bkgd
	this.instance_11 = new lib._300x600_bkgd();
	this.instance_11.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,300,323,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;