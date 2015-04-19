
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

var time_timers = [];

var time_nextId = 0;

var shapeshifting = 0;
var victimrender;
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var player = getPlayerEnt();
var iswither = 0;
var isspider = 0;
var ismob = 0;
var flyingon = false;
var btnview = 0;
var layout;
var fbutton;
var blowupbtn;
var playerFlySpeed = 0.3;
var countdown = 0;
var flycountdown = 0;
var disguise;
var day;
var night;
var cow;
var chicken;
var pig;
var sheep;
var villager;
var zombie;
var spider;
var creeper;
var skeleton;
var pigzombie;
var silverfish;
var steve;
var flying = 0;
var fall;
var jumpon = 0;
var explodecountdown = 25;
var age;

var fire=-1;
var ball;
var yaw;
var pitch;
var dirx;
var diry;
var dirz;
var count=-1;


var witherRenderer = Renderer.createHumanoidRenderer();
addWitherToRenderer(witherRenderer);
var ballRenderer = Renderer.createHumanoidRenderer();
addBallToRenderer(ballRenderer);


var blazeRenderType = Renderer.createHumanoidRenderer();
addBlazeRenderType(blazeRenderType);


var golemRenderer = Renderer.createHumanoidRenderer();


addGolemToRenderer(golemRenderer);


var block1 = 86;
var block2 = 42;


function setTimeout(func, ticks) { 
var id = time_nextId++; 
time_timers.push([id, ticks, func, -1]); 	
return id; 
}


function setInterval(func, ticks) {
var id = time_nextId++; 	
time_timers.push([id, ticks, func, ticks]); 	
return id; 
} 

function clearTimeout(id) {
for (var i = time_timers.length - 1; 
i >= 0; --i) { 		
var t = time_timers[i]; 		
if (t[0] == id) { 			
time_timers.splice(i, 1); 			
break; 		
} 	
} 
} 

function clearInterval(id) { 	
clearTimeout(id); 
} 

function time_runTimers() { 	
for (var i = time_timers.length - 1; 
i >= 0; --i) { 		
var t = time_timers[i]; 		
t[1]--; 		
if (t[1] == 0) { 			
t[2](); 			
if (t[3] == -1) { 				
time_timers.splice(i, 1); 			
} else { 				
t[1] = t[3]; 			
} 		
} 	
} 
}


function newLevel(){

explodecountdown = 25;
flyingon = false;
flying = 0;
disguise = steve;
stickonwalls = 0;


ctx.runOnUiThread(new Runnable({


run:function(){


try{


var disguisebtn = new Button(ctx);
var flybtn = new Button(ctx);

layout = new LinearLayout(ctx);
fbutton = new Button(ctx);
blowupbtn = new Button(ctx);

disguisebtn.setText("Disguise");
flybtn.setText("Fly");
fbutton.setText(" Special ");
blowupbtn.setText("BlowUp");


layout.addView(disguisebtn);
layout.addView(fbutton);
fbutton.setVisibility(View.INVISIBLE);
layout.addView(blowupbtn);
blowupbtn.setVisibility(View.INVISIBLE);
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


fbutton.setOnClickListener(new android.view.View.OnClickListener(
{
onClick: function(viewarg)
{


if(Entity.getRenderType(getPlayerEnt())==5){


setVelY(getPlayerEnt(),0.5);


}


if(Entity.getRenderType(getPlayerEnt())==15){


if(stickonwalls==0){
Entity.setSneaking(getPlayerEnt(), true);
stickonwalls=1;
}else if(stickonwalls==1){
stickonwalls=0;
Entity.setSneaking(getPlayerEnt(), false);
}


}


if(Entity.getRenderType(getPlayerEnt())==17){


Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.fuse", 100, 30);

setTimeout(explodee, 40)

}


if(Entity.getRenderType(getPlayerEnt())==witherRenderer.renderType){
pitch = ((Entity.getPitch(getPlayerEnt()) + 90) * Math.PI)/180;
yaw = ((Entity.getYaw(getPlayerEnt()) + 90) * Math.PI)/180;
dirx = Math.sin(pitch) * Math.cos(yaw);
diry = Math.sin(pitch) * Math.sin(yaw);
dirz = Math.cos(pitch);
ball=Level.spawnMob(Player.getX()+dirx,Player.getY()+dirz,Player.getZ()+diry,12, "mob/wither.png");
count=42;
Entity.setHealth(ball,100);
Entity.setRenderType(ball, ballRenderer.renderType);
setVelX(ball,3*dirx); 
setVelY(ball,3*dirz); 
setVelZ(ball,3*diry);
}
}
}));


flybtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


if(flyingon==false){
fly()
flycountdown = 1;
}else if(flyingon==true){
flyingon = false;
flycountdown = -1;
}


}


}));


}catch(e){


print("Error: " + e);


}


}


}));


}

