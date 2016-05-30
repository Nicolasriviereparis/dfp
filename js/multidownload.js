function validate(frm)
{
  var SomeChecked = false;
  for(var i = 0; i < tracks.length; i++)
  {
      if(tracks[i].checked) 
      {
          SomeChecked = true;
          var url= tracks[i].value;    
          window.open(url,'Download');  
      }
  }
  if(!SomeChecked)
  {
      alert("Please select atleast one track");
  }
  return false;
}
