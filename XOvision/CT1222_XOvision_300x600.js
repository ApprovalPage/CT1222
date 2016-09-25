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
		{src:"images/_300x600_bkgd.jpg", id:"_300x600_bkgd"},
		{src:"images/CT1222_XOvision_300x600_atlas_P_.png", id:"CT1222_XOvision_300x600_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_XOvision_300x600_atlas_P_", frames: [[0,602,300,250],[302,0,300,600],[0,0,300,600]]}
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
	this.spriteSheet = ss["CT1222_XOvision_300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x600_deck = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x600_tuner = function() {
	this.spriteSheet = ss["CT1222_XOvision_300x600_atlas_P_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUDQIAAgyQgsgEgSgGQgbgKgWgVIAzg0QALAMATAFQATAGAUAAIAAg8IgRgCQgqgFgXgVQgLgMgGgQQgFgQAAgVQAAgoAagbQAZgcAsgFIAAgpIA3AAIAAAoQA6ADAiAjIgyAyQgJgKgOgEQgOgEgOgBIAAA4IATADQAqAGAVAVQAYAWAAAuQAAAVgHAQQgHARgNANQgbAagrAGIAAA0gAAaBXQAcgFAAgXQAAgMgGgHQgEgEgFgBIgNgEgAgghWQgHAIAAAKQAAAJAHAHQAHAHAOACIAAg1QgOACgHAIg");
	this.shape.setTransform(-94.5,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBSIAAhDIgyhgIAtAAIAYA7IAZg7IAtAAIgyBgIAABDg");
	this.shape_1.setTransform(21.1,37.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag1BSIAAijIAoAAIAAB/IBEAAIAAAkg");
	this.shape_2.setTransform(10.1,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcBSIgyhSIAABSIgpAAIAAijIAjAAIA0BRIAAhRIAoAAIAACjg");
	this.shape_3.setTransform(-5.2,37.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYBPQgLgFgKgJQgLgLgCgOQgCgKgBgeQAAgQADgWQACgPALgLQAKgJALgFQALgEANAAQAOAAALAEQALAFAKAJQALALACAPQADAWAAAQQAAAZgDAPQgCAOgLALQgKAJgLAFIgMADIgNACQgRgCgHgDgAgIgtQgEACgDAEIgCAEIgCAHIgBALIgBARIABARIABAMIACAGIACAFQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDIACgFIACgGIABgMIABgRIgBgRIgBgLIgCgHIgCgEQgDgEgEgCQgEgBgFAAQgEAAgEABg");
	this.shape_4.setTransform(-20.7,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiDDpQgbgXgNghQgNghAAgqQAAglAMghQAMghAZgyIAEgIIBrjdICLAAIhuDbQAKgEAVAAQAaAAAaALQAbALAXAWQAVAVANAeQANAgAAAoQAABVg1AuQg1AwhPAAQhOAAg1gwgAgnA2QgRASABAeQgBAdARARQAQARAXAAQAXAAARgRQAQgRABgdQgBgfgQgRQgRgQgXAAQgXAAgQAQg");
	this.shape_5.setTransform(77.6,84.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhzEZIBvjbQgKAEgWAAQgZAAgbgLQgagLgWgVQgWgWgNgeQgNggAAgnQAAgrANghQANghAbgYQA1gvBOAAQBOAAA2AvQAaAYAOAhQANAhAAArQAAAjgMAjQgMAggZAyIgEAHIhsDegAgniTQgQARAAAeQAAAdAQARQAQARAXAAQAYAAAQgRQAQgRABgdQgBgegQgRQgQgRgYAAQgXAAgQARg");
	this.shape_6.setTransform(38.9,84.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhFBGIAAiLICLAAIAACLg");
	this.shape_7.setTransform(12,105.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhzEZIBvjbQgLAEgVAAQgZAAgbgLQgZgLgXgVQgWgWgNgeQgNggAAgnQAAgrANghQANghAbgYQA1gvBOAAQBPAAA1AvQAbAYANAhQANAhAAArQAAAjgMAjQgMAggZAyIgEAHIhsDegAgniTQgRARAAAeQAAAdARARQAQARAXAAQAYAAAQgRQARgRAAgdQAAgegRgRQgQgRgYAAQgXAAgQARg");
	this.shape_8.setTransform(-14.1,84.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiyEZIAAh0IDIjaQAQgRAGgMQAGgNAAgRQABgYgNgNQgNgOgZgBQgTAAgQAMQgPANAAAdIiAAAQAAhPA0guQAZgWAhgMQAfgKAlgBQAoABAfAKQAhAMAZAWQAyAuAABOQAAAogQAcQgQAdglAlIiDCOIDIAAIAAB0g");
	this.shape_9.setTransform(-56.7,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-207.5,19,433.6,112.2);


(lib.HEADsearch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAsIAAhWIBVAAIAABWg");
	this.shape.setTransform(92.6,-37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtCuIAAiLIhZAAIAACLIhVAAIAAlbIBVAAIAACHIBZAAIAAiHIBWAAIAAFbg");
	this.shape_1.setTransform(68.8,-50.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0CmQgYgJgTgUQgXgXgGgeQgEgUgChAQAAgjAGgwQAGgeAXgYQATgTAYgKQAYgJAcAAQAzAAAkAcQARAPAMAVQALAVAEAcIhWAAQgFgRgKgKQgKgKgUAAQgUAAgMAOIgFAKIgEAOIgDAYIgBAlIABAmIADAYIAEAOIAFAJQAMAPAUAAQAUAAAKgKQAKgKAFgRIBWAAQgJA4gjAcQgSAPgWAHQgWAHgZAAQgkgDgQgHg");
	this.shape_2.setTransform(38,-50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmCuIg8iCIgcAAIAACCIhWAAIAAlbICIAAQAcAAAWAKQAXAJAPAQQAPAQAIAUQAIAUAAAVQAAAigRAXQgQAVgYAMIBLCRgAgygaIAwAAQAPAAAKgKQAKgLAAgOQAAgOgKgKQgKgLgPABIgwAAg");
	this.shape_3.setTransform(7.9,-50.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABGCuIgQg0IhqAAIgRA0IhZAAIB+lbIBBAAIB+FbgAgbAyIA6AAIgehag");
	this.shape_4.setTransform(-25.3,-50.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah1CuIAAlbIDrAAIAABNIiVAAIAAA6IB/AAIAABKIh/AAIAAA9ICVAAIAABNg");
	this.shape_5.setTransform(-55.6,-50.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhLCmQgfgKgZgaIA2g3QANANAVAGQAUAGAXAAQAxAAgBgfQABgOgIgHQgHgHgPgCIgTgDIgVgDQgYgDgQgIQgTgIgLgMQgMgKgGgSQgGgRAAgXQAAgwAjgfQARgPAXgIQAXgHAbAAQAmAAAdAJQAOAFAMAIQANAIAMALIg2A2QgOgNgPgEQgQgEgVAAQgTAAgLAKQgLAKABAMQgBAKAIAHQAHAIAQACIARACIAXAEQAuAGAXAXQAZAXAAAzQAAAagKAUQgKAVgTANQgSAPgZAHQgYAHgaAAQgrAAgggKg");
	this.shape_6.setTransform(-86.2,-50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.2,-85.8,276.4,65.6);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape.setTransform(61,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAmCtIg8iBIgcAAIAACBIhWAAIAAlZICIAAQAcAAAWAJQAXAJAPAQQAPAQAIAUQAIAUAAAVQAAAigRAWQgQAWgYALIBLCRgAgygaIAwAAQAPAAAKgKQAKgKAAgPQAAgNgKgLQgKgLgPAAIgwAAg");
	this.shape_1.setTransform(39.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah1CtIAAlZIDrAAIAABMIiVAAIAAA6IB/AAIAABKIh/AAIAAA9ICVAAIAABMg");
	this.shape_2.setTransform(7.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfCtIhylZIBYAAIA5DAIA5jAIBZAAIhzFZg");
	this.shape_3.setTransform(-22.3,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1CmQgXgJgUgUQgWgXgHgeQgEgUgChAQAAgjAGgwQAHgeAWgYQAUgTAXgKQAYgJAdAAQAeAAAYAJQAXAKAUATQAXAYAGAeQAGAwAAAjQAAA1gGAfQgGAegXAXQgUAUgXAJIgZAIIgdACQglgDgQgHgAgThfQgIAEgGAHIgFAJIgEAOIgCAYIgBAlIABAmIACAXIAEAOIAFAJQAGAHAIAEQAJAFAKAAQALAAAJgFQAIgEAGgHIAFgJIAEgOIADgXIAAgmIAAglIgDgYIgEgOIgFgJQgFgHgJgEQgJgEgLAAQgKAAgJAEg");
	this.shape_4.setTransform(-52.6,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76,-36,152,65.6);


(lib.HEADgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAiIgGgCQgHgDgFgFQgFgEgCgHIgCgGIgBgHQAAgGADgGIADgGIAEgFQAFgFAHgDIAGgCIAGgBIAGABIAHACIAGADIAFAFIAFAFIADAGIACAGIABAGIgBAHIgCAGQgDAHgFAEIgFAFIgGADQgGADgHAAIgGgBgAgJgWQgEABgEAEQgDADgCAFQgCAFAAAEQAAAFACAFQACAFADADQAEAEAEACQAFABAEAAQAFAAAEgBQAFgCADgEQAEgDACgFQACgFAAgFQAAgEgCgFQgCgFgEgDQgDgEgFgBQgEgCgFAAQgEAAgFACgAAEASIgEgOIgCAAIAAAOIgKAAIAAgjIAOAAQAGAAADAEQAEADAAAFQAAADgCACIgEADIAHAPgAgCgBIADAAIADgBIABgDIgBgDIgDgBIgDAAg");
	this.shape.setTransform(123.5,-73.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AguAvIAAhdIBdAAIAABdg");
	this.shape_1.setTransform(122.8,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRC0QgjgKgbgcIA8g8QAOAOAWAGQAWAHAZAAQA1AAAAgiQAAgPgIgHQgHgIgRgCIgVgEIgXgDQgZgEgTgIQgTgIgNgNQgNgMgGgTQgHgTAAgYQAAg0AlgiQATgRAZgIQAagIAdAAQApAAAgAKQAPAGAOAIQANAJAMAMIg6A6QgOgOgRgEQgRgEgYAAQgUAAgLAKQgMALgBAOQAAAKAIAHQAJAJARACIATADIAYAEQAzAHAYAYQAcAaAAA3QAAAcgLAWQgMAWgTAPQgVAQgaAIQgbAHgcAAQgvAAgigLg");
	this.shape_2.setTransform(100.7,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRC0QgigKgcgcIA8g8QAOAOAWAGQAXAHAYAAQA1AAAAgiQAAgPgIgHQgHgIgSgCIgUgEIgXgDQgZgEgTgIQgTgIgNgNQgNgMgGgTQgHgTAAgYQAAg0AlgiQATgRAZgIQAZgIAeAAQApAAAfAKQAQAGAOAIQAOAJALAMIg6A6QgPgOgQgEQgSgEgXAAQgUAAgMAKQgMALAAAOQABAKAHAHQAJAJARACIATADIAZAEQAxAHAZAYQAcAaAAA3QAAAcgLAWQgLAWgVAPQgTAQgbAIQgaAHgdAAQguAAgjgLg");
	this.shape_3.setTransform(69.4,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah/C8IAAl3ID/AAIAABSIiiAAIAABAICKAAIAABQIiKAAIAABDICiAAIAABSg");
	this.shape_4.setTransform(39.3,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah8C8IAAl3IBdAAIAAElICcAAIAABSg");
	this.shape_5.setTransform(8.7,9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AApC8IhAiMIggAAIAACMIhdAAIAAl3ICUAAQAeAAAYAKQAZAKAQARQARARAIAWQAJAWAAAXQAAAkgSAZQgSAXgaANIBSCdgAg3gcIA1AAQAQAAALgLQALgLAAgQQAAgPgLgMQgLgLgQAAIg1AAg");
	this.shape_6.setTransform(-35,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5C1QgZgLgWgVQgYgZgIghQgEgWgChFQAAgmAGg0QAIghAYgZQAWgVAZgLQAZgKAgAAQAhAAAZAKQAaALAVAVQAZAZAHAhQAGA0AAAmQAAA6gGAhQgHAhgZAZQgVAVgaALIgbAIIgfACQgogDgRgHgAgUhnQgKAEgFAIIgGAKIgFAPIgCAaIgBAoIABApIACAaIAFAPIAGAKQAFAHAKAFQAJAFALAAQAMAAAJgFQAKgFAGgHIAFgKIAFgPIACgaIABgpIgBgoIgCgaIgFgPIgFgKQgFgIgLgEQgKgFgLAAQgLAAgJAFg");
	this.shape_7.setTransform(-70.5,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah/C8IAAl3ID/AAIAABSIiiAAIAABDICKAAIAABRIiKAAIAACRg");
	this.shape_8.setTransform(-102.2,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhbCHIAAkNIC2AAIAAA7IhzAAIAAAuIBjAAIAAA5IhjAAIAAAwIBzAAIAAA7g");
	this.shape_9.setTransform(106.4,-30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhjCHIAAkNIBjAAQAVAAATAHIARAIQAIAFAHAHQAJAJAGALQAGAKADANQADAMAAAPIABAlIgBAmQAAAPgDAMQgDANgGAKQgGALgJAJQgNANgTAHQgTAHgVAAgAghBMIAdAAQAKAAAIgFQAHgDAFgIIAEgGIACgKIABgQIAAgcIAAgbIgBgQIgCgKIgEgGQgFgIgHgEQgIgEgKAAIgdAAg");
	this.shape_10.setTransform(82.7,-30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggCHIAAkNIBBAAIAAENg");
	this.shape_11.setTransform(64,-30.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdCHIgthlIgXAAIAABlIhCAAIAAkNIBpAAQAVAAASAHQARAHAMANQAMAMAGAQQAGAQAAAQQAAAagNASQgMAQgTAJIA6BxgAgngTIAmAAQALAAAIgJQAIgIAAgLQAAgLgIgIQgIgIgLAAIgmAAg");
	this.shape_12.setTransform(46.8,-30.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdCHIgthlIgXAAIAABlIhCAAIAAkNIBpAAQAVAAASAHQARAHAMANQAMAMAGAQQAGAQAAAQQAAAagNASQgMAQgTAJIA6BxgAgngTIAmAAQALAAAIgJQAIgIAAgLQAAgLgIgIQgIgIgLAAIgmAAg");
	this.shape_13.setTransform(13.9,-30.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmCBQgTgHgPgNQgOgNgHgSQgIgSAAgVIAAiuIBCAAIAACsQAAATAJAKQAGAGAGACQAHADAHAAQAHAAAHgDQAHgCAEgGQAKgKAAgTIAAisIBDAAIAACuIgCAVIgGASQgIASgOANQgOANgTAHQgTAHgUAAQgUAAgSgHg");
	this.shape_14.setTransform(-11.8,-30.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoCCQgTgIgPgPQgSgSgEgXQgEgQgCgyQAAgbAGglQAEgYASgRQAPgQATgIQARgHAXAAQAXAAATAHQASAIAPAQQASARAFAYQAEAlAAAbQAAAqgEAYQgFAXgSASQgPAPgSAIIgUAGIgWABQgdgCgLgFgAgOhKQgHAEgEAFIgFAIIgCAKIgCASIgBAdIABAeIACASIACAKIAFAIQAEAFAHAEQAHADAHAAQAIAAAHgDQAHgEAFgFIADgIIADgKIADgSIAAgeIAAgcIgDgTIgDgKIgDgIQgFgFgHgEQgHgCgIAAQgHAAgHACg");
	this.shape_15.setTransform(-36.4,-30.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggCHIAAhuIhRifIBIAAIApBhIAqhhIBIAAIhRCfIAABug");
	this.shape_16.setTransform(-58.8,-30.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAvCHIhViHIAACHIhCAAIAAkNIA6AAIBUCGIAAiGIBDAAIAAENg");
	this.shape_17.setTransform(-92,-30.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AggCHIAAkNIBBAAIAAENg");
	this.shape_18.setTransform(-111.3,-30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcBuIAAhYIg3AAIAABYIg2AAIAAjbIA2AAIAABVIA3AAIAAhVIA2AAIAADbg");
	this.shape_19.setTransform(108.5,-62.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaBuIAAirIg2AAIAAgwIChAAIAAAwIg2AAIAACrg");
	this.shape_20.setTransform(88.9,-62.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggBpQgPgGgNgMQgPgPgDgTQgDgNgCgoQAAgWAFgeQADgTAPgPQANgMAPgHQAOgGASAAQATAAAPAGQAPAHANAMQAOAPAEATQADAeAAAWQAAAigDATQgEATgOAPQgNAMgPAGIgQAFIgSACQgWgCgKgFgAgLg8QgGADgDAEIgDAGIgDAJIgCAPIAAAXIAAAYIACAPIADAIIADAGQADAFAGACQAFADAGAAQAHAAAFgDQAGgCADgFIAEgGIADgIIABgPIABgYIgBgXIgBgPIgDgJIgEgGQgCgEgHgDQgFgCgHAAQgGAAgFACg");
	this.shape_21.setTransform(69.9,-62.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AggBpQgPgGgNgMQgPgPgDgTQgDgNgCgoQAAgWAFgeQADgTAPgPQANgMAPgHQAOgGASAAQATAAAPAGQAPAHANAMQAOAPAEATQADAeAAAWQAAAigDATQgEATgOAPQgNAMgPAGIgQAFIgSACQgWgCgKgFgAgLg8QgGADgDAEIgDAGIgDAJIgCAPIAAAXIAAAYIACAPIADAIIADAGQADAFAGACQAFADAGAAQAHAAAFgDQAGgCADgFIAEgGIADgIIABgPIAAgYIAAgXIgBgPIgDgJIgEgGQgCgEgHgDQgFgCgHAAQgGAAgFACg");
	this.shape_22.setTransform(50.1,-62.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaBuIAAirIg2AAIAAgwIChAAIAAAwIg2AAIAACrg");
	this.shape_23.setTransform(31.2,-62.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhJBuIAAjbICTAAIAAAwIhdAAIAAAlIBQAAIAAAvIhQAAIAAAmIBdAAIAAAxg");
	this.shape_24.setTransform(13.1,-62.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfBpQgPgFgMgLQgLgLgHgOQgGgPAAgSIAAiNIA2AAIAACMQAAAPAIAJQAEAEAFACQAFACAGAAQAGAAAGgCQAFgCAEgEQAIgJAAgPIAAiMIA2AAIAACNIgBARIgFAQQgHAOgLALQgMALgPAFQgQAGgQAAQgQAAgPgGg");
	this.shape_25.setTransform(-6.9,-62);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhIBuIAAjbIA2AAIAACqIBbAAIAAAxg");
	this.shape_26.setTransform(-25.4,-62.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhRBuIAAjbIBaAAQAhAAATARQASASAAAdQAAAIgCAHQgCAHgEAFQgIALgIAGIAJAEIAIAJQAEAFADAJQADAIAAALQAAAegTARQgTASgfAAgAgbA9IAjAAQAKAAAFgGQAFgFAAgJQAAgIgFgFQgFgGgKAAIgjAAgAgbgYIAgAAQAKAAAFgGQAFgFAAgHQAAgIgFgFQgFgFgKAAIggAAg");
	this.shape_27.setTransform(-44.7,-62.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaBuIAAirIg2AAIAAgwIChAAIAAAwIg2AAIAACrg");
	this.shape_28.setTransform(-71.1,-62.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhJBuIAAjbICTAAIAAAwIhdAAIAAAlIBQAAIAAAvIhQAAIAAAmIBdAAIAAAxg");
	this.shape_29.setTransform(-89.2,-62.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiBpQgPgGgMgMQgPgPgEgTQgCgNgCgoQAAgWAEgeQAEgTAPgPQAMgMAPgHQAKgEAYgCQAMAAAWAGQAQAGAKALQAKAKAGANQAGANACAOIg2AAQgEgMgHgGQgHgGgMAAQgHAAgFACQgGADgDAEIgEAGIgCAJIgCAPIAAAXIAAAYIACAPIACAJIAEAGQAHAJAOAAQAOAAAIgIQAFgFACgGQACgGAAgHIAAgDIgfAAIAAgrIBVAAIAAAcQgCAhgDALQgFARgNANQgGAHgIAFQgHAFgIACQgPAGgSAAQgYgCgKgFg");
	this.shape_30.setTransform(-109,-62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-85,299,126.2);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAYBDIgYhQIgXBQIgWAAIgkiEIAbAAIAVBSIAYhSIASAAIAZBSIAUhSIAcAAIgkCEg");
	this.shape.setTransform(97.5,92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTBAQgJgEgHgHQgJgJgCgLQgCgLAAgWQAAgNACgTQACgLAJgJQAHgHAJgEQAJgEAKAAQALAAAIAEQAJAEAIAHQAJAJACALQACATAAANQgBAZgBAIQgCALgJAJQgIAHgJAEQgIAEgLAAQgKAAgJgEgAgIgpQgFACgDADIgDAFIgCAGIgBAKIAAAPIAAAQIABAKIACAHIADAEQADAEAFACQAEABAEAAQAFAAAEgBQAEgCADgEIAEgFIABgGIACgKIAAgQIAAgPIgCgKIgBgGIgEgFQgGgHgKAAQgEAAgEACg");
	this.shape_1.setTransform(83.1,92.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcBDIgzhRIAABRIgbAAIAAiEIAYAAIAyBQIAAhQIAbAAIAACEg");
	this.shape_2.setTransform(70.4,92.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBDIAAg3IgphNIAdAAIAXA2IAZg2IAcAAIgoBNIAAA3g");
	this.shape_3.setTransform(53.9,92.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSBAQgJgDgHgHQgGgGgEgJQgEgJAAgKIAAhWIAaAAIAABVQAAAGACAEQABAFADADQADAEAFABQAEACAEAAQAFAAAEgCQAFgBADgEQAGgGAAgMIAAhVIAaAAIAABWQAAAKgEAJQgEAJgGAGQgIAHgJADQgJADgJAAQgJAAgJgDg");
	this.shape_4.setTransform(42.3,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvBDIAAiEIA0AAQATgBALALQAGAFADAGQACAIAAAIQAAAFgBAEQgBAFgDAEQgFAGgGADQAHACAGAHQAFAIAAAMQAAASgLALQgLAJgTABgAgVArIAZAAQAJAAAEgEQAFgGAAgHQAAgGgFgFQgEgFgJAAIgZAAgAgVgLIAYAAQAIAAAFgFQAEgEAAgHQAAgHgEgEQgFgFgIAAIgYAAg");
	this.shape_5.setTransform(30,92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CT logo
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_6.setTransform(-78.4,90.9,0.197,0.197);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_7.setTransform(-37.4,90.8,0.197,0.197);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_8.setTransform(-68.7,90.8,0.197,0.197);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_9.setTransform(-105.9,90.8,0.197,0.197);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_10.setTransform(-89.3,90.8,0.197,0.197);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_11.setTransform(-23.4,90.8,0.197,0.197);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_12.setTransform(-52.7,90.8,0.197,0.197);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_13.setTransform(-122.1,90.8,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

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


// stage content:



(lib.CT1222_XOvision_300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(!this.alreadyyExecuted){
		this.alreadyyExecuted=true;
			this.clickthru_btn.on("click", function(evt){
		  window.open(clickTag, "_blank");
		});
		} else {
		gotoAndPlay(2);
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
	this.clickthru_btn = new lib.CT1();
	this.clickthru_btn.setTransform(150,300,1.181,3.158,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(181));

	// Only 29.96
	this.instance = new lib.Only2996();
	this.instance.setTransform(381,327);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(115).to({_off:false},0).to({x:150},4).wait(48).to({y:377},4).wait(10));

	// product
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBHIAwiAIgwAAIAAAWIgOAAIAAgjIBNAAIAAANIgwCAg");
	this.shape.setTransform(221.1,372.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBGQgHgDgGgFQgLgMAAgRIAAhBQAAgJADgHQADgHAFgFQALgLAQAAQAQAAALALQAGAFADAHQADAHAAAJIAABBQAAARgMAMQgFAFgHADQgHACgIAAQgHAAgHgCgAgRgzQgDAEgCAFQgBAFAAAGIAAA/QAAAMAGAIQADAEAFACQAEACAFAAQAFAAAFgCQAEgCAEgEQADgEACgFQABgFAAgGIAAg/QAAgGgBgFQgCgFgDgEQgHgHgLAAQgKAAgHAHg");
	this.shape_1.setTransform(210.3,372.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGBHIAAh9IgZAXIAAgQIAZgXIAOAAIAACNg");
	this.shape_2.setTransform(199.1,372.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBHIAAiNIAwAAQAWAAANANQAFAFACAFQADAGACAGQACANAAAWQAAAVgCAOQgCAHgDAGQgDAFgEAFQgNANgWAAgAghA6IAfAAQAHAAAHgDQAHgCAFgGQAGgGACgMQACgMAAgRQAAgTgCgKQgCgLgGgGQgFgGgHgCQgHgDgHAAIgfAAg");
	this.shape_3.setTransform(188.1,372.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBHIgig8IghA8IgSAAIAshHIgphGIASAAIAeA4IAfg4IASAAIgqBGIAtBHg");
	this.shape_4.setTransform(175.5,372.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAmBHIgshGIgegrIAABxIgPAAIAAiNIAOAAIAsBEIAeAsIAAhwIAPAAIAACNg");
	this.shape_5.setTransform(157.6,372.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTBFQgIgEgIgHQgFgFgDgGIgEgMIgCgOIAAgVIAAgUIACgOIAEgMQADgGAFgFQAOgOAVAAQAKAAAKADQAJAEAHAHQAFAFADAGIAEAMIABAOIAAAUIAAAVIgBAOIgEAMQgDAGgFAFQgHAHgJAEQgKADgKAAQgJAAgKgDgAgMg3QgHADgEAFIgGAHIgDAJIgBANIAAASIAAATIABANIADAJIAGAIQAEAEAHADQAGADAGAAQAGAAAHgDQAGgDAFgEIAFgIIAEgJIABgNIABgTIgBgSIgBgNIgEgJIgFgHQgFgFgGgDQgHgDgGAAQgGAAgGADg");
	this.shape_6.setTransform(143.7,372.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_7.setTransform(134.4,372.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOBHIgMgDQgMgEgKgKIALgLIAIAHIAJAFQAKAEAKAAQAIAAAGgCQAGgCAFgDQAJgHAAgNQAAgGgCgEQgCgFgDgDIgHgEIgMgDIgIgBIgHgBQgRgDgJgGQgLgKAAgRQAAgSAMgLQANgLATAAQAOAAAKADQAJAEAKAIIgKAKQgHgGgIgDQgIgDgKAAQgNAAgIAHQgIAHAAAMQAAAGACAEQABAEAEADQADADAFACIALADIAGABIAIABIAPAEQAGABAFADQAMALAAASQAAAJgDAIQgEAHgHAGQgGAFgJADQgJACgLAAIgOgBg");
	this.shape_8.setTransform(125.5,372.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGBHIAAiNIANAAIAACNg");
	this.shape_9.setTransform(116.9,372.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgFBHIgviNIAQAAIAkByIAlhyIAQAAIgvCNg");
	this.shape_10.setTransform(108.6,372.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTBFQgJgEgHgHQgFgFgDgGIgEgMIgBgOIAAgVIAAgUIABgOIAEgMQADgGAFgFQAPgOAUAAQALAAAIADQAJAEAIAHQAFAFADAGIAEAMIACAOIAAAUIAAAVIgCAOIgEAMQgDAGgFAFQgIAHgJAEQgIADgLAAQgJAAgKgDgAgMg3QgGADgGAFIgFAHIgCAJIgCANIgBASIABATIACANIACAJIAFAIQAGAEAGADQAHADAFAAQAHAAAGgDQAHgDAEgEIAGgIIADgJIABgNIAAgTIAAgSIgBgNIgDgJIgGgHQgEgFgHgDQgGgDgHAAQgFAAgHADg");
	this.shape_11.setTransform(91.6,372.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAjBHIgjg8IghA8IgSAAIAshHIgphGIARAAIAfA4IAfg4IASAAIgpBGIAsBHg");
	this.shape_12.setTransform(79.5,372.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},171).wait(10));

	// CTA
	this.instance_1 = new lib.CTAlockup();
	this.instance_1.setTransform(150,553);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).to({y:475},4).wait(10));

	// HEAD get blue
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(431,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(67).to({_off:false},0).to({x:150},4).wait(110));

	// tuner ANIM
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#37EAEF").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_13.setTransform(147.5,327,0.121,0.121);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#37EAEF").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_14.setTransform(169.6,323.2,0.121,0.121);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_15.setTransform(165.5,319.3,0.121,0.121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_16.setTransform(164.7,327,0.121,0.121);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_17.setTransform(167.8,331.3,0.121,0.121);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#37EAEF").s().p("AhcBUIARinICoAAIgSCng");
	this.shape_18.setTransform(160.3,331.4,0.121,0.121);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_19.setTransform(174.3,318.5,0.121,0.121);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAnAqIg8JNQgeBVhUAVg");
	this.shape_20.setTransform(173.4,327.9,0.121,0.121);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_21.setTransform(169.4,315,0.121,0.121);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_22.setTransform(143.8,318.5,0.121,0.121);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#37EAEF").s().p("AhtDIIAsm5ICJh/IAmAqIg7JNQgeBVhUAVg");
	this.shape_23.setTransform(142.9,327.9,0.121,0.121);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBehTIIjAAIBLBTIhcBUg");
	this.shape_24.setTransform(138.9,323.2,0.121,0.121);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#37EAEF").s().p("AjSBUIiihAQAehSBWgVIJ1AAIhQCng");
	this.shape_25.setTransform(138.9,315,0.121,0.121);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_26.setTransform(135,319.4,0.121,0.121);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#37EAEF").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_27.setTransform(134.1,327,0.121,0.121);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#37EAEF").s().p("AkMBUQhSgVgNhTICwg/IH4AAIAvCng");
	this.shape_28.setTransform(137.2,331.4,0.121,0.121);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(55,234,239,0.098)").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_29.setTransform(157.1,318.5,0.121,0.121);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#37EAEF").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_30.setTransform(156.2,327.9,0.121,0.121);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#37EAEF").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_31.setTransform(152.2,323.2,0.121,0.121);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#37EAEF").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_32.setTransform(152.2,315,0.121,0.121);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#37EAEF").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_33.setTransform(148.3,319.4,0.121,0.121);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#37EAEF").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_34.setTransform(150.5,331.4,0.121,0.121);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(55,234,239,0.098)").s().p("Agzj8IAugqIBwB/IgoGPIitA/g");
	this.shape_35.setTransform(164.7,327,0.121,0.121);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#37EAEF").s().p("AhsDyIAsm5IBOipQBSAVANBUIg7JOIguAqg");
	this.shape_36.setTransform(157.1,318.5,0.121,0.121);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(55,234,239,0.098)").s().p("AkZBUIhNhUIBdhTIIjAAIBNBTIhdBUg");
	this.shape_37.setTransform(152.2,323.2,0.121,0.121);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_38.setTransform(148.3,319.4,0.121,0.121);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhTgVgMhTICvg/IH5AAIAvCng");
	this.shape_39.setTransform(150.5,331.4,0.121,0.121);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(55,234,239,0.098)").s().p("AkaBUIhMhUIBdhTIIjAAIBNBTIheBUg");
	this.shape_40.setTransform(169.6,323.2,0.121,0.121);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(55,234,239,0.098)").s().p("AkMBUQhSgVgNhSICvhAIH5AAIAvCng");
	this.shape_41.setTransform(167.8,331.3,0.121,0.121);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(55,234,239,0.098)").s().p("AjSBUIiihAQAdhSBXgVIJ1AAIhQCng");
	this.shape_42.setTransform(169.4,315,0.121,0.121);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(55,234,239,0.098)").s().p("Ag0j8IAvgqIBwB/IgoGPIitA/g");
	this.shape_43.setTransform(134.1,327,0.121,0.121);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(55,234,239,0.098)").s().p("AhrD9IA3ojICgA/IgoGPIiJB/g");
	this.shape_44.setTransform(148.3,319.4,0.121,0.121);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(55,234,239,0.098)").s().p("AhuDIIAtm5ICKh/IAlAqIg7JNQgdBVhVAVg");
	this.shape_45.setTransform(156.2,327.9,0.121,0.121);

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(154.2,323.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(153.7,630.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:157.1}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:135}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:164.7}},{t:this.shape_15,p:{x:165.5,y:319.3}},{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_39},{t:this.shape_38,p:{x:148.3,y:319.4}},{t:this.shape_32},{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:135}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_15,p:{x:165.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:147.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_26,p:{x:148.3}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.shape_15,p:{x:135,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_16,p:{x:164.7}},{t:this.shape_38,p:{x:165.5,y:319.3}},{t:this.shape_40},{t:this.shape_13}]},5).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:135}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_15,p:{x:165.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:147.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_26,p:{x:148.3}},{t:this.shape_21,p:{x:152.2}},{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:135,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_42,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_16,p:{x:164.7}},{t:this.shape_38,p:{x:165.5,y:319.3}},{t:this.shape_40},{t:this.shape_13}]},5).to({state:[{t:this.shape_39},{t:this.shape_44},{t:this.shape_42,p:{x:152.2}},{t:this.shape_37},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:135,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_38,p:{x:165.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:147.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_38,p:{x:148.3,y:319.4}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_45},{t:this.shape_22,p:{x:157.1}},{t:this.shape_28},{t:this.shape_43},{t:this.shape_26,p:{x:135}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_19,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_29,p:{x:174.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:164.7}},{t:this.shape_15,p:{x:165.5,y:319.3}},{t:this.shape_14},{t:this.shape_13}]},5).to({state:[{t:this.shape_34},{t:this.shape_44},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:135,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_35},{t:this.shape_38,p:{x:165.5,y:319.3}},{t:this.shape_40},{t:this.shape_16,p:{x:147.5}}]},5).to({state:[{t:this.shape_39},{t:this.shape_33},{t:this.shape_42,p:{x:152.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_36},{t:this.shape_28},{t:this.shape_43},{t:this.shape_26,p:{x:135}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_21,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_35},{t:this.shape_15,p:{x:165.5,y:319.3}},{t:this.shape_14},{t:this.shape_16,p:{x:147.5}}]},5).to({state:[{t:this.shape_34},{t:this.shape_26,p:{x:148.3}},{t:this.shape_21,p:{x:152.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:157.1}},{t:this.shape_28},{t:this.shape_43},{t:this.shape_15,p:{x:135,y:319.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:143.8}},{t:this.shape_42,p:{x:169.4}},{t:this.shape_20},{t:this.shape_19,p:{x:174.3}},{t:this.shape_18},{t:this.shape_41},{t:this.shape_35},{t:this.shape_38,p:{x:165.5,y:319.3}},{t:this.shape_40},{t:this.shape_16,p:{x:147.5}}]},5).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({_off:false},0).to({_off:true,x:153.7,y:630.2},4).wait(110));

	// tuner bkgd
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("EgwMAZgMAAAgy/MBgZAAAMAAAAy/g");
	this.shape_46.setTransform(154.3,323.3,0.126,0.082);

	this.instance_5 = new lib.Tween3("synched",0);
	this.instance_5.setTransform(154.3,323.3);
	this.instance_5._off = true;

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(153.8,630.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46}]}).to({state:[{t:this.instance_5}]},67).to({state:[{t:this.instance_6}]},4).to({state:[]},1).wait(109));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(67).to({_off:false},0).to({_off:true,x:153.8,y:630.3},4).wait(110));

	// phone tuner
	this.instance_7 = new lib.TunerPhone();
	this.instance_7.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(67).to({y:433},4).to({_off:true},1).wait(109));

	// deck
	this.instance_8 = new lib.deck();
	this.instance_8.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181));

	// HEAD over
	this.instance_9 = new lib.HEADover();
	this.instance_9.setTransform(372,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(42).to({_off:false},0).to({x:150},4).wait(21).to({y:-25.2},4).to({_off:true},1).wait(109));

	// HEAD search
	this.instance_10 = new lib.HEADsearch();
	this.instance_10.setTransform(151,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(67).to({x:150,y:-25.2},4).to({_off:true},1).wait(109));

	// bkgd
	this.instance_11 = new lib._300x600_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;