function explodee(){


//Level.setSpawn(Player.getX(),Player.getY(),Player.getZ());


//Player.setHealth(0);


Level.explode(getPlayerX(), getPlayerY(), getPlayerZ(), 3);
Player.setHealth(50);


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
var villagerbtn = new Button(ctx);
var zombiebtn = new Button(ctx);
var skeletonbtn = new Button(ctx);
var spiderbtn = new Button(ctx);
var creeperbtn = new Button(ctx);
var zombiepigbtn = new Button(ctx);
var irongolembtn = new Button(ctx);
var endermanbtn = new Button(ctx);
var silverfishbtn = new Button(ctx);
var wolfbtn = new Button(ctx);
var catbtn = new Button(ctx);
var witherbtn = new Button(ctx);
var blazebtn = new Button(ctx);
var invisiblebtn = new Button(ctx);
var playerbtn = new Button(ctx);


disguisela.setOrientation(LinearLayout.VERTICAL);


pigbtn.setText("Pig");
cowbtn.setText("Cow");
chickenbtn.setText("Chicken");
sheepbtn.setText("Sheep");
villagerbtn.setText("Villager");
zombiebtn.setText("Zombie");
skeletonbtn.setText("Skeleton");
spiderbtn.setText("Spider");
creeperbtn.setText("Creeper");
zombiepigbtn.setText("Zombie Pigman");
irongolembtn.setText("Iron Golem");
endermanbtn.setText("Enderman");
wolfbtn.setText("Wolf");
catbtn.setText("Oscelot");
witherbtn.setText("Wither");
blazebtn.setText("Blaze");
silverfishbtn.setText("Silverfish");
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
villagerbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
villagerbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
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
silverfishbtn.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
silverfishbtn.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
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
disguisela.addView(villagerbtn);
//disguisela.addView(villagerbtn);
disguisela.addView(zombiebtn);
disguisela.addView(skeletonbtn);
disguisela.addView(spiderbtn);
disguisela.addView(creeperbtn);
disguisela.addView(zombiepigbtn);
//disguisela.addView(wolfbtn);
//disguisela.addView(catbtn); 
//disguisela.addView(irongolembtn);
disguisela.addView(endermanbtn);
disguisela.addView(silverfishbtn);
disguisela.addView(witherbtn);
//disguisela.addView(blazebtn);
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
shpshift.setText("Shape Shifting On");
disguisedi.dismiss();
clientMessage("Shape Shifting On");
Entity.setHealth(getPlayerEnt(), 20);
Entity.setSneaking(getPlayerEnt(), false);

if(Entity.getRenderType(getPlayerEnt())==3){

Entity.setAnimalAge(getPlayerEnt(), 0);

}


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


} else if(shapeshifting==1){


shapeshifting = 0;

shpshift.setText("Shape Shifting Off");
clientMessage("Shape Shifting Off");
disguisedi.dismiss();
Entity.setHealth(getPlayerEnt(), 20);
Entity.setSneaking(getPlayerEnt(), false);

if(Entity.getRenderType(getPlayerEnt())==3){

Entity.setAnimalAge(getPlayerEnt(), 0);

}


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}


}));


pigbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 8);
Entity.setMobSkin(getPlayerEnt(), "mob/pig.png");
clientMessage("You are a pig.");
disguisedi.dismiss();
btnview = 0;
disguise = pig;
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


cowbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 6);
Entity.setMobSkin(getPlayerEnt(), "mob/cow.png");
clientMessage("You are a cow.");
disguisedi.dismiss();
btnview = 0;
diguise = cow;
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


chickenbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 5);
Entity.setMobSkin(getPlayerEnt(), "mob/chicken.png");
clientMessage("You are a chicken.");
disguisedi.dismiss();
btnview = 0;
disguise = chicken;
countdown = 500;
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.VISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


sheepbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


