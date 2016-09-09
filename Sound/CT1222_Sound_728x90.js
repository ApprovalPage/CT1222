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
		{src:"images/CT1222_Sound_728x90_atlas_P_.png", id:"CT1222_Sound_728x90_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Sound_728x90_atlas_P_", frames: [[0,0,300,250],[0,252,728,90],[0,344,728,90]]}
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


(lib.SoundRoom_300x250_Woofer2 = function() {
	this.spriteSheet = ss["CT1222_Sound_728x90_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SoundRoom_728x90_CTA = function() {
	this.spriteSheet = ss["CT1222_Sound_728x90_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.SoundRoom_728x90_Woofer3x = function() {
	this.spriteSheet = ss["CT1222_Sound_728x90_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.woofer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SoundRoom_300x250_Woofer2();
	this.instance.setTransform(-552,29,0.417,0.417);

	this.instance_1 = new lib.SoundRoom_300x250_Woofer2();
	this.instance_1.setTransform(-412,-17,0.83,0.83);

	this.instance_2 = new lib.SoundRoom_300x250_Woofer2();
	this.instance_2.setTransform(-154,29,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-552,-17,523,207.6);


(lib.woofer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SoundRoom_728x90_Woofer3x();
	this.instance.setTransform(-649,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-649,35,728,90);


(lib.HEADdiff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcAdIAAg5IA5AAIAAA5g");
	this.shape.setTransform(-340.2,97.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbB1IAAhgIhHiJIA/AAIAjBUIAkhUIA/AAIhHCJIAABgg");
	this.shape_1.setTransform(-352.8,88.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBwQgPgGgNgLQgMgMgHgPQgGgPgBgTIAAiXIA6AAIAACVQAAARAIAIQAEAFAGACQAGACAGAAQAGAAAGgCQAGgCAEgFQAJgIgBgRIAAiVIA7AAIAACXIgCASIgGAQQgHAPgMAMQgMALgQAGQgRAGgRAAQgRAAgRgGg");
	this.shape_2.setTransform(-373.6,88.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhWB1IAAjpIBfAAQAkAAAUATQATASAAAfQAAAJgCAHQgCAHgEAGQgIAMgKAFIAKAFIAJAKQAFAGADAJQACAIAAAMQAAAggUATQgUASghAAgAgcBBIAlAAQALAAAFgGQAFgGAAgIQAAgJgFgGQgFgGgLAAIglAAgAgcgaIAiAAQALAAAEgGQAFgFAAgIQAAgIgFgGQgEgFgLAAIgiAAg");
	this.shape_3.setTransform(-394.9,88.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghBwQgQgGgNgLQgMgMgHgPQgGgPAAgTIAAiXIA5AAIAACVQAAARAIAIQAEAFAGACQAGACAGAAQAHAAAFgCQAGgCAEgFQAIgIAAgRIAAiVIA7AAIAACXIgDASIgEAQQgIAPgMAMQgMALgRAGQgQAGgRAAQgRAAgQgGg");
	this.shape_4.setTransform(-424.2,88.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBwQgQgGgNgNQgQgQgDgVQgDgNgCgrQAAgXAFghQADgUAQgQQANgMAQgIQAQgGATAAQAVAAAPAGQAQAIANAMQAPAQAFAUQAEAhAAAXQAAAkgEAUQgFAVgPAQQgNANgQAGIgRAGIgTABQgYgCgLgFgAgMhAQgGADgDAFIgFAGIgCAKIgBAQIgBAYIABAaIABAPIACAJIAFAHQADAFAGADQAGACAGAAQAHAAAGgCQAGgDAEgFIADgHIADgJIACgPIAAgaIAAgYIgCgQIgDgKIgDgGQgDgFgHgDQgGgDgHAAQgGAAgGADg");
	this.shape_5.setTransform(-445.6,88.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbB1IAAhgIhHiJIA/AAIAjBUIAkhUIA/AAIhHCJIAABgg");
	this.shape_6.setTransform(-465.2,88.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhPB1IAAjpICeAAIAAAzIhjAAIAAAoIBUAAIAAAxIhUAAIAAApIBjAAIAAA0g");
	this.shape_7.setTransform(-492.2,88.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaB1IgohYIgTAAIAABYIg7AAIAAjpIBcAAQATAAAOAGQAQAHAKAKQALALAEAOQAGANAAAPQAAAWgLAPQgLAOgRAIIAzBigAghgQIAgAAQAKgBAGgGQAHgIAAgJQAAgKgHgHQgGgHgKAAIggAAg");
	this.shape_8.setTransform(-512.4,88.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgjBwQgQgGgNgNQgQgQgDgVQgEgNgBgrQAAgXAFghQADgUAQgQQANgMAQgIQAQgGATAAQAUAAAQAGQAQAIANAMQAQAQAEAUQAEAhAAAXQAAAkgEAUQgEAVgQAQQgNANgQAGIgRAGIgTABQgZgCgKgFgAgMhAQgGADgEAFIgEAGIgCAKIgBAQIgBAYIABAaIABAPIACAJIAEAHQAEAFAGADQAGACAGAAQAHAAAGgCQAGgDAEgFIADgHIADgJIABgPIABgaIgBgYIgBgQIgDgKIgDgGQgEgFgGgDQgGgDgHAAQgGAAgGADg");
	this.shape_9.setTransform(-534.6,88.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPB1IAAjpICfAAIAAAzIhkAAIAAAqIBUAAIAAAyIhUAAIAABag");
	this.shape_10.setTransform(-554.4,88.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhPB1IAAjpICeAAIAAAzIhjAAIAAAoIBUAAIAAAxIhUAAIAAApIBjAAIAAA0g");
	this.shape_11.setTransform(-574.4,88.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhWB1IAAjpIBfAAQAkAAAUATQATASAAAfQAAAJgCAHQgCAHgEAGQgIAMgKAFIAKAFIAJAKQAFAGADAJQACAIAAAMQAAAggUATQgUASghAAgAgcBBIAlAAQALAAAFgGQAFgGAAgIQAAgJgFgGQgFgGgLAAIglAAgAgcgaIAiAAQALAAAEgGQAFgFAAgIQAAgIgFgGQgEgFgLAAIgiAAg");
	this.shape_12.setTransform(-595.2,88.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIByAAIAAAmIhJAAIAAAcIA+AAIAAAkIg+AAIAAAdIBJAAIAAAmg");
	this.shape_13.setTransform(-351.8,62.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZBRQgLgEgKgKQgLgLgDgPQgCgKgBgfQAAgQADgYQADgPALgLQAKgKALgEQAMgFANAAQAZAAARAOQAJAHAFAKQAGALACANIgqAAQgDgIgFgFQgFgFgJAAQgJAAgGAHIgCAFIgCAHIgCAMIAAARIAAASIACAMIACAHIACAFQAGAHAJAAQAJAAAFgFQAFgFADgIIAqAAQgEAbgSAOQgJAHgKAEQgLADgMAAQgRgBgIgEg");
	this.shape_14.setTransform(-366.2,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdBVIg0hVIAABVIgqAAIAAipIAlAAIA0BUIAAhUIAqAAIAACpg");
	this.shape_15.setTransform(-382.2,62.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIByAAIAAAmIhJAAIAAAcIA+AAIAAAkIg+AAIAAAdIBJAAIAAAmg");
	this.shape_16.setTransform(-397.6,62.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATBVIgdhAIgOAAIAABAIgqAAIAAipIBCAAQANAAALAFQALAEAIAIQAHAIAEAKQAEAKAAAKQAAAQgIAMQgIAJgMAGIAlBHgAgYgMIAYAAQAGAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgGAAIgYAAg");
	this.shape_17.setTransform(-412.2,62.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhIAAIAAAcIA+AAIAAAkIg+AAIAAAdIBIAAIAAAmg");
	this.shape_18.setTransform(-427.7,62.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhIAAIAAAeIA+AAIAAAjIg+AAIAABCg");
	this.shape_19.setTransform(-442,62.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhHAAIAAAeIA9AAIAAAjIg9AAIAABCg");
	this.shape_20.setTransform(-456.2,62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgTBVIAAipIAnAAIAACpg");
	this.shape_21.setTransform(-467.5,62.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag+BVIAAipIA+AAQANAAAMAEIALAGQAFADAEAEQAGAGAEAHQAEAGACAIIACASIAAAWIAAAYIgCARQgCAIgEAGQgEAHgGAGQgIAIgMAFQgMAEgNAAgAgUAvIATAAQAFAAAFgCQAFgDADgEIACgEIABgGIABgLIAAgRIAAgQIgBgKIgBgHIgCgEQgDgEgFgDQgFgCgFAAIgTAAg");
	this.shape_22.setTransform(-478.9,62.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag5BVIAAipIByAAIAAAmIhIAAIAAAcIA+AAIAAAkIg+AAIAAAdIBIAAIAAAmg");
	this.shape_23.setTransform(-499.2,62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWBVIAAhEIgrAAIAABEIgqAAIAAipIAqAAIAABCIArAAIAAhCIAqAAIAACpg");
	this.shape_24.setTransform(-514.9,62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTBVIAAiDIgrAAIAAgmIB8AAIAAAmIgqAAIAACDg");
	this.shape_25.setTransform(-530,62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AASBVIgbhAIgPAAIAABAIgqAAIAAipIBCAAQANAAAMAFQALAEAHAIQAHAIAEAKQAEAKAAAKQAAAQgIAMQgIAJgMAGIAlBHgAgYgMIAYAAQAGAAAFgFQAFgFAAgHQAAgHgFgFQgFgFgGAAIgYAAg");
	this.shape_26.setTransform(-549.4,62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAiBVIgIgaIgyAAIgIAaIgsAAIA+ipIAeAAIA9CpgAgMAYIAbAAIgOgrg");
	this.shape_27.setTransform(-565.7,62.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag4BVIAAipIBxAAIAAAmIhIAAIAAAcIA+AAIAAAkIg+AAIAAAdIBIAAIAAAmg");
	this.shape_28.setTransform(-580.5,62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAWBVIAAhEIgrAAIAABEIgqAAIAAipIAqAAIAABCIArAAIAAhCIAqAAIAACpg");
	this.shape_29.setTransform(-596.2,62.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-658.1,45,367.2,63);


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


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.SoundRoom_728x90_CTA();
	this.instance.setTransform(-647,35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-647,35,728,90);


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



(lib.CT1222_Sound_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickthrough_btn.addEventListener("click", clickThroughFunc.bind(this));
		function clickThroughFunc(){
		    EB.clickthrough();
		}
	}
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// clickthru
	this.clickthrough_btn = new lib.CT1();
	this.clickthrough_btn.setTransform(363.1,45.2,2.866,0.474,0,0,0,126.7,95.2);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(360));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(648,42);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({y:-35},4).wait(245));

	// HEAD diff
	this.instance_1 = new lib.HEADdiff();
	this.instance_1.setTransform(335,-29);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({x:648},4).wait(35).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(67).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(63).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(49).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:670,y:-33},0).wait(1).to({scaleX:1,scaleY:1,x:648,y:-29},0).wait(27));

	// HEAD boom
	this.instance_2 = new lib.HEADBoom();
	this.instance_2.setTransform(359.8,47.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1,x:363.8},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:359.8},0).wait(1).to({scaleX:1,scaleY:1},0).wait(16).to({scaleX:2.03,scaleY:2.03,x:363.6,y:51},0).wait(1).to({scaleX:2.23,scaleY:2.23},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(1).to({scaleX:2.23,scaleY:2.23},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(1).to({scaleX:2.23,scaleY:2.23},0).wait(1).to({scaleX:2.03,scaleY:2.03},0).wait(16).to({regX:0.1,regY:0.1,scaleX:2.41,scaleY:2.41,x:363.8,y:52.3},0).wait(1).to({scaleX:2.6,scaleY:2.6},0).wait(1).to({scaleX:2.41,scaleY:2.41},0).wait(1).to({scaleX:2.6,scaleY:2.6},0).wait(1).to({scaleX:2.41,scaleY:2.41},0).wait(1).to({scaleX:2.6,scaleY:2.6},0).wait(1).to({scaleX:2.41,scaleY:2.41},0).to({_off:true},26).wait(278));

	// woofer 2
	this.instance_3 = new lib.woofer();
	this.instance_3.setTransform(657,-36.7,1.03,1.03);
	this.instance_3._off = true;

	this.instance_4 = new lib.woofer2();
	this.instance_4.setTransform(648,-35);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:0},9).to({_off:true},1).wait(12).to({_off:false,alpha:1},0).to({alpha:0},8).to({_off:true},1).wait(13).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(53).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(50).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(46).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(32).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(1));

	// woofer
	this.instance_5 = new lib.woofer();
	this.instance_5.setTransform(648,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360));

	// bkgd
	this.instance_6 = new lib._728x90_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,45,729,90.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;