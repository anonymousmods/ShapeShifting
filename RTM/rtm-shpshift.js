
//Made by anonymous... We are anonymous... a team of pro hackers and coders around all continents and sharing our mod as it is yours will have great consequences your small mind and little IQ wouldn't even imagine it

var Runnable = java.lang.Runnable;
var PopupWindow = android.widget.PopupWindow;
var Button = android.widget.Button; 
var Widget = android.widget;
var LinearLayout = Widget.LinearLayout;
var RelativeLayout = Widget.RelativeLayout;
var ViewGroup = android.view.ViewGroup;
var Gravity = android.view.Gravity;
var View = android.view.View;
var AlertDialog = android.app.AlertDialog;
var DialogInterface = android.content.DialogInterface;
var IO = java.io;
var File = IO.File;
var FileOutputStream = IO.FileOutputStream;
var String = java.lang.String;
var Environment = android.os.Environment;
var BufferedReader = IO.BufferedReader;
var FileReader = IO.FileReader;
var StringBuilder = java.lang.StringBuilder;
var Dialog = android.app.Dialog; 
var ScrollView = android.widget.ScrollView;
var EditText = Widget.EditText;
var ImageView = android.widget.ImageView;
var Color = android.graphics.Color;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var ToggleButton = android.widget.ToggleButton;

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var GUI = new Widget.PopupWindow();

var shapeshifting = 0;
var victimrender;

var witherRenderer = Renderer.createHumanoidRenderer();
addWitherToRenderer(witherRenderer);
var ballRenderer = Renderer.createHumanoidRenderer();
addBallToRenderer(ballRenderer);

var golemRenderer = Renderer.createHumanoidRenderer();

addGolemToRenderer(golemRenderer);

var block1 = 86;
var block2 = 42;

function newLevel(){

ctx.runOnUiThread(new Runnable({

run:function(){

try{

var layout = new LinearLayout(ctx);
var disguisebtn = new Button(ctx);

disguisebtn.setText("Disguise");

layout.addView(disguisebtn);
layout.setOrientation(LinearLayout.VERTICAL);

GUI.setContentView(layout);
GUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | Gravity.RIGHT, 130, 0);

disguisebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

opendisguises();

}

}));

}catch(e){

print("Error: " + e);

}

}

}));

}

function opendisguises(){

ctx.runOnUiThread(new Runnable({

run:function(){

try{

var disguisela = new LinearLayout(ctx);
var disguisedi = new Dialog(ctx);
var scroll = new ScrollView(ctx);

var shpshift = new Button(ctx);
var pigbtn = new Button(ctx);
var cowbtn = new Button(ctx);
var chickenbtn = new Button(ctx);
var sheepbtn = new Button(ctx);
var zombiebtn = new Button(ctx);
var skeletonbtn = new Button(ctx);
var spiderbtn = new Button(ctx);
var creeperbtn = new Button(ctx);
var zombiepigbtn = new Button(ctx);
var irongolembtn = new Button(ctx);
var endermanbtn = new Button(ctx);
var witherbtn = new Button(ctx);
var invisiblebtn = new Button(ctx);
var playerbtn = new Button(ctx);

disguisela.setOrientation(LinearLayout.VERTICAL);

pigbtn.setText("Pig");
cowbtn.setText("Cow");
chickenbtn.setText("Chicken");
sheepbtn.setText("Sheep");
zombiebtn.setText("Zombie");
skeletonbtn.setText("Skeleton");
spiderbtn.setText("Spider");
creeperbtn.setText("Creeper");
zombiepigbtn.setText("Zombie Pigman");
irongolembtn.setText("Iron Golem");
endermanbtn.setText("Enderman");
witherbtn.setText("Wither");
invisiblebtn.setText("Invisible");
playerbtn.setText("Undisguise");

if(shapeshifting==1){

shpshift.setText("Shape Shifting On");

}else if(shapeshifting==0){

shpshift.setText("Shape Shifting Off");

}

pigbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
pigbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
cowbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
cowbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
chickenbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
chickenbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
sheepbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
sheepbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
zombiebtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
zombiebtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
skeletonbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
skeletonbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
spiderbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
spiderbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
creeperbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
creeperbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
zombiepigbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
zombiepigbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
irongolembtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
irongolembtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
endermanbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
endermanbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
witherbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
witherbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
invisiblebtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
invisiblebtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
playerbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
playerbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

disguisela.addView(shpshift);
disguisela.addView(pigbtn);
disguisela.addView(cowbtn);
disguisela.addView(chickenbtn);
disguisela.addView(sheepbtn);
disguisela.addView(zombiebtn);
disguisela.addView(skeletonbtn);
disguisela.addView(spiderbtn);
disguisela.addView(creeperbtn);
disguisela.addView(zombiepigbtn);
//disguisela.addView(irongolembtn);
//disguisela.addView(endermanbtn);
disguisela.addView(witherbtn);
disguisela.addView(invisiblebtn);
disguisela.addView(playerbtn);

scroll.addView(disguisela);

disguisedi.setContentView(scroll);
disguisedi.setTitle("Render Types");

disguisedi.show()

shpshift.setOnClickListener(new View.OnClickListener( {

onClick:function(){

if(shapeshifting==0){

shapeshifting = 1;
//shpshift.setText("Shape Shifting On");
disguisedi.dismiss();
clientMessage("Shape Shifting On");

} else if(shapeshifting==1){

shapeshifting = 0;
//shpshift.setText("Shape Shifting Off");
clientMessage("Shape Shifting Off");
disguisedi.dismiss();

}

}

}));

pigbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 8);
Entity.setMobSkin(getPlayerEnt(), "mob/pig.png");
clientMessage("You are a pig.");
disguisedi.dismiss();

}

}));

cowbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 7);
Entity.setMobSkin(getPlayerEnt(), "mob/cow.png");
clientMessage("You are a cow.");
disguisedi.dismiss();

}

}));

chickenbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 6);
Entity.setMobSkin(getPlayerEnt(), "mob/chicken.png");
clientMessage("You are a chicken.");
disguisedi.dismiss();

}

}));

sheepbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

sheepcolorpick();
disguisedi.dismiss();

}

}));

zombiebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 11);
Entity.setMobSkin(getPlayerEnt(), "mob/zombie.png");
clientMessage("You are a zombie.");
disguisedi.dismiss();
Entity.setCarriedItem(getPlayerEnt(), 0, 0);

}

}));

skeletonbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 12);
Entity.setMobSkin(getPlayerEnt(), "mob/skeleton.png");
Entity.setCarriedItem(getPlayerEnt(), 261, 1);
addItemInventory(262,64);
clientMessage("You are a skeleton.");
disguisedi.dismiss();

}

}));

spiderbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 13);
Entity.setMobSkin(getPlayerEnt(), "mob/spider.png");
clientMessage("You are a spider.");
disguisedi.dismiss();

}

}));

creeperbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 14);
Entity.setMobSkin(getPlayerEnt(), "mob/creeper.png");
clientMessage("You are a creeper.");
disguisedi.dismiss();

}

}));

zombiepigbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 3);
Entity.setMobSkin(getPlayerEnt(), "mob/pigzombie.png");
Entity.setCarriedItem(getPlayerEnt(), 283, 1);
clientMessage("You are a zombiepigman.");
disguisedi.dismiss();

}

}));

irongolembtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

var spider = Entity.setRenderType(getPlayerEnt(), 11);
clientMessage("You are an iron golem.");
disguisedi.dismiss();
hr = 0;
Entity.setRenderType(getPlayerEnt(), golemRenderer.renderType);
Entity.setMobSkin(getPlayerEnt(), "mob/golem.png");

}

}));

endermanbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 11);
clientMessage("You are an enderman.");
disguisedi.dismiss();

}

}));

witherbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), witherRenderer.renderType);
Entity.setMobSkin(getPlayerEnt(), "mob/wither.png");
Entity.setCarriedItem(getPlayerEnt(), 0, 0);
clientMessage("You are a wither.");
disguisedi.dismiss();

}

}));

invisiblebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 5);
clientMessage("You are invisibe.");
disguisedi.dismiss();

}

}));

playerbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){

Entity.setRenderType(getPlayerEnt(), 3);
Entity.setMobSkin(getPlayerEnt(), "mob/char.png");
clientMessage("You are undisguised.");
disguisedi.dismiss();

}

}));


}catch(e){

print("Error: " + e);

}

}

}));

}

