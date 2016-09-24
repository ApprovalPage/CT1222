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
		{src:"images/CT1222_Install_728x90_atlas_P_.png", id:"CT1222_Install_728x90_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Install_728x90_atlas_P_", frames: [[302,252,300,250],[302,0,300,250],[0,252,300,250],[0,0,300,250],[604,0,300,250]]}
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


(lib.Install_300x250_Coaxial = function() {
	this.spriteSheet = ss["CT1222_Install_728x90_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_RedTeam = function() {
	this.spriteSheet = ss["CT1222_Install_728x90_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Tweeter = function() {
	this.spriteSheet = ss["CT1222_Install_728x90_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Install_300x250_Woofer = function() {
	this.spriteSheet = ss["CT1222_Install_728x90_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Install_728x90_atlas_P_"];
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
	this.instance.setTransform(-80,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-300,300,250);


(lib.HEADquality = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAcIAAg3IA3AAIAAA3g");
	this.shape.setTransform(-113.6,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaByIAAiwIg4AAIAAgzIClAAIAAAzIg4AAIAACwg");
	this.shape_1.setTransform(-127.4,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbByIAAjjIA2AAIAADjg");
	this.shape_2.setTransform(-141.9,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAyByIAAhuIghA5IghAAIghg5IAABuIg4AAIAAjjIA3AAIAyBlIAzhlIA3AAIAADjg");
	this.shape_3.setTransform(-167,16.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAtByIgKgiIhFAAIgKAiIg7AAIBTjjIApAAIBTDjgAgRAhIAlAAIgTg7g");
	this.shape_4.setTransform(-190.3,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhMByIAAjjICZAAIAAAzIhhAAIAAAlIBSAAIAAAxIhSAAIAAAnIBhAAIAAAzg");
	this.shape_5.setTransform(-210.2,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZByIgnhWIgSAAIAABWIg4AAIAAjjIBYAAQASAAAOAHQAPAFAKALQAKAKAGANQAEAOAAAOQAAAVgKAPQgLAOgQAHIAyBggAgggQIAfAAQAJAAAHgHQAGgHAAgJQAAgKgGgGQgHgHgJAAIgfAAg");
	this.shape_6.setTransform(-229.8,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhTByIAAjjIBTAAQASABAQAFIAOAHQAHAEAGAGQAIAIAEAJQAFAJADALQACAKABAMIAAAfIAAAfQgBANgCALQgDALgFAIQgEAJgIAIQgLALgQAGQgQAGgSAAgAgbA/IAYAAQAIAAAHgDQAGgDAEgGIADgGIACgIIABgOIAAgXIAAgWIgBgOIgCgIIgDgGQgEgFgGgEQgHgEgIABIgYAAg");
	this.shape_7.setTransform(-251.1,16.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggBsQgQgFgMgLQgMgLgGgPQgHgPAAgSIAAiTIA4AAIAACSQAAAPAIAIQAEAFAFACQAGACAGAAQAGAAAGgCQAFgCAEgFQAJgIAAgPIAAiSIA4AAIAACTIgCARIgEAQQgIAPgLALQgMALgQAFQgQAHgRAAQgQAAgQgHg");
	this.shape_8.setTransform(-279.5,16.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBtQgPgHgNgMQgPgPgEgUQgDgNgBgqQAAgWAEggQAEgUAPgPQANgNAPgGQAPgGATAAQAUAAAPAGQAQAGAMANQAPAPAEAUQAEAgAAAWQAAAjgEAUQgEAUgPAPQgMAMgQAHIgQAFIgTABQgYgCgKgEgAgMg+QgFADgEAEIgEAGIgCAJIgBAQIgBAYIABAYIABAQIACAJIAEAGQAEAFAFACQAGADAGAAQAHAAAGgDQAFgCAEgFIAEgGIACgJIACgPIAAgZIAAgYIgCgPIgCgKIgEgGQgDgEgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(-300.3,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbByIAAheIhEiFIA9AAIAiBSIAjhSIA9AAIhECFIAABeg");
	this.shape_10.setTransform(-319.2,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-341.8,-7,245.8,43.4);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbAcIAAg3IA3AAIAAA3g");
	this.shape.setTransform(305.8,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaByIAAixIg4AAIAAgxIClAAIAAAxIg4AAIAACxg");
	this.shape_1.setTransform(294.4,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbByIAAjiIA3AAIAADig");
	this.shape_2.setTransform(280,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhTByIAAjiIBTAAQASgBAQAGIAOAHQAHAEAGAGQAIAIAEAJQAFAIADALQACALABANIAAAeIAAAgQgBAMgCALQgDALgFAJQgEAIgIAIQgLALgQAGQgQAFgSABgAgbA/IAYAAQAIAAAHgDQAGgDAEgGIADgGIACgHIABgPIAAgXIAAgWIgBgOIgCgIIgDgFQgEgHgGgDQgHgDgIgBIgYAAg");
	this.shape_3.setTransform(257.7,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhKByIAAjiIA4AAIAACvIBdAAIAAAzg");
	this.shape_4.setTransform(238.4,17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaByIAAjiIA2AAIAADig");
	this.shape_5.setTransform(223.5,17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBtQgQgGgMgLQgMgLgGgPQgHgPAAgTIAAiRIA4AAIAACQQAAAQAIAJQAEAEAFACQAGADAGAAQAGAAAGgDQAFgCAEgEQAJgJAAgQIAAiQIA4AAIAACRIgCASIgEAQQgIAPgLALQgMALgQAGQgQAFgRAAQgQAAgQgFg");
	this.shape_6.setTransform(207.8,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhUByIAAjiIBdAAQAjgBASATQATASAAAdQAAAJgCAHQgCAHgEAFQgIAMgJAFIAKAFIAIAKQAFAFADAIQADAJAAAMQAAAfgUARQgUASggABgAgcA/IAkAAQALAAAFgFQAFgHAAgIQAAgIgFgGQgFgGgLAAIgkAAgAgcgZIAhAAQALAAAEgFQAFgGAAgIQAAgHgFgFQgEgGgLAAIghAAg");
	this.shape_7.setTransform(187.2,17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhMByIAAjiICZAAIAAAxIhhAAIAAAmIBTAAIAAAxIhTAAIAAAnIBhAAIAAAzg");
	this.shape_8.setTransform(159.9,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkByIgkhxIgkBxIgtAAIg/jiIA7AAIAeB2IAkh2IAnAAIAkB2IAeh2IA7AAIg/Dig");
	this.shape_9.setTransform(135.4,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(91.4,-6.6,248.6,43.4);


(lib.guarantee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaIAAgzIAzAAIAAAzg");
	this.shape.setTransform(-7.2,251.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFBnIAAjNICLAAIAAAtIhYAAIAAAjIBKAAIAAAsIhKAAIAAAkIBYAAIAAAtg");
	this.shape_1.setTransform(-19.3,243.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBnIAAjNICLAAIAAAtIhYAAIAAAjIBLAAIAAAsIhLAAIAAAkIBYAAIAAAtg");
	this.shape_2.setTransform(-37,243.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBnIAAigIgzAAIAAgtICXAAIAAAtIgzAAIAACgg");
	this.shape_3.setTransform(-54.7,243.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAkBnIhAhnIAABnIgzAAIAAjNIAsAAIBBBmIAAhmIAyAAIAADNg");
	this.shape_4.setTransform(-73.4,243.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAqBnIgKgfIg+AAIgKAfIg1AAIBLjNIAlAAIBMDNgAgQAeIAiAAIgRg1g");
	this.shape_5.setTransform(-93,243.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWBnIgihNIgRAAIAABNIgzAAIAAjNIBQAAQAQAAAOAGQANAEAJAKQAJAJAFANQAEAMAAAMQAAAUgJAOQgKAMgOAGIAsBXgAgdgOIAcAAQAJAAAFgHQAGgGAAgJQAAgIgGgGQgFgGgJgBIgcAAg");
	this.shape_6.setTransform(-111.2,243.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqBnIgKgfIg+AAIgKAfIg2AAIBMjNIAlAAIBMDNgAgQAeIAiAAIgRg1g");
	this.shape_7.setTransform(-130.9,243.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdBjQgOgFgLgKQgLgKgGgOQgGgOAAgQIAAiFIAzAAIAACDQAAAPAHAIQAEAEAEACQAGACAFAAQAGAAAEgCQAGgCADgEQAIgIAAgPIAAiDIAzAAIAACFIgCAPIgEAPQgGAOgLAKQgLAKgPAFQgOAFgPAAQgPAAgOgFg");
	this.shape_8.setTransform(-150,243.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggBjQgNgGgNgLQgNgOgEgSQgCgMgBgmQAAgUADgdQAEgSANgNQAMgMAOgGQAJgEAXgCQALAAAVAGQAOAGAKAJQAKAKAGANQAFAMACANIgzAAQgDgMgHgGQgHgFgLAAQgGAAgGACQgEADgEAEIgDAFIgCAIIgBAPIgCAVIACAXIABAOIACAIIADAGQAHAJANAAQANAAAIgJQAEgEACgFQACgGAAgHIAAgDIgdAAIAAgoIBQAAIAAAbQgCAegDALQgFAQgMAMQgGAGgGAFQgIAEgHADQgPAFgQAAQgWgCgKgEg");
	this.shape_9.setTransform(-169,243.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhcCKIAAkTIC5AAIAAA9Ih1AAIAAAuIBkAAIAAA7IhkAAIAAAwIB1AAIAAA9g");
	this.shape_10.setTransform(-19,214.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA8CKIAAiFIgnBFIgpAAIgnhFIAACFIhEAAIAAkTIBCAAIA9B6IA9h6IBDAAIAAETg");
	this.shape_11.setTransform(-46.8,214.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghCKIAAkTIBCAAIAAETg");
	this.shape_12.setTransform(-68.6,214.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AghCKIAAjWIhDAAIAAg9IDKAAIAAA9IhFAAIAADWg");
	this.shape_13.setTransform(-86.2,214.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhcCKIAAkTIC5AAIAAA9Ih1AAIAAAuIBkAAIAAA7IhkAAIAAAwIB1AAIAAA9g");
	this.shape_14.setTransform(-108.9,214.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhcCKIAAkTIC5AAIAAA9Ih1AAIAAAwIBkAAIAAA7IhkAAIAABrg");
	this.shape_15.setTransform(-132.1,214.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggCKIAAkTIBBAAIAAETg");
	this.shape_16.setTransform(-150.3,214.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhaCKIAAkTIBEAAIAADWIBxAAIAAA9g");
	this.shape_17.setTransform(-166.9,214.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAcIAAg3IA3AAIAAA3g");
	this.shape_18.setTransform(-198.4,250.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwBsQgUgHgRgRIAkgjQAIAIAOAEQANAEAOAAQAgAAAAgVQAAgIgFgFQgFgFgKgBIgMgCIgNgCQgPgCgLgFQgMgFgHgIQgIgGgEgLQgEgLAAgPQAAgfAWgUQAMgKAPgFQAPgFAQAAQAZAAATAGQAJADAIAFIAQANIgjAjQgJgJgKgCQgKgDgOAAQgLAAgHAHQgHAGAAAIQAAAGAEAFQAFAFALABIAKACIAPACQAeAEAOAPQARAOAAAhQAAARgHANQgGAOgMAJQgMAJgQAEQgQAFgRAAQgbAAgVgGg");
	this.shape_19.setTransform(-211.1,242.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhKBwIAAjfIA4AAIAACuIBdAAIAAAxg");
	this.shape_20.setTransform(-228.4,242.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhKBwIAAjfIA4AAIAACuIBdAAIAAAxg");
	this.shape_21.setTransform(-246.6,242.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAtBwIgLghIhDAAIgLAhIg6AAIBSjfIApAAIBSDfgAgSAgIAmAAIgTg6g");
	this.shape_22.setTransform(-266.7,242.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgaBwIAAiuIg4AAIAAgxIClAAIAAAxIg4AAIAACug");
	this.shape_23.setTransform(-286.3,242.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwBsQgUgHgRgRIAkgjQAIAIAOAEQANAEAOAAQAgAAAAgVQAAgIgFgFQgFgFgKgBIgMgCIgNgCQgPgCgLgFQgMgFgHgIQgIgGgEgLQgEgLAAgPQAAgfAWgUQAMgKAPgFQAPgFAQAAQAZAAATAGQAJADAIAFIAQANIgjAjQgJgJgKgCQgKgDgOAAQgLAAgHAHQgHAGAAAIQAAAGAEAFQAFAFALABIAKACIAPACQAeAEAOAPQARAOAAAhQAAARgHANQgGAOgMAJQgMAJgQAEQgQAFgRAAQgbAAgVgGg");
	this.shape_24.setTransform(-305.6,242.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnBwIhGhwIAABwIg4AAIAAjfIAxAAIBGBvIAAhvIA4AAIAADfg");
	this.shape_25.setTransform(-325.5,242.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgbBwIAAjfIA3AAIAADfg");
	this.shape_26.setTransform(-341.6,242.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AA7CGIAAiBIgmBDIgpAAIglhDIAACBIhDAAIAAkLIBCAAIA6B2IA8h2IBBAAIAAELg");
	this.shape_27.setTransform(-214.7,213.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoCBQgSgIgQgPQgRgSgFgXQgDgPgCgyQAAgaAFgmQAFgXARgSQAQgPASgIQARgHAXAAQAXAAASAHQATAIAPAPQARASAFAXQAFAmAAAaQAAAqgFAXQgFAXgRASQgPAPgTAIIgTAGIgWABQgdgCgLgFgAgOhJQgHADgEAGIgFAHIgCAKIgCATIgBAcIABAdIACASIACALIAFAHQAEAGAHADQAHAEAHAAQAIAAAHgEQAHgDAEgGIAEgHIADgKIACgTIABgdIgBgcIgCgTIgDgKIgEgHQgEgGgHgDQgHgDgIAAQgHAAgHADg");
	this.shape_28.setTransform(-242,213.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AggCGIAAjRIhCAAIAAg6IDFAAIAAA6IhDAAIAADRg");
	this.shape_29.setTransform(-265.2,213.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("Ag5CBQgagIgSgUIAqgqQAKAKAPAEQARAFARAAQAmAAAAgZQAAgKgGgFQgFgGgNgCIgOgCIgQgCQgSgDgNgGQgOgGgKgJQgIgIgFgNQgFgOAAgRQAAgmAbgXQANgMASgGQASgGAUAAQAeAAAWAHQALAEAKAGQAKAGAIAJIgpAqQgLgLgMgDQgMgCgRAAQgNAAgJAHQgIAIAAAKQAAAHAFAFQAHAGAMACIANACIASACQAjAFASASQATASABAnQgBAUgHAQQgIAQgPAKQgOALgTAGQgTAFgUAAQghAAgYgHg");
	this.shape_30.setTransform(-288.1,213.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgmCAQgTgGgOgNQgOgNgIgSQgIgSAAgWIAAisIBDAAIAACrQAAASAJALQAFAFAGACQAHADAHABQAHgBAHgDQAHgCAFgFQAJgLAAgSIAAirIBDAAIAACsIgCAVIgGATQgIASgOANQgPANgSAGQgTAHgUAAQgUAAgSgHg");
	this.shape_31.setTransform(-311.1,213.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgoCBQgSgIgPgPQgSgSgFgXQgDgPgCgyQABgaAEgmQAFgXASgSQAPgPASgIQASgHAWAAQAnAAAcAWQAOALAJARQAIAQADAWIhCAAQgFgOgHgHQgIgIgPAAQgPAAgJALIgFAHIgDALIgBATIgBAcIABAdIABATIADALIAFAHQAJAMAPAAQAPAAAIgIQAHgIAFgNIBCAAQgGArgcAWQgOALgQAGQgSAFgTAAQgbgCgNgFg");
	this.shape_32.setTransform(-334.5,213.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.1,187.1,359.5,73.8);


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
(lib.CT1222_Install_728x90 = function(mode,startPosition,loop) {
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
	this.clickthru_btn.setTransform(363.5,44.7,2.867,0.477,0,0,0,126.8,95);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(181));

	// red team
	this.instance = new lib.redteam();
	this.instance.setTransform(779,155.5,0.672,0.672);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(97).to({_off:false},0).to({x:415.7},4).wait(80));

	// CTA
	this.instance_1 = new lib.CTAlockup();
	this.instance_1.setTransform(640,68);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145).to({_off:false},0).to({y:-31},4).wait(32));

	// guarantee
	this.instance_2 = new lib.guarantee();
	this.instance_2.setTransform(363.7,-260.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(121).to({_off:false},0).to({x:364,y:-182},4).wait(56));

	// HEAD build
	this.instance_3 = new lib.HEADover();
	this.instance_3.setTransform(624,25.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55).to({_off:false},0).to({x:382,y:26.2},4).wait(38).to({x:364},0).to({x:382,y:-39.1},4).to({_off:true},1).wait(79));

	// HEAD dream
	this.instance_4 = new lib.HEADquality();
	this.instance_4.setTransform(364.8,26.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(97).to({y:-39.1},4).to({_off:true},1).wait(79));

	// tweet R
	this.instance_5 = new lib.tweet();
	this.instance_5.setTransform(495,1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(44).to({_off:false},0).wait(137));

	// tweet L
	this.instance_6 = new lib.tweet();
	this.instance_6.setTransform(85,1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).wait(137));

	// coax R
	this.instance_7 = new lib.coax();
	this.instance_7.setTransform(398,70);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(31).to({_off:false},0).wait(150));

	// coax L
	this.instance_8 = new lib.coax();
	this.instance_8.setTransform(151,66);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(31).to({_off:false},0).wait(150));

	// woofer
	this.instance_9 = new lib.woofer();
	this.instance_9.setTransform(369,50);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(18).to({_off:false},0).wait(163));

	// bkgd
	this.instance_10 = new lib._728x90_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,44.4,728.3,90.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;