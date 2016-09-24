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
		{src:"images/CT1222_Install_160x600_atlas_P_.png", id:"CT1222_Install_160x600_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Install_160x600_atlas_P_", frames: [[0,0,160,600],[162,0,300,250],[162,252,300,250],[162,504,300,250],[0,756,300,250]]}
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


(lib.Install_160x600_redteam = function() {
	this.spriteSheet = ss["CT1222_Install_160x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Coaxial = function() {
	this.spriteSheet = ss["CT1222_Install_160x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Tweeter = function() {
	this.spriteSheet = ss["CT1222_Install_160x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Woofer = function() {
	this.spriteSheet = ss["CT1222_Install_160x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Install_160x600_atlas_P_"];
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
	this.instance = new lib.Install_160x600_redteam();
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,160,600);


(lib.HEADquality = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfIAAg9IA9AAIAAA9g");
	this.shape.setTransform(15.7,-148.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdB9IAAjCIg+AAIAAg3IC3AAIAAA3Ig+AAIAADCg");
	this.shape_1.setTransform(0.6,-157.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdB9IAAj5IA7AAIAAD5g");
	this.shape_2.setTransform(-15.3,-157.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA3B8IAAh3IgkA+IglAAIgkg+IAAB3Ig9AAIAAj4IA8AAIA3BvIA4hvIA8AAIAAD4g");
	this.shape_3.setTransform(45,-198.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAyB8IgMglIhKAAIgNAlIhAAAIBbj4IAuAAIBaD4gAgTAkIAqAAIgWhBg");
	this.shape_4.setTransform(19.4,-198.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhUB8IAAj4ICpAAIAAA3IhrAAIAAAqIBbAAIAAA1IhbAAIAAAsIBrAAIAAA2g");
	this.shape_5.setTransform(-2.4,-198.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbB8IgqhcIgVAAIAABcIg+AAIAAj4IBiAAQAUAAAQAHQAQAGALAMQALALAFAPQAGAPAAAPQAAAYgLAQQgMAPgSAJIA2BngAgkgSIAjAAQAKAAAHgIQAIgHgBgKQABgLgIgHQgHgIgKABIgjAAg");
	this.shape_6.setTransform(-23.9,-198.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcB8IAAj4IBcAAQAUABARAFIAQAIQAHAFAHAGQAIAJAGAJQAFAKADAMQACAMABANIABAiIgBAiQgBAOgCAMQgDAMgFAJQgGAKgIAJQgNAMgRAHQgRAFgUAAgAgeBGIAbAAQAJAAAHgEQAHgDAFgHIADgGIACgJIABgQIAAgZIAAgZIgBgOIgCgJIgDgHQgFgGgHgEQgHgEgJAAIgbAAg");
	this.shape_7.setTransform(-47.3,-198.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjB3QgSgGgNgMQgNgMgHgQQgHgRAAgUIAAigIA9AAIAACfQAAAQAJAKQAEAFAGACQAHADAGAAQAHAAAGgDQAGgCAFgFQAJgKAAgQIAAifIA9AAIAACgIgBATIgGASQgHAQgOAMQgNAMgRAGQgSAGgSABQgSgBgRgGg");
	this.shape_8.setTransform(21.2,-238.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AglB3QgRgHgOgNQgRgRgEgWQgDgOgCguQAAgYAFgjQAEgWARgQQAOgOARgIQAQgGAVAAQAWAAARAGQAQAIAOAOQARAQAEAWQAFAjAAAYQAAAmgFAWQgEAWgRARQgOANgQAHIgTAGIgUACQgagDgLgFgAgNhEQgGADgEAFIgEAHIgDAKIgBARIgBAaIABAbIABARIADAKIAEAGQAEAGAGACQAGAEAHAAQAIAAAGgEQAGgCAEgGIAEgGIADgKIACgRIAAgbIAAgaIgCgRIgDgKIgEgHQgDgFgHgDQgGgDgIAAQgHAAgGADg");
	this.shape_9.setTransform(-1.6,-238.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdB9IAAhnIhMiRIBDAAIAmBaIAnhaIBDAAIhMCRIAABng");
	this.shape_10.setTransform(-22.1,-238.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-265.1,154.8,129.7);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAkIAAhHIBHAAIAABHg");
	this.shape.setTransform(22.9,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiCQIAAjgIhHAAIAAg/IDTAAIAAA/IhHAAIAADgg");
	this.shape_1.setTransform(5,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiCQIAAkfIBFAAIAAEfg");
	this.shape_2.setTransform(-13.3,16.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhqCQIAAkfIBqAAQAXAAAUAHIATAJQAIAFAHAHQALAKAFALQAHAMADANQADAOABAPIAAAoIAAAoQgBAQgDAOQgDANgHALQgFALgLALQgOANgUAIQgUAHgXAAgAgjBQIAfAAQALAAAIgDQAIgFAGgIIADgHIADgKIABgSIAAgdIAAgcIgBgSIgDgKIgDgHQgGgIgIgFQgIgEgLAAIgfAAg");
	this.shape_3.setTransform(45.3,-28.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfCQIAAkfIBHAAIAADfIB4AAIAABAg");
	this.shape_4.setTransform(20.8,-28.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiCQIAAkfIBFAAIAAEfg");
	this.shape_5.setTransform(1.8,-28.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpCKQgUgHgPgOQgQgOgIgTQgIgUAAgXIAAi5IBHAAIAAC4QAAATAKAMQAFAFAHADQAHADAIAAQAIAAAHgDQAHgDAFgFQALgMAAgTIAAi4IBHAAIAAC5IgCAWIgGAVQgJATgPAOQgQAOgUAHQgUAHgVAAQgVAAgUgHg");
	this.shape_6.setTransform(-18.1,-28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhrCQIAAkfIB2AAQAtAAAYAWQAXAXABAmQAAALgDAJQgCAJgGAHQgKAOgLAIIAMAGIALAMQAFAHAEALQAEALAAAOQAAAogaAXQgZAWgoAAgAgjBQIAuAAQANAAAGgHQAHgIAAgLQAAgKgHgIQgGgGgNgBIguAAgAgjghIAqAAQANABAGgIQAGgGAAgKQAAgKgGgGQgGgIgNAAIgqAAg");
	this.shape_7.setTransform(-44.3,-28.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhhCQIAAkfIDDAAIAAA/Ih7AAIAAAxIBpAAIAAA9IhpAAIAAAyIB7AAIAABAg");
	this.shape_8.setTransform(18.8,-74.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuCQIguiOIgtCOIg6AAIhQkfIBLAAIAmCWIAuiWIAxAAIAvCWIAliWIBKAAIhPEfg");
	this.shape_9.setTransform(-12.3,-74.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.6,-104,169.2,145.5);


(lib.guarantee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAUIAAgnIAnAAIAAAng");
	this.shape.setTransform(67.3,43.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2BQIAAifIBsAAIAAAjIhDAAIAAAbIA5AAIAAAiIg5AAIAAAcIBDAAIAAAjg");
	this.shape_1.setTransform(57.8,37.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2BQIAAifIBtAAIAAAjIhEAAIAAAbIA5AAIAAAiIg5AAIAAAcIBEAAIAAAjg");
	this.shape_2.setTransform(44.1,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBQIAAh8IgoAAIAAgjIB1AAIAAAjIgnAAIAAB8g");
	this.shape_3.setTransform(30.3,37.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcBQIgyhQIAABQIgoAAIAAifIAkAAIAxBPIAAhPIAnAAIAACfg");
	this.shape_4.setTransform(15.8,37.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBQIgHgYIgwAAIgIAYIgpAAIA6ifIAdAAIA6CfgAgMAXIAaAAIgNgpg");
	this.shape_5.setTransform(0.5,37.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASBQIgbg8IgNAAIAAA8IgoAAIAAifIA+AAQANAAAKAEQALAEAHAIQAHAHADAJQAEAKAAAKQAAAPgIAKQgHAJgLAGIAiBDgAgWgLIAWAAQAGAAAFgFQAEgFAAgGQAAgHgEgFQgFgFgGABIgWAAg");
	this.shape_6.setTransform(-13.7,37.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgBQIgHgYIgwAAIgIAYIgpAAIA6ifIAdAAIA6CfgAgMAXIAaAAIgNgpg");
	this.shape_7.setTransform(-29,37.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWBMQgLgDgJgIQgIgIgFgLQgFgKAAgNIAAhnIAoAAIAABmQAAALAGAGQACADAEACQAEABAEAAQAEAAAEgBQAEgCADgDQAGgGAAgLIAAhmIAoAAIAABnIgCAMIgDALQgFALgIAIQgJAIgLADQgLAFgMAAQgLAAgLgFg");
	this.shape_8.setTransform(-43.8,37.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYBNQgLgEgJgKQgLgKgDgPQgCgJgBgdQAAgPADgXQADgOALgKQAJgKAKgEQAIgDARgBQAIgBARAFQALAEAIAIQAHAIAEAJQAFAKABAKIgoAAQgCgKgFgEQgGgEgIAAQgFAAgEACQgEACgCADIgDAEIgBAHIgCALIAAAQIAAARIACALIABAHIADAEQAFAHAKAAQAKAAAGgHQADgDACgEQABgEAAgGIAAgCIgWAAIAAgfIA+AAIAAAVQgCAYgCAHQgEANgJAJQgFAGgFADIgLAFQgLAFgNAAQgRgCgHgDg");
	this.shape_9.setTransform(-58.6,37.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIBrIAAjVICRAAIAAAvIhcAAIAAAkIBOAAIAAAuIhOAAIAAAlIBcAAIAAAvg");
	this.shape_10.setTransform(58.1,14.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAvBrIAAhnIgeA1IggAAIgfg1IAABnIg1AAIAAjVIA0AAIAvBfIAwhfIA0AAIAADVg");
	this.shape_11.setTransform(36.4,14.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZBrIAAjVIAzAAIAADVg");
	this.shape_12.setTransform(19.5,14.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZBrIAAimIg1AAIAAgvICdAAIAAAvIg1AAIAACmg");
	this.shape_13.setTransform(5.8,14.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhIBrIAAjVICRAAIAAAvIhcAAIAAAkIBOAAIAAAuIhOAAIAAAlIBcAAIAAAvg");
	this.shape_14.setTransform(-11.9,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIBrIAAjVICRAAIAAAvIhcAAIAAAmIBOAAIAAAtIhOAAIAABTg");
	this.shape_15.setTransform(-29.9,14.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZBrIAAjVIAzAAIAADVg");
	this.shape_16.setTransform(-44.1,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhGBrIAAjVIA1AAIAACmIBYAAIAAAvg");
	this.shape_17.setTransform(-57,14.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAZIAAgxIAxAAIAAAxg");
	this.shape_18.setTransform(67.8,-2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgrBiQgTgHgOgPIAfggQAIAIAMADQAMAEANgBQAcAAABgSQAAgHgFgFQgEgEgJgCIgLgBIgMgCQgNgCgLgEQgKgFgHgHQgHgFgEgLQgDgKAAgNQAAgcAUgSQAKgJAOgFQANgEAPAAQAXAAARAGQAIADAHAEQAIAFAHAGIggAfQgIgHgJgDQgJgCgNAAQgKAAgGAHQgHAFAAAHQAAAGAFAEQAFAEAIACIAKABIANACQAcAEANANQAPANgBAeQAAAPgFAMQgHANgKAHQgLAJgOAEQgPAEgPAAQgZAAgSgFg");
	this.shape_19.setTransform(56.3,-10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhCBlIAAjKIAyAAIAACeIBUAAIAAAsg");
	this.shape_20.setTransform(40.7,-10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhDBlIAAjKIAzAAIAACeIBTAAIAAAsg");
	this.shape_21.setTransform(24.2,-10.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AApBlIgKgeIg9AAIgKAeIg0AAIBKjKIAlAAIBKDKgAgPAdIAhAAIgRg0g");
	this.shape_22.setTransform(6,-10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXBlIAAidIgzAAIAAgtICVAAIAAAtIgyAAIAACdg");
	this.shape_23.setTransform(-11.7,-10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrBiQgTgHgPgPIAgggQAIAIAMADQANAEAMgBQAcAAAAgSQAAgHgDgFQgFgEgJgCIgLgBIgMgCQgNgCgLgEQgKgFgHgHQgHgFgDgLQgEgKAAgNQAAgcAVgSQAKgJANgFQAOgEAPAAQAWAAARAGQAIADAIAEQAHAFAGAGIgfAfQgIgHgJgDQgJgCgMAAQgLAAgGAHQgGAFAAAHQAAAGADAEQAGAEAJACIAJABIAOACQAbAEAMANQAPANABAeQAAAPgHAMQgFANgLAHQgLAJgPAEQgOAEgPAAQgYAAgTgFg");
	this.shape_24.setTransform(-29.1,-10.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAjBlIg/hlIAABlIgyAAIAAjKIAsAAIA/BlIAAhlIAyAAIAADKg");
	this.shape_25.setTransform(-47.1,-10.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYBlIAAjKIAxAAIAADKg");
	this.shape_26.setTransform(-61.7,-10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA1B5IAAh0IgiA8IglAAIgig8IAAB0Ig8AAIAAjxIA7AAIA1BrIA3hrIA6AAIAADxg");
	this.shape_27.setTransform(53.1,-35.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgkB0QgRgGgNgOQgQgQgFgVQgDgOgBgtQAAgYAEgiQAFgVAQgQQANgNARgIQAQgGAUAAQAVAAARAGQAQAHAOAOQAQAQAEAVQAEAiAAAYQAAAlgEAWQgEAVgQAQQgOAOgQAGIgSAGIgUABQgZgCgLgFgAgMhCQgGADgEAFIgEAGIgDAKIgBAQIgBAaIABAaIABARIADAJIAEAHQADAFAHADQAGADAGAAQAHAAAHgDQAGgDAEgFIADgHIADgJIACgRIABgaIgBgZIgCgRIgDgKIgDgGQgEgFgGgDQgHgDgHAAQgGAAgGADg");
	this.shape_28.setTransform(28.3,-35.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcB5IAAi8Ig9AAIAAg1ICyAAIAAA1Ig7AAIAAC8g");
	this.shape_29.setTransform(7.4,-35.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag0B0QgWgHgSgSIAngmQAJAJAOAEQAPAEAPAAQAiAAAAgWQAAgJgFgFQgFgFgLgCIgNgCIgOgCQgQgCgNgGQgMgFgIgIQgJgHgEgMQgEgNAAgPQAAgiAYgWQAMgKAQgGQARgFASAAQAbAAAUAGQAKAEAJAGQAIAFAIAIIglAlQgKgJgLgCQgLgDgPAAQgMAAgIAHQgHAHAAAJQAAAGAFAFQAFAGALABIAMACIAQACQAgAFAQAPQASAQAAAkQAAASgHAOQgIAPgMAJQgNAKgSAFQgRAFgSAAQgdAAgXgHg");
	this.shape_30.setTransform(-13.4,-35.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiB0QgRgGgNgMQgNgLgHgRQgHgQAAgTIAAicIA8AAIAACaQAAARAJAJQAEAFAGADQAGACAGAAQAHAAAGgCQAGgDAEgFQAJgJAAgRIAAiaIA8AAIAACcIgCASIgFARQgHARgNALQgNAMgRAGQgRAGgSAAQgSAAgQgGg");
	this.shape_31.setTransform(-34.1,-35.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkB0QgRgGgNgOQgQgQgFgVQgDgOgBgtQAAgYAEgiQAFgVAQgQQANgOARgHQARgGATAAQAkAAAZAUQAMAKAIAPQAIAPADATIg9AAQgDgMgIgHQgGgHgOAAQgOAAgIAKIgEAHIgCAKIgCARIgBAZIABAaIACARIACAKIAEAHQAIAKAOAAQAOAAAGgHQAIgHADgMIA9AAQgHAngYAUQgNAKgPAFQgQAFgRAAQgZgCgLgFg");
	this.shape_32.setTransform(-55.3,-35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.8,-59.9,150.4,110.7);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buy now
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAZIAnAAIAAAQIgnAAIAAAaIAuAAIAAASg");
	this.shape.setTransform(50.9,92.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA0IgTgqIgOAAIAAAqIgVAAIAAhnIAnAAQAHABAHACQAGACAFAFQAEAEADAGQACAGAAAHQgBAEgBAFQgBAFgDADQgGAFgHADIAXAtgAgRgFIARAAQAGAAAEgDIADgFQACgCAAgDQAAgDgCgDIgDgEQgEgFgGAAIgRAAg");
	this.shape_1.setTransform(41.9,92.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAxQgHgDgFgFQgIgHgBgJQgCgJAAgQQAAgKACgPQABgIAIgHQAFgGAHgDQAHgCAHAAQAIAAAHACQAHADAFAGQAIAHABAIQACAPAAAKQAAATgCAGQgBAJgIAHQgFAFgHADQgHADgIAAQgHAAgHgDgAgGggQgDABgCADIgDAEIgCAFIgBAIIAAALIAAAMIABAIIACAFIADAEQACACADACQAEABACAAQADAAAEgBIAGgEIACgEIACgFIAAgIIAAgMIAAgLIAAgIIgCgFIgCgEQgGgFgHAAQgCAAgEABg");
	this.shape_2.setTransform(32.1,92.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA0IAAhVIgbAAIAAgSIBJAAIAAASIgbAAIAABVg");
	this.shape_3.setTransform(23.2,92.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLAzQgFAAgEgCQgJgDgIgIIAOgNQAEAFAGACQAHACAGAAQASAAAAgNQAAgFgDgDQgCgDgIgBIgFgBIgFgBQgNgCgHgFQgEgDgCgFQgCgGABgGQAAgOAJgJQAFgEAGgCQAHgCAHAAQAKAAAIACIAIAEQAEACADAEIgNAMQgEgEgGgBQgFgCgGAAIgFABQgDABgCACQgEAEAAAFQAAAEADAEQADADAGABIAFABIAGABIALACQAFACADADQAFACACAGQACAFAAAIQAAAOgLAJQgFAEgIACQgGACgIAAg");
	this.shape_4.setTransform(14.6,92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJA0IAAgrIgfg8IAWAAIASArIATgrIAWAAIgfA8IAAArg");
	this.shape_5.setTransform(2.9,92.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAbA0IAAg7IgVAlIgLAAIgUglIAAA7IgVAAIAAhnIAVAAIAZA3IAbg3IAUAAIAABng");
	this.shape_6.setTransform(-7.1,92.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA0IAAhnIAkAAQAIABAHACQAHACAFAFIAGAIIADAJIABAKIAAAOQAAARgCAJQgBAJgHAHQgFAFgHACQgHACgIABgAgQAiIAPAAQADgBAEgBQAEgCADgDQACgEABgGIABgRIgBgRQgBgFgCgEQgGgGgIgBIgPAAg");
	this.shape_7.setTransform(-21,92.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA0Igng+IAAA+IgUAAIAAhnIASAAIAnA+IAAg+IAUAAIAABng");
	this.shape_8.setTransform(-31.2,92.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_9.setTransform(-38.6,92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAaIAnAAIAAAQIgnAAIAAArg");
	this.shape_10.setTransform(-44.8,92.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CT logo
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_11.setTransform(-5.2,59.6,0.197,0.197);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_12.setTransform(35.8,59.6,0.197,0.197);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_13.setTransform(4.5,59.6,0.197,0.197);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_14.setTransform(-32.7,59.6,0.197,0.197);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_15.setTransform(-16.1,59.6,0.197,0.197);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_16.setTransform(49.8,59.6,0.197,0.197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_17.setTransform(20.5,59.5,0.197,0.197);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_18.setTransform(-48.9,59.6,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).wait(1));

	// bkgd
	this.instance = new lib.XOvision_300x250_CTAbkgd();
	this.instance.setTransform(-212,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212,-125,300,250);


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
(lib.CT1222_Install_160x600 = function(mode,startPosition,loop) {
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
	this.clickthru_btn.setTransform(80,299.9,0.63,3.157,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(80,377);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145).to({_off:false},0).to({y:475},4).wait(32));

	// guarantee
	this.instance_1 = new lib.guarantee();
	this.instance_1.setTransform(79.7,-50.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({x:80,y:73},4).wait(56));

	// red team
	this.instance_2 = new lib.redteam();
	this.instance_2.setTransform(80,486);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(97).to({_off:false},0).to({y:300},4).wait(80));

	// HEAD build
	this.instance_3 = new lib.HEADover();
	this.instance_3.setTransform(228,281.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({x:80},4).wait(38).to({y:122.2},4).to({_off:true},1).wait(79));

	// HEAD dream
	this.instance_4 = new lib.HEADquality();
	this.instance_4.setTransform(80.8,281.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({y:122.2},4).to({_off:true},1).wait(79));

	// tweet R
	this.instance_5 = new lib.tweet();
	this.instance_5.setTransform(51,275.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(137));

	// tweet L
	this.instance_6 = new lib.tweet();
	this.instance_6.setTransform(-57,275.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(137));

	// coax R
	this.instance_7 = new lib.coax();
	this.instance_7.setTransform(40,175);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).wait(150));

	// coax L
	this.instance_8 = new lib.coax();
	this.instance_8.setTransform(-81,171);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).wait(150));

	// woofer
	this.instance_9 = new lib.woofer();
	this.instance_9.setTransform(80,254);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(163));

	// bkgd
	this.instance_10 = new lib._300x600_bkgd();
	this.instance_10.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,300,300,600.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;