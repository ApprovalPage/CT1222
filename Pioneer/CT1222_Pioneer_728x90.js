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
		{src:"images/CT1222_Pioneer_728x90_atlas_P_.png", id:"CT1222_Pioneer_728x90_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Pioneer_728x90_atlas_P_", frames: [[604,0,126,117],[0,0,300,600],[0,602,728,90],[302,0,300,250]]}
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


(lib.Bluetooth = function() {
	this.spriteSheet = ss["CT1222_Pioneer_728x90_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x600_phoneblank = function() {
	this.spriteSheet = ss["CT1222_Pioneer_728x90_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_728x90_deck = function() {
	this.spriteSheet = ss["CT1222_Pioneer_728x90_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Pioneer_728x90_atlas_P_"];
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
	this.instance.setTransform(-142,-178,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142,-178,212,424);


(lib.Onlyprice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCwIAAgpQglgEgQgFQgXgJgSgSIArgrQAJAKAQAEQAQAEASABIAAgzIgPgCQgkgFgTgRQgJgKgGgNQgEgPAAgRQAAgiAWgYQAVgXAmgEIAAgjIAuAAIAAAiQAxADAeAdIgrAqQgHgHgNgEQgLgDgMgCIAAAxIAPACQAlAFARARQAVATAAAnQAAASgFAOQgHAOgLALQgWAWgmAGIAAArgAAWBKQAYgFAAgTQAAgLgFgFQgEgDgEgCIgLgCgAgbhJQgGAHAAAIQAAAIAGAGQAGAFAMACIAAgtQgMACgGAHg");
	this.shape.setTransform(-83.7,67.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhDvIBdi6QgJADgRAAQgWAAgXgJQgWgJgSgTQgUgSgLgZQgKgcgBghQABgkAKgdQAMgcAWgUQAugoBCAAQBCAAAuAoQAXAUALAcQALAdAAAkQAAAfgKAdQgLAbgUAqIgEAHIhcC8gAghh9QgOAPgBAZQABAZAOAOQAOAPATAAQAUAAAOgPQAOgOAAgZQAAgZgOgPQgOgOgUAAQgTAAgOAOg");
	this.shape_1.setTransform(70.4,82.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhiDvIBfi6QgJADgSAAQgWAAgWgJQgXgJgTgTQgSgSgLgZQgLgcAAghQAAgkALgdQALgcAXgUQAtgoBCAAQBDAAAtAoQAXAUALAcQAMAdAAAkQAAAfgLAdQgKAbgWAqIgDAHIhbC8gAgih9QgOAPABAZQgBAZAOAOQAOAPAUAAQAUAAAOgPQAOgOAAgZQAAgZgOgPQgOgOgUAAQgUAAgOAOg");
	this.shape_2.setTransform(34,82.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7A7IAAh1IB3AAIAAB1g");
	this.shape_3.setTransform(12.3,100.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdDtIAAg/IjDAAIAAhoICdkyIB2AAIibEyIBLAAIAAg/IBnAAIAAA/IAjAAIAABoIgjAAIAAA/g");
	this.shape_4.setTransform(-16.7,82.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhiDvIBfi6QgJADgSAAQgWAAgWgJQgXgJgTgTQgSgSgLgZQgLgcAAghQAAgkALgdQALgcAXgUQAtgoBCAAQBDAAAtAoQAXAUALAcQAMAdAAAkQAAAfgLAdQgKAbgWAqIgDAHIhbC8gAgih9QgOAPABAZQgBAZAOAOQAOAPAUAAQAUAAAOgPQAOgOAAgZQAAgZgOgPQgOgOgUAAQgUAAgOAOg");
	this.shape_5.setTransform(-49.7,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.2,35.1,369,86.9);


(lib.HEADquality = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnCkIAAiGIhjjBIBYAAIAyB3IAzh3IBYAAIhjDBIAACGg");
	this.shape.setTransform(79.9,-394.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnCkIAAj/IhRAAIAAhIIDxAAIAABIIhRAAIAAD/g");
	this.shape_1.setTransform(52.5,-394.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnCkIAAlHIBPAAIAAFHg");
	this.shape_2.setTransform(31.7,-394.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhsCkIAAlHIBRAAIAAD/ICIAAIAABIg");
	this.shape_3.setTransform(12,-394.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABCCkIgPgxIhkAAIgQAxIhUAAIB3lHIA9AAIB3FHgAgaAvIA3AAIgbhVg");
	this.shape_4.setTransform(-17.3,-394.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvCdQgXgIgRgQQgRgQgKgVQgJgWAAgbIAAjTIBRAAIAADRQAAAXALANQAGAGAIADQAIAEAJAAQAJAAAJgEQAIgDAFgGQAMgNAAgXIAAjRIBRAAIAADTIgCAaIgHAXQgKAVgRAQQgSAQgWAIQgXAIgZAAQgYAAgXgIg");
	this.shape_5.setTransform(-47.6,-394.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA9CSQgbAPgjAAQgkgCgPgHQgWgJgTgTQgVgVgGgdQgEgTgCg7QAAgiAGgtQAGgdAVgWQATgSAWgKQAWgJAdAAQAbAAAWAJQAWAKATASQAWAWAFAdQAGAtAAAiQAAApgDAZQgDAZgNAUIAYAYIgpApgAgUhfQgIAEgFAHIgGAIIgDANIgCAXIgBAkIABAiIACAXIADANIAGAJQAFAGAIAEQAIAFALAAIAEgBIgSgVIAngpIAQAQIABgvIAAgkIgDgXIgDgNIgGgIQgEgHgJgEQgIgEgJAAQgLAAgIAEg");
	this.shape_6.setTransform(-77.3,-393.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-428.9,228.1,63.7);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+CKQgagJgVgUIAtguQALALARAEQARAFATAAQAoAAAAgaQAAgLgFgGQgGgGgOgCIgPgCIgRgCQgUgDgOgHQgPgHgKgJQgJgIgFgPQgFgOAAgTQAAgoAcgaQAOgNAUgHQATgFAWgBQAgABAYAHQAMAFAKAGQALAHAJAJIgtAsQgLgLgNgCQgNgEgSAAQgPABgJAHQgJAJAAAKQAAAIAGAGQAHAGANADIAOABIATADQAmAFATATQAVAUAAApQAAAWgIARQgJARgPALQgQAMgUAGQgUAHgWgBQgjAAgbgIg");
	this.shape.setTransform(90.9,-317.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgiCQIAAjgIhHAAIAAg/IDTAAIAAA/IhHAAIAADgg");
	this.shape_1.setTransform(67.8,-317.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrCKQgUgIgQgQQgTgTgFgZQgEgRgBg1QAAgdAFgoQAFgZATgUQAQgPAUgJQATgHAYgBQAqAAAeAYQAPANAJAQQAJATAEAXIhIAAQgEgOgIgJQgJgJgQAAQgRAAgJANIgFAIIgDALIgCAUIgBAfIABAfIACAUIADAMIAFAIQAJAMARAAQAQAAAJgIQAIgJAEgOIBIAAQgIAvgdAXQgPAMgSAGQgSAHgVgBQgegCgNgGg");
	this.shape_2.setTransform(44.1,-317.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhCQIAAkfIDDAAIAAA/Ih7AAIAAAwIBpAAIAAA+IhpAAIAAAzIB7AAIAAA/g");
	this.shape_3.setTransform(19.3,-317.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAzCQIhbiQIAACQIhIAAIAAkfIA/AAIBbCPIAAiPIBGAAIAAEfg");
	this.shape_4.setTransform(-7.7,-317.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAyCQIhaiQIAACQIhIAAIAAkfIA/AAIBaCPIAAiPIBHAAIAAEfg");
	this.shape_5.setTransform(-36.2,-317.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgsCKQgTgIgRgQQgSgTgGgZQgDgRgBg1QAAgdAEgoQAGgZASgUQARgPATgJQAUgHAYgBQAZABATAHQAUAJAQAPQAUAUAFAZQAEAoAAAdQAAAsgEAaQgFAZgUATQgQAQgUAIIgUAHIgYABQgegCgOgGgAgPhPQgHAEgFAGIgFAHIgDALIgBAUIgBAfIABAfIABAUIADAMIAFAHQAFAGAHAEQAHADAIAAQAJAAAHgDQAHgEAFgGIAFgHIACgMIACgUIABgfIAAgfIgCgUIgDgLIgFgHQgEgGgIgEQgHgEgJAAQgIAAgHAEg");
	this.shape_6.setTransform(-63.3,-317.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrCKQgUgIgQgQQgTgTgFgZQgDgRgCg1QAAgdAFgoQAFgZATgUQAQgPAUgJQATgHAYgBQAqAAAeAYQAPANAJAQQAKATADAXIhIAAQgEgOgIgJQgJgJgQAAQgRAAgJANIgFAIIgDALIgCAUIgBAfIABAfIACAUIADAMIAFAIQAJAMARAAQAQAAAJgIQAIgJAEgOIBIAAQgIAvgdAXQgPAMgSAGQgSAHgVgBQgegCgNgGg");
	this.shape_7.setTransform(-88.1,-317.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhwAmIAAhLIDhAAIAABLg");
	this.shape_8.setTransform(88.2,-355.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqCwIAAkSIhXAAIAAhNIEDAAIAABNIhXAAIAAESg");
	this.shape_9.setTransform(48.9,-358.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABHCwIgRg0IhrAAIgRA0IhbAAICBlfIBBAAICAFfgAgcAzIA8AAIgehcg");
	this.shape_10.setTransform(18.2,-358.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAuCwIAAiMIhbAAIAACMIhXAAIAAlfIBXAAIAACIIBbAAIAAiIIBXAAIAAFfg");
	this.shape_11.setTransform(-14.9,-358.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgqCwIAAkSIhXAAIAAhNIEDAAIAABNIhXAAIAAESg");
	this.shape_12.setTransform(-46.2,-358.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhwAmIAAhLIDhAAIAABLg");
	this.shape_13.setTransform(-85.6,-355.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-436,265.6,142.9);


(lib.HEADgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAeIAAg7IA7AAIAAA7g");
	this.shape.setTransform(107.9,84.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcB5IAAhjIhJiNIBBAAIAkBWIAmhWIBAAAIhJCNIAABjg");
	this.shape_1.setTransform(94.6,75.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPB5IAAjwIA7AAIAAC7IBkAAIAAA1g");
	this.shape_2.setTransform(76.8,75.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBzQgXgGgRgTIAmgmQAJAJAOAFQAPADAPAAQAiABAAgWQAAgKgFgFQgFgEgLgCIgNgCIgOgCQgQgCgMgGQgNgFgIgJQgIgGgEgNQgEgMAAgPQAAgiAXgVQAMgLAQgFQARgGASABQAagBAUAHQAKADAJAGQAJAFAIAJIgmAlQgJgKgLgCQgLgDgPAAQgMAAgIAHQgHAHAAAJQAAAGAFAFQAFAGALACIAMABIAQACQAgAEAPARQASAPAAAjQAAATgHANQgHAPgNAKQgNAJgRAFQgRAGgSAAQgdAAgWgIg");
	this.shape_3.setTransform(55.5,75.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzBzQgXgGgRgTIAmgmQAJAJAOAFQAPADAPAAQAiABAAgWQAAgKgFgFQgFgEgLgCIgNgCIgOgCQgQgCgMgGQgNgFgIgJQgIgGgEgNQgEgMAAgPQAAgiAXgVQAMgLAQgFQARgGASABQAagBAUAHQAKADAJAGQAJAFAIAJIgmAlQgJgKgLgCQgLgDgPAAQgMAAgIAHQgHAHAAAJQAAAGAFAFQAFAGALACIAMABIAQACQAgAEAPARQASAPAAAjQAAATgHANQgHAPgNAKQgNAJgRAFQgRAGgSAAQgdAAgWgIg");
	this.shape_4.setTransform(35.4,75.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhRB5IAAjwICjAAIAAA1IhnAAIAAAoIBYAAIAAAzIhYAAIAAArIBnAAIAAA1g");
	this.shape_5.setTransform(16,75.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhPB5IAAjwIA7AAIAAC7IBkAAIAAA1g");
	this.shape_6.setTransform(-3.7,75.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhRB5IAAjwICjAAIAAA1IhnAAIAAAoIBYAAIAAAzIhYAAIAAArIBnAAIAAA1g");
	this.shape_7.setTransform(-24.2,75.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaB5IgphaIgUAAIAABaIg7AAIAAjwIBeAAQATAAAQAGQAPAGALALQAKALAGAOQAFAOAAAPQAAAXgLAQQgMAOgQAIIA0BmgAgjgSIAiAAQAKABAHgIQAHgHAAgKQAAgJgHgIQgHgIgKABIgiAAg");
	this.shape_8.setTransform(-45,75.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcB5IAAjwIA5AAIAADwg");
	this.shape_9.setTransform(-62.4,75.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmB5Igmh4IglB4IgxAAIhCjwIA+AAIAfB9IAoh9IAnAAIAoB9IAfh9IA+AAIhCDwg");
	this.shape_10.setTransform(-83.2,75.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.8,50.9,233.8,45.9);


(lib.deck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pioneer_728x90_deck();
	this.instance.setTransform(-364,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364,-45,728,90);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// product
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKA8IAAhiIggAAIAAgVIBVAAIAAAVIggAAIAABig");
	this.shape.setTransform(-61.7,92.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA8IAAh3IAuAAQASAAAKAJQAFAFADAGQACAGAAAIIgBAIIgDAIQgGAGgFADQAHABAFAHQAEAGAAALQAAARgKAJQgKAJgRAAgAgTAnIAXAAQAIAAAEgEQAEgEAAgHQAAgGgEgFQgEgEgIAAIgXAAgAgTgKIAWAAQAHAAAEgEQAFgEAAgGQAAgGgFgEQgEgEgHAAIgWAAg");
	this.shape_1.setTransform(-72,92.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZA0QgFgFgDgHQgCgHAAgIIAAgxQAAgRAKgKQALgJAOAAQAPAAALAJQAFAFADAHQACAHAAAIIAAAxQAAAIgCAHQgDAHgFAFQgLAJgPAAQgOAAgLgJgAgJgkQgEAFAAAHIAAAxQAAAHAEAFQAEAEAFAAQAGAAAEgEQAEgFAAgHIAAgxQAAgHgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_2.setTransform(-82.5,92.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgbA0QgFgFgDgHQgDgHABgIQgBgKAFgHQAEgGAGgCQgFgEgEgHIgDgGIgBgJQAAgHADgHQADgGAFgFQAFgEAHgDQAHgCAGAAQAHAAAHACQAHADAEAEQAGAFADAGQACAHAAAHIgBAJIgCAGQgFAHgFAEQAHACAEAGQAFAHgBAKQAAARgLAKQgLAJgQAAQgPAAgMgJgAgFAJIgFAEQgGAFAAAHQAAAHAGAEQAFAFAFAAQAHAAAEgFQAFgEAAgHQAAgHgFgFQgEgFgHAAIgFABgAgJgkQgFAFAAAGQAAAHAFAEQAEAEAFAAQAGAAAEgEQAEgEABgHQgBgGgEgFQgEgEgGAAQgFAAgEAEg");
	this.shape_3.setTransform(-91.7,92.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNA7QgHgCgFgEQgGgFgDgGQgDgHAAgKIAWAAQAAAIAFAEQAFAEAFAAQAHAAAEgEQADgCABgDQABgEAAgEQAAgDgBgDQgBgDgDgDQgCgCgDgBIgGgBIgCAAIAAgSIACAAQAHAAADgEQAEgEAAgHQAAgHgEgEQgEgEgGAAQgFAAgEAEQgEAEgBAGIgWAAQABgPAKgKQAFgFAHgCQAHgCAGAAQAHAAAHACQAHADAFAEQAFAFADAHQACAGAAAIIAAAIIgDAHQgEAGgHADQAIACAEAHQACADABAFIABAJQAAAJgDAHQgCAGgGAFQgFAFgHACQgHACgIAAQgGAAgHgCg");
	this.shape_4.setTransform(-101,92.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAXA8IgXgqIgWAqIgbAAIAlg8Igjg7IAbAAIAUAnIAVgnIAbAAIgkA7IAmA8g");
	this.shape_5.setTransform(-110.7,92.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAKIAAgTIAzAAIAAATg");
	this.shape_6.setTransform(-119.5,93.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUA8IAAgzIgnAAIAAAzIgYAAIAAh3IAYAAIAAAxIAnAAIAAgxIAYAAIAAB3g");
	this.shape_7.setTransform(-129,92.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA8Ignh3IAYAAIAXBNIAYhNIAZAAIgpB3g");
	this.shape_8.setTransform(-139.7,92.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfA8IAAhFIgXAtIgOAAIgYgtIAABFIgYAAIAAh3IAYAAIAeA/IAfg/IAYAAIAAB3g");
	this.shape_9.setTransform(-151.6,92.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaBWIgghFIgYAAIAABFIgiAAIAAirIBCAAQANAAAKAEQALAFAHAGQAIAIADAJQAEAKAAALQAAAJgCAHQgDAHgEAGQgJAJgOAGIAnBKgAgegJIAeAAQAKAAAHgHQAEgDACgEQACgEAAgFQAAgFgCgFQgCgDgEgDQgHgHgKAAIgeAAg");
	this.shape_10.setTransform(-64.7,73.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag3BWIAAirIBvAAIAAAeIhOAAIAAAoIBDAAIAAAdIhDAAIAAAqIBOAAIAAAeg");
	this.shape_11.setTransform(-80.2,73.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag3BWIAAirIBvAAIAAAeIhNAAIAAAoIBBAAIAAAdIhBAAIAAAqIBNAAIAAAeg");
	this.shape_12.setTransform(-94.8,73.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkBWIhDhoIAABoIgiAAIAAirIAfAAIBCBoIAAhoIAiAAIAACrg");
	this.shape_13.setTransform(-111.2,73.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYBSQgMgEgJgJQgMgMgDgPQgCgOAAgcQAAgRACgZQADgPAMgKQAJgKAMgFQALgFANAAQAOAAALAFQAMAFAJAKQAMALADAOQACAZAAARQgBAhgBAJQgDAPgMAMQgJAJgMAEQgLAGgOgBQgNABgLgGgAgLg2QgGADgDAEIgEAGIgDAIIgBAOIgBATIABAVIABAMIACAJIAFAGQADAEAGADQAGADAFAAQAGAAAGgDQAFgDAEgEIAEgGIADgJIABgMIABgVIgBgTIgBgOIgDgIIgEgGQgIgJgNAAQgFgBgGADg");
	this.shape_14.setTransform(-127.7,73.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgQBWIAAirIAhAAIAACrg");
	this.shape_15.setTransform(-139.1,73.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag9BWIAAirIBBAAQAOAAAKAEQALAEAHAIQAIAHAEAKQAEAJAAAMQAAALgEAKQgEAKgIAFQgHAIgLADQgKAFgOAAIgfAAIAABBgAgbgIIAeAAQALAAAHgGQADgDACgEQACgEAAgGQAAgFgCgFQgCgEgDgDQgHgHgLAAIgeAAg");
	this.shape_16.setTransform(-149.9,73.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buy now
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRA1IATgsQgCABgEAAQgFAAgFgBQgFgDgEgEQgEgCgCgGQgCgGAAgGQAAgQAJgIQAFgFAFgDQAGgBAGAAQAOAAAJAIQAFAFACAFQACAGAAAIQAAAGgCAHIgGANIgXAugAgIgeQgEAEAAAHIABAGIADAGQADADAFAAQAGAAADgDIADgGIABgGQAAgHgEgEQgDgEgGAAQgFAAgDAEg");
	this.shape_17.setTransform(116.2,100.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRA1IATgsQgCABgEAAQgFAAgFgBQgFgDgEgEQgEgCgCgGQgCgGAAgGQAAgQAJgIQAFgFAFgDQAGgBAGAAQAOAAAJAIQAFAFACAFQACAGAAAIQAAAGgCAHIgGANIgXAugAgIgeQgEAEAAAHIABAGIADAGQADADAFAAQAGAAADgDIADgGIABgGQAAgHgEgEQgDgEgGAAQgFAAgDAEg");
	this.shape_18.setTransform(108.2,100.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJALIAAgVIATAAIAAAVg");
	this.shape_19.setTransform(102.1,104.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAHA0IAAgPIgpAAIAAgSIAihGIAVAAIgiBGIAUAAIAAgTIASAAIAAATIAKAAIAAASIgKAAIAAAPg");
	this.shape_20.setTransform(96,100.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRA1IATgsQgCABgEAAQgFAAgFgBQgFgDgEgEQgEgCgCgGQgCgGAAgGQAAgQAJgIQAFgFAFgDQAGgBAGAAQAOAAAJAIQAFAFACAFQACAGAAAIQAAAGgCAHIgGANIgXAugAgIgeQgEAEAAAHIABAGIADAGQADADAFAAQAGAAADgDIADgGIABgGQAAgHgEgEQgDgEgGAAQgFAAgDAEg");
	this.shape_21.setTransform(88,100.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFBEIAAgQIgKgBIgJgDQgJgDgGgIIANgNQAEAFAGABQAGADAHAAIAAgaIgEgBQgOgCgHgFQgEgEgBgFQgCgFAAgHQAAgNAIgIQAIgJAOgBIAAgOIANAAIAAAOQAJABAHACQAIADAFAGIgNANIgIgGIgKgBIAAAZIAGABIAMADQAFACADAEQAEABACAGQACAGAAAGQAAAHgCAGQgCAFgFAEQgIAIgPACIAAARgAAGAhQAOgCAAgLQAAgGgDgDIgEgCIgGgBIgBAAgAgMgfQgEADAAAFQAAAFAEADQADAEAGABIAAgZQgGABgDADg");
	this.shape_22.setTransform(79.2,100.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAJIAAgRIA/AAIAAARg");
	this.shape_23.setTransform(67.5,101.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATA0IgTg+IgSA+IgRAAIgchnIAWAAIAPBAIAUhAIANAAIATBAIAQhAIAWAAIgcBng");
	this.shape_24.setTransform(53.5,100.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgOAyQgHgDgGgFQgHgIgCgJQgCgIAAgRQAAgKACgPQACgJAHgGQAGgHAHgCQAHgDAHAAQAIAAAHADQAHACAGAHQAHAGACAJQACAPAAAKQgBAUgBAFQgCAJgHAIQgGAFgHADQgHADgIAAQgHAAgHgDgAgGggQgDABgDADIgCADIgBAGIgCAIIAAALIAAAMIACAIIABAFIACAEIAGAEQADACADgBQAEABADgCIAGgEIACgEIACgFIAAgIIABgMIgBgLIAAgIIgCgFIgCgEQgFgGgIAAQgDAAgDACg");
	this.shape_25.setTransform(42.3,100.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAVA0Igng/IAAA/IgVAAIAAhnIASAAIAoA/IAAg/IAUAAIAABng");
	this.shape_26.setTransform(32.3,100.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgJA0IAAgrIgfg8IAWAAIASAqIATgqIAWAAIgfA8IAAArg");
	this.shape_27.setTransform(19.4,100.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgOAyQgHgDgFgEQgFgGgDgHQgDgHAAgHIAAhEIAUAAIAABDQAAAFACADQABADACADIAGAEIAGABIAHgBIAGgEQAFgGAAgIIAAhDIAUAAIAABEQAAAHgDAHQgDAHgFAGQgFAEgHADQgHACgIABQgGgBgIgCg");
	this.shape_28.setTransform(10.3,100.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AglA0IAAhnIApAAQAPAAAIAIQAEAEADAFQACAFAAAIIgBAHIgDAGQgEAGgFACQAGABAEAFQAFAHAAAJQgBAOgIAIQgJAIgPAAgAgQAhIATAAQAHAAAEgDQADgEAAgFQAAgGgDgDQgEgEgHAAIgTAAgAgQgJIASAAQAHABADgEQADgEAAgEQAAgGgDgDQgDgEgHAAIgSAAg");
	this.shape_29.setTransform(0.8,100.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// CT logo
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_30.setTransform(50,64.6,0.252,0.252);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_31.setTransform(102.3,64.5,0.252,0.252);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_32.setTransform(62.4,64.5,0.252,0.252);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_33.setTransform(15,64.5,0.252,0.252);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_34.setTransform(36.2,64.5,0.252,0.252);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_35.setTransform(120.1,64.5,0.252,0.252);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_36.setTransform(82.8,64.5,0.252,0.252);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_37.setTransform(-5.6,64.5,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-163.5,54.9,291.5,59.8);


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



(lib.CT1222_Pioneer_728x90 = function(mode,startPosition,loop) {
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
	this.clickthru_btn.setTransform(364.3,45.1,2.866,0.474,0,0,0,127.1,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(578,42);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({y:-35},4).wait(10));

	// Only 29.96
	this.instance_1 = new lib.Onlyprice();
	this.instance_1.setTransform(419,-32);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({regX:0.1,scaleX:0.61,scaleY:0.61,x:600.5,y:-5.5,alpha:1},4).wait(48).to({y:-70},4).to({_off:true},1).wait(9));

	// HEAD wirelessly
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(317,-48.8,1.217,1.217,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({regX:0,regY:0,scaleX:0.48,scaleY:0.48,x:118.1,y:37,alpha:1},4).wait(87).to({x:56.5},4).wait(10));

	// bluetooth
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(589.6,72.2,0.913,0.913,0,0,0,0,0.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(589.7,140);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},48).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true,regY:0,scaleX:1,scaleY:1,x:589.7,y:140},4).wait(101));

	// phone
	this.instance_5 = new lib.TunerPhone();
	this.instance_5.setTransform(578,41);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({y:-35},5).wait(30).to({y:38},4).to({_off:true},1).wait(100));

	// HEAD quality that
	this.instance_6 = new lib.HEADover();
	this.instance_6.setTransform(120.1,469.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.48,scaleY:0.48,x:119.4,y:208.7},4).wait(121).to({x:57.8},4).wait(10));

	// HEAD quality
	this.instance_7 = new lib.HEADquality();
	this.instance_7.setTransform(118.2,439);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({regX:0.1,regY:0.1,scaleX:0.48,scaleY:0.48,x:119.7,y:205.6},4).wait(121).to({x:58.1},4).wait(10));

	// deck
	this.instance_8 = new lib.deck();
	this.instance_8.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(167).to({x:367},0).to({x:277},4).wait(10));

	// bkgd
	this.instance_9 = new lib._728x90_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,728,90.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;