function sheepcolorpick(){

ctx.runOnUiThread(new Runnable({

run:function(){

try{

var sheepcolordi = new Dialog(ctx);
var sheepcolorla = new LinearLayout(ctx);
var scroll = new ScrollView(ctx);

var whitebtn = new Button(ctx);
var orangebtn = new Button(ctx);
var lpurplebtn = new Button(ctx);
var lbluebtn = new Button(ctx);
var lyellowbtn = new Button(ctx);
var lgreenbtn = new Button(ctx);
var pinkbtn = new Button(ctx);
var dgreybtn = new Button(ctx);
var greybtn = new Button(ctx);
var turqoisebtn = new Button(ctx);
var purplebtn = new Button(ctx);
var bluebtn = new Button(ctx);
var brownbtn = new Button(ctx);
var greenbtn = new Button(ctx);
var redbtn = new Button(ctx);
var blackbtn = new Button(ctx);

sheepcolorla.setOrientation(LinearLayout.VERTICAL);

sheepcolorla.addView(whitebtn);
sheepcolorla.addView(orangebtn);
sheepcolorla.addView(lpurplebtn);
sheepcolorla.addView(lbluebtn);
sheepcolorla.addView(lyellowbtn);
sheepcolorla.addView(lgreenbtn);
sheepcolorla.addView(pinkbtn);
sheepcolorla.addView(dgreybtn);
sheepcolorla.addView(greybtn);
sheepcolorla.addView(turqoisebtn);
sheepcolorla.addView(purplebtn);
sheepcolorla.addView(bluebtn);
sheepcolorla.addView(brownbtn);
sheepcolorla.addView(greenbtn);
sheepcolorla.addView(redbtn);
sheepcolorla.addView(blackbtn);

whitebtn.setText("White");
orangebtn.setText("Orange");
lpurplebtn.setText("Light Purple");
lbluebtn.setText("Light Blue");
lyellowbtn.setText("Yellow");
lgreenbtn.setText("Light Green");
pinkbtn.setText("Pink");
dgreybtn.setText("Dark Grey");
greybtn.setText("Grey");
turqoisebtn.setText("Turqoise");
purplebtn.setText("Purple");
bluebtn.setText("Blue");
greenbtn.setText("Green");
brownbtn.setText("Brown");
redbtn.setText("Red");
blackbtn.setText("Black");


scroll.addView(sheepcolorla);

sheepcolordi.setContentView(scroll);
sheepcolordi.setTitle("Sheep Color");

sheepcolordi.show()

whitebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_0.png");

sheepcolordi.dismiss();

}

}));

orangebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_1.png");

sheepcolordi.dismiss();

}

}));

lpurplebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_2.png");

sheepcolordi.dismiss();

}

}));

lbluebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_3.png");

sheepcolordi.dismiss();

}

}));

lyellowbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_4.png");

sheepcolordi.dismiss();

}

}));

lgreenbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_5.png");

sheepcolordi.dismiss();

}

}));

pinkbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_6.png");

sheepcolordi.dismiss();

}

}));

dgreybtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_7.png");

sheepcolordi.dismiss();

}

}));

greybtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_8.png");

sheepcolordi.dismiss();

}

}));

turqoisebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_9.png");

sheepcolordi.dismiss();

}

}));

purplebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_10.png");

sheepcolordi.dismiss();

}

}));

bluebtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_11.png");

sheepcolordi.dismiss();

}

}));

brownbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_12.png");

sheepcolordi.dismiss();

}

}));

greenbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_13.png");

sheepcolordi.dismiss();

}

}));

redbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_14.png");

sheepcolordi.dismiss();

}

}));

blackbtn.setOnClickListener(new View.OnClickListener({

onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_15.png");

sheepcolordi.dismiss();

}

}));

}catch(e){

print("Error: " + e);

}

}

}));

}

function leaveGame(){

ctx.runOnUiThread(new Runnable(){

run: function(){

if(GUI != null){

GUI.dismiss()

}

}

});

}

