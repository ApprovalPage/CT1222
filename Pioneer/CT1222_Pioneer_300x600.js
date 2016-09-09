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
		{src:"images/CT1222_Pioneer_300x600_atlas_P_.png", id:"CT1222_Pioneer_300x600_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Pioneer_300x600_atlas_P_", frames: [[302,602,126,117],[302,0,300,600],[0,0,300,600],[0,602,300,250]]}
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
	this.spriteSheet = ss["CT1222_Pioneer_300x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x600_deck = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x600_phoneblank = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x600_atlas_P_"];
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
	this.instance.setTransform(-150,-475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-475,300,600);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgrCzIAAiSIhsjTIBgAAIA3CBIA4iBIBgAAIhsDTIAACSg");
	this.shape.setTransform(87.3,-401.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrCzIAAkXIhYAAIAAhOIEHAAIAABOIhYAAIAAEXg");
	this.shape_1.setTransform(57.3,-401.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrCzIAAllIBXAAIAAFlg");
	this.shape_2.setTransform(34.5,-401.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah2CzIAAllIBYAAIAAEXICVAAIAABOg");
	this.shape_3.setTransform(12.9,-401.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABICzIgRg1IhsAAIgSA1IhdAAICDllIBDAAICCFlgAgdA0IA9AAIgeheg");
	this.shape_4.setTransform(-19.1,-401.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0CsQgYgJgTgSQgTgRgLgYQgKgYAAgdIAAjnIBYAAIAADlQAAAZANAOQAGAHAJAEQAJADAKAAQAKAAAJgDQAJgEAGgHQANgOAAgZIAAjlIBZAAIAADnIgDAcIgIAZQgKAYgTARQgTASgZAJQgZAJgbAAQgbAAgZgJg");
	this.shape_5.setTransform(-52.3,-400.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABDCgQgdARgnAAQgogDgQgHQgYgLgVgUQgXgXgHggQgEgVgChAQAAgmAGgxQAHggAXgYQAVgUAYgKQAYgKAgAAQAeAAAYAKQAYAKAVAUQAXAYAHAgQAGAxAAAmQAAAtgEAbQgDAbgOAWIAaAaIgsAtgAgWhoQgJAEgFAIIgGAJIgEAOIgDAZIAAAoIAAAlIADAZIAEAOIAGAKQAFAHAJAEQAJAFAMAAIAFAAIgVgXIArgtIARARIACgzIAAgoIgDgZIgEgOIgGgJQgFgIgJgEQgKgEgJAAQgMAAgJAEg");
	this.shape_6.setTransform(-84.8,-400.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.1,-439,249.6,69.7);


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
	this.shape.setTransform(92.7,-54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtBEIAAiHIAxAAQASAAALAKQAGAFADAHQACAGAAAIQAAAGgBAFQgBAEgDAFQgGAIgJADQAKACAGAHQAGAKAAALQAAAKgCAGQgDAIgGAEQgLAKgSAAgAgfA3IAjAAQANAAAIgHQADgEACgEQACgEAAgHQAAgFgCgFQgCgEgDgEQgIgGgNAAIgjAAgAgfgHIAiAAQAMABAHgHQAEgDACgEQACgFAAgFQAAgGgCgFQgCgEgEgDQgDgDgFgCQgFgBgGAAIgiAAg");
	this.shape_1.setTransform(81.3,-54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBCQgHgCgFgFQgLgLAAgQIAAg/QAAgIADgGQADgIAFgFQALgKAOAAQAQAAALAKQAFAFADAIQACAGAAAIIAAA/QAAAQgKALQgGAFgGACQgHADgIAAQgHAAgGgDgAgQgxQgDAFgCAEQgBAEAAAHIAAA8QAAALAGAIQAEADAEACQAEACAEAAQAFAAAFgCQAEgCADgDQADgEABgFQACgFAAgFIAAg8QAAgHgCgEQgBgEgDgFQgGgGgLAAQgJAAgHAGg");
	this.shape_2.setTransform(69.7,-54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOBCQgIgDgFgEQgGgGgDgHQgDgHAAgJIABgKQACgFADgEQAFgIAKgEQgJgEgFgJIgDgIIgBgJQAAgQAKgLQALgKAPAAQAIAAAGADQAHACAFAFQALALAAAQQAAAKgFAHQgEAJgJAEQAFABAEADIAGAHQAGAJAAALQAAAJgDAHQgDAHgGAGQgFAEgIADQgHADgIAAQgHAAgHgDgAgJAGQgFACgDADQgIAIAAALQAAALAIAIQAHAIAKAAQALAAAHgIQAIgIAAgLQAAgLgIgIQgDgDgFgCQgFgCgFgBQgEABgFACgAgQgxQgGAHAAALQAAALAGAGQAHAIAJgBQAFAAAEgBQAEgCAEgEQAGgGAAgLQAAgLgGgHQgEgEgEgBQgEgBgFAAQgJgBgHAHg");
	this.shape_3.setTransform(59.7,-54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgbA8QgFgFgDgGQgDgHgBgJIAOAAQABAMAHAGQAEADAFABQAEACAEAAQALAAAHgHQAEgEACgFQACgFAAgGQAAgMgHgHQgGgHgNAAIgCAAIAAgKIACAAQAFAAAFgCQAEgCADgDQAGgGAAgMQAAgMgGgHQgEgDgEgBQgEgCgFAAQgJAAgHAGQgGAGgBALIgOAAQABgRALgJQAFgFAHgCQAHgCAGAAQAIAAAHACQAGADAGAFQAFAFADAHQACAGAAAJQAAAWgSAIQAKACAFAIQAGAJAAANQAAASgMAKQgFAFgIADQgHACgIAAQgQAAgLgJg");
	this.shape_4.setTransform(49.5,-54);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAgBEIggg6IggA6IgRAAIArhEIgohDIARAAIAdA2IAdg2IARAAIgnBDIAqBEg");
	this.shape_5.setTransform(39.4,-54);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAGIAAgLIAzAAIAAALg");
	this.shape_6.setTransform(30.1,-52.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAgBEIAAg+Ig/AAIAAA+IgPAAIAAiHIAPAAIAAA9IA/AAIAAg9IAPAAIAACHg");
	this.shape_7.setTransform(19.3,-54);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEBEIguiHIAQAAIAiBtIAjhtIAPAAIgtCHg");
	this.shape_8.setTransform(7.4,-54);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsBEIAAhmIgmBQIgLAAIglhQIAABmIgPAAIAAiHIAPAAIAqBfIAshfIAOAAIAACHg");
	this.shape_9.setTransform(-5.7,-54);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAeBEIgeg8IggAAIAAA8IgOAAIAAiHIAyAAQAJAAAHADQAIACAFAGQAMAJAAASQAAAPgJAJQgEAFgFABQgFADgHACIAgA+gAgggEIAjAAQAGAAAFgBQAFgCADgDQAIgGAAgMQAAgMgIgHQgDgDgFgCQgFgCgGAAIgjAAg");
	this.shape_10.setTransform(-24.1,-54);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpBEIAAiHIBTAAIAAANIhEAAIAAAwIA6AAIAAAMIg6AAIAAAxIBEAAIAAANg");
	this.shape_11.setTransform(-36.2,-54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpBEIAAiHIBTAAIAAANIhEAAIAAAwIA6AAIAAAMIg6AAIAAAxIBEAAIAAANg");
	this.shape_12.setTransform(-47.7,-54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAkBEIgqhDIgcgpIAABsIgPAAIAAiHIAOAAIApBCIAeAqIAAhsIAOAAIAACHg");
	this.shape_13.setTransform(-60.9,-54);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRBBQgJgDgIgHQgEgFgDgFQgCgFgBgGIgCgOIAAgUIAAgTIACgOQABgFACgGQADgFAEgFQAOgOAUAAQAKAAAIAEQAJADAIAHQAEAFADAFQACAGABAFIACAOIAAATIAAAUIgCAOQgBAGgCAFQgDAFgEAFQgIAHgJADQgIAEgKAAQgJAAgIgEgAgLg1QgHADgEAFQgDADgCAEQgCADgBAGIgCAMIAAARIAAASIACAMQABAGACADQACAEADADQAEAFAHACQAFADAGAAQAGAAAGgDQAHgCAEgFIAFgHIADgJIACgMIAAgSIAAgRIgCgMIgDgJIgFgHQgEgFgHgDQgGgCgGAAQgGAAgFACg");
	this.shape_14.setTransform(-74.2,-54);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGBEIAAiHIANAAIAACHg");
	this.shape_15.setTransform(-83.1,-54);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtBEIAAiHIAwAAQATAAAMALQAGAGADAHQADAHAAAKQAAAJgDAHQgDAHgGADQgGAGgHADQgIACgKAAIgiAAIAAA5gAgfAAIAiAAQAGAAAFgBQAGgCADgEQAJgGgBgNQABgOgJgHQgDgDgGgCQgFgCgGAAIgiAAg");
	this.shape_16.setTransform(-91.3,-54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// buy now
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAwIASgoQgCABgDABQgFAAgEgCQgFgCgEgEQgDgCgDgFQgBgFAAgHQAAgOAIgIQAEgFAGgBQAFgCAFAAQAMAAAJAHQAEAFACAFQACAFAAAIQAAAGgCAGIgFAMIgVApgAgIgbQgDADAAAHIABAFIACAFQAEAEAEgBQAFABADgEIADgFIABgFQAAgHgEgDQgDgFgFAAQgEAAgEAFg");
	this.shape_17.setTransform(118.9,91.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAwIASgoQgCABgDABQgFAAgEgCQgFgCgEgEQgEgCgCgFQgCgFAAgHQAAgOAJgIQAEgFAFgBQAGgCAFAAQANAAAIAHQAEAFADAFQACAFAAAIQAAAGgCAGIgGAMIgVApgAgIgbQgDADAAAHIABAFIACAFQAEAEAEgBQAFABADgEIADgFIABgFQAAgHgEgDQgDgFgFAAQgEAAgEAFg");
	this.shape_18.setTransform(111.6,91.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgJAKIAAgTIATAAIAAATg");
	this.shape_19.setTransform(105.9,95.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAGAwIAAgOIglAAIAAgRIAfhAIATAAIgfBAIASAAIAAgRIARAAIAAARIAJAAIAAARIgJAAIAAAOg");
	this.shape_20.setTransform(100.3,91.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgQAwIASgoQgCABgDABQgFAAgEgCQgFgCgEgEQgEgCgCgFQgCgFAAgHQABgOAIgIQAEgFAFgBQAGgCAFAAQANAAAIAHQAFAFABAFQADAFAAAIQAAAGgDAGIgFAMIgVApgAgIgbQgDADAAAHIABAFIACAFQAEAEAEgBQAFABADgEIADgFIABgFQAAgHgEgDQgDgFgFAAQgEAAgEAFg");
	this.shape_21.setTransform(93,91.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgEA+IAAgPIgKgBIgIgCQgHgDgHgHIAMgMQAEAEAGACIAMACIAAgYIgEgBQgMgBgHgFQgEgDgCgFQgBgFAAgGQAAgMAHgIQAIgIANgBIAAgMIAMAAIAAAMQAIABAGACQAHADAGAFIgNAMQgDgDgEgCIgJgCIAAAYIAFABIALADIAHAEQAEACACAFQACAFAAAHQAAAGgCAFQgCAFgEADQgIAIgNACIAAAPgAAGAeQAMgBAAgLQAAgFgCgDIgFgCIgEgBIgBAAgAgLgcQgDADAAAFQAAAEADACQADADAGABIAAgWQgGAAgDAEg");
	this.shape_22.setTransform(85,91.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAIIAAgPIA7AAIAAAPg");
	this.shape_23.setTransform(74.2,92.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AARAwIgRg5IgQA5IgQAAIgahfIAUAAIAPA7IARg7IAMAAIASA7IAPg7IAUAAIgaBfg");
	this.shape_24.setTransform(61.4,91.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgNAtQgGgCgGgFQgGgGgCgJQgBgIAAgPIABgXQACgIAGgGQAGgGAGgCQAGgDAHABQAHgBAHADQAGACAFAGQAHAGABAIQACAOAAAJIgCAXQgBAIgHAHQgFAFgGACQgHAEgHAAQgHAAgGgEgAgGgdQgDABgCACIgCAEIgBAEIgBAHIAAALIAAALIABAHIABAFIACADQACADADABIAGACQADgBADgBQADgBACgDIADgDIABgFIABgHIAAgLIAAgLIgBgHIgBgEIgDgEQgEgFgHAAIgGACg");
	this.shape_25.setTransform(51.1,91.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAUAwIgkg5IAAA5IgUAAIAAhfIARAAIAlA5IAAg5IATAAIAABfg");
	this.shape_26.setTransform(41.9,91.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIAwIAAgoIgdg3IAVAAIAQAnIARgnIAVAAIgdA3IAAAog");
	this.shape_27.setTransform(30.1,91.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgMAuQgHgDgFgEQgFgFgCgGQgDgGAAgIIAAg9IATAAIAAA9IABAHIADAGIAGADIAFABIAGgBIAGgDQAEgFAAgIIAAg9IATAAIAAA9QAAAIgDAGQgCAGgFAFQgFAEgHADQgGACgHAAQgGAAgGgCg");
	this.shape_28.setTransform(21.8,91.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgiAwIAAhfIAmAAQAOAAAHAIQAFADACAFQABAFAAAGIgBAHIgCAGQgEAFgEACQAFABAEAFQADAFAAAJQABANgJAHQgHAIgOAAgAgOAfIARAAQAHAAADgDQADgEAAgFQAAgFgDgDQgDgEgHAAIgRAAgAgOgIIAQAAQAGAAADgDQADgDAAgFQAAgFgDgDQgDgDgGAAIgQAAg");
	this.shape_29.setTransform(12.9,91.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	// CT logo
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_30.setTransform(-80.6,92.5,0.197,0.197);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_31.setTransform(-39.6,92.5,0.197,0.197);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_32.setTransform(-70.9,92.5,0.197,0.197);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_33.setTransform(-108.1,92.5,0.197,0.197);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_34.setTransform(-91.5,92.5,0.197,0.197);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_35.setTransform(-25.6,92.5,0.197,0.197);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_36.setTransform(-54.9,92.4,0.197,0.197);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_37.setTransform(-124.3,92.5,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

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



(lib.CT1222_Pioneer_300x600 = function(mode,startPosition,loop) {
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
	this.clickthrough_btn.setTransform(150,300.3,1.181,3.158,0,0,0,127,95.1);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(150,552);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({y:475},4).wait(10));

	// Only 29.96
	this.instance_1 = new lib.Onlyprice();
	this.instance_1.setTransform(150,564);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({y:357},4).wait(48).to({scaleX:0.78,scaleY:0.78,y:399},4).wait(10));

	// HEAD wirelessly
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(427,115);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({x:150},4).wait(101));

	// bluetooth
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(216.7,403.6,1.535,1.535,0,0,0,0,0.1);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(212.7,650);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},48).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true},4).wait(3).to({_off:false},0).to({_off:true,regY:0,scaleX:1,scaleY:1,x:212.7,y:650},4).wait(101));

	// phone
	this.instance_5 = new lib.TunerPhone();
	this.instance_5.setTransform(150,576);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({y:475},5).wait(30).to({y:614},4).to({_off:true},1).wait(100));

	// HEAD quality that
	this.instance_6 = new lib.HEADover();
	this.instance_6.setTransform(143.4,947.9,2.5,2.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(42).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:475,alpha:1},4).wait(135));

	// HEAD quality
	this.instance_7 = new lib.HEADquality();
	this.instance_7.setTransform(150.8,475);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(181));

	// deck
	this.instance_8 = new lib.deck();
	this.instance_8.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(181));

	// bkgd
	this.instance_9 = new lib._300x600_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;