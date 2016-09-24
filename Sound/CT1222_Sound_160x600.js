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
		{src:"images/CT1222_Sound_160x600_atlas_P_.png", id:"CT1222_Sound_160x600_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Sound_160x600_atlas_P_", frames: [[0,0,160,600],[162,0,300,250],[162,252,300,250]]}
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


(lib.SoundRoom_160x600_Woofer4x = function() {
	this.spriteSheet = ss["CT1222_Sound_160x600_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SoundRoom_300x250_Woofer2 = function() {
	this.spriteSheet = ss["CT1222_Sound_160x600_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Sound_160x600_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.woofer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SoundRoom_300x250_Woofer2();
	this.instance.setTransform(-90,-475,0.597,0.597);

	this.instance_1 = new lib.SoundRoom_300x250_Woofer2();
	this.instance_1.setTransform(-90,-326,0.597,0.597);

	this.instance_2 = new lib.SoundRoom_300x250_Woofer2();
	this.instance_2.setTransform(-90,-176,0.597,0.597);

	this.instance_3 = new lib.SoundRoom_300x250_Woofer2();
	this.instance_3.setTransform(-90,-28,0.597,0.597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-475,179.1,596.2);


(lib.woofer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SoundRoom_160x600_Woofer4x();
	this.instance.setTransform(-80,-475);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-475,160,600);


(lib.HEADBoom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBLIAAgiIAhAAIAAAigAgLAZIgJhjIApAAIgJBjg");
	this.shape.setTransform(28.6,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhBLIAAhIIgWAlIgWAAIgVglIAABIIglAAIAAiVIAlAAIAgBDIAihDIAkAAIAACVg");
	this.shape_1.setTransform(16.5,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBIQgKgEgIgJQgKgKgEgNQgBgIgBgcQAAgOACgVQAEgNAKgLQAIgIAKgEQAKgEAMAAQANAAAKAEQAKAEAJAIQAKALADANQACAVAAAOQAAAXgCANQgDANgKAKQgJAJgKAEIgLADIgMABQgPgBgHgDgAgHgpQgEACgCADIgDAEIgCAGIgBALIAAAPIAAAQIABAKIACAGIADAFQACADAEABQADACAEAAQAEAAAFgCQADgBACgDIADgFIACgFIABgLIAAgQIAAgPIgBgLIgCgGIgDgEQgCgDgDgCQgFgBgEAAQgEAAgDABg");
	this.shape_2.setTransform(1.9,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBIQgKgEgIgJQgLgKgDgNQgBgIgBgcQAAgOACgVQADgNALgLQAIgIAKgEQAKgEAMAAQANAAAKAEQAKAEAJAIQAKALACANQADAVAAAOQAAAXgDANQgCANgKAKQgJAJgKAEIgLADIgMABQgPgBgHgDgAgHgpQgEACgCADIgDAEIgCAGIgBALIAAAPIAAAQIABAKIACAGIADAFQACADAEABQADACAEAAQAFAAADgCQAEgBACgDIADgFIABgFIACgLIAAgQIAAgPIgCgLIgBgGIgDgEQgBgDgFgCQgDgBgFAAQgEAAgDABg");
	this.shape_3.setTransform(-10.9,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BLIAAiVIA8AAQAYAAAMAMQANAMAAAUQAAAFgBAFQgCAFgDADQgFAIgGAEIAHACIAFAGQADAEACAGQACAFAAAIQAAAVgNALQgOAMgUAAgAgSAqIAXAAQAHAAAEgEQADgEAAgGQAAgFgDgEQgEgEgHAAIgXAAgAgSgQIAVAAQAHAAADgEQAEgDAAgFQAAgGgEgDQgDgEgHAAIgVAAg");
	this.shape_4.setTransform(-23.6,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.4,-17.6,175.3,29.4);


(lib.guarantee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfIAAg9IA9AAIAAA9g");
	this.shape.setTransform(73.4,-208.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdB8IAAhmIhLiRIBCAAIAmBZIAmhZIBDAAIhLCRIAABmg");
	this.shape_1.setTransform(60,-218.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjB2QgRgGgNgMQgNgMgIgQQgHgRAAgUIAAifIA9AAIAACeQAAARAJAKQAEAFAGACQAHACAGAAQAHAAAGgCQAGgCAFgFQAJgKAAgRIAAieIA9AAIAACfIgCAUIgGARQgHAQgNAMQgNAMgRAGQgSAHgSAAQgSAAgRgHg");
	this.shape_2.setTransform(37.9,-218.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcB8IAAj3IBmAAQAmAAAUAUQAVATAAAhQAAAJgCAIQgCAIgFAGQgJAMgKAGIALAFIAKAKQAEAHAEAJQADAJAAAMQAAAjgWATQgWAUgiAAgAgeBFIAnAAQAMAAAFgGQAFgHAAgJQAAgJgFgHQgFgGgMAAIgnAAgAgegcIAkAAQAMAAAEgGQAGgFAAgJQAAgIgGgGQgEgGgMAAIgkAAg");
	this.shape_3.setTransform(15.4,-218.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjB2QgRgGgNgMQgNgMgIgQQgHgRAAgUIAAifIA9AAIAACeQAAARAJAKQAEAFAGACQAHACAGAAQAHAAAGgCQAGgCAFgFQAJgKAAgRIAAieIA9AAIAACfIgCAUIgGARQgHAQgNAMQgNAMgRAGQgSAHgSAAQgSAAgRgHg");
	this.shape_4.setTransform(-15.7,-218.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AglB3QgRgHgOgOQgQgRgFgVQgDgPgBgtQAAgYAEgjQAFgWAQgQQAOgOARgHQAQgHAVAAQAVAAARAHQARAHAOAOQAQAQAFAWQAEAjAAAYQAAAmgEAWQgFAVgQARQgOAOgRAHIgSAFIgUACQgagCgLgFgAgNhEQgGADgEAFIgEAHIgDAKIgBARIgBAaIABAbIABARIADAJIAEAHQAEAFAGADQAGADAHAAQAHAAAHgDQAGgDAEgFIAEgHIADgJIABgRIABgbIAAgaIgCgRIgDgKIgEgHQgEgFgGgDQgHgDgHAAQgHAAgGADg");
	this.shape_5.setTransform(-38.4,-218.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdB8IAAhmIhLiRIBCAAIAmBZIAmhZIBDAAIhLCRIAABmg");
	this.shape_6.setTransform(-59.1,-218.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhbCHIAAkNIC3AAIAAA7Ih0AAIAAAtIBjAAIAAA6IhjAAIAAAwIB0AAIAAA7g");
	this.shape_7.setTransform(61,-249.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeCHIguhlIgXAAIAABlIhDAAIAAkNIBqAAQAWAAARAHQASAHAMAMQALANAGAPQAHAQAAARQAAAagNASQgNAQgTAJIA7BxgAgngUIAmAAQALAAAIgIQAIgIAAgLQAAgLgIgIQgIgJgLAAIgmAAg");
	this.shape_8.setTransform(37.6,-249.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpCCQgSgHgPgQQgSgRgFgYQgDgQgCgyQAAgbAFgmQAFgXASgSQAPgPASgIQASgHAXgBQAYABASAHQATAIAPAPQASASAEAXQAFAmAAAbQAAAqgFAYQgEAYgSARQgPAQgTAHIgTAGIgXACQgcgCgNgGgAgOhKQgHADgEAGIgEAHIgEALIgBASIgBAdIABAeIABASIAEAKIAEAIQAEAGAHADQAHAEAHgBQAJABAGgEQAHgDAEgGIAFgIIADgKIABgSIABgeIgBgdIgBgSIgDgLIgFgHQgDgGgIgDQgHgDgIAAQgHAAgHADg");
	this.shape_9.setTransform(11.9,-249.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhbCHIAAkNIC3AAIAAA7Ih0AAIAAAwIBjAAIAAA5IhjAAIAABpg");
	this.shape_10.setTransform(-11.1,-249.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhbCHIAAkNIC3AAIAAA7Ih0AAIAAAtIBjAAIAAA6IhjAAIAAAwIB0AAIAAA7g");
	this.shape_11.setTransform(-34.2,-249.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhkCHIAAkNIBvAAQApAAAXAVQAWAVAAAkQAAAKgCAJQgDAIgFAHQgJANgKAHIAKAGIALALQAFAHADAKQAEAKAAANQAAAmgYAVQgYAVglAAgAghBLIArAAQAMAAAHgHQAFgHAAgKQAAgKgFgHQgHgGgMAAIgrAAgAghgeIAnAAQANAAAFgHQAHgGAAgJQAAgKgHgGQgFgHgNAAIgnAAg");
	this.shape_12.setTransform(-58.2,-249.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhHAAIAAAcIA9AAIAAAkIg9AAIAAAdIBHAAIAAAmg");
	this.shape_13.setTransform(64.6,-276.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBRQgLgEgKgKQgLgLgDgPQgCgKgBgfQAAgQADgYQADgPALgLQAKgKALgEQAMgFANAAQAZAAARAOQAJAHAFAKQAGALACANIgqAAQgDgIgFgFQgFgFgJAAQgJAAgGAHIgCAFIgCAHIgCAMIAAARIAAASIACAMIACAHIACAFQAGAHAJAAQAJAAAFgFQAFgFADgIIAqAAQgEAbgSAOQgJAHgKAEQgLADgMAAQgRgBgIgEg");
	this.shape_14.setTransform(50.2,-276.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdBVIg0hVIAABVIgqAAIAAipIAlAAIA0BUIAAhUIAqAAIAACpg");
	this.shape_15.setTransform(34.2,-276.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhIAAIAAAcIA+AAIAAAkIg+AAIAAAdIBIAAIAAAmg");
	this.shape_16.setTransform(18.8,-276.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASBVIgbhAIgPAAIAABAIgqAAIAAipIBCAAQANAAAMAFQALAEAHAIQAHAIAEAKQAEAKAAAKQAAAQgIAMQgIAJgMAGIAlBHgAgYgMIAYAAQAGAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgGAAIgYAAg");
	this.shape_17.setTransform(4.2,-276.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIBzAAIAAAmIhIAAIAAAcIA9AAIAAAkIg9AAIAAAdIBIAAIAAAmg");
	this.shape_18.setTransform(-11.3,-276.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhHAAIAAAeIA9AAIAAAjIg9AAIAABCg");
	this.shape_19.setTransform(-25.6,-276.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIByAAIAAAmIhJAAIAAAeIA+AAIAAAjIg+AAIAABCg");
	this.shape_20.setTransform(-39.8,-276.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_21.setTransform(-51.2,-276.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+BVIAAipIA+AAQAOAAALAEIALAGIAKAHQAFAGAEAHQADAGACAIIADASIAAAWIAAAYIgDARQgCAIgDAGQgEAHgFAGQgJAIgMAFQgLAEgOAAgAgUAvIASAAQAGAAAFgCQAEgDADgEIADgEIABgGIABgLIAAgRIAAgQIgBgKIgBgHIgDgEQgDgEgEgDQgFgCgGAAIgSAAg");
	this.shape_22.setTransform(-62.5,-276.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhIBsIAAjXICRAAIAAAwIhcAAIAAAkIBOAAIAAAtIhOAAIAAAmIBcAAIAAAwg");
	this.shape_23.setTransform(62.8,-300.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAbBsIAAhWIg2AAIAABWIg1AAIAAjXIA1AAIAABUIA2AAIAAhUIA2AAIAADXg");
	this.shape_24.setTransform(43,-300.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZBsIAAinIg2AAIAAgwICfAAIAAAwIg2AAIAACng");
	this.shape_25.setTransform(23.8,-300.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAXBsIgkhRIgSAAIAABRIg1AAIAAjXIBUAAQARAAAOAGQAOAGAKAJQAIAKAFANQAFANABANQgBAUgJAPQgLAMgPAIIAvBagAgfgPIAeAAQAJAAAGgHQAGgGAAgJQAAgJgGgGQgGgHgJAAIgeAAg");
	this.shape_26.setTransform(-0.9,-300.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AArBsIgKggIhBAAIgKAgIg4AAIBPjXIAnAAIBPDXgAgRAfIAkAAIgSg4g");
	this.shape_27.setTransform(-21.6,-300.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhIBsIAAjXICRAAIAAAwIhcAAIAAAkIBPAAIAAAtIhPAAIAAAmIBcAAIAAAwg");
	this.shape_28.setTransform(-40.4,-300.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAbBsIAAhWIg2AAIAABWIg1AAIAAjXIA1AAIAABUIA2AAIAAhUIA2AAIAADXg");
	this.shape_29.setTransform(-60.3,-300.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.1,-322,193.4,124.5);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buy now
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAZIAnAAIAAAQIgnAAIAAAaIAuAAIAAASg");
	this.shape.setTransform(56.1,92.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA0IgTgqIgOAAIAAAqIgVAAIAAhnIAnAAQAIABAGACQAGACAFAFQAEAEADAGQACAGAAAHQgBAEgBAFQgBAFgDADQgGAFgHADIAXAtgAgRgFIARAAQAGAAAEgDIADgFQACgCAAgDQAAgDgCgDIgDgEQgEgFgGAAIgRAAg");
	this.shape_1.setTransform(47.2,92.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAxQgHgDgGgFQgGgHgCgJQgCgJAAgQQAAgKACgPQACgIAGgHQAGgGAHgDQAHgCAHAAQAIAAAHACQAHADAGAGQAGAHACAIQACAPAAAKQgBATgBAGQgCAJgGAHQgGAFgHADQgHADgIAAQgHAAgHgDgAgGggQgDABgCADIgDAEIgBAFIgCAIIAAALIAAAMIACAIIABAFIADAEQACACADACQADABADAAQAEAAADgBIAGgEIACgEIABgFIABgIIAAgMIAAgLIgBgIIgBgFIgCgEQgFgFgIAAQgDAAgDABg");
	this.shape_2.setTransform(37.3,92.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA0IAAhVIgbAAIAAgSIBJAAIAAASIgbAAIAABVg");
	this.shape_3.setTransform(28.5,92.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAzQgGAAgEgCQgKgDgGgIIAMgNQAFAFAGACQAHACAGAAQASAAAAgNQAAgFgDgDQgDgDgGgBIgGgBIgFgBQgOgCgGgFQgEgDgCgFQgBgGgBgGQAAgOAKgJQAFgEAHgCQAGgCAGAAQAMAAAHACIAIAEQAEACADAEIgMAMQgFgEgGgBQgFgCgGAAIgFABQgDABgCACQgEAEAAAFQAAAEADAEQADADAHABIAEABIAGABIALACQAGACACADQAFACABAGQACAFAAAIQAAAOgKAJQgGAEgGACQgIACgHAAg");
	this.shape_4.setTransform(19.8,92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA0Igng+IAAA+IgUAAIAAhnIASAAIAnA+IAAg+IAUAAIAABng");
	this.shape_5.setTransform(7.2,92.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_6.setTransform(-0.2,92.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA0Igng+IAAA+IgUAAIAAhnIASAAIAnA+IAAg+IAUAAIAABng");
	this.shape_7.setTransform(-11,92.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAZIAnAAIAAAQIgnAAIAAAaIAuAAIAAASg");
	this.shape_8.setTransform(-20.3,92.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA0IAAhVIgbAAIAAgSIBJAAIAAASIgbAAIAABVg");
	this.shape_9.setTransform(-29,92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAzQgFAAgFgCQgJgDgHgIIAMgNQAFAFAHACQAGACAGAAQASAAAAgNQAAgFgDgDQgDgDgGgBIgGgBIgFgBQgOgCgGgFQgEgDgCgFQgCgGAAgGQAAgOAKgJQAFgEAHgCQAGgCAGAAQAMAAAHACIAIAEQAEACADAEIgMAMQgFgEgFgBQgGgCgGAAIgFABQgDABgCACQgEAEAAAFQAAAEADAEQAEADAGABIAEABIAGABIAMACQAEACADADQAFACABAGQACAFAAAIQAAAOgKAJQgGAEgGACQgIACgHAAg");
	this.shape_10.setTransform(-37.7,92.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_11.setTransform(-44,92.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA0IAAhnIAUAAIAABVIAtAAIAAASg");
	this.shape_12.setTransform(-50.1,92.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CT logo
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_13.setTransform(-1.9,61.4,0.217,0.217);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_14.setTransform(43.2,61.3,0.217,0.217);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_15.setTransform(8.8,61.3,0.217,0.217);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_16.setTransform(-32.1,61.3,0.217,0.217);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_17.setTransform(-13.8,61.3,0.217,0.217);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_18.setTransform(58.7,61.3,0.217,0.217);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_19.setTransform(26.4,61.3,0.217,0.217);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_20.setTransform(-50,61.3,0.217,0.217);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

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


// stage content:



(lib.CT1222_Sound_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickthru_btn.on("click", function(evt){
		  window.open(clickTag, "_blank");
		});
	}
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// clickthru
	this.clickthru_btn = new lib.CT1();
	this.clickthru_btn.setTransform(80,475.7,0.63,4.987,0,0,0,127,95.2);
	new cjs.ButtonHelper(this.clickthru_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthru_btn).wait(360));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(80,552);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({y:475},4).wait(245));

	// guarantee
	this.instance_1 = new lib.guarantee();
	this.instance_1.setTransform(79,208.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({x:80,y:481},4).wait(35).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(67).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(63).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(49).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.05,scaleY:1.05,y:493.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:481},0).wait(27));

	// HEAD boom
	this.instance_2 = new lib.HEADBoom();
	this.instance_2.setTransform(80.8,75);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,y:75.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:75},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,y:75.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:75},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.1,scaleY:1.1,y:75.1},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,y:75},0).wait(16).to({scaleX:2.03,scaleY:2.03,y:223},0).wait(1).to({scaleX:2.32,scaleY:2.32},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(1).to({scaleX:2.32,scaleY:2.32},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(1).to({scaleX:2.32,scaleY:2.32},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(16).to({regX:0.1,regY:0.1,scaleX:2.41,scaleY:2.41,x:81,y:373.3},0).wait(1).to({scaleX:2.6,scaleY:2.6},0).wait(1).to({scaleX:2.41,scaleY:2.41},0).wait(1).to({scaleX:2.6,scaleY:2.6},0).wait(1).to({scaleX:2.41,scaleY:2.41},0).wait(1).to({scaleX:2.6,scaleY:2.6},0).wait(1).to({scaleX:2.41,scaleY:2.41},0).to({_off:true},26).wait(278));

	// woofer 2
	this.instance_3 = new lib.woofer();
	this.instance_3.setTransform(80,480.3,1.03,1.03);
	this.instance_3._off = true;

	this.instance_4 = new lib.woofer2();
	this.instance_4.setTransform(80,475);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:0},9).to({_off:true},1).wait(12).to({_off:false,alpha:1},0).to({alpha:0},8).to({_off:true},1).wait(13).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(53).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(50).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(46).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(32).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(1));

	// woofer
	this.instance_5 = new lib.woofer();
	this.instance_5.setTransform(80,475);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360));

	// bkgd
	this.instance_6 = new lib._300x600_bkgd();
	this.instance_6.setTransform(-70,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10,300,300,948.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;