function deathHook(murderer, victim){

if(shapeshifting==1 && murderer==Player.getEntity()){

Entity.setRenderType(Player.getEntity(), Entity.getRenderType(victim));

if(Entity.getRenderType(victim)==6){

Entity.setMobSkin(getPlayerEnt(), "mob/chicken.png");

}else if(Entity.getRenderType(victim)==7){

Entity.setMobSkin(getPlayerEnt(), "mob/cow.png");

}else if(Entity.getRenderType(victim)==8){

Entity.setMobSkin(getPlayerEnt(), "mob/pig.png");

}else if(Entity.getRenderType(victim)==9){

Entity.setMobSkin(getPlayerEnt(), "mob/sheep_0.png");

}else if(Entity.getRenderType(victim)==11){

Entity.setMobSkin(getPlayerEnt(), "mob/zombie.png");

}else if(Entity.getRenderType(victim)==12){

Entity.setMobSkin(getPlayerEnt(), "mob/skeleton.png");

}else if(Entity.getRenderType(victim)==13){

Entity.setMobSkin(getPlayerEnt(), "mob/spider.png");

}else if( Entity.getRenderType(victim)==14){

Entity.setMobSkin(getPlayerEnt(), "mob/creeper.png");

}else if(Entity.getRenderType(victim)==15){

Entity.setMobSkin(getPlayerEnt(), "mob/pigzombie.png");

}

}

}

function addWitherToRenderer(renderer)
{
var model = renderer.getModel();
var body = model.getPart("body").clear().setTextureOffset(32, 16);
body.addBox(-10, 0.5, 1, 19, 2, 4, 0);
body.addBox(-13, -6.5, -1, 7, 6, 6, 0);
body.addBox(6, -6.5, -1, 7, 6, 6, 0);
body.addBox(-2, 0, 2.5, 4, 14, 4, 0);
body.addBox(-6, 4, 2.7, 11, 2.5, 2, 0);
body.addBox(-6, 7, 2.7, 11, 2.5, 2, 0);
body.addBox(-6, 10, 2.7, 11, 2.5, 2, 0);
body.addBox(-2, 10, 4, 3, 6, 3, 0);
body.addBox(-2, 12, 6, 3, 4, 3, 0);
model.getPart("rightArm").clear()
model.getPart("leftArm").clear()
model.getPart("leftLeg").clear()
model.getPart("rightLeg").clear()
}

function addBallToRenderer(renderer)
{
var model2 = renderer.getModel();
model2.getPart("body").clear();
model2.getPart("rightArm").clear()
model2.getPart("leftArm").clear()
model2.getPart("leftLeg").clear()
model2.getPart("rightLeg").clear()
}

//thanks to tengus

function addGolemToRenderer(renderer)
 {
	var var2 = 0;
	
	var model = renderer.getModel();
	
	var bipedBody = model.getPart("body").clear().setTextureOffset(56, 0);
	
	bipedBody.addBox(-6.0, -16.0, -2.0, 20, 15, 10, var2);
	
	 bipedBody.addBox(-2.0, -1.0, -2.0, 12, 5, 10, var2);
	
	
	var bipedHead =
model.getPart("head").clear().setTextureOffset(56, 0);

	 bipedBody.addBox(-1.0, -27.0, -3.0, 10, 12, 10, var2);
	 
	 bipedBody.addBox(2.6, -18.8, -4.5, 3, 5.5, 3, var2);
	 
	 
	 var bipedRightArm = model.getPart("rightArm").clear().setTextureOffset(56, 0);
	
	bipedRightArm.addBox(-7.0, -16.0, -1.0, 6, 37, 8, var2);
	
 var bipedLeftArm = model.getPart("leftArm").clear().setTextureOffset(56, 0);
 
	bipedLeftArm.addBox(9.0, -16.0, -1.0, 6, 37, 8, var2);
	
	var bipedRightLeg = model.getPart("rightLeg").clear().setTextureOffset(56, 0);
	
	bipedRightLeg.addBox(8.0, -8.0, -1.0, 6.5, 20, 9, var2);
	
	var bipedLeftLeg = model.getPart("leftLeg").clear().setTextureOffset(56, 0);
	
	bipedLeftLeg.addBox(-6, -8.0, -1.0, 6.5, 20, 9, var2);
	
}