sheepcolorpick();
disguise = sheep;
disguisedi.dismiss();
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));

zombiebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 13);
Entity.setMobSkin(getPlayerEnt(), "mob/zombie.png");
clientMessage("You are a zombie.");
disguisedi.dismiss();
Entity.setSneaking(getPlayerEnt(), false);
Entity.setCarriedItem(getPlayerEnt(), 0, 0);
btnview = 0;
disguise = zombie;
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


skeletonbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 14);
Entity.setMobSkin(getPlayerEnt(), "mob/skeleton.png");
disguise = skeleton;
Entity.setSneaking(getPlayerEnt(), false);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


if(getCarriedItem()!=0){
Entity.setCarriedItem(getPlayerEnt(), 261, 1);
}else if(getCarriedItem()==0){
addItemInventory(261,1);
}


addItemInventory(262,64);
clientMessage("You are a skeleton.");
disguisedi.dismiss();
btnview = 0;
Entity.setHealth(getPlayerEnt(), 20);


}


}));


spiderbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 15);
Entity.setMobSkin(getPlayerEnt(), "mob/spider.png");
clientMessage("You are a spider.");
disguisedi.dismiss();
btnview = 0;
disguise = spider;
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.VISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


creeperbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 17);
Entity.setMobSkin(getPlayerEnt(), "mob/creeper.png");
Entity.setSneaking(getPlayerEnt(), false);
clientMessage("You are a creeper.");
disguisedi.dismiss();
disguise = creeper;
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.VISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


zombiepigbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 13);
Entity.setMobSkin(getPlayerEnt(), "mob/pigzombie.png");
disguise = pigzombie;
Entity.setSneaking(getPlayerEnt(), false);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


if(getCarriedItem()!=0){
Entity.setCarriedItem(getPlayerEnt(), 283, 1);
}else if(getCarriedItem()==0){
addItemInventory(283,1);
}


clientMessage("You are a zombiepigman.");
disguisedi.dismiss();
btnview = 0;
Entity.setHealth(getPlayerEnt(), 20);


}


}));

silverfishbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 16);
Entity.setMobSkin(getPlayerEnt(), "mob/silverfish.png");
clientMessage("You are a silverfish.");
disguisedi.dismiss();
btnview = 0;
disguise = silverfish;
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));

wolfbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), WolfRenderType.renderType);
Entity.setHealth(getPlayerEnt(), 20);
disguisedi.dismiss();
Entity.setMobSkin(getPlayerEnt(), "mob/wolf.png");


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


catbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), OcelotRenderType.renderType);
Entity.setHealth(getPlayerEnt(), 20);
disguisedi.dismiss();
Entity.setMobSkin(getPlayerEnt(), "mob/oscelot.png");


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


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
btnview = 0;


}


}));


endermanbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 19);
Entity.setMobSkin(getPlayerEnt(), "mob/enderman.png"); 
clientMessage("You are an enderman.");
disguisedi.dismiss();
btnview = 0;


Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


witherbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


disguisedi.dismiss();


Entity.setRenderType(getPlayerEnt(), witherRenderer.renderType);
Entity.setMobSkin(getPlayerEnt(), "mob/wither.png");
Entity.setCarriedItem(getPlayerEnt(), 0, 0);
Entity.setSneaking(getPlayerEnt(), false);
clientMessage("You are a wither.");
btnview = 1;


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.VISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


blazebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), blazeRenderType.renderType); 
Entity.setCarriedItem(getPlayerEnt(), 0, 0);
Entity.setSneaking(getPlayerEnt(), false);
Entity.setMobSkin(getPlayerEnt(), "mob/blaze.png");
clientMessage("You are blaze");
disguisedi.dismiss();
btnview = 0;


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.VISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


invisiblebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 1);
clientMessage("You are invisibe.");
disguisedi.dismiss();
btnview = 0;
Entity.setSneaking(getPlayerEnt(), false);
Entity.setHealth(getPlayerEnt(), 20);


ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


}


}));


playerbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){


Entity.setRenderType(getPlayerEnt(), 21);
Entity.setMobSkin(getPlayerEnt(), "mob/char.png");
Entity.setSneaking(getPlayerEnt(), false);
clientMessage("You are undisguised.");
disguisedi.dismiss();
btnview = 0;
Entity.setHealth(getPlayerEnt(), 20);

ctx.runOnUiThread(new Runnable({
run:function(){
try{
fbutton.setVisibility(View.INVISIBLE);
}catch(e){
print("Error: "+e);
}
}
}));


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
btnview = 0;
sheepcolordi.dismiss();


}


}));


orangebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_1.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


lpurplebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_2.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


lbluebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_3.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


lyellowbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_4.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


lgreenbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_5.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


pinkbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_6.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


dgreybtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_7.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


greybtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_8.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


turqoisebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_9.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


purplebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_10.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


bluebtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_11.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


brownbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_12.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


greenbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_13.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


redbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_14.png");
btnview = 0;
sheepcolordi.dismiss();


}


}));


blackbtn.setOnClickListener(new View.OnClickListener({


onClick:function(){
Entity.setRenderType(getPlayerEnt(), 9);
Entity.setMobSkin(getPlayerEnt(), "mob/sheep_15.png");
btnview = 0;
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


flyingon = 0;
stickonwalls = 0;
flying = 0;
shapeshifting = 0;
Entity.setAnimalAge(getPlayerEnt(), 0);


ctx.runOnUiThread(new Runnable(){


run:function(){


if(GUI!=null){


GUI.dismiss()


}


}


});


}


function deathHook(murderer, victim){


if(shapeshifting==1 && murderer==Player.getEntity()){


Entity.setRenderType(Player.getEntity(), Entity.getRenderType(victim));


if(Entity.getRenderType(victim)==5){


Entity.setMobSkin(getPlayerEnt(), "mob/chicken.png");


}else if(Entity.getRenderType(victim)==6){


Entity.setMobSkin(getPlayerEnt(), "mob/cow.png");


}else if(Entity.getRenderType(victim)==8){


Entity.setMobSkin(getPlayerEnt(), "mob/pig.png");


}else if(Entity.getRenderType(victim)==9){


Entity.setMobSkin(getPlayerEnt(), "mob/sheep_0.png");


}else if(Entity.getRenderType(victim)==13){


Entity.setMobSkin(getPlayerEnt(), "mob/zombie.png");


}else if(Entity.getRenderType(victim)==14){


Entity.setMobSkin(getPlayerEnt(), "mob/skeleton.png");


}else if(Entity.getRenderType(victim)==15){


Entity.setMobSkin(getPlayerEnt(), "mob/spider.png");


}else if( Entity.getRenderType(victim)==17){


Entity.setMobSkin(getPlayerEnt(), "mob/creeper.png");


}else if(Entity.getRenderType(victim)==13){


Entity.setMobSkin(getPlayerEnt(), "mob/pigzombie.png");


}


}


if(victim==Player.getEntity()){

if(Entity.getRenderType(getPlayerEnt())==5){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 365, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==6){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 363, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==8){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 319, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==9){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 35, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==13){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 288, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==14){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 352, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==15){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 287, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==17){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 289, 1, 0);


}else if(Entity.getRenderType(getPlayerEnt())==13){


Level.dropItem(Player.getX(), Player.getY(), Player.getZ(), 0, 266, 1, 0);


}


}


}


function fly(){


if(flyingon==true && flycountdown==1){


 flycountdown--;
        toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
        var player = getPlayerEnt();
        setVelX(player, playerFlySpeed * playerDir[0]);
        setVelY(player, playerFlySpeed * playerDir[1]);
        setVelZ(player, playerFlySpeed * playerDir[2]);


}


}


function destroyBlock(x, y, z) {


if(getTile(x, y, z)==2 && Entity.getRenderType(getPlayerEnt())==9){


var grassheal=Entity.getHealth(Player.getEntity());
grassheal++;

preventDefault();
setTile(x, y, z, 3);
Player.setHealth(grassheal);


}


} 


function toDirectionalVector(vector, yaw, pitch) {


        vector[0] = Math.cos(yaw) * Math.cos(pitch);
        vector[1] = Math.sin(pitch);
        vector[2] = Math.sin(yaw) * Math.cos(pitch);


}


function modTick(){

time_runTimers();

if(Entity.getRenderType(getPlayerEnt()) == witherRenderer.renderType){


        /*toDirectionalVector(playerDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
        var player = getPlayerEnt();
        setVelX(player, playerFlySpeed * playerDir[0]);
        setVelY(player, playerFlySpeed * playerDir[1]);
        setVelZ(player, playerFlySpeed * playerDir[2]);*/
 Player.setCanFly(1);
 Player.setFlying(1);
 Entity.setHealth(getPlayerEnt(), 100);
} else {

 Player.setCanFly(0);
 Player.setFlying(0);
}


var ltime = Level.getTime()-Math.floor(Level.getTime()/19200)*19200;
day = ltime < (19200/2);
night = day?0:8280;


if(Entity.getRenderType(getPlayerEnt())==5){


Player.setHealth(100);


/*if(Level.getTile(getPlayerX(), getPlayerY()-3, getPlayerZ())==0){


setVelY(getPlayerEnt(),-0.1);


}*/


countdown--;
var fws = Math.floor ((Math.random() * 3) + 1);


if(countdown==0&&fws==1)
{
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "mob.chicken1", 100, 30);
countdown = 100;
}else if(countdown==0&&fws==2)
{
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "mob.chicken2", 100, 30);
countdown = 100;
}else if(countdown==0&&fws==3)
{
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "mob.chicken3", 100, 30);
countdown = 100;
}


if(getCarriedItem()==288){


setVelY(getPlayerEnt(), -0.1)

}


}else if(Entity.getRenderType(getPlayerEnt())==6){


//cow sound


}else if(Entity.getRenderType(getPlayerEnt())==8){


//cow sound


}else if(Entity.getRenderType(getPlayerEnt())==9){


//sheep sound


}else if(Entity.getRenderType(getPlayerEnt())==13){


if(day){
Entity.setFireTicks(getPlayerEnt(), 9999);
}


}else if(Entity.getRenderType(getPlayerEnt())==14){


if(day){
Entity.setFireTicks(getPlayerEnt(), 9999);
}


}else if(Entity.getRenderType(getPlayerEnt())==15){


Player.setHealth(100);


if(Level.getTile(Player.getX(),Player.getY(),Player.getZ()+1)!=0 || Level.getTile(Player.getX(),Player.getY(),Player.getZ()-1)!=0 || Level.getTile(Player.getX()+1,Player.getY(),Player.getZ())!=0 || Level.getTile(Player.getX()-1,Player.getY(),Player.getZ())!=0){


setVelY(getPlayerEnt(),0.65);


}


}else if( Entity.getRenderType(getPlayerEnt())==17){



}else if(Entity.getRenderType(getPlayerEnt())==13){






}


