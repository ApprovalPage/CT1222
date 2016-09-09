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
		{src:"images/CT1222_Sound_300x250_atlas_P_.png", id:"CT1222_Sound_300x250_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Sound_300x250_atlas_P_", frames: [[0,0,300,250],[0,252,300,250],[0,504,300,250]]}
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


(lib.SoundRoom_300x250_Woofer = function() {
	this.spriteSheet = ss["CT1222_Sound_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.SoundRoom_300x250_Woofer2 = function() {
	this.spriteSheet = ss["CT1222_Sound_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Sound_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.woofer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SoundRoom_300x250_Woofer2();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.woofer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.SoundRoom_300x250_Woofer();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.HEADBoom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcB8IAAg4IA5AAIAAA4gAgTApIgQikIBHAAIgQCkg");
	this.shape.setTransform(47,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA3B8IAAh3IgkA9IglAAIgkg9IAAB3Ig9AAIAAj3IA8AAIA3BuIA4huIA8AAIAAD3g");
	this.shape_1.setTransform(27,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglB4QgRgIgOgNQgRgRgEgWQgDgOgCguQAAgYAFgjQAEgWARgQQAOgOARgIQAQgGAVgBQAWABARAGQAQAIAOAOQARAQAEAWQAFAjAAAYQAAAmgFAWQgEAWgRARQgOANgQAIIgTAFIgUACQgagCgLgFgAgNhEQgGADgEAFIgEAGIgDALIgBARIgBAaIABAbIABARIADAKIAEAGQAEAGAGACQAGAEAHAAQAIAAAGgEQAGgCAEgGIAEgGIADgKIACgRIAAgbIAAgaIgCgRIgDgLIgEgGQgDgFgHgDQgGgDgIAAQgHAAgGADg");
	this.shape_2.setTransform(2.9,-0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglB4QgRgIgOgNQgRgRgEgWQgDgOgCguQAAgYAFgjQAEgWARgQQAOgOARgIQAQgGAVgBQAWABARAGQAQAIAOAOQARAQAEAWQAFAjAAAYQAAAmgFAWQgEAWgRARQgOANgQAIIgTAFIgUACQgagCgLgFgAgNhEQgGADgEAFIgEAGIgDALIgBARIgBAaIABAbIABARIADAKIAEAGQAEAGAGACQAGAEAHAAQAIAAAGgEQAGgCAEgGIAEgGIADgKIACgRIAAgbIAAgaIgCgRIgDgLIgEgGQgDgFgHgDQgGgDgIAAQgHAAgGADg");
	this.shape_3.setTransform(-18.2,-0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhcB8IAAj3IBmAAQAmgBAVAVQAUATAAAhQAAAJgCAIQgCAIgFAFQgIANgKAGIALAFIAJAKQAEAHAEAJQADAKAAAMQAAAigWAUQgWATgiAAgAgeBFIAnAAQALABAGgHQAFgGAAgKQAAgJgFgGQgGgHgLAAIgnAAgAgegcIAkAAQAMAAAFgFQAFgHAAgIQAAgIgFgHQgFgFgMAAIgkAAg");
	this.shape_4.setTransform(-39.2,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.4,-27.1,289.3,48.5);


(lib.guarantee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRARIAAgiIAiAAIAAAig");
	this.shape.setTransform(80.7,29.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQBHIAAg6IgrhTIAmAAIAVA0IAWg0IAmAAIgrBTIAAA6g");
	this.shape_1.setTransform(71.7,23.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUBEQgKgEgHgHQgIgGgEgKQgDgJAAgMIAAhaIAiAAIAABZQABAKAEAGQADADAEABQADABADAAQAEAAADgBQADgBADgDQAFgGABgKIAAhZIAjAAIAABaIgCALIgDAKQgEAKgHAGQgIAHgKAEQgKADgKAAQgJAAgLgDg");
	this.shape_2.setTransform(59,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA5AAQAWAAAMAMQAMALAAATQAAAFgCAEQgBAFgCADQgFAHgGAEIAGACIAFAGIAFAIQACAGAAAHQAAAUgNALQgMALgUAAgAgRAnIAWAAQAGAAADgDQAEgEAAgFQAAgFgEgEQgDgEgGAAIgWAAgAgRgPIAUAAQAHAAADgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgUAAg");
	this.shape_3.setTransform(46.1,23.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBEQgKgEgIgHQgHgGgFgKQgEgJAAgMIAAhaIAkAAIAABZQAAAKAEAGQADADADABQAEABADAAQADAAAEgBQAEgBADgDQAEgGAAgKIAAhZIAjAAIAABaIAAALIgDAKQgFAKgIAGQgHAHgKAEQgJADgLAAQgKAAgJgDg");
	this.shape_4.setTransform(28.4,23.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBEQgJgEgJgIQgIgJgDgNQgCgIAAgaQAAgNACgUQADgMAIgKQAJgIAJgEQAKgEALAAQAMAAAJAEQAKAEAJAIQAJAKACAMQADAUAAANQAAAWgDAMQgCANgJAJQgJAIgKAEIgJADIgMABQgPgBgGgDgAgGgmQgFACgCADIgCADIgBAGIgCAKIAAAOIAAAPIACAKIABAGIACADQACADAFACQADACADAAQAEAAADgCQAFgCABgDIADgDIACgGIABgKIAAgPIAAgOIgBgKIgCgGIgDgDQgCgDgDgCQgEgCgEAAQgDAAgDACg");
	this.shape_5.setTransform(15.4,23.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQBHIAAg6IgrhTIAmAAIAVA0IAWg0IAmAAIgrBTIAAA6g");
	this.shape_6.setTransform(2.9,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvBHIAAiNIBfAAIAAAgIg8AAIAAAXIAzAAIAAAeIgzAAIAAAZIA8AAIAAAfg");
	this.shape_7.setTransform(-13.4,23.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPBHIgXg1IgMAAIAAA1IgjAAIAAiNIA3AAQALAAAJAEQAJAEAHAGQAGAHADAIQADAIAAAJQAAAOgHAJQgGAIgKAEIAfA8gAgUgJIAUAAQAFAAAEgFQAEgEAAgGQAAgGgEgEQgEgEgFAAIgUAAg");
	this.shape_8.setTransform(-25.6,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVBEQgKgEgIgIQgIgJgDgNQgCgIAAgaQAAgNACgUQADgMAIgKQAIgIAKgEQAKgEALAAQAMAAAJAEQAKAEAIAIQAKAKACAMQADAUAAANQAAAWgDAMQgCANgKAJQgIAIgKAEIgJADIgMABQgPgBgGgDgAgGgmQgFACgCADIgCADIgBAGIgCAKIAAAOIAAAPIACAKIABAGIACADQACADAFACQADACADAAQAEAAADgCQAFgCABgDIADgDIACgGIABgKIAAgPIAAgOIgBgKIgCgGIgDgDQgCgDgDgCQgEgCgEAAQgDAAgDACg");
	this.shape_9.setTransform(-39.1,23.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgvBHIAAiNIBfAAIAAAgIg8AAIAAAZIAzAAIAAAdIgzAAIAAA3g");
	this.shape_10.setTransform(-51.1,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvBHIAAiNIBfAAIAAAgIg8AAIAAAXIAzAAIAAAeIgzAAIAAAZIA8AAIAAAfg");
	this.shape_11.setTransform(-63.3,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA5AAQAWAAAMAMQAMALAAATQAAAFgCAEQgBAFgCADQgFAHgGAEIAGACIAFAGIAFAIQACAGAAAHQAAAUgNALQgMALgUAAgAgRAnIAWAAQAGAAADgDQAEgEAAgFQAAgFgEgEQgDgEgGAAIgWAAgAgRgPIAUAAQAHAAADgDQADgEAAgFQAAgEgDgEQgDgDgHAAIgUAAg");
	this.shape_12.setTransform(-75.8,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhgCOIAAkbIDBAAIAAA/Ih6AAIAAAvIBoAAIAAA9IhoAAIAAAxIB6AAIAAA/g");
	this.shape_13.setTransform(107.6,-1.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqCIQgTgIgQgQQgUgTgFgYQgCgRgCg0QAAgcAEgoQAFgZAUgTQAQgQATgIQATgHAXAAQAqAAAdAXQAPAMAIARQAKASAEAWIhHAAQgFgOgIgIQgIgIgQAAQgRAAgIAMIgGAIIgCALIgCAUIgCAeIACAfIACATIACAMIAGAIQAIAMARAAQAQAAAIgIQAIgJAFgOIBHAAQgIAugdAXQgPAMgSAGQgSAGgUAAQgegCgMgGg");
	this.shape_14.setTransform(83.4,-1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAyCOIhZiOIAACOIhHAAIAAkbIA+AAIBZCOIAAiOIBGAAIAAEbg");
	this.shape_15.setTransform(56.6,-1.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhfCOIAAkbIC/AAIAAA/Ih5AAIAAAvIBnAAIAAA9IhnAAIAAAxIB5AAIAAA/g");
	this.shape_16.setTransform(30.9,-1.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAfCOIgwhqIgYAAIAABqIhGAAIAAkbIBvAAQAXAAASAHQASAIANANQAMANAHAQQAGARAAASQAAAagNAUQgOAQgTAKIA9B3gAgpgVIAoAAQAMAAAIgIQAIgJAAgLQAAgMgIgIQgIgJgMAAIgoAAg");
	this.shape_17.setTransform(6.4,-1.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhgCOIAAkbIDBAAIAAA/Ih6AAIAAAvIBoAAIAAA9IhoAAIAAAxIB6AAIAAA/g");
	this.shape_18.setTransform(-19.4,-1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhfCOIAAkbIC/AAIAAA/Ih5AAIAAAxIBnAAIAAA9IhnAAIAABug");
	this.shape_19.setTransform(-43.2,-1.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhgCOIAAkbIDBAAIAAA/Ih6AAIAAAxIBoAAIAAA9IhoAAIAABug");
	this.shape_20.setTransform(-67,-1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiCOIAAkbIBFAAIAAEbg");
	this.shape_21.setTransform(-86,-1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhpCOIAAkbIBpAAQAWAAAUAHIASAIQAJAGAHAHQAKAKAGALQAGALADAOQADANABAPIABAnIgBAoQgBAQgDANQgDANgGALQgGALgKAKQgOAOgUAHQgUAHgWAAgAgiBPIAeAAQALAAAIgDQAIgEAFgIIAEgHIACgKIABgSIAAgdIAAgcIgBgSIgCgKIgEgHQgFgHgIgEQgIgFgLABIgeAAg");
	this.shape_22.setTransform(-104.9,-1.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhRB5IAAjwICjAAIAAA1IhnAAIAAAoIBYAAIAAAzIhYAAIAAArIBnAAIAAA1g");
	this.shape_23.setTransform(70.1,-32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAgB5IAAhgIg+AAIAABgIg8AAIAAjwIA8AAIAABcIA+AAIAAhcIA6AAIAADwg");
	this.shape_24.setTransform(47.9,-32.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcB5IAAi7Ig8AAIAAg1ICxAAIAAA1Ig8AAIAAC7g");
	this.shape_25.setTransform(26.5,-32.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAaB5IgphaIgUAAIAABaIg7AAIAAjwIBeAAQATgBAQAHQAPAGALALQAKALAGAOQAFAOAAAPQAAAXgLAQQgMAPgQAHIA0BmgAgjgSIAiAAQAKABAHgIQAHgHAAgKQAAgJgHgIQgHgIgKABIgiAAg");
	this.shape_26.setTransform(-1.1,-32.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAwB5IgLgkIhJAAIgLAkIg/AAIBYjwIAsAAIBZDwgAgTAjIAoAAIgUg+g");
	this.shape_27.setTransform(-24.2,-32.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhRB5IAAjwICjAAIAAA1IhnAAIAAAoIBYAAIAAAzIhYAAIAAArIBnAAIAAA1g");
	this.shape_28.setTransform(-45.3,-32.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAfB5IAAhgIg9AAIAABgIg8AAIAAjwIA8AAIAABcIA9AAIAAhcIA8AAIAADwg");
	this.shape_29.setTransform(-67.5,-32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149,-57.7,299,94.7);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// buy now
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAZIAnAAIAAAQIgnAAIAAAaIAuAAIAAASg");
	this.shape.setTransform(118.1,92.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQA0IgTgqIgOAAIAAAqIgVAAIAAhnIAnAAQAIABAGACQAGACAFAFQAEAEACAGQADAGAAAHQAAAEgCAFQgBAFgDADQgGAFgHADIAXAtgAgRgFIARAAQAGAAAEgDIADgFQABgCAAgDQAAgDgBgDIgDgEQgEgFgGAAIgRAAg");
	this.shape_1.setTransform(109.2,92.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAxQgHgDgGgFQgGgHgCgJQgCgJAAgQQAAgKACgPQACgIAGgHQAGgGAHgDQAHgCAHAAQAIAAAHACQAHADAFAGQAIAHABAIQACAPAAAKQgBATgBAGQgBAJgIAHQgFAFgHADQgHADgIAAQgHAAgHgDgAgGggQgDABgCADIgDAEIgCAFIgBAIIAAALIAAAMIABAIIACAFIADAEQACACADACQADABADAAQADAAAEgBIAGgEIACgEIABgFIABgIIAAgMIAAgLIgBgIIgBgFIgCgEQgGgFgHAAQgDAAgDABg");
	this.shape_2.setTransform(99.3,92.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgJA0IAAhVIgbAAIAAgSIBJAAIAAASIgbAAIAABVg");
	this.shape_3.setTransform(90.5,92.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAzQgGAAgEgCQgKgDgGgIIAMgNQAFAFAGACQAHACAGAAQASAAAAgNQAAgFgDgDQgDgDgGgBIgGgBIgFgBQgNgCgHgFQgEgDgCgFQgBgGgBgGQAAgOAKgJQAFgEAGgCQAHgCAGAAQAMAAAHACIAIAEQAEACADAEIgNAMQgEgEgGgBQgFgCgGAAIgFABQgDABgCACQgEAEAAAFQAAAEADAEQADADAHABIAEABIAGABIALACQAGACACADQAFACACAGQABAFAAAIQAAAOgKAJQgGAEgGACQgIACgHAAg");
	this.shape_4.setTransform(81.8,92.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAVA0Igng+IAAA+IgUAAIAAhnIASAAIAnA+IAAg+IAUAAIAABng");
	this.shape_5.setTransform(69.2,92.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_6.setTransform(61.8,92.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA0Igng+IAAA+IgUAAIAAhnIASAAIAnA+IAAg+IAUAAIAABng");
	this.shape_7.setTransform(51,92.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghA0IAAhnIBDAAIAAASIguAAIAAAZIAnAAIAAAQIgnAAIAAAaIAuAAIAAASg");
	this.shape_8.setTransform(41.7,92.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgJA0IAAhVIgbAAIAAgSIBJAAIAAASIgbAAIAABVg");
	this.shape_9.setTransform(33,92.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAzQgGAAgEgCQgKgDgGgIIAMgNQAFAFAGACQAHACAGAAQASAAAAgNQAAgFgDgDQgDgDgGgBIgGgBIgFgBQgOgCgGgFQgEgDgCgFQgBgGgBgGQAAgOAKgJQAFgEAHgCQAGgCAGAAQAMAAAHACIAIAEQAEACADAEIgMAMQgFgEgGgBQgFgCgGAAIgFABQgDABgCACQgEAEAAAFQAAAEADAEQADADAHABIAEABIAGABIALACQAGACACADQAFACABAGQACAFAAAIQAAAOgKAJQgGAEgGACQgIACgHAAg");
	this.shape_10.setTransform(24.3,92.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA0IAAhnIATAAIAABng");
	this.shape_11.setTransform(18,92.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA0IAAhnIAUAAIAABVIAtAAIAAASg");
	this.shape_12.setTransform(11.9,92.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// CT logo
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIBMQgegDgWgSQgWgSgEgZQgFgeAVgaQAWgaAjgEIANgBQAngDAbAcQAbAdgHAjQgFAdgcASQgYAPgcAAIgJAAg");
	this.shape_13.setTransform(-80.6,92.5,0.197,0.197);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhgFuIAAgSIARgEQAJgCAHgDQAPgIAFgNQAEgPACgdQABhfgBhfQAAgMgGgKIjIluQgNgVgMgJQgRgMgVABIAAgUIDJAAIAAASIglAJQgbAKALAZQARApASAgIB/DqIAIAMICTkVQAJgTAHgWQAKgagcgKQgFgDgNgCIgRgDIAAgTIC5AAIAAAUQgXgBgTAPQgNALgNAYIhTCWQgwBWgkA8QgvBNAHBOQACAYAAArQgBAwABATQACAiAJAJQAJAKAkAFIAAATg");
	this.shape_14.setTransform(-39.6,92.5,0.197,0.197);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhdFuIAAgTQAogHAJgLQAJgLAAgoIAApVIgZAAQhMAGgQADQhMAKgSBRIgKA3IgTAAIAPjJIIJAAIAPDIQgNAEgEgCQgDgDgDgOQgFgfgHgaQgRg5g7gOQg0gNhLADIgBAPIAAI+IACAgQACAUAHAIQAHAIAVAFIASADIAAATg");
	this.shape_15.setTransform(-70.9,92.5,0.197,0.197);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACMFvIAAgUIAOgCQArgGgJgqQgJghgLgfIgsh0QgEgLgLAAIj1AAQgEAAgEACQgEADgBACQguB4gQAwQgLAhAJAOQAKAOAjAEIAIABIAAAUIjOAAIAAgUIAKgBQAhgDAMgbQAnhbAQgoQBPjOBXjnQAJgXAHgcQAEgSgGgJQgGgJgSgEIgQgCIAAgVICkAAIEAKYQAJAYANALQAQAOAZgBIAAAVgAh9AoIDdAAIhtklg");
	this.shape_16.setTransform(-108.1,92.5,0.197,0.197);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ACoFwIgKgBQgGgBgDgGQgxhOhFhWQgwg+hRhcIgbgfQgIgLADgEQADgGAOgBIA6gFQAjgEAUgDQA7gKAlglQA1g2gUhJQgShKhKgSQgYgGgfgDIg7gFIgmgBIgnABIAAI7QAAARACAVQACARAHAIQAHAHARAEIAaAFIAAAUIjiAAIAAgUIADgBQAigEALgMQALgMAAgjQAAkbAAkaQAAgkgLgLQgKgLgmgFIAAgVIAHgBIChAAQBgAAA/ABQA5ABA3AOQA/ARAgAvQAgAvgEBDQgGB/iKAvQgPAGgZAGIgqAKIBzCMIB0COQAfAnApACIAAAWg");
	this.shape_17.setTransform(-91.5,92.5,0.197,0.197);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjeFXIgDgBQgOgEgFgJQgGgJAAgQIgDhHIgFhIIgBgRQAQgFAEADQADACAEAPQAKAuAIAVQAhBSBYASQBxAYBXgzQBag1gKhqQgGg3g0gbQgpgUhNgPIhPgPQgtgIgigOQgigPgVgQQgbgUgPgcQgfg6AQhBQAQhBA3goQA7gqBcgMIA1gGIAoAAIAkAEIAlAFQAZAFAyAPIAGAEQACADAAADIAICVIgBADQgPADgDgCQgDgCgEgOQgGgYgGgPQgYg/g/gOQhvgchjAvQglASgXAfQgcAlAHAxQAIA3A1AXQAVAJAeAIIA1AMICmApQAQAEAdAPQBeAygJBxQgNCYiiAwQhCATg/AAQhdAAhagng");
	this.shape_18.setTransform(-25.6,92.5,0.197,0.197);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIF9QiDgDhjhdQhchXgWh3QgaiQA2huQBWiuC4gbIAggEIAdAAIAiAEQAUADANADQC4AtBJC7QBACghFCaQgsBihcA4QhXAzhnAAIgIAAgAi3kLQg3AugZA/QgZA/ABBZQAAA6AZA9QAaBAAxA4QBcBoB5gHQCdgIBIiUQAjhGgJhoQgLiOhchjQhKhPhogIIgTgBQhcAAhIA+g");
	this.shape_19.setTransform(-54.9,92.4,0.197,0.197);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABJF+Qh5gDhXg2Qhbg5gvhtQhLisBUijQBTiiC0glIAjgHIBVAAIBkAUQARAEAhAQQADABADAEQADADAAADIAFCpIgUAAIgGgZQgfhrhqgPQiQgThbBgQg+BCgLBhQgPCPBLBoQBQBtB0ARQB2ARBthSIAPgLIgHBMQAAAGgLAHQhZBCh5AAIgJgBg");
	this.shape_20.setTransform(-124.3,92.5,0.197,0.197);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(1));

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



(lib.CT1222_Sound_300x250 = function(mode,startPosition,loop) {
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
	this.clickthrough_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(360));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(150,202);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).to({y:125},4).wait(245));

	// guarantee
	this.instance_1 = new lib.guarantee();
	this.instance_1.setTransform(148.3,58.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(87).to({_off:false},0).to({x:150,y:131},4).wait(35).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(67).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(63).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(49).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1,scaleY:1},0).wait(27));

	// HEAD boom
	this.instance_2 = new lib.HEADBoom();
	this.instance_2.setTransform(150.8,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(14).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.72,scaleY:1.72},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.72,scaleY:1.72},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.72,scaleY:1.72},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(1).to({scaleX:1.72,scaleY:1.72},0).wait(1).to({scaleX:1.53,scaleY:1.53},0).wait(14).to({regX:0.1,regY:0.1,scaleX:2.41,scaleY:2.41,x:151,y:125.3},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:150.9,y:125.2},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:151,y:125.3},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:150.9,y:125.2},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:151,y:125.3},0).wait(1).to({scaleX:2.6,scaleY:2.6,x:150.9,y:125.2},0).wait(1).to({scaleX:2.41,scaleY:2.41,x:151,y:125.3},0).to({_off:true},26).wait(278));

	// woofer 2
	this.instance_3 = new lib.woofer();
	this.instance_3.setTransform(150,125,1.03,1.03);
	this.instance_3._off = true;

	this.instance_4 = new lib.woofer2();
	this.instance_4.setTransform(150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(15).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(68).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(65).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(61).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(47).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({alpha:0},9).to({_off:true},1).wait(12).to({_off:false,alpha:1},0).to({alpha:0},8).to({_off:true},1).wait(13).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(53).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(50).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(46).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(32).to({_off:false,alpha:1},0).to({alpha:0},23).to({_off:true},1).wait(1));

	// woofer
	this.instance_5 = new lib.woofer();
	this.instance_5.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360));

	// bkgd
	this.instance_6 = new lib.CT1222_XOvision_300x250_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(360));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;