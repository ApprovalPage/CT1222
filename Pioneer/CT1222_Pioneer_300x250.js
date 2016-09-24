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
		{src:"images/CT1222_Pioneer_300x250_atlas_P_.png", id:"CT1222_Pioneer_300x250_atlas_P_"}
	]
};



lib.ssMetadata = [
		{name:"CT1222_Pioneer_300x250_atlas_P_", frames: [[302,0,126,117],[0,0,300,250],[0,504,300,250],[0,756,300,250],[0,252,300,250]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Bluetooth = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x250_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CT1222_XOvision_300x250_bkgd = function() {
	this.initialize(img.CT1222_XOvision_300x250_bkgd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Pioneer_300x250_deck = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x250_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x250_phoneblank = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x250_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Pioneer_300x250_Wirelessly = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x250_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.XOvision_300x250_CTAbkgd = function() {
	this.spriteSheet = ss["CT1222_Pioneer_300x250_atlas_P_"];
	this.gotoAndStop(4);
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
	this.instance = new lib.Pioneer_300x250_phoneblank();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Onlyprice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNCPIAAgiQgfgDgMgEQgTgHgPgPIAjgjQAIAIANADQANAFAOAAIAAgqIgMgBQgdgEgQgOQgHgIgEgKQgEgMAAgOQAAgcASgSQARgUAfgEIAAgcIAlAAIAAAcQAoACAXAYIgiAjQgHgHgJgDIgTgEIAAAoIAMACQAeADAOAPQARAOAAAgQAAAOgFAMQgFAMgJAIQgSASgeAFIAAAjgAASA8QATgEAAgPQAAgJgEgFQgDgCgEgBIgIgCgAgWg7QgEAGAAAHQAAAGAEAFQAFAEAKACIAAglQgKACgFAFg");
	this.shape.setTransform(-72.3,69.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhPDBIBNiWQgIACgOAAQgSAAgSgHQgSgIgPgPQgQgOgJgVQgJgWAAgbQAAgdAKgXQAJgXASgQQAlggA1AAQA2AAAlAgQASAQAJAXQAKAXAAAdQAAAZgJAYQgIAVgSAjIgCAFIhKCYgAgbhlQgLAMAAAUQAAAVALALQAMAMAPAAQAQAAAMgMQALgLAAgVQAAgUgLgMQgMgLgQAAQgPAAgMALg");
	this.shape_1.setTransform(52.5,81.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhPDBIBNiWQgIACgOAAQgSAAgSgHQgSgIgPgPQgQgOgJgVQgJgWAAgbQAAgdAKgXQAJgXASgQQAlggA1AAQA2AAAlAgQASAQAJAXQAKAXAAAdQAAAZgJAYQgIAVgSAjIgCAFIhKCYgAgbhlQgLAMAAAUQAAAVALALQAMAMAPAAQAQAAAMgMQALgLAAgVQAAgUgLgMQgMgLgQAAQgPAAgMALg");
	this.shape_2.setTransform(23,81.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvAwIAAhfIBfAAIAABfg");
	this.shape_3.setTransform(5.5,96.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAXDAIAAgzIidAAIAAhUIB/j4IBfAAIh9D4IA8AAIAAgzIBUAAIAAAzIAcAAIAABUIgcAAIAAAzg");
	this.shape_4.setTransform(-18,81.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPDBIBNiWQgIACgOAAQgSAAgSgHQgSgIgPgPQgQgOgJgVQgJgWAAgbQAAgdAKgXQAJgXASgQQAlggA1AAQA2AAAlAgQASAQAJAXQAKAXAAAdQAAAZgJAYQgIAVgSAjIgCAFIhKCYgAgbhlQgLAMAAAUQAAAVALALQAMAMAPAAQAQAAAMgMQALgLAAgVQAAgUgLgMQgMgLgQAAQgPAAgMALg");
	this.shape_5.setTransform(-44.8,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147.3,43.3,299,70.5);


(lib.HEADquality = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrCzIAAiSIhsjTIBgAAIA3CBIA4iBIBgAAIhsDTIAACSg");
	this.shape.setTransform(88.3,-80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrCzIAAkXIhYAAIAAhOIEHAAIAABOIhYAAIAAEXg");
	this.shape_1.setTransform(58.3,-80.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrCzIAAllIBXAAIAAFlg");
	this.shape_2.setTransform(35.5,-80.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah2CzIAAllIBYAAIAAEXICVAAIAABOg");
	this.shape_3.setTransform(13.9,-80.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABICzIgRg1IhsAAIgSA1IhcAAICCllIBDAAICCFlgAgcA0IA8AAIgeheg");
	this.shape_4.setTransform(-18.1,-80.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0CsQgYgJgTgSQgTgRgLgYQgKgYAAgdIAAjnIBYAAIAADlQAAAZANAOQAGAHAJAEQAJADAKAAQAKAAAJgDQAJgEAGgHQANgOAAgZIAAjlIBZAAIAADnIgDAcIgIAZQgKAYgTARQgTASgZAJQgZAJgbAAQgbAAgZgJg");
	this.shape_5.setTransform(-51.3,-80);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABDCgQgdARgnAAQgogDgQgHQgYgLgVgUQgXgXgHggQgEgVgChAQAAgmAGgxQAHggAXgYQAVgUAYgKQAYgKAgAAQAeAAAYAKQAYAKAVAUQAXAYAHAgQAGAxAAAmQAAAtgEAbQgDAbgOAWIAaAaIgsAtgAgWhoQgJAEgFAIIgGAJIgEAOIgDAZIAAAoIAAAlIADAZIAEAOIAGAKQAFAHAJAEQAJAFAMAAIAFAAIgVgXIArgtIARARIACgzIAAgoIgDgZIgEgOIgGgJQgFgIgJgEQgKgEgJAAQgMAAgJAEg");
	this.shape_6.setTransform(-83.8,-79.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.1,-118,249.6,69.7);


(lib.HEADover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeBFQgNgEgLgLIAXgXQAFAFAJADQAJACAIAAQAUAAAAgNQAAgFgDgDQgDgDgGgBIgIgBIgIgCQgJAAgIgEQgHgDgFgFQgFgEgCgGQgDgIAAgJQAAgUAOgNQAIgHAJgDQAKgDAKAAQAQAAAMAEQAGACAFAEIAKAIIgXAWQgFgGgHgCQgGgBgJAAQgHAAgEAFQgEADAAAGQAAADACADQAEAEAGABIAGABIAKABQATACAJAKQALAJAAAVQAAAKgEAJQgFAIgHAHQgIAFgKADQgKADgLAAQgRAAgNgEg");
	this.shape.setTransform(116.8,-78);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRBIIAAhvIgjAAIAAggIBpAAIAAAgIgkAAIAABvg");
	this.shape_1.setTransform(105.3,-78);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBFQgKgEgIgIQgJgKgDgMQgBgIgBgbQAAgOACgTQADgNAJgKQAIgIAKgEQAKgEALAAQAVAAAPAMQAHAGAFAJQAEAJACAMIgkAAQgCgIgEgEQgEgEgIAAQgIAAgEAGIgDAEIgBAGIgBAJIgBAPIABAQIABAKIABAFIADAFQAEAFAIAAQAIAAAEgEQAEgEACgHIAkAAQgDAXgPAMQgIAGgJADQgJADgKAAQgOgBgHgDg");
	this.shape_2.setTransform(93.4,-78);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgwBIIAAiPIBhAAIAAAgIg9AAIAAAYIA0AAIAAAeIg0AAIAAAZIA9AAIAAAgg");
	this.shape_3.setTransform(81,-78);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZBIIgthIIAABIIgjAAIAAiPIAfAAIAtBHIAAhHIAjAAIAACPg");
	this.shape_4.setTransform(67.6,-78);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBIIgthIIAABIIgjAAIAAiPIAfAAIAsBHIAAhHIAkAAIAACPg");
	this.shape_5.setTransform(53.4,-78);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVBFQgKgEgIgIQgJgKgDgMQgBgIgBgbQAAgOACgTQADgNAJgKQAIgHAKgFQAJgEAMAAQANAAAJAEQAKAEAIAIQAJAKADANQACATABAOQgBAWgCANQgDAMgJAKQgIAIgKAEIgKADIgMABQgPgBgGgDgAgHgnIgGAFIgCAEIgBAGIgBAJIgBAPIABAQIABAKIABAFIACAEQACADAEABQAEACADAAQAEAAAEgCQADgBADgDIACgEIACgFIABgKIAAgQIAAgPIgBgJIgCgGIgCgEIgGgFQgEgBgEAAQgDAAgEABg");
	this.shape_6.setTransform(39.8,-78);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBFQgKgEgIgIQgJgKgDgMQgBgIgBgbQAAgOACgTQADgNAJgKQAIgIAKgEQAKgEALAAQAVAAAPAMQAHAGAFAJQAEAJACAMIgkAAQgCgIgEgEQgEgEgIAAQgIAAgEAGIgDAEIgBAGIgBAJIgBAPIABAQIABAKIABAFIADAFQAEAFAIAAQAIAAAEgEQAEgEACgHIAkAAQgDAXgPAMQgIAGgJADQgJADgKAAQgOgBgHgDg");
	this.shape_7.setTransform(27.4,-78);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgRBIIAAhvIgjAAIAAggIBpAAIAAAgIgkAAIAABvg");
	this.shape_8.setTransform(10.6,-78);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBIIgHgWIgrAAIgHAWIglAAIA1iPIAZAAIA1CPgAgKAVIAXAAIgMglg");
	this.shape_9.setTransform(-2.1,-78);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASBIIAAg6IgkAAIAAA6IgjAAIAAiPIAjAAIAAA4IAkAAIAAg4IAkAAIAACPg");
	this.shape_10.setTransform(-15.5,-78);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBIIAAhvIgjAAIAAggIBpAAIAAAgIgkAAIAABvg");
	this.shape_11.setTransform(-28.3,-78);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQBIIAAg7IgshUIAnAAIAVA0IAWg0IAnAAIgrBUIAAA7g");
	this.shape_12.setTransform(-44.8,-78);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQBIIAAhvIgkAAIAAggIBpAAIAAAgIgkAAIAABvg");
	this.shape_13.setTransform(-56.9,-78);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQBIIAAiPIAhAAIAACPg");
	this.shape_14.setTransform(-66.1,-78);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgvBIIAAiPIAkAAIAABvIA7AAIAAAgg");
	this.shape_15.setTransform(-74.7,-78);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAdBIIgHgWIgrAAIgHAWIglAAIA1iPIAZAAIA1CPgAgKAVIAXAAIgMglg");
	this.shape_16.setTransform(-87.6,-78);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUBFQgKgEgHgHQgIgHgEgJQgFgKABgMIAAhbIAjAAIAABbQAAAKAFAFQADADADABQAEACADAAQAEAAAEgCQADgBACgDQAGgFAAgKIAAhbIAjAAIAABbIAAAMIgEAKQgEAJgIAHQgIAHgKAEQgKADgKAAQgKAAgKgDg");
	this.shape_17.setTransform(-100.9,-78);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaBAQgLAHgPAAQgQgBgGgDQgKgEgIgIQgKgKgCgMQgCgJgBgZQAAgPADgUQACgMAKgKQAIgIAKgEQAJgEANAAQALAAAKAEQAKAEAIAIQAJAKADAMQACAUAAAPQAAARgBALQgCALgFAJIALAKIgTASgAABAnIgHgJIAQgSIAHAHIABgUIgBgQIgBgJIgBgGIgCgEIgGgFQgEgBgDAAQgEAAgEABIgGAFIgCAEIgCAFIgBAKIAAAQIAAAOIABAKIACAGIACAEQACADAEABQAEACAEAAIABAAg");
	this.shape_18.setTransform(-114,-77.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.4,-94,265.6,29.5);


(lib.HEADgetblue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Pioneer_300x250_Wirelessly();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.deck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Pioneer_300x250_deck();
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.CTAlockup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// product
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLA/IAAhnIgiAAIAAgXIBbAAIAAAXIgiAAIAABng");
	this.shape.setTransform(87.8,57.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtA/IAAh+IAxAAQATAAAKAKQAGAFACAGQADAHAAAIIgBAJIgEAIQgFAHgGADQAIABAEAHQAGAHAAALQAAASgLAJQgLAKgSAAgAgUApIAYAAQAIAAAEgFQAFgEAAgHQAAgGgFgFQgEgFgIAAIgYAAgAgUgLIAXAAQAHAAAEgEQAFgEAAgHQAAgGgFgFQgEgDgHAAIgXAAg");
	this.shape_1.setTransform(77,57.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaA2QgGgFgDgHQgCgHgBgJIAAg0QAAgRAMgLQALgKAPAAQAQAAALAKQAFAFADAHQAEAIAAAIIAAA0QAAAJgEAHQgDAHgFAFQgLAKgQAAQgPAAgLgKgAgKgmQgEAFAAAIIAAAzQAAAIAEAFQAFAEAFAAQAGAAAFgEQAEgFAAgIIAAgzQAAgIgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_2.setTransform(66,57.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA2QgFgEgDgIQgDgHgBgJQAAgKAFgHQAFgHAGgDQgGgEgEgGQgCgDgBgFIgBgIQAAgIADgIQADgGAGgFQAFgFAHgCQAHgCAHgBQAIABAHACQAHACAFAFQAGAFACAGQADAIAAAIIgBAIIgCAIQgFAGgFAEQAGADAFAHQAFAHAAAKQAAATgMAJQgMAKgRAAQgQAAgMgKgAgGAJQgDACgCADQgFAEAAAIQAAAHAFAGQAFAEAGAAQAHAAAFgEQAFgGAAgHQAAgIgFgEQgFgGgHAAIgGABgAgKgmQgEAFgBAGQABAIAEAEQAFAEAFABQAGgBAFgEQAEgEABgIQgBgGgEgFQgFgFgGAAQgFAAgFAFg");
	this.shape_3.setTransform(56.3,57.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOA+QgHgCgGgFQgFgEgEgIQgDgHAAgJIAXAAQAAAIAFAFQAFADAGAAQAHAAAFgEQADgCABgEIABgIIgBgHQgBgDgDgCQgCgDgEgBQgDgBgDAAIgCAAIAAgSIACAAQAHAAAEgFQAEgEAAgHQAAgIgEgEQgFgFgGAAQgFAAgFAFQgEADAAAIIgYAAQABgRALgKQAFgFAHgCQAHgCAHgBQAIABAHACQAHADAGAEQAFAFADAHQADAHAAAIIgBAJIgDAHQgEAHgHADQAHACAFAHQACAEABAEIABAKQAAAJgDAHQgCAIgGAEQgGAFgHADQgIACgIAAQgGAAgIgCg");
	this.shape_4.setTransform(46.4,57.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAYA/IgYgsIgXAsIgdAAIAog/Iglg/IAcAAIAVAqIAWgqIAcAAIglA/IAoA/g");
	this.shape_5.setTransform(36.2,57.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAKIAAgTIA1AAIAAATg");
	this.shape_6.setTransform(26.9,58.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAVA/IAAg1IgpAAIAAA1IgZAAIAAh+IAZAAIAAA1IApAAIAAg1IAZAAIAAB+g");
	this.shape_7.setTransform(17,57.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA/Igqh+IAaAAIAYBSIAZhSIAaAAIgqB+g");
	this.shape_8.setTransform(5.6,57.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAgA/IAAhIIgYAuIgPAAIgYguIAABIIgZAAIAAh+IAYAAIAgBEIAhhEIAZAAIAAB+g");
	this.shape_9.setTransform(-6.9,57.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AATA/IgXgyIgSAAIAAAyIgZAAIAAh+IAwAAQAJAAAIADQAJADAFAGQAFAFADAIQACAGABAIQgBAHgBAGQgCAEgDAFQgHAGgKAEIAdA3gAgWgHIAWAAQAHABAGgFIADgGIABgHIgBgGIgDgGQgGgEgHAAIgWAAg");
	this.shape_10.setTransform(-23.7,57.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgpA/IAAh+IBTAAIAAAXIg6AAIAAAeIAxAAIAAAUIgxAAIAAAfIA6AAIAAAWg");
	this.shape_11.setTransform(-35.2,57.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpA/IAAh+IBTAAIAAAXIg6AAIAAAeIAxAAIAAAUIgxAAIAAAfIA6AAIAAAWg");
	this.shape_12.setTransform(-46.1,57.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaA/IgxhMIAABMIgZAAIAAh+IAXAAIAxBNIAAhNIAYAAIAAB+g");
	this.shape_13.setTransform(-58.1,57.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRA9QgJgEgIgGQgHgJgDgLQgCgLAAgUQAAgNACgRQADgMAHgHQAIgHAJgFQAIgDAJAAQAKAAAIADQAJAFAHAHQAJAIACALQACARAAANIgCAfQgCALgJAJQgHAGgJAEQgIADgKAAQgJAAgIgDgAgIgnQgEABgDADIgCAFIgCAGIgCAKIAAAOIAAAPIACAJIABAHIADAEIAHAGQAFABADAAQAFAAAEgBQADgCAEgEIACgEIACgHIABgJIAAgPIAAgOIgBgKIgCgGIgCgFQgHgGgJgBQgDABgFACg");
	this.shape_14.setTransform(-70.3,57.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgLA/IAAh+IAXAAIAAB+g");
	this.shape_15.setTransform(-78.8,57.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgtA/IAAh+IAwAAQAKAAAIADQAIADAFAGQAGAGADAHQACAHAAAJQAAAHgCAIQgDAHgGAEQgFAFgIADQgIADgKABIgWAAIAAAvgAgTgFIAVAAQAJAAAFgFQACgCABgEQABgDAAgDQAAgFgBgDQgBgDgCgDQgFgEgJAAIgVAAg");
	this.shape_16.setTransform(-86.7,57.4);

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



(lib.CT1222_Pioneer_300x250 = function(mode,startPosition,loop) {
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
	this.clickthrough_btn.setTransform(150,125,1.181,1.316,0,0,0,127,95);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.CT1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(181));

	// CTA
	this.instance = new lib.CTAlockup();
	this.instance.setTransform(150,202);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).to({y:125},4).wait(10));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_167 = new cjs.Graphics().p("A41ThIAAtNMAxrAAAIAANNg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_graphics_167,x:152,y:125}).wait(14));

	// Only 29.96
	this.instance_1 = new lib.Onlyprice();
	this.instance_1.setTransform(150,214);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(115).to({_off:false},0).to({y:125},4).wait(48).to({y:49},4).to({_off:true},1).wait(9));

	// HEAD wirelessly
	this.instance_2 = new lib.HEADgetblue();
	this.instance_2.setTransform(427,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(76).to({_off:false},0).to({x:150},4).wait(35).to({y:-15},4).wait(62));

	// bluetooth
	this.instance_3 = new lib.Bluetooth();
	this.instance_3.setTransform(194,143,0.297,0.297);

	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(212.7,160.4);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(212.7,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},48).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_3}]},3).to({state:[]},4).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},4).to({state:[]},1).wait(100));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(76).to({_off:false},0).to({_off:true,y:300},4).wait(101));

	// phone
	this.instance_6 = new lib.TunerPhone();
	this.instance_6.setTransform(150,226);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(41).to({_off:false},0).to({y:125},5).wait(30).to({y:264},4).to({_off:true},1).wait(100));

	// HEAD quality that
	this.instance_7 = new lib.HEADover();
	this.instance_7.setTransform(350.4,238.9,2.5,2.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,y:125},4).wait(69).to({y:108},4).wait(62));

	// HEAD quality
	this.instance_8 = new lib.HEADquality();
	this.instance_8.setTransform(150.8,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(42).to({alpha:0},4).to({_off:true},1).wait(134));

	// deck
	this.instance_9 = new lib.deck();
	this.instance_9.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(181));

	// bkgd
	this.instance_10 = new lib.CT1222_XOvision_300x250_bkgd();

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(181));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;