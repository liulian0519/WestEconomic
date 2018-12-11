var titleName = document.getElementById('title_name');
var tagName = document.getElementById('tag_name');
var typeName = document.getElementById('type_name')
var datetimepickerName = document.getElementById('datetimepicker')
function Empty(){
  if(titleName.value!=''){
      console.log(titleName);
      document.getElementById('title_img').innerHTML="<img src='img/right.png'>";
      document.getElementById('title_tip').innerHTML="";
      return true;
  }else{
      document.getElementById('title_img').innerHTML="<img src='img/error.png'>";
      document.getElementById('title_tip').innerHTML="请输入有效的内容标题";
      titleName.focus();
      return false;
  }
}
function EmptyTag(){
    if(tagName.value!=''){
        document.getElementById('tag_img').innerHTML="<img src='img/right.png'>";
        document.getElementById('tag_tip').innerHTML="";
        return true;
    }else{
        document.getElementById('tag_img').innerHTML="<img src='img/error.png'>";
        document.getElementById('tag_tip').innerHTML="请输入有效的标签信息";
        tagName.focus();
        return false;
    }
}
function EmptyType(){
    if(typeName.value!=''){
        document.getElementById('type_img').innerHTML="<img src='img/right.png'>";
        document.getElementById('type_tip').innerHTML="";
        return true;
    }else{
        document.getElementById('type_img').innerHTML="<img src='img/error.png'>";
        document.getElementById('type_tip').innerHTML="请输入有效的推荐类型";
        tagName.focus();
        return false;
    }
}
function EmptyDate(){
    if(datetimepickerName.value!=''){
        document.getElementById('date_img').innerHTML="<img src='img/right.png'>";
        document.getElementById('date_tip').innerHTML="";
        return true;
    }else{
        document.getElementById('date_img').innerHTML="<img src='img/error.png'>";
        document.getElementById('date_tip').innerHTML="时间不能为空";
        tagName.focus();
        return false;
    }
}
function faut(){
    var filename = document.getElementById('fileName');
    console.log(filename.value)
}


