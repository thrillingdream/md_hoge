import marked from 'marked';
import blog0 from '../assets/ブログを始めました.md';
import blog1 from '../assets/JAIST社会人コース合格体験記.md';

function getBlogTotal() {
  return 2;
}
function markedContentFromNum(num, mode) {
    var data;

    data = mdContentFromNum(num);
    
    if(data == null)return '記事が見つかりません';

    if(mode == 'All')   return this.markedContentAll(data);
    if(mode == 'Title') return this.markedContentTitle(data);
    if(mode == 'Date')  return this.markedContentDate(data);
}
function mdContentFromNum(num) {
  var data;

  if(num == 0)        data = blog0;
  else if(num == 1)   data = blog1;

  return data
  
}
function getSourceLine(source, line_num) {
  var str = source;
  return str.split(/\r\n|\r|\n/)[line_num];
}
function markedContentConv(source) {
  return marked(source);
}
function markedContentAll(source) {
  console.log(source);
  return this.markedContentConv(source);
}
function markedContentTitle(source) {
  return this.markedContentConv(this.getSourceLine(source,0));
}
function markedContentDate(source) {
  return this.markedContentConv(this.getSourceLine(source,1));
}

export default {
  markedContentFromNum,
  mdContentFromNum,
  getBlogTotal,
  getSourceLine,
  markedContentAll,
  markedContentConv,
  markedContentTitle,
  markedContentDate,
}