if(count==0)
{
setVelX(ball,0.7*dirx); 
setVelY(ball,0.7*dirz); 
setVelZ(ball,0.7*diry);
count=-1;
Level.explode(Entity.getX(ball),Entity.getY(ball),Entity.getZ(ball),3);
Entity.remove(ball);
ball=-1
}
if(getTile(Entity.getX(ball),Entity.getY(ball)-1,Entity.getZ(ball))==0&&getTile(Entity.getX(ball),Entity.getY(ball)+1,Entity.getZ(ball))==0)
{
}
else
{
setVelX(ball,0.7*dirx); 
setVelY(ball,0.7*dirz); 
setVelZ(ball,0.7*diry);
Level.explode(Entity.getX(ball),Entity.getY(ball),Entity.getZ(ball),3);
Entity.remove(ball);
ball=-1;
count=-1;
}
if(getCarriedItem()==266){
fly()
}
}


function attackHook(attacker, victim){


if(shapeshifting==1 && attacker==getPlayerEnt()){


age = Entity.getAnimalAge(victim);

}


if(victim==getPlayerEnt()){


if(Entity.getRenderType(getPlayerEnt())==5){

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
 if(Player.getHealth<10)
{
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.burp", 100, 30);
}


}else if(Entity.getRenderType(victim)==6){


Entity.setMobSkin(getPlayerEnt(), "mob/cow.png");


}else if(Entity.getRenderType(victim)==8){


Entity.setMobSkin(getPlayerEnt(), "mob/pig.png");


}else if(Entity.getRenderType(victim)==9){


Entity.setMobSkin(getPlayerEnt(), "mob/sheep_0.png");


}else if(Entity.getRenderType(victim)==13){


Entity.setMobSkin(getPlayerEnt(), "mob/zombie.png");


}else if(Entity.getRenderType(victim)==14){


Entity.setMobSkin(getPlayerEnt(), "mob/skeleton.png");


}else if(Entity.getRenderType(victim)==15){


Entity.setMobSkin(getPlayerEnt(), "mob/spider.png");


}else if( Entity.getRenderType(victim)==17){


Entity.setMobSkin(getPlayerEnt(), "mob/creeper.png");


}else if(Entity.getRenderType(victim)==13){


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


function addBlazeRenderType(renderer) 
{


var var2 = 0;
var model = renderer.getModel();


var head = model.getPart("head").clear().setTextureOffset(56, 0);
var body = model.getPart("body").clear().setTextureOffset(56, 0);
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg").clear().setTextureOffset(56, 0);
var lLeg = model.getPart("leftLeg").clear().setTextureOffset(56, 0);


head.setTextureOffset(0, 0);
head.addBox(-6, -11, -4, 8, 8, 8, var2);


rArm.clear();
rArm.setTextureOffset(14, 22);
rArm.addBox(10, -6, -3, 2, 8, 2, var2);
rArm.addBox(-4, -10, -2, 2, 8, 2, var2);
rArm.addBox(5, 1, -3, 2, 8, 2, var2);


lArm.clear();
lArm.setTextureOffset(14, 22);
lArm.addBox(-10, 5, -3, 2, 8, 2, var2);
lArm.addBox(-14, 2, 1, 2, 8, 2, var2);
lArm.addBox(-8, -2, -5, 2, 8, 2, var2);
 
}


function addWolfRenderType(renderer)
{
 
var var2 = 0;
var model = renderer.getModel();
 
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
 
head.clear();
head.setTextureOffset(0,0);
head.addBox(0,9,-9,6,6,4,var2); //head
head.setTextureOffset(48,0);
head.addBox(0,7,-8,2,2,1,var2); //ear
head.setTextureOffset(48,0);
head.addBox(4,7,-8,2,2,1,var2); //ear
head.setTextureOffset(50,0);
head.addBox(1.5,12,-12,3,3,4,var2); //nose
 
body.clear();
body.setTextureOffset(30,12);
body.addBox(0,9,0,6,6,9,var2); //body
body.addBox(2,10,8,2,2,8,var2); //tail
body.addBox(-1,8,-6,8,8,6,var2); //mane 
 
lLeg.clear();
lLeg.setTextureOffset(30,12);
lLeg.addBox(1.9,2,7,2,8,2,var2); //front leg
lLeg.addBox(1.9,2,-1,2,8,2,var2); //back leg
 
rLeg.clear();
rLeg.setTextureOffset(30,12);
rLeg.addBox(1.9,2,7,2,8,2,var2); //front leg
rLeg.addBox(1.9,2,-1,2,8,2,var2); //back leg
 
rArm.clear();
lArm.clear();
}


var Wolf;
var WolfRenderType = Renderer.createHumanoidRenderer();
addWolfRenderType(WolfRenderType);




function addOcelotRenderType(renderer) {
var model = renderer.getModel();
     
    var head = model.getPart("head");
    var body = model.getPart("body");
    var rarm = model.getPart("rightArm");
    var larm = model.getPart("leftArm");
    var rleg = model.getPart("rightLeg");
    var lleg = model.getPart("leftLeg");
     
    head.clear();
    head.setTextureOffset(0, 0);
    head.addBox(-1, 14, -7, 5, 4, 5);


    head.setTextureOffset(11, 4);
    head.addBox(-0.5,13,-4,1,1,2);


head.setTextureOffset(11, 6);
head.addBox(2.5,13,-4,1,1,2);


head.setTextureOffset(1, 25);
head.addBox(0, 16, -8, 3, 2, 1);


 head.setRotationPoint(0, 0,0);


    body.clear();
    body.setTextureOffset(24, 10);
    body.addBox(-0.5, 15, -2, 4, 6, 16);
 
    
 rarm.clear();
    larm.clear();
 
    rleg.clear();
    rleg.setTextureOffset(40, 0);
   rleg.addBox(0.9, 2.9, 0, 2, 9, 2);


rleg.setTextureOffset(40, 0);
 rleg.addBox(0.9,6, 11, 2, 5, 2);


    lleg.clear();
    lleg.setTextureOffset(40,0);
    lleg.addBox(0.1, 2.9, 0, 2, 9, 2);
lleg.setTextureOffset(40, 0);
    lleg.addBox(0.1, 6, 11, 2, 5, 2);
}
var OcelotRenderType = Renderer.createHumanoidRenderer();
addOcelotRenderType(OcelotRenderType);
