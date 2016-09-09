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
		{src:"images/CT1222_Pioneer_160x600_atlas_P_.png", id:"CT1222_Pioneer_160x600_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Pioneer_160x600_atlas_P_", frames: [[302,602,126,117],[302,0,300,600],[0,0,300,600],[0,602,300,250]]}
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


(lib.Bluetooth = function() {
	this.spriteSheet = ss["CT1222_Pioneer_160x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x600_deck = function() {
	this.spriteSheet = ss["CT1222_Pioneer_160x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x600_phoneblank = function() {
	this.spriteSheet = ss["CT1222_Pioneer_160x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Pioneer_160x600_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bluetooth();
	this.instance.setTransform(-18.7,-17.4,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-17.4,37.5,34.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bluetooth();
	this.instance.setTransform(-18.7,-17.4,0.297,0.297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,-17.4,37.5,34.8);


(lib.TunerPhone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pioneer_300x600_phoneblank();
	this.instance.setTransform(-95,-255,0.633,0.633);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,-255,190,380);


(lib.Onlyprice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLB3IAAgcQgagCgKgEQgQgFgMgNIAdgdQAHAGAKADQALADAMABIAAgjIgKgBQgYgDgNgMQgHgGgDgJQgDgKAAgMQAAgXAPgQQAOgPAagEIAAgXIAfAAIAAAXQAhACAUAUIgdAcQgFgFgIgCQgIgDgIAAIAAAgIAKACQAZADAMAMQAOAMAAAbQAAAMgEAJQgEAKgIAHQgPAPgZAEIAAAdgAAPAyQAQgDAAgNQAAgHgEgEQgCgCgDgBIgHgCgAgSgxQgEAFAAAGQAAAFAEADQAEAFAIABIAAgfQgIABgEAFg");
	this.shape.setTransform(-54,71.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCChIBAh+QgGADgMAAQgPAAgPgGQgPgHgNgMQgNgMgHgRQgIgTABgWQgBgZAIgTQAIgTAPgOQAfgaAsgBQAtABAfAaQAPAOAIATQAIATgBAZQAAAUgGAUQgIARgOAdIgCAFIg+B/gAgWhUQgJAJAAASQAAARAJAKQAJAJANAAQANAAAKgJQAJgKAAgRQAAgSgJgJQgKgKgNAAQgNAAgJAKg");
	this.shape_1.setTransform(50.4,81.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhCChIBAh+QgGADgMAAQgPAAgPgGQgPgHgNgMQgMgMgIgRQgIgTABgWQgBgZAIgTQAIgTAPgOQAfgaAsgBQAtABAfAaQAPAOAIATQAIATgBAZQAAAUgGAUQgIARgOAdIgCAFIg+B/gAgWhUQgJAJAAASQAAARAJAKQAKAJAMAAQAOAAAJgJQAJgKAAgRQAAgSgJgJQgJgKgOAAQgMAAgKAKg");
	this.shape_2.setTransform(25.7,81.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnAoIAAhPIBPAAIAABPg");
	this.shape_3.setTransform(11,93.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATCgIAAgqIiEAAIAAhHIBrjOIBPAAIhoDOIAyAAIAAgqIBHAAIAAAqIAYAAIAABHIgYAAIAAAqg");
	this.shape_4.setTransform(-8.6,81.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhBChIA/h+QgGADgMAAQgPAAgPgGQgPgHgNgMQgMgMgIgRQgHgTgBgWQABgZAHgTQAIgTAPgOQAfgaAsgBQAtABAfAaQAPAOAIATQAHATABAZQAAAUgIAUQgGARgPAdIgCAFIg+B/gAgWhUQgKAJAAASQAAARAKAKQAKAJAMAAQANAAAKgJQAKgKAAgRQAAgSgKgJQgKgKgNAAQgMAAgKAKg");
	this.shape_5.setTransform(-31,81.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-116.8,49.2,250.1,58.9);


(lib.HEADquality = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcB1IAAhfIhHiLIBAAAIAjBWIAkhWIBAAAIhHCLIAABfg");
	this.shape.setTransform(57.5,-389);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbB1IAAi2Ig7AAIAAg0ICtAAIAAA0Ig7AAIAAC2g");
	this.shape_1.setTransform(37.8,-389);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbB1IAAjqIA3AAIAADqg");
	this.shape_2.setTransform(22.9,-389);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhNB1IAAjqIA6AAIAAC3IBhAAIAAAzg");
	this.shape_3.setTransform(8.7,-389);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAvB1IgLgjIhHAAIgLAjIg9AAIBWjqIArAAIBWDqgAgSAiIAnAAIgUg9g");
	this.shape_4.setTransform(-12.3,-389);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBxQgQgHgNgLQgMgLgIgQQgGgPAAgUIAAiXIA6AAIAACWQAAAQAIAKQAEAEAGADQAGACAGAAQAHAAAFgCQAGgDAEgEQAJgKAAgQIAAiWIA6AAIAACXIgCATIgFAQQgHAQgMALQgNALgRAHQgQAFgRABQgRgBgQgFg");
	this.shape_5.setTransform(-34,-388.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAsBpQgTALgZAAQgagCgLgFQgQgGgNgOQgQgPgEgVQgDgOgBgpQAAgZAEghQAEgUAQgQQANgMAQgIQAQgGAVAAQATAAAQAGQAQAHANANQAPAQAFAUQAEAhAAAZQAAAdgDARQgCASgJAPIARARIgdAdgAgOhEQgGADgDAFIgEAGIgDAJIgBARIgBAaIABAYIABAQIADAJIAEAGQADAFAGADQAGAEAIgBIACAAIgMgPIAbgeIALAMIACghIgBgaIgBgQIgDgKIgEgGQgDgFgGgDQgHgDgFAAQgIAAgGADg");
	this.shape_6.setTransform(-55.4,-388.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.2,-413.9,163.7,45.7);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBbQgSgFgOgOIAegeQAHAGAMAEQALADAMAAQAbAAAAgRQgBgIgEgDQgDgEgJgCIgKgCIgLgBQgNgCgJgEQgKgFgHgGQgGgFgDgKQgEgJAAgMQAAgbATgRQAKgJAMgEQANgEAOAAQAVAAAQAFIAPAHQAHAEAGAHIgeAeQgHgIgJgCQgJgCgLAAQgJAAgHAFQgFAGgBAHQABAFAEAEQAEAEAIABIAJACIANACQAZADAMAMQAPAMAAAcQAAAPgGAMQgGAKgKAIQgKAIgNAEQgOAEgOAAQgXAAgRgGg");
	this.shape.setTransform(60.8,-333.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBgIAAiUIgwAAIAAgrICNAAIAAArIgwAAIAACUg");
	this.shape_1.setTransform(45.5,-333.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBbQgNgEgLgMQgMgMgEgRQgCgLgBgjQAAgTADgaQAEgRAMgNQALgKANgGQANgFAPAAQAcAAATAQQALAIAFALQAHAMACAPIgvAAQgDgJgGgGQgGgFgKAAQgKAAgHAIIgDAFIgCAIIgCANIAAAUIAAAUIACAOIACAIIADAFQAHAIAKAAQAKAAAGgGQAGgFADgJIAvAAQgEAegVAQQgJAIgMAEQgMAEgOAAQgUgCgIgEg");
	this.shape_2.setTransform(29.7,-333.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABgIAAi/ICBAAIAAArIhSAAIAAAfIBGAAIAAAoIhGAAIAAAjIBSAAIAAAqg");
	this.shape_3.setTransform(13.2,-333.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBgIg7hgIAABgIgwAAIAAi/IApAAIA9BfIAAhfIAuAAIAAC/g");
	this.shape_4.setTransform(-4.7,-333.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAhBgIg7hgIAABgIgwAAIAAi/IApAAIA9BfIAAhfIAuAAIAAC/g");
	this.shape_5.setTransform(-23.6,-333.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBbQgNgEgLgMQgNgMgDgRQgCgLgCgjQAAgTAEgaQADgRANgNQALgKANgGQANgFAPAAQARAAANAFQANAGAKAKQANANADARQAEAaAAATQAAAdgEARQgDARgNAMQgKAMgNAEIgOAFIgQABQgUgCgIgEgAgKg0QgEACgDAFIgDAEIgCAIIgCANIAAAUIAAAUIACAOIACAHIADAFQADAEAEADQAFACAFAAQAGAAAFgCQAFgDADgEIADgFIACgHIABgOIABgUIgBgUIgBgNIgCgIIgDgEQgDgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_6.setTransform(-41.7,-333.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBbQgNgEgLgMQgNgMgDgRQgCgLgCgjQAAgTAEgaQADgRANgNQALgKANgGQANgFAPAAQAcAAAUAQQAKAIAGALQAGAMADAPIgxAAQgDgJgFgGQgGgFgKAAQgLAAgGAIIgDAFIgCAIIgBANIgBAUIABAUIABAOIACAIIADAFQAGAIALAAQAKAAAGgGQAFgFADgJIAxAAQgGAegTAQQgKAIgMAEQgMAEgOAAQgUgCgIgEg");
	this.shape_7.setTransform(-58.1,-333.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKAZIAAgxICVAAIAAAxg");
	this.shape_8.setTransform(59,-358.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcB1IAAi2Ig5AAIAAgzICrAAIAAAzIg5AAIAAC2g");
	this.shape_9.setTransform(32.9,-360.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAvB1IgLgjIhGAAIgMAjIg8AAIBVjpIArAAIBVDpgAgSAiIAnAAIgUg9g");
	this.shape_10.setTransform(12.5,-360.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAfB1IAAhdIg8AAIAABdIg6AAIAAjpIA6AAIAABbIA8AAIAAhbIA5AAIAADpg");
	this.shape_11.setTransform(-9.5,-360.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcB1IAAi2Ig5AAIAAgzICrAAIAAAzIg5AAIAAC2g");
	this.shape_12.setTransform(-30.3,-360.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhKAZIAAgxICVAAIAAAxg");
	this.shape_13.setTransform(-56.4,-358.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.9,-412,176.5,94.9);


(lib.HEADgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSATIAAglIAlAAIAAAlg");
	this.shape.setTransform(66.4,55.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBNIAAg/IguhaIAqAAIAWA4IAXg4IAqAAIgvBaIAAA/g");
	this.shape_1.setTransform(57.9,49.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBNIAAiZIAmAAIAAB3IA/AAIAAAig");
	this.shape_2.setTransform(46.5,49.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBJQgPgEgKgMIAYgYQAFAGAJADQAKACAJAAQAWAAAAgOQAAgGgEgDQgDgDgHgBIgIgBIgJgBQgKgCgIgEQgHgDgFgGQgGgDgCgHQgDgJAAgJQAAgWAPgNQAIgHAKgDQAKgEALAAQARAAANAFIAMAFIALAIIgYAYQgHgGgHgCQgGgBgKAAQgHAAgFAEQgEAFAAAGQAAADADADQADAEAHABIAHABIAKABQAUADAKALQAMAJAAAWQgBAMgEAJQgFAJgHAGQgJAGgLADQgLAEgLAAQgSAAgOgFg");
	this.shape_3.setTransform(33.1,49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggBJQgOgEgLgMIAYgYQAGAGAIADQAKACAJAAQAWAAAAgOQAAgGgDgDQgEgDgHgBIgIgBIgJgBQgJgCgJgEQgHgDgFgGQgGgDgCgHQgDgJAAgJQAAgWAPgNQAIgHAKgDQALgEAKAAQARAAANAFIAMAFIALAIIgZAYQgFgGgHgCQgIgBgJAAQgHAAgFAEQgEAFAAAGQAAADACADQAEAEAHABIAGABIALABQAUADAKALQAMAJAAAWQgBAMgEAJQgEAJgJAGQgIAGgLADQgKAEgMAAQgSAAgOgFg");
	this.shape_4.setTransform(20.2,49.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgzBNIAAiZIBnAAIAAAiIhBAAIAAAaIA3AAIAAAgIg3AAIAAAbIBBAAIAAAig");
	this.shape_5.setTransform(7.9,49.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBNIAAiZIAmAAIAAB3IA/AAIAAAig");
	this.shape_6.setTransform(-4.7,49.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBNIAAiZIBnAAIAAAiIhBAAIAAAaIA3AAIAAAgIg3AAIAAAbIBBAAIAAAig");
	this.shape_7.setTransform(-17.8,49.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AARBNIgZg6IgOAAIAAA6IgmAAIAAiZIA8AAQAMABAKAEQAKAEAGAGQAIAIADAJQADAJABAJQgBAPgHAKQgIAIgKAFIAiBBgAgWgKIAWAAQAFAAAFgFQAFgFAAgGQAAgGgFgFQgFgEgFgBIgWAAg");
	this.shape_8.setTransform(-31,49.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBNIAAiZIAkAAIAACZg");
	this.shape_9.setTransform(-42.1,49.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAYBNIgYhNIgXBNIgfAAIgqiZIAnAAIAUBPIAZhPIAZAAIAZBPIAUhPIAnAAIgpCZg");
	this.shape_10.setTransform(-55.4,49.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,33.7,149,29.2);


(lib.deck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pioneer_300x600_deck();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// product
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGBEIAAh6IgnAAIAAgNIBbAAIAAANIgnAAIAAB6g");
	this.shape.setTransform(50.5,-59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBEIAAiHIAxAAQASAAALAKQAGAFADAHQACAHAAAHQAAAGgBAEQgBAGgDADQgGAIgJAEQAKABAGAJQAGAJAAALQAAAJgCAHQgDAHgGAFQgLAKgSAAgAgfA3IAjAAQANAAAIgHQADgEACgEQACgFAAgGQAAgFgCgFQgCgEgDgEQgIgGgNAAIgjAAgAgfgGIAiAAQAMAAAHgHQAEgDACgEQACgEAAgGQAAgGgCgFQgCgEgEgDQgDgDgFgBQgFgCgGAAIgiAAg");
	this.shape_1.setTransform(39.1,-59.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBCQgHgCgFgGQgLgKAAgRIAAg+QAAgHADgHQACgHAGgGQAKgKAPAAQAQAAAKAKQAGAGADAHQACAHAAAHIAAA+QAAARgLAKQgFAGgGACQgHADgIAAQgHAAgGgDgAgQgxQgDAFgBAEQgCAFAAAFIAAA9QAAAMAGAGQAEAEAEACQAEACAEAAQAFAAAEgCQAFgCADgEQADgDABgFQACgEAAgGIAAg9QAAgFgCgFQgBgEgDgFQgGgGgLgBQgKABgGAGg");
	this.shape_2.setTransform(27.5,-59.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBCQgIgCgFgGQgGgFgDgHQgDgHAAgJIABgKQACgFADgEQAFgJAKgDQgJgEgFgJIgDgIIgBgJQAAgQAKgLQALgKAPAAQAIAAAGACQAHADAFAFQALALAAAQQAAAKgFAHQgEAJgJAEQAFABAEADIAGAHQAGAJAAALQAAAJgDAHQgDAHgGAFQgFAGgIACQgHADgIAAQgHAAgHgDgAgJAFQgFADgDADQgIAIAAALQAAAMAIAHQAHAIAKAAQALAAAHgIQAIgHAAgMQAAgLgIgIQgDgDgFgDQgFgCgFAAQgEAAgFACgAgQgxQgGAHAAALQAAAKAGAHQAHAIAJAAQAFAAAEgCQAEgCAEgEQAGgHAAgKQAAgLgGgHQgEgEgEgBQgEgCgFAAQgJAAgHAHg");
	this.shape_3.setTransform(17.5,-59.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA8QgFgFgDgGQgDgHgBgJIAOAAQABAMAHAGQAEADAFABQAEACAEAAQALAAAHgHQAEgEACgFQACgFAAgGQAAgMgHgHQgGgHgNAAIgCAAIAAgKIACAAQAFAAAFgCQAEgCADgDQAGgGAAgMQAAgMgGgHQgEgDgEgBQgEgCgFAAQgJAAgHAGQgGAGgBALIgOAAQABgRALgJQAFgFAHgCQAHgCAGAAQAIAAAHACQAGADAGAFQAFAFADAHQACAGAAAJQAAAWgSAIQAKACAFAIQAGAJAAANQAAASgMAKQgFAFgIADQgHACgIAAQgQAAgLgJg");
	this.shape_4.setTransform(7.3,-59.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBEIggg6IggA6IgQAAIAphEIgnhDIARAAIAdA2IAeg2IARAAIgoBDIArBEg");
	this.shape_5.setTransform(-2.8,-59.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAGIAAgLIAzAAIAAALg");
	this.shape_6.setTransform(-12.2,-57.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgBEIAAg/Ig/AAIAAA/IgOAAIAAiHIAOAAIAAA9IA/AAIAAg9IAOAAIAACHg");
	this.shape_7.setTransform(-22.9,-59.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFBEIgtiHIAQAAIAiBtIAjhtIAPAAIgtCHg");
	this.shape_8.setTransform(-34.8,-59.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AArBEIAAhmIglBQIgKAAIgnhQIAABmIgOAAIAAiHIAOAAIArBfIArhfIAPAAIAACHg");
	this.shape_9.setTransform(-47.9,-59.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBEIgeg9IggAAIAAA9IgOAAIAAiHIAyAAQAJAAAHADQAIACAFAGQAMAKAAARQAAAPgJAKQgEAEgFABQgFAEgHABIAgA+gAgggDIAjAAQAGAAAFgCQAFgCADgDQAIgGAAgMQAAgMgIgHQgDgDgFgCQgFgCgGAAIgjAAg");
	this.shape_10.setTransform(34,-79);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBEIAAiHIBTAAIAAANIhEAAIAAAwIA6AAIAAAMIg6AAIAAAxIBEAAIAAANg");
	this.shape_11.setTransform(21.9,-79);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBEIAAiHIBTAAIAAANIhEAAIAAAwIA6AAIAAAMIg6AAIAAAxIBEAAIAAANg");
	this.shape_12.setTransform(10.4,-79);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkBEIgqhDIgcgoIAABrIgPAAIAAiHIAOAAIApBCIAeAqIAAhsIAOAAIAACHg");
	this.shape_13.setTransform(-2.8,-79);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBCQgJgEgHgHQgEgFgDgFQgCgFgCgHIgBgNIAAgUIAAgTIABgOQACgGACgFQADgFAEgFQAPgOATAAQAKAAAIAEQAJADAHAHQAFAFADAFQADAFAAAGIACAOIAAATIAAAUIgCANQAAAHgDAFQgDAFgFAFQgHAHgJAEQgIADgKAAQgJAAgJgDgAgLg1QgHADgEAFQgDADgCAEQgCAEgBAFIgCALIAAASIAAASIACANQABAFACADQACAEADADQAEAFAHACQAGADAFAAQAGAAAHgDQAGgCAEgFIAFgGIADgJIACgNIAAgSIAAgSIgCgLIgDgJIgFgHQgEgFgGgDQgHgCgGAAQgFAAgGACg");
	this.shape_14.setTransform(-16.1,-79);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_15.setTransform(-25,-79);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBEIAAiHIAxAAQATAAALALQAGAGADAHQADAHAAAJQAAAKgDAHQgDAHgGADQgFAGgJADQgHADgJAAIgiAAIAAA4gAgeAAIAgAAQAHAAAGgBQAEgCAFgEQAHgGABgOQgBgNgHgHQgFgDgEgCQgGgCgHAAIggAAg");
	this.shape_16.setTransform(-33.2,-79);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buy now
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAwIASgoQgCABgDABQgFAAgFgCQgEgCgEgEQgDgCgCgFQgCgFAAgHQgBgOAJgIQAEgFAGgBQAFgCAFAAQAMAAAJAHQAEAFACAFQACAFAAAIQAAAGgCAGIgGAMIgUApgAgHgbQgEADAAAHIABAFIADAFQADAEAEgBQAFABADgEIADgFIABgFQAAgHgEgDQgDgFgFAAQgEAAgDAFg");
	this.shape_17.setTransform(54.9,91.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAwIASgoQgCABgDABQgFAAgEgCQgFgCgEgEQgEgCgCgFQgBgFgBgHQABgOAIgIQAEgFAFgBQAGgCAFAAQANAAAIAHQAFAFABAFQADAFAAAIQAAAGgDAGIgFAMIgVApgAgIgbQgDADAAAHIABAFIACAFQAEAEAEgBQAFABADgEIADgFIABgFQAAgHgEgDQgDgFgFAAQgEAAgEAFg");
	this.shape_18.setTransform(47.6,91.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_19.setTransform(41.9,95.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAGAwIAAgOIglAAIAAgRIAfhAIATAAIgfBAIASAAIAAgRIARAAIAAARIAJAAIAAARIgJAAIAAAOg");
	this.shape_20.setTransform(36.3,91.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAwIASgoQgCABgDABQgFAAgEgCQgFgCgEgEQgEgCgCgFQgBgFAAgHQAAgOAIgIQAEgFAGgBQAFgCAFAAQAMAAAJAHQAEAFACAFQACAFABAIQgBAGgCAGIgFAMIgVApgAgIgbQgDADAAAHIABAFIACAFQAEAEAEgBQAFABADgEIADgFIABgFQAAgHgEgDQgDgFgFAAQgEAAgEAFg");
	this.shape_21.setTransform(29,91.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA+IAAgPIgKgBIgIgCQgHgDgHgHIAMgMQAEAEAGACIAMACIAAgYIgEgBQgMgBgHgFQgEgDgCgFQgBgFAAgGQAAgMAIgIQAHgIANgBIAAgMIAMAAIAAAMQAIABAGACQAHADAGAFIgNAMQgDgDgEgCIgJgCIAAAYIAFABIALADIAHAEQAEACACAFQACAFAAAHQAAAGgCAFQgCAFgEADQgIAIgNACIAAAPgAAGAeQANgBAAgLQAAgFgDgDIgFgCIgEgBIgBAAgAgLgcQgDADAAAFQAAAEADACQADADAGABIAAgWQgGAAgDAEg");
	this.shape_22.setTransform(21,91.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_23.setTransform(10.2,92.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAwIgRg5IgQA5IgQAAIgahfIAUAAIAPA7IARg7IAMAAIASA7IAPg7IAUAAIgaBfg");
	this.shape_24.setTransform(-2.6,91.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAtQgGgCgGgFQgGgGgCgJQgBgIAAgPIABgXQACgIAGgGQAGgGAGgCQAGgDAHABQAHgBAHADQAGACAFAGQAHAGABAIQACAOAAAJIgCAXQgBAIgHAHQgFAFgGACQgHAEgHAAQgHAAgGgEgAgGgdQgDABgCACIgCAEIgBAEIgBAHIAAALIAAALIABAHIABAFIACADQACADADABIAGACQADgBADgBQADgBACgDIADgDIABgFIABgHIAAgLIAAgLIgBgHIgBgEIgDgEQgEgFgHAAIgGACg");
	this.shape_25.setTransform(-12.9,91.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUAwIglg5IAAA5IgTAAIAAhfIARAAIAkA5IAAg5IAUAAIAABfg");
	this.shape_26.setTransform(-22.1,91.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAwIAAgoIgdg3IAVAAIAQAnIARgnIAVAAIgdA3IAAAog");
	this.shape_27.setTransform(-33.9,91.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAuQgHgDgFgEQgFgFgCgGQgDgGAAgIIAAg9IATAAIAAA9IABAHIADAGIAGADIAFABIAGgBIAGgDQAEgFAAgIIAAg9IATAAIAAA9QAAAIgDAGQgCAGgFAFQgFAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_28.setTransform(-42.2,91.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIAmAAQAOAAAHAIQAEADADAFQABAFAAAGIAAAHIgDAGQgEAFgEACQAFABAEAFQADAFAAAJQABANgJAHQgHAIgOAAgAgPAfIASAAQAGAAAEgDQADgEAAgFQAAgFgDgDQgEgEgGAAIgSAAgAgPgIIARAAQAGAAADgDQADgDABgFQgBgFgDgDQgDgDgGAAIgRAAg");
	this.shape_29.setTransform(-51.1,91.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// CT logo
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_30.setTransform(-2.7,59.2,0.197,0.197);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_31.setTransform(38.3,59.1,0.197,0.197);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_32.setTransform(7,59.1,0.197,0.197);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_33.setTransform(-30.1,59.1,0.197,0.197);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_34.setTransform(-13.5,59.1,0.197,0.197);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_35.setTransform(52.4,59.1,0.197,0.197);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_36.setTransform(23.1,59.1,0.197,0.197);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_37.setTransform(-46.4,59.1,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	// bkgd
	this.instance = new lib.XOvision_300x250_CTAbkgd();
	this.instance.setTransform(-214,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-214,-125,300,250);


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



(lib.CT1222_Pioneer_160x600 = function(mode,startPosition,loop) {
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
	this.clickthrough_btn.setTransform(80,300.3,0.63,3.158,0,0,0,127,95.1);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(80,552);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({y:475},4).wait(10));

	// Only 29.96
	this.instance_1 = new lib.Onlyprice();
	this.instance_1.setTransform(80,564);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({y:357},4).wait(48).to({scaleX:0.78,scaleY:0.78,y:399},4).wait(10));

	// HEAD wirelessly
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(357,115);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({x:80},4).wait(101));

	// bluetooth
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(127.3,472.9,0.706,0.706,0,0,0,0,0.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(125,617.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},48).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true,regY:0,scaleX:1,scaleY:1,x:125,y:617.4},4).wait(101));

	// phone
	this.instance_5 = new lib.TunerPhone();
	this.instance_5.setTransform(80,576);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({y:475},5).wait(30).to({y:614},4).to({_off:true},1).wait(100));

	// HEAD quality that
	this.instance_6 = new lib.HEADover();
	this.instance_6.setTransform(73.4,947.9,2.5,2.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).to({scaleX:1,scaleY:1,x:80,y:475,alpha:1},4).wait(135));

	// HEAD quality
	this.instance_7 = new lib.HEADquality();
	this.instance_7.setTransform(80.8,475);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181));

	// deck
	this.instance_8 = new lib.deck();
	this.instance_8.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181));

	// bkgd
	this.instance_9 = new lib._300x600_bkgd();
	this.instance_9.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;