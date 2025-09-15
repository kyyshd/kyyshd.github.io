//形式平等
function calcWarikan() {
  const gokei = Number(document.getElementById("gokei").value);
  const sankaninzu = Number(document.getElementById("sankaninzu").value);
  const kintowari = document.getElementById("result");
  const amari1 = document.getElementById("amari1");
  const hitoriatari = Math.floor(gokei / sankaninzu);

  kintowari.innerHTML = "一人当たり　" + hitoriatari + "円";

  amari1.innerHTML = "余り　" +( gokei - hitoriatari*sankaninzu ) + "円";
}

//実質平等
function calcDankaiWariai() {
  const gokei1      = Number(document.getElementById("gokei1").value);
  const sankaninzu1  = Number(document.getElementById("sankaninzu1").value);
  const eraihitoEl  = document.getElementById("eraihito");
  const chuguraiEl  = document.getElementById("chugurai");
  const wariai      = Number(document.getElementById("wariai").value);

  const eraihitoEmpty = eraihitoEl.value.trim() === "";
  const chuguraiEmpty = chuguraiEl.value.trim() === "";

  const eraihito = eraihitoEmpty ? 0 : Number(eraihitoEl.value);
  const chugurai = chuguraiEmpty ? 0 : Number(chuguraiEl.value);

  const eraihitogaku = document.getElementById("result1");
  const chuguraigaku = document.getElementById("result2");
  const hiragaku     = document.getElementById("result3");
  const amari2 = document.getElementById("amari2");

  const cwariai = 1 + (wariai/10);
  const ewariai = cwariai + (wariai/10);
  const wariaigokei = ewariai*eraihito + cwariai*chugurai + (sankaninzu1-(eraihito+chugurai));

  if (!eraihitoEmpty) {
    const egaku = Math.floor(gokei1/wariaigokei*ewariai);
    eraihitogaku.innerHTML = "エライ人負担額 " + egaku + "円";
  }
  if (!chuguraiEmpty) {
    const cgaku = Math.floor(gokei1/wariaigokei*cwariai) ;
    chuguraigaku.innerHTML = "中ぐらいの人負担額 " + cgaku + "円";
  }
  const hgaku = Math.floor(gokei1/wariaigokei);
  hiragaku.innerHTML = "ヒラ負担額 " + hgaku + "円";
  amari2.innerHTML = "余り　" + gokei1 -(egaku*eraihito+cgaku*chugurai+hgaku*(sankaninzu1-eraihito-chugurai))+ "円";
}

//差額指定
function calcWaribiki(){
  const gokei2 = Number(document.getElementById("gokei2").value);
  const sankaninzu2 = Number(document.getElementById("sankaninzu2").value);
  const waribikigaku = Number(document.getElementById("waribikigaku").value);
  const shogakufutan = Number(document.getElementById("shogakufutan").value);
  const kogakufutan = sankaninzu2 - shogakufutan;
  const kogakufutangaku = document.getElementById("result4");
  const shogakufutangaku = document.getElementById("result5");
  const amari3= document.getElementById("amari3");
  const sukoshi = Math.floor((gokei2-waribikigaku * shogakufutan)/sankaninzu2);
  const takusan = sukoshi + waribikigaku;

  kogakufutangaku.innerHTML = "酒を沢山飲んだ人の負担額　" + takusan + "円";
  shogakufutangaku.innerHTML = "そうでもない人の負担額　" + sukoshi + "円";
  amari3.innerHTML = "余り　" + gokei2-(takusan*kogakufutan+sukoshi*shogakufutan)+ "円";
}

// 固定金額を支払う人がいる場合
function calcTeigaku(){
  const gokei3 = Number(document.getElementById("gokei3").value);
  const sankaninzu3 = Number(document.getElementById("sankaninzu3").value);
  const teigaku = Number(document.getElementById("teigaku").value);
  const teigakufutan = Number(document.getElementById("teigakufutan").value);
  const teigakuigai = document.getElementById("result6");
  const amari3= document.getElementById("amari3");
  const teigakuTotal = teigaku * teigakufutan;
  const remainPeople = sankaninzu3 - teigakufutan;
  const remainTotal = gokei3 - teigakuTotal;
  const remainPay = Math.floor(remainTotal / remainPeople);

  teigakuigai.innerHTML ="他の人の負担額：" + remainPay + "円";
  amari4.innerHTML = "余り　" + gokei3-(teigakuTotal+remainPay*remainPeople)+ "円";
}
